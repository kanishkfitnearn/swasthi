import { useState, useEffect } from "react";

const Navbar = () => {
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
        isScrolled
          ? "bg-zinc-950/70 backdrop-blur-md"
          : "bg-zinc-950"
      } sticky top-0 z-50 px-4 md:px-11 py-4 flex items-center justify-between shadow-md transition duration-300`}
    >
      <div className="flex items-center space-x-2 ml-5 cursor-pointer">
        <img src="/Logo.png" alt="logo" className="w-8 h-8" />
        <h1 className="text-orange-500 text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          <img src="/Swasthi.png" className="h-6 w-auto" alt="" />
        </h1>
      </div>

      <ul className="hidden md:space-x-8 sm:flex space-x-6">
        {["Home", "Features", "How It Works", "Pricing"].map((item) => (
          <li key={item}>
            <a
              href="#"
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
