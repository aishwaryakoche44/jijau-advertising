import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, CheckCircle, Star, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const heroImage =
    "https://www.3dotsdesign.in/mockups/kwd/1.webp";

  return (
    <div className="w-full bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="w-full px-6 md:px-10 lg:px-16 py-24 md:py-32 lg:py-44 flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-20 relative">

        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a017]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px]" />

        {/* LEFT */}
        <motion.div
          className="lg:w-1/2 relative z-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-tight mb-8 text-center lg:text-left">
            Influence <br />
            <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
              Excellence
            </span>
            <br />
            That Wins
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
            Maharashtra's elite strategic agency for political dominance and
            digital brand leadership.
          </p>

          {/* BUTTON */}
          <div className="mt-10 flex justify-center lg:justify-start">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black font-bold uppercase hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Partner With Us <ArrowRight size={20} />
            </Link>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-12 mt-14 md:mt-16 border-t border-white/10 pt-10">

            {[
              { icon: Users, value: "50+", label: "Campaigns" },
              { icon: CheckCircle, value: "95%", label: "Success" },
              { icon: Star, value: "5+", label: "Years" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="text-[#d4a017] mx-auto" />
                <p className="text-2xl font-black">{item.value}</p>
                <p className="text-xs text-gray-500 uppercase">{item.label}</p>
              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImage}
            alt="Campaign Work"
            className="w-full rounded-3xl shadow-[0_20px_60px_rgba(212,160,23,0.25)] object-cover hover:scale-[1.02] transition"
          />
        </motion.div>
      </section>

      {/* ================= TRUST ================= */}
      <motion.section
        className="py-20 md:py-28 lg:py-36 border-y border-white/10 text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="text-gray-500 uppercase tracking-widest mb-8">
          Trusted by Leaders & Brands
        </p>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-gray-600 font-bold">
          {["Political Campaigns", "Real Estate", "Healthcare", "Education", "Corporate"].map(
            (item, i) => (
              <span key={i} className="hover:text-[#d4a017] transition">
                {item}
              </span>
            )
          )}
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 md:py-28 lg:py-36 px-5 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 md:mb-16 lg:mb-20 leading-tight text-left">
            Elite <span className="text-[#d4a017]">Solutions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">

            {["Political Strategy", "Digital Campaigns", "War Room"].map(
              (title, i) => (
                <motion.div
                  key={i}
                  className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(255,255,255,0.04)] hover:-translate-y-3 hover:border-[#d4a017] hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(212,160,23,0.25)] cursor-pointer transition"
                  whileHover={{ y: -6 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-5">
                    {title}
                  </h3>

                  <p className="text-gray-400 text-base md:text-lg">
                    High-impact, data-driven solutions for dominance.
                  </p>
                </motion.div>
              )
            )}

          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <motion.section
        className="py-20 md:py-28 lg:py-36 bg-[#0a0a0a] px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-black mb-10 md:mb-16 lg:mb-20">
            Why <span className="text-[#d4a017]">Jijau</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

            {[
              "Ground + Digital Power",
              "Election Expertise",
              "Data Driven Strategy",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#d4a017] hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(212,160,23,0.25)] cursor-pointer transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold">{item}</h3>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      {/* ================= WORK ================= */}
      <section className="py-20 md:py-28 lg:py-36 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between gap-6 md:items-center mb-10 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-black">
              Featured <span className="text-[#d4a017]">Work</span>
            </h2>

            <Link to="/work" className="text-[#d4a017] font-semibold hover:underline">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              "https://www.3dotsdesign.in/mockups/bookstation/RGT2J09.webp",
              "https://www.3dotsdesign.in/mockups/vatashi/Newspaper%20Mock-Up%20Set-%20by%20PuneDesign.webp",
              "https://www.3dotsdesign.in/mockups/kwd/1.webp",
            ].map((img, i) => (
              <motion.img
                key={i}
                src={img}
                alt="Work"
                className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
                whileHover={{ scale: 1.05 }}
              />
            ))}

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-20 md:py-28 lg:py-36 bg-[#0a0a0a] text-center px-6">

        <h2 className="text-4xl md:text-5xl font-black mb-10 md:mb-16 lg:mb-20">
          Our <span className="text-[#d4a017]">Process</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">

          {["Research", "Strategy", "Execution", "Victory"].map((step, i) => (
            <motion.div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#d4a017] hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(212,160,23,0.25)] cursor-pointer transition"
              whileHover={{ y: -6 }}
            >
              <div className="text-6xl md:text-7xl font-black text-[#d4a017]/60 mb-4">
                0{i + 1}
              </div>

              <h3 className="font-bold text-lg md:text-xl">
                {step}
              </h3>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 md:py-32 lg:py-40 text-center px-6">

        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          Ready to Lead the <br />
          <span className="text-[#d4a017]">Narrative?</span>
        </h2>

        <Link
          to="/contact"
          className="inline-block px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition"
        >
          Secure Your Consultation
        </Link>

      </section>

    </div>
  );
};

export default Home;