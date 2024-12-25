import React, { useRef } from "react";
import Navbar from "./Components/Navbar";
import HealthJourney from "./Components/1";
import FeaturesSection from "./Components/2";
import Footer from "./Components/Footer";
import Download from "./Components/4";
import DetailedProgress from "./Components/3";
import HowitWorks from "./Components/HowitWorks";
import PricingTitle from "./Components/PricingTitle";
import Pricing from "./Components/Prices";

function App() {
  // Create refs for the sections
  const featuresRef = useRef<HTMLElement | null>(null);
  const howItWorksRef = useRef<HTMLElement | null>(null);
  const pricingRef = useRef<HTMLElement | null>(null);

  // Function to scroll to the FeaturesSection
  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to the HowItWorks section
  const scrollToHowItWorks = () => {
    if (howItWorksRef.current) {
      howItWorksRef.current.scrollIntoView({ behavior: "smooth" });
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
    <>
      {/* Pass scrollToHome, scrollToFeatures, scrollToHowItWorks, and scrollToPricing functions as props to Navbar */}
      <Navbar
        scrollToHome={scrollToHome}  // Pass scrollToHome
        scrollToFeatures={scrollToFeatures}
        scrollToHowItWorks={scrollToHowItWorks}
        scrollToPricing={scrollToPricing}
      />
      <HealthJourney />
      {/* Attach the ref to FeaturesSection */}
      <FeaturesSection ref={featuresRef} />
      <DetailedProgress />
      {/* Attach the ref to HowItWorks */}
      <HowitWorks ref={howItWorksRef} />
      <PricingTitle />
      {/* Attach the ref to Pricing */}
      <Pricing ref={pricingRef} />
      <Download />
      <Footer />
    </>
  );
}

export default App;
