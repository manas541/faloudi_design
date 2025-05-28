import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages import
import HomePage from "./pages/Home_Page/HomePage";
import GalleryPage from "./pages/Gallery_Page/GalleryPage";
import AboutPage from "./pages/About_Page/AboutPage";
import ContactPage from "./pages/Contact_Page/ContactPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/aboutus" element={<AboutPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
