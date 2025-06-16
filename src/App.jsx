import AboutHead from "../components/about-head";
import AboutSection from "../components/about-section";
import CoachSection from "../components/coach-section";
import ExploreSection from "../components/explore-section";
import FooterPage from "../components/footer";
import HeroSection from "../components/hero-section";
import MediaGallery from "../components/Media-section";
import AeroLandingPage from "../components/paragraph-section";
import ServicesSection from "../components/services-section";

function App() {
  return (
    <>
      <HeroSection />
      <MediaGallery />
      <ExploreSection />
      <AeroLandingPage />
      <AboutHead />
      <AboutSection />
      <ServicesSection />
      <CoachSection />
      <FooterPage />
    </>
  );
}

export default App;
