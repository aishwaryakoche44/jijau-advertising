import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Img1 from "../image/Img1.jpeg";
import Img2 from "../image/Img2.jpeg";
import Img3 from "../image/Img3.jpeg";
import Img4 from "../image/Img4.jpeg";
import Img5 from "../image/Img5.jpeg";
import Img6 from "../image/Img6.jpeg";
import Img7 from "../image/Img7.jpeg";
import Img8 from "../image/Img8.jpeg";
import Img9 from "../image/Img9.jpeg";
import Img10 from "../image/Img10.jpeg";
import Img11 from "../image/Img11.jpeg";
import Img12 from "../image/Img12.jpeg";
import Img14 from "../image/Img14.jpeg";
import Img15 from "../image/Img15.jpeg";
import Img16 from "../image/Img16.jpeg";

const Work = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const items = [
    {
      name: "Niphad Vidhansabha Campaign",
      img: Img1,
      description: "A comprehensive political campaign for Hon. MLA Dilipkaka Bankar that reshaped public discourse and secured a landmark victory through strategic on-ground and digital integration."
    },
    {
      name: "Niphad Election 2024",
      img: Img3,
      description: "Executed a multi-platform digital marketing strategy for the Niphad 2024 election, enhancing online presence and driving significant voter outreach for the Niphad Assembly campaign."
    },
    {
      name: "Malegaon Election 2024",
      img: Img6,
      description: "Designed and executed a high-visibility campaign for the Malegaon 2024 election, managing all logistics, media, and public engagement for a seamless and impactful result."
    },
    {
      name: "Malegaon Vidhansabha Campaign",
      img: Img2,
      description: "Developed a powerful brand identity for Hon. MLA Dadaji Bhuse, resulting in a 40% increase in voter engagement and record-breaking rally attendance."
    },
     {
      name: "Pachora Vidhansabha Campaign",
      img: Img5,
      description: "Launched a disruptive campaign in the Pachora Vidhansabha race for Hon. MLA Kishorappa Patil with a bold identity and a digital-first approach, capturing a significant voter share."
    },
    {
      name: "Pachora Election 2024",
      img: Img4,
      description: "Crafted a compelling narrative for Hon. MLA Kishorappa Patil in the Pachora 2024 election, strengthening their public image and improving stakeholder engagement."
    },
    {
      name: "Vidhansabha Election 2024",
      img: Img9,
      description: "Orchestrated a grassroots movement for the Nashik Assembly 2024 elections, mobilizing community support and influencing policy change through a powerful, resonant campaign."
    },
    
    {
      name: "Nashik Vidhansabha Campaign",
      img: Img7,
      description: "Built a complete visual identity and online platform for Hon. MLA Devyani Pharande, establishing them as a trusted name in a competitive political space in Nashik."
    },
   
    {
      name: "Nashik Loksabha Campaign",
      img: Img8,
      description: "Managed a crisis communication strategy for Hon. MP Rajabhau Waje, successfully navigating public perception and restoring voter trust through strategic messaging."
    },
    {
      name: "Loksabha Election 2024",
      img: Img11,
      description: "Created a full-scale branding and awareness campaign for the Nashik Loksabha 2024 election, leading to a significant increase in positive media mentions and voter turnout."
    },
    {
      name: "Dhule Loksabha Campaign",
      img: Img10,
      description: "Developed a data-driven voter outreach program for Hon. MP Shobhatai Bachhav that identified and engaged key demographics, playing a crucial role in a tightly contested election."
    },
    {
      name: "The Thasa - Brand Campaign",
      img: Img12,
      description: "Produced a series of viral video content and a full branding package for 'The Thasa', a hand-crafted leather products company, dramatically increasing their social media reach."
    },
    {
      name: "Dr. Priyanka's Swan Skinfinity",
      img: Img15,
      description: "Launched a branding and awareness campaign for Dr. Priyanka's Swan Skinfinity clinic, promoting their skin, hair, and laser services to a wider audience."
    },
    {
      name: "B.G.P. Sonawane Jr. College",
      img: Img14,
      description: "Led the public relations and branding campaign for B.G.P. Sonawane Jr. College, ensuring positive media coverage and widespread community support for their new programs."
    },
    {
      name: "Rajmudra Induction",
      img: Img16,
      description: "Provided end-to-end strategic communication for Rajmudra Induction, securing their brand identity and achieving early market adoption in the industrial sector."
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer rounded-2xl overflow-hidden relative
              border border-white/10 hover:border-[#fcab0f]
              transition-all duration-500
              shadow-lg hover:shadow-[0_0_40px_rgba(252,171,15,0.3)]"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500 bg-black/20"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
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
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full rounded-3xl overflow-hidden border border-white/10 bg-black my-auto relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-6 text-3xl text-white hover:text-[#fcab0f] z-10"
              >
                ✕
              </button>
              
              <div className="md:flex md:max-h-[85vh]">
                <div className="md:w-1/2 flex-shrink-0 bg-black">
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center overflow-y-auto">
                  <h2 className="text-2xl md:text-3xl font-black mb-4 uppercase">
                    {selected.name}
                  </h2>

                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {selected.description}
                  </p>
                </div>
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