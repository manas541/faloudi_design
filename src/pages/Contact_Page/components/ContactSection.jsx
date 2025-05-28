import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-[Playfair_Display] text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12 font-[Inter]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          We would love to hear from you. Whether you have a question or are
          ready to create your dream space — let’s connect.
        </motion.p>

        {/* Form and Contact Info side by side */}
        <motion.div
          className="flex flex-col md:flex-row gap-16 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Form */}
          <form className="flex-1 max-w-lg w-full grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-black bg-transparent placeholder-gray-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-6 py-4 border border-gray-300 rounded-full focus:outline-none focus:border-black bg-transparent placeholder-gray-500"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={6}
              className="w-full px-6 py-4 border border-gray-300 rounded-3xl focus:outline-none focus:border-black bg-transparent placeholder-gray-500 resize-none"
            ></textarea>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className="px-10 py-4 border border-black text-black rounded-full font-medium text-lg hover:bg-black hover:text-white transition font-[Poppins]"
              >
                Send Message →
              </button>
            </div>
          </form>

          {/* Contact Details */}
          <div className="flex-1 max-w-md w-full flex flex-col space-y-10 text-center md:text-left">
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2 font-[Poppins]">
                Email
              </h3>
              <p className="text-gray-600 text-sm font-[Inter]">
                info@yourcompany.com
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2 font-[Poppins]">
                Phone
              </h3>
              <p className="text-gray-600 text-sm font-[Inter]">
                +123 456 7890
              </p>
            </div>
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-2 font-[Poppins]">
                Location
              </h3>
              <p className="text-gray-600 text-sm font-[Inter]">
                123 Dream Street, Cityname
              </p>
            </div>
          </div>
        </motion.div>

        {/* MAP + ADDRESS SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 mt-24">
          {/* Map */}
          <div className="flex-1 max-w-lg w-full">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086431535128!2d-122.420679!3d37.774929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c4b1d7a6f%3A0xe64af2f8e28b5ba!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1615310015932!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-3xl shadow-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Address */}
          <div className="flex-1 max-w-md w-full text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-[Poppins]">
              Our Studio
            </h3>
            <p className="text-gray-600 text-base leading-relaxed font-[Inter]">
              123 Dream Street,
              <br />
              San Francisco, CA 94103
              <br />
              United States
            </p>
            <p className="text-gray-600 mt-4 font-[Inter]">
              Phone: +1 123 456 7890
              <br />
              Email: info@yourcompany.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
