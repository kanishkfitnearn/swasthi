import React, { useState, useEffect } from "react";

interface NavbarProps {
  scrollToFeatures: () => void;
  scrollToHowItWorks: () => void;
  scrollToPricing: () => void;
  scrollToHome: () => void; // Add scrollToHome prop
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToFeatures,
  scrollToHowItWorks,
  scrollToPricing,
  scrollToHome, // Receive scrollToHome as a prop
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-zinc-950/70 backdrop-blur-md" : "bg-zinc-950"
      } sticky top-0 z-50 px-4 md:px-11 py-4 flex items-center justify-between shadow-md transition duration-300`}
    >
      <div className="flex items-center space-x-2 ml-5 cursor-pointer">
        {/* Make the logo clickable to go to top of the page */}
        <img
          src="/Logo.png"
          alt="logo"
          className="w-8 h-8"
          onClick={(e) => {
            e.preventDefault();
            scrollToHome(); // Scroll to home
          }}
        />
        <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          <img
            src="/Swasthi.png"
            className="h-6 w-auto"
            alt=""
            onClick={(e) => {
              e.preventDefault();
              scrollToHome(); // Scroll to home
            }}
          />
        </h1>
      </div>

      <ul className="hidden md:space-x-8 sm:flex space-x-6">
        {["Home", "Features", "How It Works", "Pricing"].map((item) => (
          <li key={item}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (item === "Home") {
                  scrollToHome(); // Handle Home scroll
                } else if (item === "Features") {
                  scrollToFeatures();
                } else if (item === "How It Works") {
                  scrollToHowItWorks();
                } else if (item === "Pricing") {
                  scrollToPricing(); // Handle Pricing scroll
                }
              }}
              className="text-neutral-200 hover:text-orange-500 transition duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:block mr-5">
        <button className="bg-gradient-to-r from-orange-500 to-yellow-500 font-bold text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-300">
          Download Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
