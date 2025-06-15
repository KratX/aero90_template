"use client";

import { useState, useEffect } from "react";
import Navbar from "./navbar";

// Social Media Icons Component
const SocialIcon = ({ icon, href, ariaLabel }) => (
  <a
    href={href}
    aria-label={ariaLabel}
    className="text-white hover:text-red-500 transition-colors duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

// Main App Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-cover.png"
          alt="Football player background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 right-20 w-32 h-32 border border-red-500/30 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-yellow-400/20 rotate-12"></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 bg-red-500/10 rotate-45"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 container mx-auto px-4 py-8 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
            {/* Left Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Hero Title */}
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-62DRAGZ lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white leading-none tracking-wider">
                  AERO 90
                </h1>
              </div>

              {/* Academy Section */}
              <div className="space-y-6">
                <h2 className="text-red-500 text-2xl md:text-3xl font-bold tracking-wider">
                  ACADEMY
                </h2>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                  Aero 90 is a modern football academy designed to develop
                  elite-level players with a focus on speed, agility, tactical
                  intelligence, and technical excellence. The name "Aero 90"
                  represents our commitment to aerodynamic movement and
                  precision (90 = the full 90 minutes of a match), symbolizing
                  endurance and performance at the highest level.
                </p>

                {/* CTA Button */}
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 uppercase tracking-wider">
                  LEARN MORE
                </button>
              </div>

              {/* Social Media */}
              <div className="flex items-center space-x-6 pt-8">
                <span className="text-gray-400 font-medium tracking-wider">
                  FOLLOW
                </span>
                <div className="flex space-x-4">
                  <SocialIcon
                    href="#"
                    ariaLabel="Facebook"
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    }
                  />
                  <SocialIcon
                    href="#"
                    ariaLabel="Twitter"
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    }
                  />
                  <SocialIcon
                    href="#"
                    ariaLabel="Instagram"
                    icon={
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.405c-.807 0-1.418-.611-1.418-1.418s.611-1.418 1.418-1.418 1.418.611 1.418 1.418-.611 1.418-1.418 1.418zM12.017 7.771c-2.55 0-4.676 2.126-4.676 4.676s2.126 4.676 4.676 4.676 4.676-2.126 4.676-4.676-2.126-4.676-4.676-4.676z" />
                      </svg>
                    }
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Player Image Area */}
            <div
              className={`relative lg:block transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              {/* This space is intentionally left for the background image to show through */}
              <div className="h-96 lg:h-full min-h-[500px] relative">
                {/* Decorative elements that complement the player image */}
                <div className="absolute top-10 right-10 w-20 h-20 border-2 border-red-500/50 rotate-45 animate-bounce"></div>
                <div className="absolute bottom-20 left-10 w-16 h-16 bg-yellow-400/20 rotate-12 animate-pulse"></div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
