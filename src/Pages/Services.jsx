import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, Megaphone, Palette, Search, Zap, FileText, BarChart3, Users 
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  const serviceSections = [
    {
      title: "Digital Marketing",
      items: [
        { title: "Web Development", desc: "Premium, high-performance responsive digital hubs.", icon: Globe },
        { title: "Lead Generation", desc: "Data-driven systems delivering high-intent leads.", icon: Search },
        { title: "Google & Meta Ads", desc: "Precision-targeted performance campaigns.", icon: Megaphone },
        { title: "SEO Strategy", desc: "Dominating search rankings with authority.", icon: BarChart3 }
      ]
    },
    {
      title: "Political Election Management",
      items: [
        { title: "War Room Setup", desc: "Real-time command centers for campaign control.", icon: Zap },
        { title: "Voter Sentiment", desc: "Deep analysis of public opinion & trends.", icon: Users },
        { title: "Manifesto Strategy", desc: "Narratives that influence and win.", icon: FileText },
        { title: "Branding & Identity", desc: "Building powerful leadership images.", icon: Palette }
      ]
    }
  ];

  return (
    <div className="w-full bg-black text-white pt-28 overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4a017]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16 relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <p className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent font-bold uppercase tracking-widest mb-4">
          What We Master
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight uppercase">
          ELITE STRATEGIC <br />
          <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
            CAPABILITIES
          </span>
        </h1>
      </motion.section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 pb-28 relative z-10">

        {serviceSections.map((section, idx) => (
          <motion.div
            key={idx}
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >

            {/* SECTION TITLE */}
            <h2 className="text-3xl font-black mb-12 flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#d4a017] to-yellow-400"></div>
              <span className="text-white">{section.title}</span>
            </h2>

            {/* CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  className="group p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10
                  hover:border-[#d4a017] hover:shadow-[0_0_40px_rgba(212,160,23,0.25)]
                  hover:-translate-y-2 transition-all duration-500"
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6
                    bg-gradient-to-br from-[#d4a017] to-yellow-400 text-black
                    group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(212,160,23,0.6)]
                    transition-all duration-500">
                    <item.icon size={26} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-black mb-3 group-hover:text-[#d4a017] transition">
                    {item.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </motion.div>
        ))}

      </section>

      {/* CTA */}
      <motion.div
        className="text-center pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
      >
        <p className="text-gray-400 mb-8 text-lg">
          Ready to scale your campaign with precision?
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-5 rounded-full font-bold uppercase tracking-widest
          bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black
          hover:scale-105 hover:shadow-[0_0_30px_rgba(212,160,23,0.6)]
          transition-all duration-500"
        >
          Start Your Strategy
        </a>
      </motion.div>

    </div>
  );
};

export default Services;