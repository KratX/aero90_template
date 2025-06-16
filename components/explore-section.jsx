"use client";

import { useState, useEffect } from "react";

// Player action images data
const playerImages = [
  {
    id: 1,
    src: "/shot-1.jpeg",
    alt: "Player dribbling with ball",
    position: "left",
  },
  {
    id: 2,
    src: "/shot-2.jpeg",
    alt: "Player in action pose",
    position: "center",
  },
  {
    id: 3,
    src: "/shot-4.jpeg",
    alt: "Player celebrating",
    position: "right",
  },
];

// Stats data with static values
const academyStats = [
  { number: "500+", label: "Players Trained" },
  { number: "50+", label: "Professional Contracts" },
  { number: "15+", label: "Years Experience" },
  { number: "100%", label: "Dedication" },
];

// Individual Image Component
const PlayerImage = ({ image, index, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={image.src || "/placeholder.svg"}
          alt={image.alt}
          className={`w-full h-80 md:h-96 lg:h-[450px] object-cover transition-all duration-500 ${
            isHovered ? "scale-110 brightness-110" : "scale-100 brightness-90"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />

        {/* Overlay gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 ${
            isHovered ? "opacity-80" : "opacity-40"
          }`}
        />

        {/* Hover effect */}
        <div
          className={`absolute inset-0 bg-red-500/10 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

// Static Stats Component (No Animation)
const StatDisplay = ({ stat, index, isVisible }) => {
  return (
    <div
      className={`text-center transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="text-2xl md:text-3xl font-bold text-red-500 mb-1">
        {stat.number}
      </div>
      <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
    </div>
  );
};

// Main Recruitment Section Component
const ExploreSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric background shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-red-500/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-red-500/30 rotate-12" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-500/10 rotate-45" />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 pt-32">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Want to Be a Part of It?
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Train with Aero 90. Become more than just a player — become the
            future of Indian football.
          </p>
        </div>

        {/* Red accent line */}
        <div
          className={`w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent mb-8 transform transition-all duration-1000 delay-300 ${
            isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        />

        {/* Main Images Section with Curved Border */}
        <div className="relative max-w-6xl mx-auto">
          {/* Curved red border container */}
          <div className="relative p-4 md:p-6">
            {/* Red curved border */}
            <div className="absolute inset-0 rounded-3xl md:rounded-[4rem] border-4 border-red-500 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10" />

            {/* Images grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 rounded-2xl md:rounded-[3.5rem] overflow-hidden bg-black/20 p-4">
              {playerImages.map((image, index) => (
                <PlayerImage
                  key={image.id}
                  image={image}
                  index={index}
                  isVisible={isVisible}
                />
              ))}

              {/* Explore Programs Button - positioned over center image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className={`bg-red-600 hover:-translate-y-1 hover:scale-110  hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-red-500/25 uppercase tracking-wider z-20 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  Explore Programs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Now with Static Values */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {academyStats.map((stat, index) => (
            <StatDisplay
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Additional Call to Actions */}
        <div
          className={`mt-16 flex flex-col md:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
            Learn More
          </button>

          <button className="bg-white text-black hover:bg-gray-200 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
            Contact Us
          </button>
        </div>

        {/* Features Grid */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto transform transition-all duration-1000 delay-900 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            {
              title: "Professional Training",
              description:
                "Learn from experienced coaches with international exposure",
              icon: "⚽",
            },
            {
              title: "Modern Facilities",
              description: "State-of-the-art training grounds and equipment",
              icon: "🏟️",
            },
            {
              title: "Career Development",
              description:
                "Pathway to professional football and international opportunities",
              icon: "🚀",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default ExploreSection;
