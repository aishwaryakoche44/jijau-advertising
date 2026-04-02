import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-black border-t border-black/10">
        <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-6 py-12">
          
          <div className="md:flex md:justify-between md:items-start gap-8">

            {/* Brand Section */}
            <div className="mb-8 md:mb-0 md:w-1/3">
              <a href="/" className="flex items-center mb-4 gap-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1G6vS9xhloATb48u6s51EgGFNijIyg31g&s"
                  alt="Jijau Advertising Logo"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-xl shadow-md ring-1 ring-black/10 object-cover"
                />

                <div className="leading-none">
                  <div className="text-2xl md:text-3xl font-extrabold tracking-wide">
                    JIJAU <span className="text-[#d4a017]">ADVERTISING</span>
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-widest text-black/60">
                    Political & Strategic Agency
                  </div>
                </div>
              </a>

              <p className="text-black/80 text-sm max-w-sm leading-relaxed">
                A full-service Political & Strategic Advertising Agency delivering  
                election campaigns, digital strategy, political communication,  
                and complete 360° branding solutions across Maharashtra.
              </p>

              <div className="mt-4 flex gap-3">
                <Link className="px-4 py-2 bg-[#d4a017] text-white rounded-md font-medium hover:bg-black transition" to="/services">
                  Services
                </Link>
                <Link className="px-4 py-2 border border-black rounded-md font-medium hover:bg-black hover:text-white transition" to="/contact">
                  Contact
                </Link>
              </div>
            </div>

            {/* Link Sections */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:w-2/3">

              {/* Company */}
              <div>
                <h3 className="mb-4 text-sm md:text-base font-semibold uppercase text-black/80">
                  Company
                </h3>
                <ul className="text-black/70 font-medium space-y-3">
                  <li><Link to="/about" className="hover:text-[#d4a017]">About Us</Link></li>
                  <li><Link to="/work" className="hover:text-[#d4a017]">Our Work</Link></li>
                  <li><a href="#" className="hover:text-[#d4a017]">Leadership</a></li>
                  <li><a href="#" className="hover:text-[#d4a017]">Career</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="mb-4 text-sm md:text-base font-semibold uppercase text-black/80">
                  Services
                </h3>
                <ul className="text-black/70 font-medium space-y-3">
                  <li><a href="#" className="hover:text-[#d4a017]">Political Campaigns</a></li>
                  <li><a href="#" className="hover:text-[#d4a017]">Digital Marketing</a></li>
                  <li><a href="#" className="hover:text-[#d4a017]">Event Management</a></li>
                  <li><a href="#" className="hover:text-[#d4a017]">Brand Strategy</a></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="mb-4 text-sm md:text-base font-semibold uppercase text-black/80">
                  Contact
                </h3>
                <ul className="text-black/70 font-medium space-y-3">
                  <li>Mumbai • Nashik • Maharashtra</li>

                  {/* REAL NUMBER ADDED */}
                  <li>
                    <a href="tel:+919326226888" className="hover:text-[#d4a017]">
                      +91 93262 26888
                    </a>
                  </li>

                  {/* REAL EMAIL ADDED */}
                  <li>
                    <a href="mailto:contact@jijauadvertising.in" className="hover:text-[#d4a017]">
                      contact@jijauadvertising.in
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="mb-4 text-sm md:text-base font-semibold uppercase text-black/80">
                  Legal
                </h3>
                <ul className="text-black/70 font-medium space-y-3">
                  <li><a href="#" className="hover:text-[#d4a017]">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-[#d4a017]">Terms & Conditions</a></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="mt-8 border-t border-black/10 pt-6">
            <div className="sm:flex sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpU1G6vS9xhloATb48u6s51EgGFNijIyg31g&s"
                  alt="Jijau Logo"
                  className="w-10 h-10 rounded-md shadow-sm ring-1 ring-black/5 object-cover"
                />
                <span className="text-black/70 text-sm">
                  © {new Date().getFullYear()} <span className="font-semibold">Jijau Advertising</span> — All Rights Reserved.
                </span>
              </div>

              {/* Social Media */}
              <div className="flex space-x-6 mt-4 sm:mt-0">
                <a href="#" className="text-black/50 hover:text-[#1877f2] transition">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-black/50 hover:text-[#d62976] transition">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-black/50 hover:text-[#ff0000] transition">
                  <i className="fab fa-youtube text-xl"></i>
                </a>
              </div>

            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer