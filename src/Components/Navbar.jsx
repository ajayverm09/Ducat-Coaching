import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

// Navigation links
const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Contact Us', href: '/contact' },
];

// Logo URLs
const LOGO_URL = "https://www.ducatindia.com/_next/image?url=%2Fstatic%2Fimages%2Flogo.png&w=256&q=75";
const LOGO_FALLBACK_URL = "https://placehold.co/120x40/1f2937/ffffff?text=DUCAT+Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState(LOGO_URL);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLogoError = () => setLogoSrc(LOGO_FALLBACK_URL);
  const handleLinkClick = () => setIsMenuOpen(false);

  const linkBaseClasses =
    "px-3 py-2 rounded-lg text-base font-medium transition duration-200 ease-in-out";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img
                className="h-8 w-auto md:h-10"
                src={logoSrc}
                alt="Company Logo"
                onError={handleLogoError}
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(link => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  end
                  className={({ isActive }) =>
                    `${linkBaseClasses} ${
                      isActive
                        ? 'text-blue-700 font-bold bg-blue-50'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition duration-150 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <NavLink
              key={link.name}
              to={link.href}
              end
              onClick={handleLinkClick}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-blue-700 font-bold bg-blue-50'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
