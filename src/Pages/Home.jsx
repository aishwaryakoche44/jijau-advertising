import React from "react";
import { Link } from "react-router-dom";
import { Users, CheckCircle, Star, ArrowRight } from "lucide-react";

const Home = () => {

  // 🔥 BEST HERO IMAGE (premium + clean)
  const heroImage =
    "https://www.3dotsdesign.in/mockups/kwd/1.webp";

  return (
    <div className="w-full bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="w-full px-6 lg:px-16 py-32 lg:py-44 flex flex-col-reverse lg:flex-row items-center justify-between relative">

        {/* glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a017]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px]" />

        {/* LEFT */}
        <div className="lg:w-1/2 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-black uppercase leading-tight mb-8">
            Influence <br />
            <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
              Excellence
            </span>
            <br />
            That Wins
          </h1>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Maharashtra's elite strategic agency for political dominance and
            digital brand leadership.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 px-10 py-5 rounded-full
            bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black font-bold uppercase
            hover:scale-105 transition-all duration-500"
          >
            Partner With Us <ArrowRight size={20} />
          </Link>

          {/* STATS */}
          <div className="flex flex-wrap gap-6 md:gap-10 mt-16 border-t border-white/10 pt-10">
            <div>
              <Users className="text-[#d4a017]" />
              <p className="text-2xl font-black">50+</p>
              <p className="text-xs text-gray-500 uppercase">Campaigns</p>
            </div>

            <div>
              <CheckCircle className="text-[#d4a017]" />
              <p className="text-2xl font-black">95%</p>
              <p className="text-xs text-gray-500 uppercase">Success</p>
            </div>

            <div>
              <Star className="text-[#d4a017]" />
              <p className="text-2xl font-black">5+</p>
              <p className="text-xs text-gray-500 uppercase">Years</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={heroImage}
            alt="Campaign Work"
            className="w-full rounded-3xl shadow-[0_20px_60px_rgba(212,160,23,0.2)] object-cover"
          />
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="py-12 border-y border-white/10 text-center">
        <p className="text-gray-500 uppercase tracking-widest mb-6">
          Trusted by Leaders & Brands
        </p>

        <div className="flex flex-wrap justify-center gap-10 text-gray-600 font-bold">
          <span>Political Campaigns</span>
          <span>Real Estate</span>
          <span>Healthcare</span>
          <span>Education</span>
          <span>Corporate</span>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-black mb-16">
            Elite <span className="text-[#d4a017]">Solutions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {["Political Strategy", "Digital Campaigns", "War Room"].map(
              (title, i) => (
                <div
                  key={i}
                  className="p-10 border border-white/10 rounded-2xl hover:border-[#d4a017]/40 transition"
                >
                  <h3 className="text-2xl font-bold mb-4">{title}</h3>
                  <p className="text-gray-400">
                    High-impact, data-driven solutions for dominance.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black mb-16">
            Why <span className="text-[#d4a017]">Jijau</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              "Ground + Digital Power",
              "Election Expertise",
              "Data Driven Strategy",
            ].map((item, i) => (
              <div key={i} className="p-10 border border-white/10 rounded-2xl">
                <h3 className="text-xl font-bold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WORK PREVIEW ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between mb-12">
            <h2 className="text-5xl font-black">
              Featured <span className="text-[#d4a017]">Work</span>
            </h2>

            <Link to="/work" className="text-[#d4a017]">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "https://www.3dotsdesign.in/mockups/bookstation/RGT2J09.webp",
              "https://www.3dotsdesign.in/mockups/vatashi/Newspaper%20Mock-Up%20Set-%20by%20PuneDesign.webp",
              "https://www.3dotsdesign.in/mockups/kwd/1.webp",
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Work"
                className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-28 bg-[#0a0a0a] text-center">
        <h2 className="text-5xl font-black mb-16">
          Our <span className="text-[#d4a017]">Process</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {["Research", "Strategy", "Execution", "Victory"].map((step, i) => (
            <div key={i}>
              <div className="text-5xl text-[#d4a017]/20 mb-4">
                0{i + 1}
              </div>
              <h3 className="font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-8">
          Ready to Lead the{" "}
          <span className="text-[#d4a017]">Narrative?</span>
        </h2>

        <Link
          to="/contact"
          className="px-12 py-5 bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black font-bold rounded-full hover:scale-105 transition"
        >
          Secure Your Consultation
        </Link>
      </section>

    </div>
  );
};

export default Home;