import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-white/10 shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center gap-3 sm:gap-4 group relative z-50 shrink-0"
        >
          {/* glow */}
          <div className="absolute -inset-2 bg-[#fcab0f]/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

          {/* logo icon */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1G6vS9xhloATb48u6s51EgGFNijIyg31g&s"
            alt="Jijau Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 group-hover:scale-105 transition duration-300"
          />

          {/* text brand */}
          <div className="relative z-10 leading-none">
            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tight">
              <span className="text-white">Jijau</span>{" "}
              <span className="bg-gradient-to-r from-[#fcab0f] to-yellow-400 bg-clip-text text-transparent">
                Advertising LLP
              </span>
            </h1>

            <p className="hidden sm:block text-[10px] md:text-xs text-white/55 tracking-[0.22em] uppercase mt-1 font-medium">
              Digital Dreams, Real Results
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <li key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`text-[13px] uppercase tracking-[0.18em] font-bold transition duration-300 ${
                    active
                      ? "text-[#d4a017]"
                      : "text-white/75 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>

                <span
                  className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-[#d4a017] to-yellow-400 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>

        {/* ================= CTA ================= */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#fcab0f] to-yellow-400 text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(252,171,15,0.35)] transition-all duration-300"
          >
            Get Strategy
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white relative z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden bg-black/95 backdrop-blur-2xl border-b border-white/10"
          >
            <ul className="flex flex-col items-center gap-7 py-8">
              {navLinks.map((link, index) => {
                const active = location.pathname === link.path;

                return (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.06 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setOpen(false)}
                      className={`text-sm font-bold uppercase tracking-[0.18em] ${
                        active
                          ? "text-[#fcab0f]"
                          : "text-white hover:text-[#fcab0f]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            <div className="pb-8 flex justify-center">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-[#fcab0f] to-yellow-400 text-black"
              >
                Get Strategy
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;