import { motion } from "framer-motion";

// assets
import img1 from "../../../assets/photos/1.jpg";

export default function ShowcaseSection() {
  const stats = [
    { number: "300+", label: "Success projects" },
    { number: "200+", label: "Product launches" },
    { number: "180K", label: "Happy customers" },
  ];

  return (
    <div className="py-16 sm:py-24 bg-[#FAF9F6]">
        <motion.h2
          className="text-4xl font-[Playfair_Display] sm:text-4xl font-semibold text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Achievement
        </motion.h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start gap-12">
      
        {/* Left Side: Single Big Image */}
        <motion.div
          className="w-full md:w-1/2 overflow-hidden shadow-xl "
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={img1}
            alt="Design"
            className="w-full h-auto object-cover "
          />
        </motion.div>

        {/* Right Side: Text and Stats */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <motion.p
            className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 font-[Inter]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            The key difference between ordinary and special. No matter the
            season, our spaces are as nuanced as the lifestyles they reflect —
            don’t just dream it.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 sm:mb-10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col min-w-[100px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {stat.number}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2 font-[Poppins]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Button */}
          <motion.a
            href="/aboutus"
            className="w-full sm:w-44 text-center inline-block px-6 sm:px-8 py-3 border border-gray-900 text-gray-900 rounded-full text-base sm:text-lg font-medium hover:bg-black hover:text-white transition font-[Poppins]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            About Us →
          </motion.a>
        </div>
      </div>
    </div>
  );
}
