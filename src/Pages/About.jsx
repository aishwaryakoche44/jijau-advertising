import React from "react";
import Journey from "../Journey";

const About = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white w-full min-h-screen">
      {/* HERO / TITLE SECTION */}
      <section className="w-full bg-white py-24 text-center text-black relative overflow-hidden border-b border-gray-200">
        
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6 animate-fade-in">
            About <span className="text-[#d4a017] bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">Jijau Advertising</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-700 text-xl md:text-2xl font-light leading-relaxed">
            Political • Digital • Strategic • Creative Excellence
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-16 h-1 bg-[#d4a017] rounded-full"></div>
            <div className="w-8 h-1 bg-gray-600 rounded-full"></div>
            <div className="w-16 h-1 bg-[#d4a017] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* MAIN ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        {/* About Company */}
        <div className="mb-20 animate-slide-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">About Our Company</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto mb-8 rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
              Jijau Advertising is a full-service Political & Strategic Advertising Agency,
              established in 2019, specializing in election management, political communication,
              digital campaigning, brand strategy, and ground-level execution.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Our journey began with the 2019 Amravati Lok Sabha election campaign, where we entered
                  the political advertising ecosystem with a strong focus on strategy, grassroots understanding,
                  and communication planning.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  In the same year, we successfully managed the Maharashtra Assembly election campaign for
                  MLA Namita Mundada, laying a strong foundation for our credibility in political campaigning.
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Over the years, Jijau Advertising has evolved into a results-driven agency, delivering
                  end-to-end solutions across Lok Sabha, Assembly, Municipal Council, and Municipal Corporation
                  elections, along with comprehensive digital marketing services for brands and institutions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d4a017]/10 to-yellow-400/10 rounded-xl p-6 mb-8">
              <h3 className="text-2xl font-semibold text-black mb-4">2024 Lok Sabha Elections Success</h3>
              <ul className="text-lg text-gray-800 space-y-2">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#d4a017] rounded-full mr-3"></span>Rajabhau Waje – Nashik Lok Sabha Constituency</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#d4a017] rounded-full mr-3"></span>Shobha Tai Bachhav – Dhule Lok Sabha Constituency</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Following this, we led multiple Assembly election campaigns, achieving measurable growth
              and strong public engagement. In the 2025 Municipal Council elections and 2026 Municipal Corporation elections,
              Jijau Advertising delivered winning campaigns powered by data-driven strategy and field-level intelligence.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed text-lg font-semibold">
              Today, we stand as a trusted name in Political Advertising, Digital Marketing, and Strategic
              Communication—growing consistently with performance, discipline, and long-term vision.
            </p>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#d4a017] rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-black">Our Vision</h2>
            </div>
            <div className="w-16 h-1 bg-[#d4a017] mb-6 rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become Maharashtra's most trusted Political & Strategic Advertising Agency,
              known for integrity, intelligence, and impactful campaigns.
            </p>
          </div>


          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 animate-slide-up">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#d4a017] rounded-full flex items-center justify-center mr-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h2 className="text-3xl font-bold text-black">Our Mission</h2>
            </div>
            <div className="w-16 h-1 bg-[#d4a017] mb-6 rounded-full"></div>
            <ul className="text-gray-700 text-lg space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#d4a017] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                To become India's leading Political & Strategic Advertising Agency.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#d4a017] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                To empower leaders & brands using Data, Creativity, and Technology.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#d4a017] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                To combine ground reality insights with digital excellence.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#d4a017] rounded-full mr-3 mt-2 flex-shrink-0"></span>
                To deliver measurable electoral and brand success.
              </li>
            </ul>
          </div>
        </div>

        {/* Strength Cards */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Our Strengths</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Strong Political Understanding",
              "Combined Ground + Digital Campaign Expertise",
              "Marathi & English Content Mastery",
              "Data-Driven Strategic Planning",
              "Dedicated Creative & Strategy Team",
              "Proven Election Campaign Track Record",
              "Result-Oriented Execution Model",
            ].map((title, i) => (
              <div key={i} className="group bg-white p-8 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#d4a017]/50">
                <div className="w-10 h-10 rounded-full bg-[#d4a017] flex items-center justify-center mb-4">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
                <h3 className="text-xl font-semibold text-black group-hover:text-[#d4a017] transition-colors duration-300">{title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* WHY CHOOSE JIJAU SECTION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Why Choose Jijau Advertising?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 text-black mb-12 border border-gray-200 shadow-lg">
            <p className="text-xl md:text-2xl mb-6 text-center">
              Choosing Jijau Advertising isn't just hiring an agency; it's partnering with a
              <span className="font-bold text-[#d4a017]"> Strategic Growth Engine.</span>
            </p>
            <p className="text-lg md:text-xl mb-6 text-center">
              In an era where anyone can run ads, we focus on what truly matters:
              <span className="font-bold text-[#d4a017]"> Data, Culture, and Results.</span>
            </p>
            <p className="text-lg text-center">
              Named after Rajmata Jijau, our philosophy is rooted in leadership, discipline,
              and strong execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Political + Digital Expertise Under One Roof" },
              { title: "Deep Local & Ground Reality Knowledge" },
              { title: "Custom-Built Campaign Strategies" },
              { title: "Transparent Reporting & Monitoring" },
              { title: "Result-Focused & Time-Bound Execution" },
              { title: "Experienced Election War Room Team" },
            ].map((item, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-black border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-[#d4a017] mr-4"></div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
      <Journey/>
    </div>
  );
};

export default About;