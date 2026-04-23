import React from "react";
import { motion } from "framer-motion";

const Journey = () => {
  const steps = [
    {
      year: "2019",
      title: "Agency Foundation",
      desc: "Jijau Advertising started as a bold political and strategic advertising agency with a clear growth vision.",
    },
    {
      year: "2020",
      title: "First Major Campaign",
      desc: "Successfully handled our first full constituency campaign with planning, field research, and execution.",
    },
    {
      year: "2021",
      title: "Brand Expansion",
      desc: "Expanded services into branding, digital marketing, and premium communication strategy.",
    },
    {
      year: "2022",
      title: "Ground + Digital Model",
      desc: "Built a winning model combining booth-level strategy with digital performance systems.",
    },
    {
      year: "2023",
      title: "Full-Service Agency",
      desc: "Grew into a complete political, branding, and digital solutions agency.",
    },
    {
      year: "2024",
      title: "Leading Agency",
      desc: "Recognized across Maharashtra for impactful campaigns and strategic excellence.",
    },
  ];

  return (
    <section className="w-full bg-black text-white py-24 md:py-32 px-6 md:px-12 overflow-hidden relative">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a017]/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[130px]" />

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.35em] text-sm text-[#fcab0f] font-bold mb-4"
        >
          Growth Timeline
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black uppercase leading-tight"
        >
          Our{" "}
          <span className="bg-gradient-to-r from-[#fcab0f] to-yellow-400 bg-clip-text text-transparent">
            Journey
          </span>
        </motion.h2>

        <p className="text-gray-400 text-lg mt-6">
          From startup vision to Maharashtra’s trusted strategic powerhouse
        </p>
      </div>

      {/* TIMELINE */}
      <div className="max-w-6xl mx-auto relative z-10">

        {/* CENTER LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#fcab0f] via-yellow-400 to-transparent"></div>

        <div className="space-y-14 md:space-y-20">
          {steps.map((step, index) => {
            const left = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-6 items-center"
              >
                {/* LEFT CARD */}
                <div className={`md:col-span-5 ${left ? "order-1" : "order-3"}`}>
                  <div className="glass rounded-3xl p-8 border border-white/10 hover:border-[#fcab0f] hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_35px_rgba(252,171,15,0.2)]">
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* CENTER YEAR */}
                <div className="md:col-span-2 order-2 flex justify-center">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#fcab0f] to-yellow-400 text-black font-black text-lg flex items-center justify-center shadow-[0_0_30px_rgba(252,171,15,0.55)]">
                      {step.year}
                    </div>
                    <div className="absolute inset-0 rounded-full animate-ping bg-[#fcab0f]/20"></div>
                  </div>
                </div>

                {/* RIGHT SPACE */}
                <div className={`md:col-span-5 ${left ? "order-3" : "order-1"}`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-24 relative z-10">
        <p className="text-gray-400 text-lg mb-8">
          Ready to become part of our next success story?
        </p>

        <a
          href="/contact"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-[#fcab0f] to-yellow-400 text-black font-bold uppercase tracking-wider hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(252,171,15,0.25)]"
        >
          Start Your Campaign
        </a>
      </div>
    </section>
  );
};

export default Journey;