import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--color-gray-800)] text-[var(--color-white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info - Updated logo styling */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img 
                src="/assets/logo-white-no-background.png" 
                alt="RecursivePareto Logo" 
                className="w-auto h-8 opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-[var(--color-gray-400)]">
              Empowering businesses with innovative software solutions that drive growth
              and digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavigation('/')}
                  className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/services')}
                  className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/projects')}
                  className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/investors')}
                  className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                >
                  Investors
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/careers')}
                  className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/about')}
                  className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="sm:block hidden">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Custom Software Development",
                "Digital Transformation",
                "Cloud Solutions",
                "IT Consulting",
                "Mobile App Development",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[var(--color-white)] shrink-0" />
                <span className="text-[var(--color-gray-400)]">
                5th Floor, Pamma's Amrutha nilayam, Near, N Convention Rd, HITEC City, Hyderabad, Telangana 500081
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[var(--color-white)] shrink-0" />
                <span className="text-[var(--color-gray-400)]">+91 7780662464</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[var(--color-white)] shrink-0" />
                <span className="text-[var(--color-gray-400)]">sales@recursivepareto.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-gray-700)] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[var(--color-gray-400)] text-sm">
              © {currentYear} RecursivePareto. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[var(--color-gray-400)] hover:text-[var(--color-gray-600)] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
