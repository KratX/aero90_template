"use client";

import { useState } from "react";

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center relative overflow-hidden">
      <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>
      <div className="absolute top-1 right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
    </div>
    <div className="text-white font-bold text-xl">
      <span className="text-red-500">AERO 90</span>
    </div>
  </div>
);

// Navigation Component
const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = ["Home", "About Us", "Coaches", "Services"];

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white hover:text-red-500 transition-colors duration-300 font-medium text-lg relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-black bg-opacity-95 rounded-lg shadow-lg md:hidden z-50">
          <ul className="py-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block px-4 py-2 text-white hover:text-red-500 hover:bg-gray-800 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

// Main Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-between">
        <Logo />
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Navbar;
