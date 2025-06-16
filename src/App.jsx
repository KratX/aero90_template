"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutHead from "../components/about-head";
import AboutSection from "../components/about-section";
import CoachSection from "../components/coach-section";
import ExploreSection from "../components/explore-section";
import FooterPage from "../components/footer";
import HeroSection from "../components/hero-section";
import ServicesSection from "../components/services-section";
import MediaGallery from "../components/Media-section";
import ParagraphSection from "../components/paragraph-section";

const MainApp = () => {
  return (
    <>
      <HeroSection />
      <MediaGallery />
      <ExploreSection />
      <ParagraphSection />
      <AboutHead />
      <AboutSection />
      <ServicesSection />
      <CoachSection />
      <FooterPage />
    </>
  );
};

// Home page component that combines hero and paragraph sections
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <MediaGallery />
      <ExploreSection />
      <ParagraphSection />
      <FooterPage />
    </>
  );
};

// About page component that combines about head and about section
const AboutPage = () => {
  return (
    <>
      <AboutHead />
      <AboutSection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Main route shows all sections in sequence */}
          <Route path="/" element={<MainApp />} />
          {/* Individual section routes for direct access */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/coaches" element={<CoachSection />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/media" element={<MediaGallery />} />
          <Route path="/explore" element={<ExploreSection />} />
          <Route path="/testimonials" element={<FooterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
