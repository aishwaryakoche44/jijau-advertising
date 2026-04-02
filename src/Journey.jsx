import React from "react";

const Journey = () => {
  const steps = [
    {
      year: "2019",
      title: "Agency Foundation",
      desc: "Jijau Advertising started as a small but ambitious political & strategic advertising agency with a mission to deliver impactful campaigns."
    },
    {
      year: "2020",
      title: "First Major Political Campaign",
      desc: "Handled our first full-scale constituency campaign with research, field planning, and digital strategy execution."
    },
    {
      year: "2021",
      title: "Brand Expansion",
      desc: "Started working with corporate brands for digital marketing, branding, and lead generation services."
    },
    {
      year: "2022",
      title: "Ground + Digital Expertise",
      desc: "Developed a strong model combining ground surveys, booth analysis, war room setup, and digital performance marketing."
    },
    {
      year: "2023",
      title: "Full-Service Agency",
      desc: "Expanded into a complete political, strategic, and digital solutions agency offering end-to-end services."
    },
    {
      year: "2024",
      title: "Leading Agency in Maharashtra",
      desc: "Recognized as a trusted agency for political leaders, corporates, and brands across Maharashtra."
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 px-6 md:px-16">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-6 animate-fade-in">
          Our <span className="text-[#d4a017]">Journey</span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
          From a small ambitious startup to Maharashtra's most trusted Political & Strategic Advertising Agency
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Timeline with vertical line */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Vertical line connecting all items */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#d4a017] to-yellow-400 rounded-full"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Left side content (even indices) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="w-full md:w-5/12 mb-6 md:mb-0 md:pr-8 md:text-right animate-slide-up">
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Center circular badge */}
                    <div className="flex justify-center md:w-2/12 mb-6 md:mb-0">
                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#d4a017] to-yellow-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                          <span className="text-white text-3xl font-bold">{step.year}</span>
                        </div>
                        <div className="absolute inset-0 w-24 h-24 rounded-full bg-[#d4a017] opacity-20 blur-lg -z-10"></div>
                      </div>
                    </div>

                    {/* Right side empty */}
                    <div className="w-full md:w-5/12"></div>
                  </>
                ) : (
                  <>
                    {/* Left side empty */}
                    <div className="w-full md:w-5/12"></div>

                    {/* Center circular badge */}
                    <div className="flex justify-center md:w-2/12 mb-6 md:mb-0">
                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-[#d4a017] to-yellow-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                          <span className="text-white text-3xl font-bold">{step.year}</span>
                        </div>
                        <div className="absolute inset-0 w-24 h-24 rounded-full bg-[#d4a017] opacity-20 blur-lg -z-10"></div>
                      </div>
                    </div>

                    {/* Right side content (odd indices) */}
                    <div className="w-full md:w-5/12 md:pl-8 animate-slide-up">
                      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-2xl mx-auto text-center mt-20">
        <p className="text-gray-700 text-lg mb-8">
          Ready to be part of our next success story?
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-[#d4a017] text-white font-bold rounded-lg hover:bg-black transition duration-300 shadow-lg hover:shadow-xl"
        >
          Start Your Campaign Today
        </a>
      </div>
    </div>
  );
};

export default Journey;