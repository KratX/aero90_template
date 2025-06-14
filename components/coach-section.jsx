"use client";

import { useState, useEffect } from "react";

// Coaches data
const coaches = [
  {
    id: 1,
    name: "Rahul Verma",
    image: "/placeholder.svg?height=300&width=250",
    specialty: "Technical Development",
    experience: "15+ years",
  },
  {
    id: 2,
    name: "Elina Roy",
    image: "/placeholder.svg?height=300&width=250",
    specialty: "Youth Development",
    experience: "12+ years",
  },
  {
    id: 3,
    name: "Daniel D'Souza",
    image: "/placeholder.svg?height=300&width=250",
    specialty: "Head Coach",
    experience: "20+ years",
    featured: true,
  },
  {
    id: 4,
    name: "Isha Khan",
    image: "/placeholder.svg?height=300&width=250",
    specialty: "Fitness & Conditioning",
    experience: "10+ years",
  },
  {
    id: 5,
    name: "Siddharth Menon",
    image: "/placeholder.svg?height=300&width=250",
    specialty: "Tactical Analysis",
    experience: "8+ years",
  },
];

// Coach Card Component
const CoachCard = ({
  coach,
  isVisible,
  index,
  isFeatured,
  size = "normal",
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const getCardSize = () => {
    if (size === "large") return "h-96 w-80";
    if (size === "small") return "h-72 w-60";
    return "h-80 w-64";
  };

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${isFeatured ? "z-10" : "z-0"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative bg-gray-800 rounded-3xl overflow-hidden transition-all duration-500 transform ${
          isHovered ? "scale-105 shadow-2xl shadow-red-500/20" : ""
        } ${
          isFeatured ? "border-2 border-red-500/50" : "border border-gray-700"
        }`}
      >
        {/* Coach Image */}
        <div className={`relative ${getCardSize()} overflow-hidden`}>
          <img
            src={coach.image || "/placeholder.svg"}
            alt={coach.name}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? "scale-110 brightness-110" : "scale-100 brightness-90"
            } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Coach Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3
              className={`text-white font-bold mb-2 ${
                size === "large" ? "text-xl" : "text-lg"
              }`}
            >
              {coach.name}
            </h3>
            <p
              className={`text-gray-300 mb-1 ${
                size === "large" ? "text-sm" : "text-xs"
              }`}
            >
              {coach.specialty}
            </p>
            <p
              className={`text-red-400 font-medium ${
                size === "large" ? "text-sm" : "text-xs"
              }`}
            >
              {coach.experience}
            </p>
          </div>

          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              HEAD COACH
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Coaches Grid Component with Creative Layout
const CoachesGrid = ({ isVisible }) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4">
      {/* Creative Grid Layout */}
      <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
        {/* Rahul Verma - Top Left */}
        <div className="col-span-3 row-span-3 flex items-end justify-center">
          <CoachCard
            coach={coaches[0]}
            isVisible={isVisible}
            index={0}
            size="small"
          />
        </div>

        {/* Elina Roy - Top Right */}
        <div className="col-span-3 col-start-10 row-span-3 flex items-end justify-center">
          <CoachCard
            coach={coaches[1]}
            isVisible={isVisible}
            index={1}
            size="small"
          />
        </div>

        {/* Daniel D'Souza - Center (Featured) */}
        <div className="col-span-4 col-start-5 row-span-4 row-start-2 flex items-center justify-center">
          <CoachCard
            coach={coaches[2]}
            isVisible={isVisible}
            index={2}
            isFeatured={true}
            size="large"
          />
        </div>

        {/* Isha Khan - Bottom Left */}
        <div className="col-span-3 row-span-3 row-start-4 flex items-start justify-center">
          <CoachCard
            coach={coaches[3]}
            isVisible={isVisible}
            index={3}
            size="small"
          />
        </div>

        {/* Siddharth Menon - Bottom Right */}
        <div className="col-span-3 col-start-10 row-span-3 row-start-4 flex items-start justify-center">
          <CoachCard
            coach={coaches[4]}
            isVisible={isVisible}
            index={4}
            size="small"
          />
        </div>
      </div>

      {/* Connecting Lines (Optional Visual Enhancement) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle connecting lines from corners to center */}
        <svg className="w-full h-full opacity-20">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line
            x1="20%"
            y1="30%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
          <line
            x1="80%"
            y1="30%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
          <line
            x1="20%"
            y1="70%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
          <line
            x1="80%"
            y1="70%"
            x2="50%"
            y2="50%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  );
};

// Legacy Section Component
const LegacySection = ({ isVisible }) => {
  return (
    <div className="relative">
      {/* Football Action Background */}
      <div className="relative h-96 overflow-hidden">
        {/* Red border frame */}
        <div className="absolute inset-0 border-4 border-red-500 rounded-t-[3rem] z-10" />

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/placeholder.svg?height=400&width=800')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h2
              className={`text-5xl md:text-6xl font-black mb-6 transform transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="text-white">Our Legacy</span>
              <span className="text-red-500">in Football</span>
            </h2>

            <p
              className={`text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed mb-8 transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              At Aero 90, our journey is rooted in a relentless passion for
              football and a mission to shape the future of the game in India.
              Since our inception, we've stood not just as a training academy,
              but as a launchpad for countless young talents who dared to dream
              bigger, train harder, and rise higher.
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col md:flex-row gap-4 justify-center items-center transform transition-all duration-1000 delay-900 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wider">
                Register Now
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 uppercase tracking-wider">
                Watch Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Coaches Page Component
const CoachSection = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Page Title */}
        <div className="container mx-auto px-4 py-16">
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wider">
              <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-500 bg-clip-text text-transparent">
                COACHES
              </span>
            </h1>
          </div>

          {/* Coaches Creative Grid */}
          <CoachesGrid isVisible={isVisible} />
        </div>

        {/* Legacy Section */}
        <LegacySection isVisible={isVisible} />
      </div>

      {/* Background Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 border border-red-500/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-40 right-20 w-32 h-32 border border-gray-600/20 rotate-12" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-red-500/5 rotate-45" />
      </div>
    </div>
  );
};

export default CoachSection;
