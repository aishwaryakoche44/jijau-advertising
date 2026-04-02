import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const heroImages = [
    "https://www.3dotsdesign.in/mockups/bookstation/RGT2J09.webp",
  ];
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <div className="w-full bg-white overflow-hidden">

      {/* --- PREMIUM HERO SECTION --- */}
      <section className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 px-6 lg:px-16 py-32 flex flex-col-reverse lg:flex-row items-center justify-between relative">
        
        {/* Animated background elements */}
        <div className="absolute top-10 right-20 w-72 h-72 bg-[#d4a017]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        
        {/* Left Side Text */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-black leading-tight mb-6 animate-fade-in">
            Campaign <span className="text-[#d4a017] bg-gradient-to-r from-[#d4a017] to-yellow-500 bg-clip-text text-transparent">Excellence</span> 
            <br />That Wins
          </h1>

          <p className="text-gray-700 mt-6 text-lg md:text-xl leading-relaxed max-w-2xl">
            Jijau Advertising delivers high-impact political strategies, digital performance, 
            ground intelligence, and brand positioning powered by data, creativity, and proven results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-[#d4a017] to-yellow-500 text-white rounded-lg hover:shadow-xl transition duration-300 font-semibold text-center"
            >
              Start Your Campaign
            </Link>
            <Link
              to="/work"
              className="px-8 py-4 border-2 border-[#d4a017] text-[#1f2937] rounded-lg hover:bg-[#d4a017] hover:text-white hover:border-[#d4a017] transition duration-300 font-semibold text-center"
            >
              View Our Work
            </Link>
          </div>

          <div className="flex gap-8 mt-12 text-sm md:text-base">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#d4a017]/20 rounded-full flex items-center justify-center text-[#d4a017] text-2xl font-bold">
                +
              </div>
              <div>
                <p className="text-3xl font-bold text-black">50</p>
                <p className="text-gray-600">Campaigns Delivered</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#d4a017]/20 rounded-full flex items-center justify-center text-[#d4a017] text-2xl font-bold">
                ✓
              </div>
              <div>
                <p className="text-3xl font-bold text-black">95%</p>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#d4a017]/20 rounded-full flex items-center justify-center text-[#d4a017] text-2xl font-bold">
                ⭐
              </div>
              <div>
                <p className="text-3xl font-bold text-black">5+</p>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual */}
        <div className="lg:w-1/2 flex justify-center relative z-10 mb-10 lg:mb-0">
          <div className="float-left-right">
            <div className="relative w-full h-[460px] md:h-[520px] rounded-[38px] overflow-hidden shadow-2xl">
              <img
                src={heroImages[currentHero]}
                alt="Campaign Strategy Visual"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 brightness-[1.05]"
              />
              <div className="absolute inset-0 bg-black/6"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-black/3" />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS & HIGHLIGHTS --- */}
      <section className="w-full bg-white border-y border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around text-center gap-8">
          <div className="animate-slide-up">
            <p className="text-sm text-gray-500 uppercase tracking-widest">Maharashtra's Trusted</p>
            <p className="text-2xl font-bold text-black mt-2">Political & Digital Agency</p>
          </div>
          <div className="border-l border-r border-gray-200 px-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-[#d4a017] font-bold">6 Years | 50+ Campaigns | 100M+ Reach</p>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm text-gray-500 uppercase tracking-widest">Proven Expertise In</p>
            <p className="text-2xl font-bold text-black mt-2">Elections, Brands & Strategy</p>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What We Deliver</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete political, digital & strategic solutions designed to drive measurable growth
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Political Strategy", desc: "Election-winning strategies with ground intelligence", icon: "📊" },
              { title: "Digital Campaigns", desc: "Data-driven marketing across all digital channels", icon: "💻" },
              { title: "Brand Building", desc: "Comprehensive branding and creative identity", icon: "🎨" },
              { title: "Ground Research", desc: "Booth analysis and voter sentiment mapping", icon: "🔍" },
              { title: "War Room Setup", desc: "Real-time campaign monitoring & execution", icon: "⚡" },
              { title: "Content & Creative", desc: "Marathi & English content for maximum impact", icon: "📝" },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden bg-white rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 animate-slide-up`}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#d4a017]/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                
                <div className="w-14 h-14 bg-gradient-to-br from-[#d4a017] to-yellow-500 rounded-lg mb-6 group-hover:scale-110 transition duration-300 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#d4a017] transition duration-300">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
                
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#d4a017]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURED WORK SECTION --- */}
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Featured Campaigns</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Real projects with real results. Measurable impact across political and brand sectors.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-12">
            {[
              { title: "Paranjape Schemes Construction Ltd.", img: "https://www.3dotsdesign.in/mockups/genj/PSCL-ATHASHRI-6.webp" },
              { title: "Jehangir Hospital", img: "https://www.3dotsdesign.in/mockups/jehangir/5.jpg" },
              { title: "Happynest", img: "https://www.3dotsdesign.in/images/portfolio/happynest/print-media/01.jpg" },
              { title: "Grande View 7", img: "https://www.3dotsdesign.in/images/portfolio/gv7/thumbnail.jpg" },
              { title: "7 Plumeria Drive", img: "https://www.3dotsdesign.in/images/portfolio/7pd/thumbnail.jpg" },
              { title: "Pushpa International School", img: "https://www.3dotsdesign.in/images/portfolio/pis/pis-thumbnail.jpg" },
              { title: "Mangalam Landmarks", img: "https://www.3dotsdesign.in/mockups/miraya/Newspaper-Mock-Up-Set--by-PuneDesign.webp" },
              { title: "Dent Care", img: "https://www.3dotsdesign.in/images/portfolio/dent-care/thumbnail.jpg" },
            ].map((work, idx) => (
              <div
                key={idx}
                className={`group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ${idx % 2 === 0 ? "float-left-right" : "float-right-left"}`}
                style={{ minWidth: "340px" }}
              >
                <img src={work.img} alt={work.title} className="w-full h-64 md:h-72 object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent group-hover:from-black/70 transition duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xl font-bold group-hover:text-[#d4a017] transition duration-300 border-b border-[#d4a017] pb-2">{work.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="w-full bg-gradient-to-r from-[#1f2937] to-black py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Campaign?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Let's build a winning strategy for your political or brand ambitions. 
            Get your free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-[#d4a017] text-white font-bold rounded-lg hover:bg-yellow-500 transition duration-300 shadow-xl hover:shadow-2xl"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;