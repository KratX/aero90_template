"use client";

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-2">
    <div className="text-white font-bold text-xl">
      <a href="/">
        <img className="w-25 h-20" src="/logo.png" alt="Aero 90 Logo" />
      </a>
    </div>
  </div>
);

// Navigation Component with React Router Links
const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about-us" },
    { name: "Coaches", path: "/coaches" },
    { name: "Services", path: "/services" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`transition-colors duration-300 font-medium text-lg relative group ${
                isActive(item.path)
                  ? "text-red-500"
                  : "text-white hover:text-red-500"
              }`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-red-500 transition-all duration-300 ${
                  isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
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
                <Link
                  to={item.path}
                  className={`block px-4 py-2 transition-colors duration-300 ${
                    isActive(item.path)
                      ? "text-red-500 bg-gray-800"
                      : "text-white hover:text-red-500 hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
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
        <Link to="/">
          <Logo />
        </Link>
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </header>
  );
};

export default Navbar;
