import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md">
      <div className="w-full px-5 py-3 flex items-center justify-between">

        {/* ---- LOGO ---- */}
        <div className="flex items-center gap-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1G6vS9xhloATb48u6s51EgGFNijIyg31g&s"
            alt="Logo"
            className="w-15 h-12 object-contain"
          />
          <h1 className="text-xl font-bold tracking-wide text-gray-800">
            JIJAU <span className="text-[#d4a017]">ADVERTISING</span>
          </h1>
        </div>

        {/* ---- DESKTOP MENU ---- */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Work", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-gray-700 text-lg font-medium hover:text-[#d4a017] transition-all"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* ---- MOBILE BUTTON ---- */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* ---- MOBILE MENU ---- */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-5 mt-3 text-lg">
            {["Home", "About", "Services", "Work", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-700 hover:text-[#d4a017] transition-all"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;