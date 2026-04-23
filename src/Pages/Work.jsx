import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const items = [
    {
      name: "Vatashi",
      img: "https://www.3dotsdesign.in/mockups/vatashi/Newspaper%20Mock-Up%20Set-%20by%20PuneDesign.webp",
      description:
        "Vatashi was introduced during the pandemic to meet the rising need for affordable, high-efficiency filtration devices. Created by Pune Polymers, the brand focuses on helping people breathe pure air in the automotive segment. we successfully built its market presence and strengthened its identity."
    },
    {
      name: "Paranjape Schemes Construction Ltd.",
      img: "https://www.3dotsdesign.in/mockups/genj/PSCL-ATHASHRI-6.webp",
      description:
        "Paranjape Schemes is one of Pune’s most trusted real estate brands, with 190+ landmark projects across residential and commercial spaces. we strengthened their market presence by handling 30+ projects through strategic creativity across print, outdoor, digital, and social media communication."
    },
    {
      name: "Mangalam Landmarks",
      img: "https://www.3dotsdesign.in/mockups/miraya/Newspaper-Mock-Up-Set--by-PuneDesign.webp",
      description:
        "Mangalam Landmarks is a leading Pune developer with a strong commercial, residential, and industrial portfolio. we crafted complete 360° communication for the brand, using creative strategy to highlight the ‘Mangalam Way of Life’ across print, outdoor, digital, and social media platforms."
    },
    {
      name: "KWALITY WORLD DEVELOPERS",
      img: "https://www.3dotsdesign.in/mockups/kwd/1.webp",
      description:
        "Vrindavan Heights by Kwality Developers focuses on delivering spacious, affordable homes in prime Magarpatta—addressing the city’s rising small-home issue. At 3 Dots Design Pvt. Ltd., we crafted a curiosity-driven campaign that highlighted real value and smart living through integrated communication."
    },
    {
      name: "EXER ENERGY",
      img: "https://www.3dotsdesign.in/images/portfolio/exer/website.jpg",
      description:
        "EXER ENERGY entered the rising e-scooter market with fast innovation and stylish design. We created the concept “The Sleek God,” positioning it as a bold, modern riding experience."
    },
    {
      name: "BOOKSTATION",
      img: "https://www.3dotsdesign.in/mockups/bookstation/RGT2J09.webp",
      description:
        "Bookstation connects Pune bookstores with readers through fast delivery. We built a witty hyperlocal campaign using Pune culture and language to create strong brand recall."
    },
    {
      name: "VIVEDAA ORGANIX",
      img: "https://www.3dotsdesign.in/mockups/vivedaa/1234.webp",
      description:
        "Vivedaa Organix was positioned as Herbal Luxury Hair Oil with elegant branding and premium visual identity to stand out in a crowded market."
    },
    {
      name: "Jehangir Hospital",
      img: "https://www.3dotsdesign.in/mockups/jehangir/5.jpg",
      description:
        "We led campaigns for key hospital units with clear communication and strong storytelling, improving visibility and engagement."
    },
    {
      name: "Happynest",
      img: "https://www.3dotsdesign.in/images/portfolio/happynest/print-media/01.jpg",
      description:
        "We created a warm and relatable identity for affordable housing, backed by impactful TVCs and outdoor campaigns."
    },
    {
      name: "7 Plumeria Drive",
      img: "https://www.3dotsdesign.in/images/portfolio/7pd/thumbnail.jpg",
      description:
        "Luxury project branding focused on the number '7' to create a premium and memorable identity."
    },
    {
      name: "Pushpa International School",
      img: "https://www.3dotsdesign.in/images/portfolio/pis/pis-thumbnail.jpg",
      description:
        "Built a complete identity and campaign that resulted in full admissions within 3 months."
    },
    {
      name: "KONKAN TRAILS",
      img: "https://www.3dotsdesign.in/mockups/konkan-trails/R5A6T7P.webp",
      description:
        "Created playful branding around '51 acres' concept highlighting the Konkani lifestyle."
    }
  ];

  return (
    <div className="w-full bg-black text-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a017]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#fcab0f] to-yellow-400 bg-clip-text text-transparent">
              Work
            </span>
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            A showcase of high-impact campaigns and branding excellence.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer rounded-3xl overflow-hidden relative
              border border-white/10 hover:border-[#fcab0f]
              transition-all duration-500
              shadow-lg hover:shadow-[0_0_40px_rgba(252,171,15,0.3)]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[340px] object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-xl font-bold group-hover:text-[#fcab0f] transition">
                  {item.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 z-[60] overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full rounded-3xl overflow-hidden border border-white/10 bg-black my-auto relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-6 text-3xl text-white hover:text-[#fcab0f] z-10"
              >
                ✕
              </button>

              <img
                src={selected.img}
                alt={selected.name}
                className="w-full h-64 md:h-80 object-cover"
              />

              <div className="p-8">
                <h2 className="text-3xl font-black mb-4 uppercase">
                  {selected.name}
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <motion.section
        className="py-24 text-center relative z-10"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold mb-6">
          Ready to launch your next campaign?
        </h3>

        <button
          onClick={() => navigate("/contact")}
          className="px-12 py-5 rounded-full font-bold uppercase tracking-widest
          bg-gradient-to-r from-[#fcab0f] to-yellow-400 text-black
          hover:scale-105 hover:shadow-[0_0_30px_rgba(252,171,15,0.6)]
          transition-all duration-500"
        >
          Book Strategy Call
        </button>
      </motion.section>

    </div>
  );
};

export default Work;