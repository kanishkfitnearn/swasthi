import { useRef } from "react";
import Navbar from "./Components/Navbar";
import HealthJourney from "./Components/1";
import FeaturesSection from "./Components/2";
import Footer from "./Components/Footer";
import Download from "./Components/4";
import DetailedProgress from "./Components/3";
import HowitWorks from "./Components/HowitWorks";
import PricingTitle from "./Components/PricingTitle";
import Pricing from "./Components/Prices";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import HowitWorksMobile from "./Components/5";

function App() {
  // Create refs for the sections
  const featuresRef = useRef<HTMLElement | null>(null);
  const howItWorksDesktopRef = useRef<HTMLElement | null>(null);
  const howItWorksMobileRef = useRef<HTMLElement | null>(null);
  const pricingRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: false, // Ensures animation occurs only once
    });
  }, []);

  // Function to scroll to the FeaturesSection
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to the HowItWorks section
  const scrollToHowItWorks = () => {
    if (window.innerWidth >= 768 && howItWorksDesktopRef.current) {
      // For desktop view
      howItWorksDesktopRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (howItWorksMobileRef.current) {
      // For mobile view
      howItWorksMobileRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to the Pricing section
  const scrollToPricing = () => {
    if (pricingRef.current) {
      pricingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to the top (Home)
  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <Navbar
        scrollToHome={scrollToHome}
        scrollToFeatures={scrollToFeatures}
        scrollToHowItWorks={scrollToHowItWorks}
        scrollToPricing={scrollToPricing}
      />
      <HealthJourney />
      <FeaturesSection ref={featuresRef} />
      <DetailedProgress />
      <div className="w-full">
        {/* Assign separate refs for desktop and mobile HowItWorks */}
        <HowitWorks ref={howItWorksDesktopRef} />
        <HowitWorksMobile ref={howItWorksMobileRef} />
      </div>
      <PricingTitle />
      <Pricing ref={pricingRef} />
      <Download />
      <Footer />
    </div>
  );
}

export default App;