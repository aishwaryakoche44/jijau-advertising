import React from "react";
import { motion } from "framer-motion";
import Journey from "../Journey";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="bg-black text-white w-full min-h-screen overflow-hidden">

      {/* HERO */}
      <section className="w-full py-28 text-center relative overflow-hidden border-b border-white/10">

        {/* GLOW BACKGROUND */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a017]/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full"></div>

        <motion.div
          className="relative z-10 px-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 uppercase">
            About{" "}
            <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
              Jijau Advertising
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-xl md:text-2xl font-light">
            Political • Digital • Strategic • Creative Excellence
          </p>

          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-16 h-1 bg-[#d4a017] rounded-full"></div>
            <div className="w-8 h-1 bg-white/30 rounded-full"></div>
            <div className="w-16 h-1 bg-[#d4a017] rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        {/* ABOUT COMPANY */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              About Our Company
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="rounded-3xl p-8 md:p-12 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_0_40px_rgba(212,160,23,0.1)] hover:shadow-[0_0_60px_rgba(212,160,23,0.15)] transition-all">

            <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-8">
              Jijau Advertising is a full-service Political & Strategic Advertising Agency,
              established in 2019, specializing in election management, political communication,
              digital campaigning, brand strategy, and execution.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <p className="text-gray-400">
                Our journey began with the 2019 Amravati Lok Sabha campaign,
                focusing on strategy, grassroots understanding, and communication.
              </p>

              <p className="text-gray-400">
                Over the years, we’ve delivered results across Lok Sabha, Assembly,
                Municipal and digital campaigns with data-driven execution.
              </p>
            </div>

            {/* HIGHLIGHT CARD */}
            <div className="bg-gradient-to-r from-[#d4a017]/10 to-yellow-400/10 border border-[#d4a017]/20 rounded-2xl p-6 mb-8 hover:scale-[1.01] transition">
              <h3 className="text-2xl font-semibold mb-4 text-[#d4a017]">
                2024 Lok Sabha Elections Success
              </h3>

              <ul className="space-y-2 text-gray-300">
                <li>• Rajabhau Waje – Nashik</li>
                <li>• Shobha Tai Bachhav – Dhule</li>
              </ul>
            </div>

            <p className="text-gray-400">
              Today, we stand as a trusted name in Political Advertising,
              Digital Marketing, and Strategic Communication—growing with performance and discipline.
            </p>
          </div>
        </motion.div>

        {/* VISION + MISSION */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">

          <motion.div
            className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#d4a017] transition hover:scale-[1.02]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <div className="w-16 h-1 bg-[#d4a017] mb-6 rounded-full"></div>

            <p className="text-gray-400">
              To become Maharashtra's most trusted Political & Strategic Advertising Agency.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 hover:border-[#d4a017] transition hover:scale-[1.02]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <div className="w-16 h-1 bg-[#d4a017] mb-6 rounded-full"></div>

            <ul className="space-y-3 text-gray-400">
              <li>• India's leading political agency</li>
              <li>• Data + creativity driven campaigns</li>
              <li>• Ground + digital synergy</li>
              <li>• Measurable success delivery</li>
            </ul>
          </motion.div>
        </div>

        {/* STRENGTHS */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Strengths
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Political Understanding",
              "Ground + Digital Expertise",
              "Content Mastery",
              "Data Strategy",
              "Creative Team",
              "Election Track Record",
            ].map((title, i) => (
              <motion.div
                key={i}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d4a017] hover:shadow-[0_0_30px_rgba(212,160,23,0.2)] transition hover:scale-[1.03]"
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-semibold text-white">
                  {title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* WHY CHOOSE */}
        <motion.div
          className="mb-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
              Jijau Advertising?
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            Not just an agency — a strategic growth engine powered by data,
            culture, and execution.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Political + Digital Expertise",
              "Ground Knowledge",
              "Custom Campaign Strategy",
              "Transparent Reporting",
              "Result Focused",
              "War Room Execution",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#d4a017] transition hover:scale-[1.02]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

      </section>

      <Journey />
    </div>
  );
};

export default About;