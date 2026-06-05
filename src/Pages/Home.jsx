import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import heroOffice from "../image/image.png";
import {
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Vote,
  Building2,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Crown,
  BarChart3,
  Megaphone,
  Rocket,
  Handshake,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      id: "political-strategy",
      title: "Political Strategy",
      desc: "Comprehensive election roadmaps and demographic analysis.",
    },
    {
      id: "digital-campaigns",
      title: "Digital Campaigns",
      desc: "Dominating the digital landscape with precision targeting.",
    },
    {
      id: "war-room",
      title: "War Room",
      desc: "24/7 real-time command centers for campaign control.",
    },
  ];

   const heroImage =
    heroOffice;

  return (
    <div className="w-full bg-black text-white overflow-hidden">

    {/* ================= HERO ================= */}
<section className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16 relative">

  <div className="absolute top-0 left-0 w-96 h-96 bg-[#fcab0f]/10 blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px]" />

  {/* LEFT CONTENT */}
  <motion.div
    className="lg:w-1/2 relative z-10 text-center lg:text-left"
    initial="hidden"
    animate="visible"
    variants={fadeUp}
    transition={{ duration: 0.8 }}
  >
    <p className="text-[#fcab0f] uppercase tracking-[0.25em] text-sm font-semibold mb-4">
      Political • Digital • Branding
    </p>

    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
      Political &
      <span className="text-[#fcab0f]"> Digital</span>
      <br />
      Growth Partners
    </h1>

    <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
      Building winning political campaigns, powerful digital presence,
      and strategic brand growth across Maharashtra.
    </p>

    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4">
      <Link
        to="/contact"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#fcab0f] text-black font-bold"
      >
        Partner With Us
        <ArrowRight size={18} />
      </Link>

      <Link
        to="/work"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20"
      >
        View Work
      </Link>
    </div>

    <div className="flex justify-center lg:justify-start gap-10 mt-12">
      <div>
        <h3 className="text-3xl font-black text-[#fcab0f]">50+</h3>
        <p className="text-gray-500 text-sm uppercase">Campaigns</p>
      </div>

      <div>
        <h3 className="text-3xl font-black text-[#fcab0f]">95%</h3>
        <p className="text-gray-500 text-sm uppercase">Success</p>
      </div>

      <div>
        <h3 className="text-3xl font-black text-[#fcab0f]">5+</h3>
        <p className="text-gray-500 text-sm uppercase">Years</p>
      </div>
    </div>
  </motion.div>

  {/* RIGHT IMAGE */}
  <motion.div
    className="lg:w-1/2 relative"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative rounded-[48px] sm:rounded-[64px] overflow-hidden bg-[#070707] shadow-[0_35px_90px_rgba(0,0,0,0.45)]">
      <img
        src={heroImage}
        alt="Jijau Advertising"
        className="w-full max-h-[560px] sm:max-h-[620px] md:max-h-[720px] object-contain"
      />
      <div className="absolute left-1/2 bottom-4 -translate-x-1/2 h-8 w-3/4 rounded-full bg-black/30 blur-2xl" />
    </div>
  </motion.div>

</section>
      {/* ================= TRUST ================= */}
      <section className="py-24 md:py-32 border-y border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#fcab0f]/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-[#fcab0f] font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Industry Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-black uppercase">
              Trusted by Leaders & Brands
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: "Political", icon: Vote },
              { name: "Real Estate", icon: Building2 },
              { name: "Healthcare", icon: Stethoscope },
              { name: "Education", icon: GraduationCap },
              { name: "Corporate", icon: Briefcase },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-[#fcab0f]/50 hover:bg-white/[0.07] transition-all duration-500 text-center"
              >
                <item.icon className="w-8 h-8 mx-auto mb-4 text-gray-500 group-hover:text-[#fcab0f] group-hover:scale-110 transition-all duration-500" />
                <span className="text-sm md:text-base font-bold text-gray-400 group-hover:text-white transition-colors">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 md:py-28 lg:py-36 px-5 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-12 md:mb-16 lg:mb-20 leading-tight text-left">
            Elite <span className="text-[#fcab0f]">Solutions</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                onClick={() => navigate(`/solutions/${item.id}`)}
                className="p-8 sm:p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_10px_30px_rgba(255,255,255,0.04)] hover:-translate-y-3 hover:border-[#fcab0f] hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(252,171,15,0.25)] cursor-pointer transition group"
                whileHover={{ y: -6 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-base md:text-lg">
                  {item.desc}
                </p>

                <button className="mt-6 text-[#fcab0f] font-bold text-sm uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ArrowRight size={16} />
                </button>
              </motion.div>
            ))}
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
            Why <span className="text-[#fcab0f]">Jijau</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              "Ground + Digital Power",
              "Election Expertise",
              "Data Driven Strategy",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#fcab0f] hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(252,171,15,0.25)] cursor-pointer transition"
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
              Featured <span className="text-[#fcab0f]">Work</span>
            </h2>

            <Link
              to="/work"
              className="text-[#fcab0f] font-semibold hover:underline"
            >
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
          Our <span className="text-[#fcab0f]">Process</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-6xl mx-auto">
          {["Research", "Strategy", "Execution", "Victory"].map((step, i) => (
            <motion.div
              key={i}
              className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#fcab0f] hover:bg-white/10 hover:shadow-[0_15px_40px_rgba(252,171,15,0.25)] cursor-pointer transition"
              whileHover={{ y: -6 }}
            >
              <div className="text-6xl md:text-7xl font-black text-[#fcab0f]/60 mb-4">
                0{i + 1}
              </div>

              <h3 className="font-bold text-lg md:text-xl">{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="text-center px-6 mb-14">
          <h2 className="text-4xl md:text-5xl font-black">
            Our Strategic <span className="text-[#fcab0f]">Force</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Expert teams powering successful campaigns and brand growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              icon: Crown,
              title: "Political Strategists",
              desc: "Winning narratives and constituency planning.",
            },
            {
              icon: BarChart3,
              title: "Data Analysts",
              desc: "Insights from surveys and voter behavior.",
            },
            {
              icon: Megaphone,
              title: "Media Experts",
              desc: "Strong messaging across every platform.",
            },
            {
              icon: Rocket,
              title: "Digital Growth Team",
              desc: "Ads, leads and measurable performance.",
            },
            {
              icon: Handshake,
              title: "Ground Force Managers",
              desc: "Field execution and volunteer control.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#fcab0f] hover:bg-white/10 transition text-center"
            >
              <item.icon className="mx-auto text-[#fcab0f] w-10 h-10 mb-5" />
              <h3 className="font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;