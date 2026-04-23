import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import Swal from "sweetalert2";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "🚀 Inquiry Sent!",
      text: "We’ll contact you within 24 hours.",
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#fcab0f",
      background: "#0a0a0a",
      color: "#fff",
      backdrop: "rgba(0,0,0,0.8)",
    });

    e.target.reset();
  };

  return (
    <div className="w-full bg-black text-white pt-24">

      {/* ---- PAGE HEADER ---- */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[#fcab0f] font-bold uppercase tracking-widest mb-4">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          SECURE YOUR <br />
          <span className="bg-gradient-to-r from-[#fcab0f] to-yellow-400 bg-clip-text text-transparent">
            VICTORY TODAY
          </span>
        </h1>
      </motion.section>

      {/* ---- CONTACT INFO + FORM ---- */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-20">

        {/* ---- LEFT SIDE INFO ---- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
            Connect with Maharashtra's most trusted political strategy team.
            Our command centers in Mumbai and Nashik are ready to deploy.
          </p>

          <div className="space-y-10">

            {[
              { icon: MapPin, title: "Headquarters", text: "Mumbai • Nashik • Maharashtra" },
              { icon: Phone, title: "Direct Line", text: "+91 93262 26888" },
              { icon: Mail, title: "Email Address", text: "contact@jijauadvertising.in" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6 items-start hover:translate-x-1 transition"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 bg-[#111] text-[#fcab0f] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(252,171,15,0.1)]">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black uppercase">{item.title}</h4>
                  <p className="text-gray-500 mt-1">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919326226888"
            className="mt-16 inline-flex items-center gap-4 bg-gradient-to-r from-[#25D366] to-green-400 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <MessageCircle size={24} /> Direct WhatsApp Strategy
          </a>
        </motion.div>

        {/* ---- CONTACT FORM ---- */}
        <motion.div
          className="bg-[#0a0a0a] rounded-[40px] p-6 md:p-16 border border-white/10 shadow-xl hover:shadow-[0_0_50px_rgba(252,171,15,0.1)] transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <form className="space-y-8" onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#fcab0f] outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#fcab0f] outline-none transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-white/40">
                Interested Service
              </label>
              <select className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#fcab0f] outline-none">
                <option className="text-black">Political Campaigning</option>
                <option className="text-black">Digital Marketing</option>
                <option className="text-black">War Room Setup</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-white/40">
                Message
              </label>
              <textarea
                rows="4"
                required
                className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#fcab0f] outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-[#fcab0f] to-yellow-400 text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3"
            >
              Send Inquiry <Send size={20} />
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;