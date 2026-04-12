import React from "react";
import { Link } from "react-router-dom";
import { Play, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-28 pb-12 relative overflow-hidden">

      {/* 🔥 GOLD GLOW BACKGROUND */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4a017]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* ================= LOGO SECTION ================= */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6 group">
              
              {/* ✅ FIXED LOGO */}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1G6vS9xhloATb48u6s51EgGFNijIyg31g&s"
                alt="Logo"
                className="w-10 h-8 object-contain mix-blend-lighten transition-transform group-hover:scale-110"
              />

              <h2 className="text-3xl font-black uppercase tracking-tight">
                Jijau <span className="text-[#d4a017]">Advertising</span>
              </h2>
            </div>

            <p className="text-gray-500 max-w-sm mb-8 font-light leading-relaxed">
              Defining political narratives and building digital brand authority
              across India. Performance, discipline, and absolute execution.
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex gap-6">
              
              <a href="#" className="group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition">
                  <FaFacebook className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition">
                  <FaInstagram className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition">
                  <FaTwitter className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </a>

              <a href="#" className="group">
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition">
                  <Play className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </a>

            </div>
          </div>

          {/* ================= NAVIGATION ================= */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-white/40">
              Navigation
            </h4>

            <ul className="space-y-4 font-bold text-sm">
              {["About", "Services", "Work", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="group hover:text-[#d4a017] flex items-center gap-2 transition"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= LEGAL ================= */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-white/40">
              Legal
            </h4>

            <ul className="space-y-4 font-bold text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Jijau Advertising. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            Mumbai • Nashik • Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;