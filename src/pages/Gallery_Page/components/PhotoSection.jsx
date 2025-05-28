import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { motion } from "framer-motion";

// Import images
import img1 from "../../../assets/photos/1.jpg";
import img2 from "../../../assets/photos/2.jpg";
import img3 from "../../../assets/photos/3.jpg";
import img4 from "../../../assets/photos/4.jpg";
import img5 from "../../../assets/photos/5.jpg";
import img6 from "../../../assets/photos/6.jpg";
import img7 from "../../../assets/photos/7.jpg";
import img8 from "../../../assets/photos/8.jpg";
import img9 from "../../../assets/photos/9.jpg";
import img10 from "../../../assets/photos/10.jpg";
import img11 from "../../../assets/photos/11.jpg";
import img12 from "../../../assets/photos/12.jpg";

const PhotoSection = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="px-4 md:px-8 py-16 min-h-screen bg-[#FAF9F6]">
      {/* Heading */}
      <motion.div
        className="max-w-7xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-black mb-4 font-[Playfair_Display]">
          Our Stunning Interior Designs
        </h1>
        <p className="text-base md:text-lg text-gray-500 font-[Inter]">
          Browse through some of our finest design works
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="group relative overflow-hidden  cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            style={{ aspectRatio: "1/1" }} // Maintain square cards
          >
            <img
              src={image}
              alt={`Gallery Item ${index + 1}`}
              className="object-cover w-full h-full hover:opacity-80 transition-opacity duration-300"
              onClick={() => openModal(image)}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for Full Image View */}
      <Modal
        open={open}
        onClose={closeModal}
        center
        styles={{
          modal: {
            background: "#ffffff",
            padding: "15px",
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "hidden",
          },
          closeButton: {
            background: "transparent",
            color: "#fff",
            top: "10px",
            right: "10px",
          },
        }}
      >
        {selectedImage && (
          <motion.img
            src={selectedImage}
            alt="Full View"
            className="w-full h-auto rounded-lg object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </Modal>
    </div>
  );
};

export default PhotoSection;
