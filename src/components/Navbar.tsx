import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "FAQs", href: "#faq" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.querySelector(item.href) as HTMLElement);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
          setCurrentSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.querySelector(href) as HTMLElement;
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Adjust this value to match your navbar height
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-white)] backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-[var(--color-primary)]">RecursivePareto</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`text-[var(--color-gray-700)] hover:text-[var(--color-primary)] px-3 py-2 text-sm font-medium transition-colors ${currentSection === item.href.slice(1) ? 'border-b-2 border-[var(--color-primary)]' : ''}`}
              >
                {item.name}
              </button>
            ))}
            <Button size="sm" className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[var(--color-white)] backdrop-blur-md">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-[var(--color-gray-700)] hover:text-[var(--color-primary)] block px-3 py-2 text-base font-medium ${currentSection === item.href.slice(1) ? 'border-b-2 border-[var(--color-primary)]' : ''}`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
