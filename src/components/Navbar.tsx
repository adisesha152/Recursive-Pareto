import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", dropdown: ["Custom Software Development", "Digital Transformation and Automation", "Cloud Solutions & Hosting Services", "Data Analytics", "IT Consulting", "24/7 Support"] },
  { name: "Projects", href: "/projects", dropdown: ["E-Commerce Platform Redesign", "Healthcare Management System", "Financial Analytics Dashboard", "Social Media App", "IoT Smart Home System", "Online Learning Platform"] },
  { name: "Investors", href: "/investors" },
  { name: "Careers", href: "/careers" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact", mobileHidden: true }, // Added mobileHidden property
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

  const shouldShowDropdown = (itemName: string) => {
    return (itemName === "Services" || itemName === "Projects") && dropdownOpen === itemName;
  };

  const shouldAnimateLogo = (itemName: string | null) => {
    return itemName === "Services" || itemName === "Projects";
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        animate={false}
        className="fixed top-0 left-0 right-0 z-[49]"
      >
        {/* Main Navbar Container */}
        <div className="bg-gradient-to-b from-white/80 to-white/60 backdrop-blur-xl border-b border-white/20 md:shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 relative"> {/* Added relative */}
            <div className="flex items-center justify-between h-full"> {/* Changed to h-full */}
              {/* Logo - Updated animation condition */}
              <motion.div 
                className="flex items-center"
                animate={{ 
                  y: shouldAnimateLogo(dropdownOpen) ? 40 : 0,
                  scale: shouldAnimateLogo(dropdownOpen) ? 1.1 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
                  RecursivePareto
                </Link>
              </motion.div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-4">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => {
                      setDropdownOpen(item.name);
                      setNavExpanded(true);
                    }}
                    onMouseLeave={() => {
                      setDropdownOpen(null);
                      setNavExpanded(false);
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
                <Button size="sm" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90">
                  Get Started
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center"> {/* Added items-center */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  {isOpen ? 
                    <X className="h-8 w-8" strokeWidth={1.5} /> : 
                    <Menu className="h-8 w-8" strokeWidth={1.5} />
                  }
                </button>
              </div>
            </div>
            
            {/* Mobile Border Line */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-200 md:hidden" />
          </div>
        </div>

        {/* Full-width Dropdown */}
        <AnimatePresence>
          {shouldShowDropdown(dropdownOpen as string) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="hidden md:block w-full bg-white/95 backdrop-blur-xl shadow-lg border-b border-white/20"
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
                        {/* RecursivePareto */}
                      </Link>
                      <p className="text-[var(--color-gray-600)] text-sm">
                        Empowering businesses with innovative software solutions
                      </p>
                    </motion.div>
                  </div>

                  {/* Dynamic Dropdown Content - Only for Services and Projects */}
                  <div className="col-span-3">
                    {navItems.find(item => shouldShowDropdown(item.name))?.dropdown && (
                      <div className="grid grid-cols-3 gap-6">
                        {navItems.find(item => item.name === dropdownOpen)?.dropdown?.map((option, i) => (
                          <motion.div
                            key={option}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-4 rounded-lg hover:bg-[var(--color-primary)]/5"
                          >
                            <Link
                              to="#"
                              className="text-[var(--color-gray-700)] hover:text-[var(--color-primary)] transition-colors block"
                            >
                              {option}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[50] bg-white md:hidden flex flex-col"
          >
            {/* Mobile Header  */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" className="text-xl font-bold text-[var(--color-primary)]">
                RecursivePareto
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                <X className="h-8 w-8" strokeWidth={1.5} />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <div className="flex-1 relative">
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: activeSubmenu ? "-100%" : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 overflow-y-auto"
              >
                <div className="space-y-1">
                  {navItems
                    .filter(item => !item.mobileHidden)
                    .map((item) => (
                    <div key={item.name} className="relative">
                      {item.dropdown ? (
                        <div
                          className="flex justify-between items-center px-3 py-4 text-base font-medium text-[var(--color-gray-700)] hover:text-[var(--color-primary)]"
                          onClick={() => setActiveSubmenu(item.name)}
                        >
                          {item.name}
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="block px-3 py-4 text-base font-medium text-[var(--color-gray-700)] hover:text-[var(--color-primary)]"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Submenu */}
              <AnimatePresence>
                {activeSubmenu && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white overflow-y-auto"
                  >
                    <div className="px-4 py-6">
                      <div
                        className="flex items-center gap-2 px-3 py-2 text-[var(--color-primary)] font-medium mb-4"
                        onClick={() => setActiveSubmenu(null)}
                      >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Menu
                      </div>
                      <div className="space-y-2">
                        {navItems.find(item => item.name === activeSubmenu)?.dropdown?.map((subItem) => (
                          <Link
                            key={subItem}
                            to="#"
                            className="block px-3 py-3 text-base font-medium text-[var(--color-gray-700)] hover:bg-[var(--color-primary)]/5 rounded-md"
                            onClick={() => {
                              setActiveSubmenu(null);
                              setIsOpen(false);
                            }}
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
              
            {/* Bottom Buttons */}
            <div className="px-4 py-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <Link to="/investors" className="block">
                  <Button 
                    className="w-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] 
                               hover:bg-[var(--color-primary)]/20 border-2 border-[var(--color-primary)]"
                    onClick={() => setIsOpen(false)}
                  >
                    Investors
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button 
                    className="w-full bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
