import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link to="/" className="flex items-center gap-3 group relative">
          
          {/* Glow */}
          <div className="absolute -inset-2 bg-[#d4a017]/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1G6vS9xhloATb48u6s51EgGFNijIyg31g&s"
            alt="Logo"
            className="w-12 h-10 object-contain mix-blend-lighten relative z-10"
          />

          <h1 className="text-xl font-black uppercase tracking-tight relative z-10">
            <span className="text-white">Jijau</span>{" "}
            <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
              Advertising
            </span>
          </h1>
        </Link>

        {/* ================= DESKTOP MENU ================= */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`text-sm uppercase tracking-widest font-bold transition duration-300 ${
                  location.pathname === link.path
                    ? "text-[#d4a017]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>

              {/* GOLD UNDERLINE ANIMATION */}
              <span
                className={`absolute left-0 -bottom-2 h-[2px] bg-gradient-to-r from-[#d4a017] to-yellow-400 transition-all duration-300 ${
                  location.pathname === link.path
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* ================= CTA BUTTON ================= */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest
            bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black
            hover:scale-105 hover:shadow-lg hover:shadow-[#d4a017]/30 transition"
          >
            Get Strategy
          </Link>
        </div>

        {/* ================= MOBILE BUTTON ================= */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={`text-sm font-bold uppercase tracking-widest transition ${
                  location.pathname === link.path
                    ? "text-[#d4a017]"
                    : "text-white hover:text-[#d4a017]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="flex justify-center mt-6">
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest
            bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black"
          >
            Get Strategy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;