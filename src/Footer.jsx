import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-28 pb-12 relative overflow-hidden">

      {/* GOLD GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4a017]/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20"
        >

          {/* LOGO + ABOUT */}
          <div className="col-span-1 md:col-span-2">

            <div className="flex items-center gap-4 mb-6 group">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1G6vS9xhloATb48u6s51EgGFNijIyg31g&s"
                alt="Logo"
                className="w-10 h-8 object-contain mix-blend-lighten transition-transform duration-500 group-hover:scale-110"
              />

              <h2 className="text-3xl font-black uppercase tracking-tight">
                Jijau <span className="text-[#d4a017]">Advertising</span>
              </h2>
            </div>

            <p className="text-gray-500 max-w-sm mb-8 font-light leading-relaxed">
              Defining political narratives and building digital brand authority
              across India. Performance, discipline, and absolute execution.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-6">

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/100087005440602/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.08 }}
                className="group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition-all duration-300">
                  <FaFacebook className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://www.instagram.com/jijau_advertising?igsh=MTh0OHFlcm9hOTQyNg=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.08 }}
                className="group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition-all duration-300">
                  <FaInstagram className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </motion.a>

              {/* Twitter / X */}
              <motion.a
                href="https://x.com/jijaua?s=11&t=Aj_t0TtkKiUOROKUhyV74Q&fullpage=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.08 }}
                className="group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition-all duration-300">
                  <FaTwitter className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/jijau-graphic-advertising/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.08 }}
                className="group"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 hover:border-[#d4a017] transition-all duration-300">
                  <FaLinkedinIn className="text-gray-400 group-hover:text-[#d4a017]" />
                </div>
              </motion.a>

            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-white/40">
              Navigation
            </h4>

            <ul className="space-y-4 font-bold text-sm">
              {["About", "Services", "Work", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="group hover:text-[#d4a017] flex items-center gap-2 transition-all duration-300"
                  >
                    {item}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
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
        </motion.div>

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Jijau Advertising. All Rights Reserved.
          </p>

          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest text-center md:text-right">
            Mumbai • Nashik • Maharashtra
          </p>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;