import React from "react";
import Footer from "../Footer";

const Services = () => {
  return (
    <div className="w-full bg-white">

      {/* PAGE HEADER */}
      <section className="text-center pt-20 pb-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-black">
          Our <span className="text-[#d4a017]">Services</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Political • Digital • Branding • Strategic Communication
        </p>

        <div className="w-24 h-1 bg-[#d4a017] mx-auto mt-6 rounded-full"></div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        {/* ————————————————————————
            1️⃣ DIGITAL MARKETING
        ————————————————————————— */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 text-center">
            Digital Marketing (Complete Digital Solutions)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Website Development */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-12 h-12 bg-[#d4a017] rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Website Design, Development & Management</h3>
              <p className="text-gray-700 leading-relaxed">
                We convert static design into a clean, responsive and functional website.  
                Fast performance, strong UI, and brand-rich experience.
              </p>
            </div>

            {/* Lead Gen */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-12 h-12 bg-[#d4a017] rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Lead Generation Campaigns</h3>
              <p className="text-gray-700">
                Not just traffic — we deliver verified contact leads that convert.
              </p>
            </div>

            {/* SEO */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-10 border-4 border-[#d4a017] rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Search Engine Optimization (SEO & Local SEO)</h3>
              <p className="text-gray-700">
                Local SEO ensures your business appears first when nearby users search for your service.
              </p>
            </div>

            {/* Google + Meta Ads */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-10 bg-[#d4a017]/20 border border-[#d4a017] rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Google Ads & Meta Ads</h3>
              <p className="text-gray-700">
                Best modern strategy: Meta creates demand, Google captures it.
              </p>
            </div>

            {/* SMM */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-10 bg-[#d4a017]/30 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Social Media Management & Growth</h3>
              <p className="text-gray-700">
                It’s not about followers — it’s about capturing attention and retaining it.
              </p>
            </div>

            {/* Performance Marketing */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-10 bg-gradient-to-br from-[#d4a017] to-yellow-300 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Performance Marketing & Funnel Building</h3>
              <p className="text-gray-700">
                We build funnels that convert strangers into repeat customers.
              </p>
            </div>

            {/* CRM */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-8 h-8 border-4 border-[#d4a017] rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-4">CRM Integration & Lead Automation</h3>
              <p className="text-gray-700">
                Automates data entry so your team focuses on closing deals, not filling forms.
              </p>
            </div>

            {/* Reporting */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-2 bg-[#d4a017] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Monthly Analytics & ROI Reporting</h3>
              <p className="text-gray-700">
                Answers two crucial questions:  
                “Where did my investment go?” and “What did it return?”
              </p>
            </div>

          </div>
        </div>

        {/* ————————————————————————
            2️⃣ BRAND BUILDING
        ————————————————————————— */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 text-center">
            Brand Building & Strategic Communication
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Branding */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-8 h-8 bg-[#d4a017] rounded-sm mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Political & Corporate Branding</h3>
              <p className="text-gray-700">
                Corporate branding = Reliability.  
                Political branding = Relatability + Power.
              </p>
            </div>

            {/* Visual Identity */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-10 border border-[#d4a017] rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Logo, Visual Identity & Brand Language</h3>
              <p className="text-gray-700">
                Logos today follow responsive minimalism for smartphones & wearables.
              </p>
            </div>

            {/* Positioning */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-12 h-3 bg-[#d4a017] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Strategic Brand Positioning</h3>
              <p className="text-gray-700">
                If you don’t position yourself — competitors will, pushing you toward being “just another”.  
              </p>
            </div>

            {/* Content */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-5 h-5 bg-gradient-to-br from-[#d4a017] to-yellow-400 rounded-sm mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Content Strategy (Marathi + English)</h3>
              <p className="text-gray-700">
                Not translation — it’s *transcreation*.  
                We shape message meaning, not just words.
              </p>
            </div>

            {/* PR */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-8 h-8 border-4 border-[#d4a017] rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Public Relations & Media Coordination</h3>
              <p className="text-gray-700">
                PR makes the world talk about you; Media Coordination ensures they say the *right* things.
              </p>
            </div>

            {/* Reputation */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-2 bg-[#d4a017] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Long-Term Image & Reputation Building</h3>
              <p className="text-gray-700">
                Moves a brand from Known → Trusted → Indispensable.
              </p>
            </div>

          </div>
        </div>

        {/* ————————————————————————
            3️⃣ ELECTION MANAGEMENT
        ————————————————————————— */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-8 text-center">
            Political Election Management (End-to-End Campaigning)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Research */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-12 h-3 bg-[#d4a017] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Constituency & Voter Research</h3>
              <p className="text-gray-700">
                Deep-dive audits of ground and digital landscapes before campaign launch.
              </p>
            </div>

            {/* Booth */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-10 bg-[#d4a017]/20 border border-[#d4a017] rounded-md mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Booth-Level Planning & Structuring</h3>
              <p className="text-gray-700">
                If research is the Map — Booth Planning is the Ground Force.
              </p>
            </div>

            {/* Sentiment */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-5 h-5 bg-[#d4a017] rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Ground Surveys & Public Sentiment Analysis</h3>
              <p className="text-gray-700">
                Real-time mood, preference & issue-based data across voters.
              </p>
            </div>

            {/* Opposition */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-4 h-4 bg-[#d4a017]/70 rounded-sm mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Opposition Analysis & Counter Strategy</h3>
              <p className="text-gray-700">
                Understanding competitor messaging, strength & weaknesses to craft advantage.
              </p>
            </div>

            {/* War Room */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-8 h-2 bg-[#d4a017] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Campaign War Room Setup & Monitoring</h3>
              <p className="text-gray-700">
                Centralised command unit for data, operations, media & social monitoring.
              </p>
            </div>

            {/* Manifesto */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-10 h-10 border border-[#d4a017] rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Manifesto Communication Planning</h3>
              <p className="text-gray-700">
                Converting candidate promises into clear, relatable public communication.
              </p>
            </div>

            {/* Speech */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-8 h-8 bg-[#d4a017]/30 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Speech, Narrative & Message Development</h3>
              <p className="text-gray-700">
                Crafting powerful political storytelling for public connection.
              </p>
            </div>

            {/* Election Day */}
            <div className="p-8 bg-white rounded-2xl shadow-xl border border-gray-200">
              <div className="w-12 h-3 bg-[#d4a017] mb-4"></div>
              <h3 className="text-xl font-bold mb-4">Election-Day Operations & Control Systems</h3>
              <p className="text-gray-700">
                On-ground movement, booth tracking, voters’ mobilization & war-room coordination.
              </p>
            </div>

          </div>
        </div>

      </section>

  
    </div>
  );
};

export default Services;