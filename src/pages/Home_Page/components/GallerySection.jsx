import { motion } from "framer-motion";

// Assets
import gallery1 from "../../../assets/photos/2.jpg";
import gallery2 from "../../../assets/photos/5.jpg";
import gallery3 from "../../../assets/photos/7.jpg";
import gallery4 from "../../../assets/photos/8.jpg";
import gallery5 from "../../../assets/photos/2.jpg";
import gallery6 from "../../../assets/photos/3.jpg";

export default function GallerySection() {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <div className="py-16 sm:py-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-[Playfair_Display] sm:text-4xl font-semibold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Gallery
        </motion.h2>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden shadow-md group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-60 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <motion.a
            href="/gallery"
            className="w-full sm:w-auto text-center px-6 sm:px-8 py-3 border border-black text-black rounded-full text-base sm:text-lg font-medium hover:bg-black hover:text-white transition duration-300 font-[Poppins]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Explore Full Gallery
          </motion.a>
        </div>
      </div>
    </div>
  );
}
