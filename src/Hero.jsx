import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/10/13/09/47/ai-generated-9116870_1280.jpg",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-screen relative overflow-hidden bg-black">

      {/* BACKGROUND IMAGES */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Hero Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
            index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a017]/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[130px]" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#d4a017] uppercase tracking-[0.4em] text-sm md:text-base font-bold mb-6"
          >
            Political • Branding • Digital Growth
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-tight"
          >
            We Build <br />
            <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
              Winning Brands
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-8 text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Strategic campaigns, premium branding, and digital dominance
            designed to elevate leaders, businesses, and powerful ideas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a
              href="/contact"
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300"
            >
              Start Strategy
            </a>

            <a
              href="/work"
              className="px-10 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-wider hover:border-[#d4a017] hover:text-[#d4a017] transition-all duration-300"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>

      {/* SLIDER DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-10 bg-[#d4a017]"
                : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;