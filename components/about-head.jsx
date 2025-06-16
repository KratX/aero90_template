"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function AboutHead() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation on mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Navigation */}
      <div className="absolute top-0 left-0 w-full z-30">
        <Navbar />
      </div>

      {/* Full background image */}
      <div className="absolute inset-0">
        <img
          src="/about.png"
          alt="Football player with ball on field"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay for enhanced visual depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Main content container */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-12">
          <div className="max-w-4xl">
            {/* Content */}
            <div
              className={`relative z-30 max-w-2xl transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* About Us Header */}
              <h2 className="text-white text-6xl font-bold tracking-wider mb-8 opacity-90">
                ABOUT US
              </h2>

              {/* Main Heading */}
              <h3 className="text-white text-3xl sm:text-xl lg:text-2xl xl:text-2xl font-semibold leading-tight mb-6 drop-shadow-2xl">
                Aero 90 is not just a football academy — it's a{" "}
                <span className="text-red-500 relative">
                  movement
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-red-500 transform animate-pulse" />
                </span>
              </h3>

              {/* Description */}
              <p className="text-white text-base sm:text-lg leading-relaxed mb-8 opacity-95 drop-shadow-lg max-w-xl">
                Founded with a vision to redefine grassroots and elite-level
                football training in India, Aero 90 is where ambition meets
                action. We prepare young athletes with the tools, mindset, and
                discipline needed to thrive on and off the pitch.
              </p>

              {/* CTA Button */}
              <Link to="/services">
                <button
                  className="group relative bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 shadow-xl"
                  style={{
                    transform: `translate(${mousePosition.x * 0.005}px, ${
                      mousePosition.y * 0.005
                    }px) scale(${mousePosition.x > 0 ? 1 : 1})`,
                  }}
                >
                  <span className="relative z-10 tracking-wide">
                    LEARN MORE
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-white opacity-0 group-active:opacity-20 transition-opacity duration-150" />
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-red-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
                </button>
              </Link>

              {/* Stats section */}
              <div className="mt-16 grid grid-cols-3 gap-8 opacity-90">
                <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-3xl font-bold text-red-500 mb-2 drop-shadow-lg">
                    500+
                  </div>
                  <div className="text-white text-sm font-medium">
                    Students Trained
                  </div>
                </div>
                <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-3xl font-bold text-red-500 mb-2 drop-shadow-lg">
                    15+
                  </div>
                  <div className="text-white text-sm font-medium">
                    Expert Coaches
                  </div>
                </div>
                <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-3xl font-bold text-red-500 mb-2 drop-shadow-lg">
                    10
                  </div>
                  <div className="text-white text-sm font-medium">
                    Years Experience
                  </div>
                </div>
              </div>

              {/* Additional features showcase */}
              <div className="mt-12 flex flex-wrap gap-4">
                {[
                  "Elite Training",
                  "Modern Facilities",
                  "Professional Coaching",
                  "Youth Development",
                ].map((feature, index) => (
                  <div
                    key={feature}
                    className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating action elements */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="flex flex-col gap-4">
          {/* Social media buttons */}
          <button className="w-14 h-14 bg-red-500/90 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-2xl border border-white/20">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>

          <button className="w-14 h-14 bg-red-500/90 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-2xl border border-white/20">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
            </svg>
          </button>

          <button className="w-14 h-14 bg-red-500/90 hover:bg-red-600 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-2xl border border-white/20">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Loading/Activity indicator */}
      <div className="fixed top-6 right-6 z-40">
        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg" />
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <div className="text-xs mb-2 font-medium">Scroll Down</div>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
