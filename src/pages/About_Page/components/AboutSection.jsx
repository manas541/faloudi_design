import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-[Playfair_Display] text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-[Inter]">
            We don't just design spaces — we craft experiences that last a lifetime.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 font-[Poppins]">
              Our Story
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-[Inter]">
              Founded with a passion for timeless elegance and innovative design, we have been
              transforming visions into reality for over a decade. Each project we take on is a unique
              journey — blending artistry, functionality, and emotion.
            </p>
          </div>
          <img
            src="https://plus.unsplash.com/premium_photo-1661938316795-02d427070b15?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Our Studio"
            className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Mission and Values */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-[Poppins]">
              Our Mission
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-[Inter]">
              To create meaningful, lasting spaces where elegance meets everyday life.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-[Poppins]">
              Our Vision
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-[Inter]">
              A world where beauty, comfort, and purpose coexist in every corner.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-[Poppins]">
              Our Values
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-[Inter]">
              Craftsmanship, honesty, innovation, and a client-first mindset guide every creation.
            </p>
          </div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          className="flex flex-col gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl text-center text-gray-900 font-[Playfair_Display]">
            Meet the Founders
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
            {/* Founder 1 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://randomuser.me/api/portraits/men/76.jpg"
                alt="Founder 1"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mb-4 shadow-md"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 font-[Poppins]">
                Alex Morgan
              </h3>
              <p className="text-gray-600 text-sm mt-2 font-[Inter]">
                Co-Founder & Creative Director
              </p>
              <p className="text-gray-500 text-sm mt-4 max-w-xs font-[Inter]">
                With a background in architecture and fine arts, Alex leads the creative vision of every project.
              </p>
            </div>

            {/* Founder 2 */}
            <div className="flex flex-col items-center text-center">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Founder 2"
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mb-4 shadow-md"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 font-[Poppins]">
                Taylor Smith
              </h3>
              <p className="text-gray-600 text-sm mt-2 font-[Inter]">
                Co-Founder & CEO
              </p>
              <p className="text-gray-500 text-sm mt-4 max-w-xs font-[Inter]">
                Taylor ensures every client partnership is seamless, blending business acumen with design excellence.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Optional: Map and Address can be added here */}
      </div>
    </div>
  );
}
