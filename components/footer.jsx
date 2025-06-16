"use client";

import { useState, useEffect } from "react";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sania Khan",
    image: "/sania-khan.jpg",
    rating: 5,
    text: "Football has been a game-changer for me! It's taught me teamwork, discipline, and perseverance. Being part of a team has helped me build lifelong friendships and develop a sense of camaraderie. The thrill of competition, the rush of adrenaline, and the joy of scoring a goal are unbeatable. Football has not only improved my physical fitness but also boosted my confidence and mental toughness. I highly recommend it to anyone looking for a fun, challenging, and rewarding experience!",
  },
  {
    id: 2,
    name: "Khushi Gupta",
    image: "/khushi.png",
    rating: 5,
    text: "Football has been an incredible journey for me! It's where I've learned to push my limits, work with others towards a common goal, and overcome obstacles. The lessons I've learned on the field have translated into every aspect of my life, from school to personal relationships. The friendships I've made, the victories we've celebrated, and the setbacks we've overcome together have made football more than just a sport - it's a community, a passion, and a way of life. I'm forever grateful for the impact foot- ball has had on me!recommend it to anyone looking for a fun, challenging, and rewarding experience!",
  },
  {
    id: 3,
    name: "Rohit",
    image: "/rohit.jpg",
    rating: 5,
    text: "Football has given me so much more than I ever thought possible! It's taught me discipline, hard work, and the value of teamwork. But most importantly, it's given me a sense of belonging and purpose. Being part of a team has helped me build strong relationships and create unforgettable memories. Whether I'm playing for fun or competing at a high level, football always pushes me to be my best self. I love the thrill of the game, the strategy, and the camaraderie with my teammates. Football is more than just a sport - it's my passion!",
  },
];

// Social Media Icons
const InstagramIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${
            index < rating ? "text-yellow-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ testimonial, isVisible }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className={`relative bg-black border-2 border-white rounded-2xl p-8 max-w-4xl mx-auto transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* Large Quote Mark - Top Left */}
      <div className="absolute -top-4 -left-4 text-white text-8xl font-serif opacity-50">
        "
      </div>

      {/* Large Quote Mark - Bottom Right */}
      <div className="absolute -bottom-8 -right-4 text-white text-8xl font-serif opacity-50 rotate-180">
        "
      </div>

      <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className={`w-32 h-32 rounded-lg object-cover transition-opacity duration-500 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-700 rounded-lg animate-pulse" />
            )}
          </div>
          <h3 className="text-white font-bold text-xl mt-4 text-center">
            {testimonial.name}
          </h3>
          <p className="text-gray-400 text-sm text-center mt-1">
            {testimonial.position}
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="flex-1">
          <p className="text-white text-lg leading-relaxed mb-6">
            {testimonial.text}
          </p>

          {/* Star Rating */}
          <div className="flex justify-center md:justify-start">
            <StarRating rating={testimonial.rating} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Newsletter Component
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <div className="mb-8">
      <h3 className="text-3xl font-bold mb-4">
        <span className="text-white">NEWS</span>
        <span className="text-red-500">LETTER</span>
      </h3>
      <p className="text-gray-400 mb-6 leading-relaxed">
        Get the Latest News And Insights Delivered To You.
        <br />
        Thanks For Being With Us!
      </p>

      {isSubmitted ? (
        <div className="bg-green-600 text-white px-4 py-3 rounded-lg">
          Thank you for subscribing!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email Here"
            className="flex-1 bg-transparent border border-gray-600 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-r-lg transition-colors duration-300 font-medium"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

// Footer Component
const Footer = () => {
  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Coaches", href: "#coaches" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "LinkedIn", icon: LinkedInIcon, href: "#" },
    { name: "Facebook", icon: FacebookIcon, href: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <Newsletter />
          </div>

          {/* Menu Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Menu</h3>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4 mb-8">
              <p className="text-gray-400">aero90support@gmail.com</p>
              <p className="text-gray-400">+91 8954612547</p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-white">Social Media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Aero 90 Football Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main Testimonial Page Component with Carousel
const FooterPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Red curved shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-600 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full translate-x-48 -translate-y-48" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-600 rounded-full translate-x-40 translate-y-40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Testimonial Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <div
              className={`text-center mb-16 transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-wider">
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  TESTIMONIAL
                </span>
              </h1>
            </div>

            {/* Carousel Controls and Testimonial Card */}
            <div className="relative flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 z-10 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Testimonial Card */}
              <TestimonialCard
                testimonial={testimonials[currentIndex]}
                isVisible={isVisible}
              />

              {/* Next Button */}
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-white rounded-full p-3 z-10 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-red-600" : "bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default FooterPage;
