import { motion } from "framer-motion";
import HeroSectionVideo from "../../../assets/videos/HeroSection.mp4";

export default function LandingPage() {
  return (
    <div className="h-auto bg-[#FAF9F6] flex flex-col mt-12">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-7xl overflow-hidden shadow-lg "
        >
          <video
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover "
            src={HeroSectionVideo}
            autoPlay
            loop
            muted
            playsInline
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.56, 1, 0.36, 1],
              delay: 1.2,
            }}
            className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/30"
          >
            <h1 className="text-2xl sm:text-3xl md:text-3xl font-serif text-center leading-snug px-4">
              ADD THE GREATEST
              <br />
              <span className="inline-block mt-4 px-4 py-2 border border-white rounded-full text-sm sm:text-base md:text-5xl">
                JOY OF LIVING.
              </span>
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
