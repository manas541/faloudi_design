import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide icons (install if needed)
import logo from "../assets/photos/logo.svg";


const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-32 py-6 bg-[#FAF9F6] relative">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-2xl font-bold tracking-widest cursor-pointer font-[Poppins]"
      >
        <img src={logo} alt="Faloudi Logo" className="h-30 w-auto" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <a
          href="/gallery"
          className="text-sm font-medium hover:text-gray-600 font-[Poppins]"
        >
          GALLERY
        </a>
        <a
          href="/aboutus"
          className="text-sm font-medium hover:text-gray-600 font-[Poppins]"
        >
          ABOUT
        </a>
        <a
          href="/contact"
          className="bg-transparent border border-black text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 ease-in-out font-[Poppins]"
        >
          CONTACT US
        </a>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full flex flex-col items-center gap-6 bg-[#FAF9F6] py-6 shadow-md md:hidden z-50">
          <a
            href="/gallery"
            className="text-sm font-medium hover:text-gray-600 font-[Poppins]"
          >
            GALLERY
          </a>
          <a
            href="/aboutus"
            className="text-sm font-medium hover:text-gray-600 font-[Poppins]"
          >
            ABOUT
          </a>
          <a
            href="/contact"
            className="bg-transparent border border-black text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 ease-in-out font-[Poppins]"
          >
            CONTACT US
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
