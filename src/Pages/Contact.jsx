import React from "react";

const Contact = () => {
  return (
    <div className="w-full bg-white">

      {/* ---- PAGE HEADER ---- */}
      <section className="relative w-full py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h1 className="text-5xl font-extrabold text-black">
            Contact <span className="text-[#d4a017]">Jijau Advertising</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Let’s build impactful Political, Digital & Strategic campaigns together.
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <div className="w-20 h-1 bg-[#d4a017] rounded-full"></div>
            <div className="w-10 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-20 h-1 bg-[#d4a017] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* ---- CONTACT INFO + FORM ---- */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* ---- LEFT SIDE INFO - NOW WITH STRENGTH STYLE ICONS ---- */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-black mb-6">Get In Touch</h2>

          <p className="text-gray-700 mb-8 leading-relaxed">
            Whether you're planning an election campaign, digital promotion, 
            or seeking strategic brand communication — our team is ready to assist you.
          </p>

          <div className="grid gap-6">

            {/* Card 1 */}
            <div className="p-5 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a017]/50 bg-white group">
              <div className="flex items-center gap-4">
                {/* ICON (same as strengths) */}
                <div className="w-12 h-12 rounded-full bg-[#d4a017] flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div>
                  <h4 className="font-semibold text-black group-hover:text-[#d4a017] transition duration-300">
                    Office Location
                  </h4>
                  <p className="text-gray-700 text-sm">Mumbai • Nashik • Maharashtra</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-5 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a017]/50 bg-white group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a017] flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div>
                  <h4 className="font-semibold text-black group-hover:text-[#d4a017] transition duration-300">
                    Phone Number
                  </h4>
                  <p className="text-gray-700 text-sm">+91 93262 26888</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-5 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a017]/50 bg-white group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a017] flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div>
                  <h4 className="font-semibold text-black group-hover:text-[#d4a017] transition duration-300">
                    Email Address
                  </h4>
                  <p className="text-gray-700 text-sm">contact@jijauadvertising.in</p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-5 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a017]/50 bg-white group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4a017] flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div>
                  <h4 className="font-semibold text-black group-hover:text-[#d4a017] transition duration-300">
                    Website
                  </h4>
                  <p className="text-gray-700 text-sm">www.jijauadvertising.in</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ---- CONTACT FORM ---- */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-black mb-6">Contact Form</h2>

          <form className="space-y-6">
            <input type="text" placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a017]" />

            <input type="email" placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a017]" />

            <input type="text" placeholder="Phone Number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a017]" />

            <textarea placeholder="Your Message" rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a017]"></textarea>

            <button className="w-full py-3 bg-[#d4a017] text-white rounded-lg font-semibold hover:bg-black transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ---- FEEDBACK FORM SECTION ---- */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10">

          <h2 className="text-3xl font-bold text-black text-center mb-6">
            Share Your Feedback
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Help us improve our Political, Digital & Branding services.
          </p>

          <form className="grid md:grid-cols-2 gap-6">

            <input type="text" placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#d4a017]" />

            <input type="email" placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#d4a017]" />

            <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#d4a017]">
              <option>Rate Your Experience</option>
              <option>⭐ Very Poor</option>
              <option>⭐⭐ Poor</option>
              <option>⭐⭐⭐ Good</option>
              <option>⭐⭐⭐⭐ Very Good</option>
              <option>⭐⭐⭐⭐⭐ Excellent</option>
            </select>

            <select className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#d4a017]">
              <option>Service You Used</option>
              <option>Political Campaigning</option>
              <option>Digital Marketing</option>
              <option>Branding & Identity</option>
              <option>Event Management</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Your Feedback..." rows="4"
              className="md:col-span-2 w-full p-3 border border-gray-300 rounded-lg focus:border-[#d4a017]"></textarea>

            <button className="md:col-span-2 w-full py-3 bg-[#d4a017] text-white rounded-lg font-semibold hover:bg-black transition">
              Submit Feedback
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Contact;