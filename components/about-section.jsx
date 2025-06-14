"use client";

import { useState, useEffect } from "react";

// Icon components for the core principles
const TransparencyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="w-12 h-12 mx-auto mb-4"
  >
    <circle cx="10" cy="10" r="7" strokeWidth="2" />
    <line x1="21" y1="21" x2="15" y2="15" strokeWidth="2" />
    <path d="M10 7v6M7 10h6" strokeWidth="2" />
  </svg>
);

const AccountabilityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="w-12 h-12 mx-auto mb-4"
  >
    <path
      d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5V9.5C7.5 9.5 7.5 11.5 10 11.5C12.5 11.5 12.5 9.5 12.5 9.5"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M16.5 20.5C16.5 20.5 16.5 18.5 14 18.5C11.5 18.5 11.5 20.5 11.5 20.5H9.5V14.5C9.5 14.5 9.5 12.5 12 12.5C14.5 12.5 14.5 14.5 14.5 14.5"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M12 5.5V12.5" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
  </svg>
);

const InnovationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className="w-12 h-12 mx-auto mb-4"
  >
    <circle cx="12" cy="12" r="5" strokeWidth="2" />
    <path
      d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="2" strokeWidth="2" />
  </svg>
);

// Main Mission and Values Component
const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Textured Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.05' fillRule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        {/* Mission Section */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our <span className="text-red-600">Mission</span>
          </h2>

          <div className="h-0.5 w-full bg-gray-700 relative mb-8">
            <div className="absolute -top-2 left-0 w-4 h-4 rounded-full bg-white"></div>
            <div className="absolute -top-2 right-0 w-4 h-4 rounded-full bg-white"></div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-4xl">
            At Aero 90, our mission is to go beyond the basics of training — we
            aim to empower every young footballer with the skill, mindset, and
            discipline to perform at the highest level. Through world-class
            coaching, cutting-edge performance analytics, and a strong focus on
            mental and physical development, we provide a complete ecosystem for
            growth. We believe in nurturing ambition, sharpening talent, and
            building resilience — creating not just better players, but stronger
            individuals. Our goal is to develop future champions who play with
            passion, lead with integrity, and inspire others through their
            journey on and off the pitch.
          </p>

          <p className="text-center text-gray-300 text-lg italic mb-16 max-w-4xl mx-auto">
            To become India's leading football academy — producing technically
            sound, mentally strong, and professionally ready players who can
            compete at national and international levels.
          </p>
        </div>

        {/* Core Principles */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Transparency */}
          <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Transparency</h3>
            <TransparencyIcon />
            <p className="text-gray-400 text-sm">
              Open communication with players, parents, and partners. We share
              promises, and honest progress.
            </p>
          </div>

          {/* Accountability */}
          <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Accountability</h3>
            <AccountabilityIcon />
            <p className="text-gray-400 text-sm">
              Every coach, player, and staff member is responsible for their
              growth and performance.
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-gray-800 rounded-lg p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <InnovationIcon />
            <p className="text-gray-400 text-sm">
              Always evolving with modern techniques, and unique training and
              practical practices.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-red-600">Our</span>Values
          </h2>

          <div className="h-0.5 w-full bg-gray-700 mb-8"></div>

          <ul className="space-y-6 max-w-3xl">
            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <p className="text-xl text-gray-300">
                <span className="font-bold">Discipline</span> – Consistent
                effort on and off the field
              </p>
            </li>

            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <p className="text-xl text-gray-300">
                <span className="font-bold">Excellence</span> – Every session,
                every touch, every decision
              </p>
            </li>

            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <p className="text-xl text-gray-300">
                <span className="font-bold">Teamwork</span> – Unity in effort,
                strength in collaboration
              </p>
            </li>

            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <p className="text-xl text-gray-300">
                <span className="font-bold">Resilience</span> – Bounce back.
                Push forward. Never settle.
              </p>
            </li>

            <li className="flex items-start">
              <div className="mr-4 mt-1">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <p className="text-xl text-gray-300">
                <span className="font-bold">Integrity</span> – Honest game.
                Honest growth.
              </p>
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 uppercase tracking-wider">
            Join Our Academy
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
