import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
        
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl font-semibold mb-4">Faloudi</h2>
          <p className="text-sm leading-relaxed font-[Inter]">
            Creating timeless spaces where elegance meets innovation. We design experiences, not just spaces.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div
          className="flex flex-col space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-4 font-[Poppins]">Quick Links</h3>
          <a href="/about" className="hover:text-white transition-colors duration-300 font-[Inter]">About</a>
          <a href="/projects" className="hover:text-white transition-colors duration-300 font-[Inter]">Projects</a>
          <a href="/services" className="hover:text-white transition-colors duration-300 font-[Inter]">Services</a>
          <a href="/contact" className="hover:text-white transition-colors duration-300 font-[Inter]">Contact</a>
        </motion.div>

        {/* Contact */}
        <motion.div
          className="flex flex-col space-y-2 sm:space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white text-lg font-semibold mb-4 font-[Poppins]">Contact Us</h3>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Dream Street, Cityname</p>
        </motion.div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 sm:mt-12 border-t border-gray-800 pt-6 text-center text-xs sm:text-sm text-gray-600 font-[Poppins]">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}
