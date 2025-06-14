"use client";

import { useState, useEffect } from "react";

// Media Gallery Data
const galleryData = [
  {
    id: 1,
    title: "Top Moments",
    image: "/placeholder.svg?height=300&width=300",
    category: "highlights",
    description: "Unforgettable moments that define greatness on the field",
  },
  {
    id: 2,
    title: "Player Spotlights",
    image: "/placeholder.svg?height=300&width=300",
    category: "players",
    description: "Individual brilliance and standout performances",
    featured: true,
  },
  {
    id: 3,
    title: "Tactical Breakdowns",
    image: "/placeholder.svg?height=300&width=300",
    category: "analysis",
    description: "In-depth analysis of game-changing strategies",
  },
  {
    id: 4,
    title: "Progress Journeys",
    image: "/placeholder.svg?height=300&width=300",
    category: "development",
    description: "Tracking athlete development and improvement",
  },
  {
    id: 5,
    title: "Fitness Workouts",
    image: "/placeholder.svg?height=300&width=300",
    category: "training",
    description: "Comprehensive fitness and conditioning programs",
  },
  {
    id: 6,
    title: "Clutch Performances",
    image: "/placeholder.svg?height=300&width=300",
    category: "highlights",
    description: "Game-winning moments under pressure",
  },
];

// Individual Gallery Item Component
const GalleryItem = ({ item, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`relative group cursor-pointer transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Container */}
      <div className="relative w-full h-80 md:h-96">
        {/* Oval Frame */}
        <div className="absolute inset-0 rounded-full border-2 border-gray-600 bg-gray-800 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-red-500">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isHovered
                  ? "scale-110 brightness-110"
                  : "scale-100 brightness-90"
              } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setImageLoaded(true)}
            />
            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                isHovered ? "opacity-90" : "opacity-60"
              }`}
            />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <div
              className={`transform transition-all duration-500 ${
                isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-90"
              }`}
            >
              <h3
                className={`font-bold text-xl md:text-2xl mb-2 transition-colors duration-300 ${
                  item.featured ? "text-red-500" : "text-white"
                }`}
              >
                {item.title}
              </h3>

              {/* Description - shows on hover */}
              <p
                className={`text-gray-300 text-sm md:text-base leading-relaxed transform transition-all duration-500 ${
                  isHovered
                    ? "translate-y-0 opacity-100 max-h-20"
                    : "translate-y-4 opacity-0 max-h-0"
                } overflow-hidden`}
              >
                {item.description}
              </p>
            </div>
          </div>

          {/* Hover Effect Ring */}
          <div
            className={`absolute inset-0 rounded-full border-2 border-red-500 transform transition-all duration-500 ${
              isHovered ? "scale-105 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        </div>

        {/* Bottom Label for smaller items */}
        {index >= 3 && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gray-800 px-4 py-2 rounded-full border border-gray-600">
              <span className="text-white font-medium text-sm">
                {item.title}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Filter Buttons Component
const FilterButtons = ({ activeFilter, setActiveFilter }) => {
  const filters = [
    { key: "all", label: "All" },
    { key: "highlights", label: "Highlights" },
    { key: "players", label: "Players" },
    { key: "analysis", label: "Analysis" },
    { key: "training", label: "Training" },
    { key: "development", label: "Development" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.key}
          onClick={() => setActiveFilter(filter.key)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            activeFilter === filter.key
              ? "bg-red-600 text-white shadow-lg shadow-red-500/25"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-600"
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

// Main Media Gallery Component
const MediaGallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredData, setFilteredData] = useState(galleryData);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredData(galleryData);
    } else {
      setFilteredData(
        galleryData.filter((item) => item.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Background Geometric Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-red-500/20 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 right-40 w-24 h-24 border border-gray-600/30 rotate-12" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-red-500/10 rotate-45" />
        <div className="absolute bottom-20 left-40 w-20 h-20 border border-gray-500/20 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-red-500">Media</span>{" "}
            <span className="text-white">Gallery</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our training ecosystem is built to sharpen every touch, pass, and
            finish with precision. From first-timers to elite players,
            <br className="hidden md:block" />
            every athlete learns the core skills that define champions.
          </p>
        </div>

        {/* Filter Buttons */}
        <FilterButtons
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {filteredData.map((item, index) => (
            <GalleryItem
              key={item.id}
              item={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {[
            { number: "500+", label: "Training Videos" },
            { number: "50+", label: "Player Profiles" },
            { number: "100+", label: "Tactical Analysis" },
            { number: "1000+", label: "Moments Captured" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 uppercase tracking-wider">
            Explore Full Gallery
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 to-transparent" />
    </div>
  );
};

export default MediaGallery;
