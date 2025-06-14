"use client";

import { useState, useEffect } from "react";

// Service Icons Components
const EliteTrainingIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L8 8.5V13h2V9.6l-.2-.7z" />
  </svg>
);

const StrengthIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z" />
  </svg>
);

const PsychologyIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
  </svg>
);

const MentorshipIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01.99l-2.98 3.98A1 1 0 0 0 12.8 14l2.7-3.6L17 18v4h3z" />
    <path d="M12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zm1.5 1h-3C9.57 12.5 8.5 13.57 8.5 15v7h2v-5h1v5h2v-7c0-1.43-1.07-2.5-2.5-2.5z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
  </svg>
);

// Service Card Component with Staggered Layout
const ServiceCard = ({ service, index, isVisible, isLeft }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "elite":
        return <EliteTrainingIcon />;
      case "strength":
        return <StrengthIcon />;
      case "psychology":
        return <PsychologyIcon />;
      case "mentorship":
        return <MentorshipIcon />;
      case "analytics":
        return <AnalyticsIcon />;
      default:
        return <EliteTrainingIcon />;
    }
  };

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${isLeft ? "mr-auto" : "ml-auto"}`}
      style={{
        transitionDelay: `${index * 300}ms`,
        maxWidth: "600px",
        width: "100%",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 transition-all duration-500 transform ${
          isHovered
            ? "scale-105 border-red-500/50 bg-gray-750/90 shadow-2xl shadow-red-500/10"
            : ""
        }`}
      >
        <div
          className={`flex items-center space-x-6 ${
            isLeft ? "" : "flex-row-reverse space-x-reverse"
          }`}
        >
          {/* Icon */}
          <div className="flex-shrink-0">
            <div
              className={`p-4 rounded-2xl bg-gray-700/50 transition-all duration-300 ${
                isHovered ? "bg-red-500/20 text-red-400" : "text-gray-400"
              }`}
            >
              {getIcon(service.icon)}
            </div>
            <p className="text-center text-gray-400 text-sm mt-3 font-medium">
              {service.title}
            </p>
          </div>

          {/* Content */}
          <div className="flex-1">
            <p className="text-gray-300 text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Services Component
const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      id: 1,
      title: "Elite Football Training",
      description:
        "Position-specific drills, tactical development, and personalized coaching for players aged 8-18. Our sessions are designed to maximize performance and build football intelligence.",
      icon: "elite",
    },
    {
      id: 2,
      title: "Strength Conditioning",
      description:
        "Training the mind is just as important as training the body. We provide mindset coaching, focus drills, and confidence-building sessions to prepare players for high-pressure situations.",
      icon: "strength",
    },
    {
      id: 3,
      title: "Sports Psychology",
      description:
        "Modern fitness programs focused on agility, speed, stamina, recovery, and injury prevention — designed by certified experts to support long-term athletic growth.",
      icon: "psychology",
    },
    {
      id: 4,
      title: "Mentorship",
      description:
        "Data-driven training using video reviews, individual stats, and game performance breakdowns — helping players understand their game and improve faster.",
      icon: "mentorship",
    },
    {
      id: 5,
      title: "Performance Analysis",
      description:
        "Data-driven training using video reviews, individual stats, and game performance breakdowns — helping players understand their game and improve faster.",
      icon: "analytics",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/50" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Title */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 tracking-wider">
            <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
          </h1>
        </div>

        {/* Services Grid with Staggered Layout */}
        <div className="max-w-7xl mx-auto space-y-16">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isVisible={isVisible}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transform transition-all duration-1000 delay-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 uppercase tracking-wider text-lg">
            Start Your Journey
          </button>
        </div>
      </div>

      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 border border-red-500/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 border border-gray-600/20 rotate-12" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-red-500/5 rotate-45" />
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-gray-500/10 rotate-45" />
      </div>
    </div>
  );
};

export default ServicesSection;
