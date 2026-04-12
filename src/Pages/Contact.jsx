import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 SweetAlert Popup
    Swal.fire({
      title: "🚀 Inquiry Sent!",
      text: "We’ll contact you within 24 hours.",
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#d4a017",
      background: "#0a0a0a",
      color: "#fff",
      backdrop: "rgba(0,0,0,0.8)",
    });

    // optional: reset form
    e.target.reset();
  };

  return (
    <div className="w-full bg-black text-white pt-24">

      {/* ---- PAGE HEADER ---- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-[#d4a017] font-bold uppercase tracking-widest mb-4">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          SECURE YOUR <br />
          <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
            VICTORY TODAY
          </span>
        </h1>
      </section>

      {/* ---- CONTACT INFO + FORM ---- */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-20">

        {/* ---- LEFT SIDE INFO ---- */}
        <div>
          <p className="text-xl text-gray-400 font-light mb-12 leading-relaxed">
            Connect with Maharashtra's most trusted political strategy team.
            Our command centers in Mumbai and Nashik are ready to deploy.
          </p>

          <div className="space-y-10">

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-[#111] text-[#d4a017] rounded-full flex items-center justify-center">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase">Headquarters</h4>
                <p className="text-gray-500 mt-1">Mumbai • Nashik • Maharashtra</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-[#111] text-[#d4a017] rounded-full flex items-center justify-center">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase">Direct Line</h4>
                <p className="text-gray-500 mt-1">+91 93262 26888</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-14 h-14 bg-[#111] text-[#d4a017] rounded-full flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black uppercase">Email Address</h4>
                <p className="text-gray-500 mt-1">
                  contact@jijauadvertising.in
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919326226888"
            className="mt-16 inline-flex items-center gap-4 bg-gradient-to-r from-[#25D366] to-green-400 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300"
          >
            <MessageCircle size={24} /> Direct WhatsApp Strategy
          </a>
        </div>

        {/* ---- CONTACT FORM ---- */}
        <div className="bg-[#0a0a0a] rounded-[40px] p-6 md:p-16 border border-white/10 shadow-xl">
          <form className="space-y-8" onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#d4a017] outline-none transition"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-white/40">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#d4a017] outline-none transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-widest text-white/40">
                Interested Service
              </label>
              <select className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#d4a017] outline-none">
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
                className="w-full bg-transparent p-4 border-b-2 border-white/10 focus:border-[#d4a017] outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-5 bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3"
            >
              Send Inquiry <Send size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;