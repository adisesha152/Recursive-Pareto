import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, ArrowLeft, ChevronDownCircle } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useProjects } from "@/hooks/useProjects";
import { useServices } from "@/hooks/useServices";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", dropdown: ["Custom Software Development", "Digital Transformation and Automation", "Cloud Solutions & Hosting Services", "Data Analytics", "IT Consulting", "24/7 Support"] },
  { name: "Projects", href: "/projects", dropdown: ["E-Commerce Platform Redesign", "Healthcare Management System", "Financial Analytics Dashboard", "Social Media App", "IoT Smart Home System", "Online Learning Platform"] },
  // { name: "Investors", href: "/investors", mobileHidden: true },
  { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact", mobileHidden: true },
];

const menuItemVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [navExpanded, setNavExpanded] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [dynamicServices, setDynamicServices] = useState([]);
  const [dynamicProjects, setDynamicProjects] = useState([]);
  const { getAllProjects } = useProjects();
  const { getAll: getAllServices } = useServices();
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const [projectsData, servicesData] = await Promise.all([
          getAllProjects(),
          getAllServices()
        ]);
        setDynamicProjects(projectsData);
        setDynamicServices(servicesData);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchDropdownData();
  }, []);

  const shouldShowDropdown = (itemName: string) => {
    return (itemName === "Services" || itemName === "Projects") && dropdownOpen === itemName;
  };

  const shouldAnimateLogo = (itemName: string | null) => {
    return itemName === "Services" || itemName === "Projects";
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleGetStarted = () => {
    navigate('/contact');
    setIsOpen(false); // Close mobile menu if open
  };

  // Add scroll handler for submenu
  const handleSubmenuScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const isScrollable = element.scrollHeight > element.clientHeight;
    const isBottom = Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) < 1;
    setShowScrollIndicator(isScrollable && !isBottom);
  };

  // Add effect to check scrollability when submenu opens
  useEffect(() => {
    if (activeSubmenu) {
      const submenuElement = document.querySelector('.submenu-content');
      if (submenuElement) {
        const isScrollable = submenuElement.scrollHeight > submenuElement.clientHeight;
        setShowScrollIndicator(isScrollable);
      }
    }
  }, [activeSubmenu]);

  return (
    <>
      <motion.nav
        animate={false}
        className="fixed top-0 left-0 right-0 z-[49]"
      >
        <div className="bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-xl border-b border-white/20 xl:shadow-lg relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 h-20 xl:h-20 relative">
            <div className="flex items-center justify-between h-full">
              {/* Logo - Updated to use image */}
              <motion.div 
                className="flex items-center"
                animate={{ 
                  y: shouldAnimateLogo(dropdownOpen) ? 20 : 0,
                  scale: shouldAnimateLogo(dropdownOpen) ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/" className="flex items-center">
                  <img 
                    src="/assets/logo-no-background.png" 
                    alt="RecursivePareto Logo" 
                    className="h-8 w-auto"
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation - Only show on extra large screens */}
              <div className="hidden xl:flex items-center space-x-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => {
                      if (item.dropdown) {
                        setDropdownOpen(item.name);
                        setNavExpanded(true);
                      }
                    }}
                  >
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors
                                  text-[var(--color-gray-700)] hover:text-[var(--color-primary)]
                                  border-b-2 ${location.pathname === item.href 
                                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]' 
                                    : 'border-transparent hover:border-[var(--color-primary)]'}`}
                    >
                      {item.name}
                      {item.dropdown && (
                        <ChevronDown className={`inline-block ml-1 h-4 w-4 transition-transform duration-200 
                          ${dropdownOpen === item.name ? 'rotate-180' : ''}`} 
                        />
                      )}
                    </Link>
                  </div>
                ))}
                {/* <div>
                  <Button 
                    size="sm" 
                    className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90"
                    onClick={handleGetStarted}
                  >
                    Get Started
                  </Button>
                </div> */}
              </div>

              {/* Mobile/Tablet menu button - Updated consistent sizing */}
              <div className="xl:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 w-12 h-12 rounded-lg text-gray-600 hover:bg-gray-100 touch-none flex items-center justify-center"
                >
                  {isOpen ? 
                    <X className="h-8 w-8" strokeWidth={1.5} /> : 
                    <Menu className="h-8 w-8" strokeWidth={1.5} />
                  }
                </button>
              </div>
            </div>
            
            {/* Mobile Border Line - Only visible on mobile/tablet */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 xl:hidden" />
          </div>
        </div>

        {/* Full-width Dropdown - Only show on extra large screens */}
        <AnimatePresence>
          {shouldShowDropdown(dropdownOpen as string) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden xl:block w-full bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20"
              onMouseLeave={() => {
                setDropdownOpen(null);
                setNavExpanded(false);
              }}
              onMouseEnter={() => setNavExpanded(true)}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-4 gap-8">
                  {/* Company Info - Always visible */}
                  <div className="col-span-1">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link to="/" className="text-xl font-bold text-[var(--color-primary)] mb-4 block">
                        {dropdownOpen === "Services" ? "Our Services" : "Our Projects"}
                      </Link>
                      <p className="text-[var(--color-gray-600)] text-sm">
                        {dropdownOpen === "Services" 
                          ? "Empowering businesses with innovative solutions" 
                          : "Discover our latest success stories"}
                      </p>
                    </motion.div>
                  </div>

                  {/* Dynamic Dropdown Content - Only for Services and Projects */}
                  <div className="col-span-3">
                    <div 
                      className="grid grid-cols-3 gap-6 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar"
                      style={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: 'var(--color-primary) transparent'
                      }}
                    >
                      {dropdownOpen === "Services" 
                        ? dynamicServices.map((service, i) => (
                            <motion.div
                              key={service.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="p-4 rounded-lg hover:bg-[var(--color-primary)]/5 cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/services/${service.id}`);
                                setDropdownOpen(null);
                              }}
                            >
                              <div>
                                <h3 className="font-medium">{service.title}</h3>
                                <p className="text-sm text-gray-500">{service.description}</p>
                              </div>
                            </motion.div>
                          ))
                        : dynamicProjects.map((project, i) => (
                            <motion.div
                              key={project.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="p-4 rounded-lg hover:bg-[var(--color-primary)]/5 cursor-pointer"
                              onClick={(e) => {
                                e.preventDefault();
                                navigate(`/projects/${project.id}`);
                                setDropdownOpen(null);
                              }}
                            >
                              <h3 className="font-medium">{project.name}</h3>
                              <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
                            </motion.div>
                          ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile/Tablet Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-white xl:hidden flex flex-col"
          >
            {/* Mobile/Tablet Header with larger touch targets */}
            <div className="flex items-center justify-between p-4 h-20 border-b">
              <Link to="/" className="flex items-center">
                <img 
                  src="/assets/logo-no-background.png" 
                  alt="RecursivePareto Logo" 
                  className="h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 w-12 h-12 rounded-lg text-gray-600 hover:bg-gray-100 touch-none flex items-center justify-center"
              >
                <X className="h-6 w-6" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile/Tablet Menu Content with larger touch targets for iPad Pro */}
            <div className="flex-1 relative">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: activeSubmenu ? "-100%" : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto"
              >
                <div className="space-y-2 p-4">
                  {navItems
                    .filter(item => !item.mobileHidden)
                    .map((item) => (
                    <div key={item.name} className="relative">
                      {item.dropdown ? (
                        <div
                          className="flex justify-between items-center px-6 py-5 text-lg font-medium text-[var(--color-gray-700)] hover:text-[var(--color-primary)] touch-none rounded-xl hover:bg-gray-50"
                          onClick={() => setActiveSubmenu(item.name)}
                        >
                          {item.name}
                          <ArrowRight className="h-6 w-6" />
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-6 py-5 text-lg font-medium text-[var(--color-gray-700)] hover:text-[var(--color-primary)] rounded-xl hover:bg-gray-50"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Submenu with larger touch targets */}
              <AnimatePresence>
                {activeSubmenu && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white"
                  >
                    <div 
                      className="submenu-content h-full overflow-y-auto pb-16" // Add padding bottom to prevent content hiding behind the arrow
                      onScroll={handleSubmenuScroll}
                    >
                      <div className="p-4">
                        <div
                          className="flex items-center gap-2 px-4 py-4 text-[var(--color-primary)] font-medium mb-2 touch-none"
                          onClick={() => setActiveSubmenu(null)}
                        >
                          <ArrowLeft className="h-5 w-5" />
                          Back to Menu
                        </div>
                        <div className="space-y-1">
                          {activeSubmenu === "Services" 
                            ? dynamicServices.map((service) => (
                                <div
                                  key={service.id}
                                  className="block px-4 py-4 text-base font-medium text-[var(--color-gray-700)] hover:bg-[var(--color-primary)]/5 rounded-md cursor-pointer"
                                  onClick={() => {
                                    navigate(`/services/${service.id}`);
                                    setActiveSubmenu(null);
                                    setIsOpen(false);
                                  }}
                                >
                                  <h3 className="font-medium">{service.title}</h3>
                                  <p className="text-sm text-gray-500 line-clamp-1">{service.description}</p>
                                </div>
                              ))
                            : activeSubmenu === "Projects"
                              ? dynamicProjects.map((project) => (
                                  <div
                                    key={project.id}
                                    className="block px-4 py-4 text-base font-medium text-[var(--color-gray-700)] hover:bg-[var(--color-primary)]/5 rounded-md cursor-pointer"
                                    onClick={() => {
                                      navigate(`/projects/${project.id}`);
                                      setActiveSubmenu(null);
                                      setIsOpen(false);
                                    }}
                                  >
                                    <h3 className="font-medium">{project.name}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-1">{project.description}</p>
                                  </div>
                                ))
                              : null
                          }
                        </div>

                        {/* Scroll Indicator */}
                        <AnimatePresence>
                          {showScrollIndicator && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="fixed bottom-24 right-4 text-[var(--color-primary)] animate-bounce bg-white/80 rounded-full shadow-lg p-1"
                            >
                              <ChevronDownCircle className="h-6 w-6" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
              
            {/* Bottom Buttons - Updated to show both buttons */}
            <div className="px-8 py-6 border-t border-gray-200">
              <div className="w-full">
              {/* <div className="grid grid-cols-2 gap-4"> */}
                {/* <Button 
                  className="w-full py-4 text-base sm:text-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] 
                            hover:bg-[var(--color-primary)]/20 border-2 border-[var(--color-primary)]
                            flex items-center justify-center h-[50px] sm:h-[60px]"
                  onClick={() => {
                    navigate('/investors');
                    setIsOpen(false);
                  }}
                >
                  Investors
                </Button> */}
                <Button 
                  className="w-full py-4 text-base sm:text-lg bg-[var(--color-primary)] text-white 
                            hover:bg-[var(--color-primary)]/90
                            flex items-center justify-center h-[50px] sm:h-[60px]"
                  onClick={handleGetStarted}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
