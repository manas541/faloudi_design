import React from "react";

// components of home page
import Navbar from "../../common/Navbar";
import HeroSection from "./components/HeroSection";
import NumberSection from "./components/NumberSection";
import GallerySection from "./components/GallerySection";
import Footer from "./components/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#FAF9F6]">
        <Navbar/>
      <HeroSection />
      <NumberSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default HomePage;
