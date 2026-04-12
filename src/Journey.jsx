import React from "react";

const Journey = () => {
  const steps = [
    {
      year: "2019",
      title: "Agency Foundation",
      desc: "Jijau Advertising started as a small but ambitious political & strategic advertising agency."
    },
    {
      year: "2020",
      title: "First Major Campaign",
      desc: "Handled our first full-scale constituency campaign with research and execution."
    },
    {
      year: "2021",
      title: "Brand Expansion",
      desc: "Expanded into corporate digital marketing and branding services."
    },
    {
      year: "2022",
      title: "Ground + Digital Model",
      desc: "Built a strong system combining booth-level data and performance marketing."
    },
    {
      year: "2023",
      title: "Full-Service Agency",
      desc: "Became a complete political & digital solutions agency."
    },
    {
      year: "2024",
      title: "Leading Agency",
      desc: "Recognized across Maharashtra for strategic excellence."
    }
  ];

  return (
    <div className="w-full bg-black py-28 px-6 md:px-16 text-white overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-[#d4a017]/10 blur-[120px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase">
          Our{" "}
          <span className="bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl">
          From startup to Maharashtra’s trusted strategic agency
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-[#d4a017] to-yellow-400 mx-auto mt-6 rounded-full"></div>
      </div>

      {/* TIMELINE */}
      <div className="max-w-5xl mx-auto relative">

        {/* LINE */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#d4a017] to-yellow-400"></div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">

              {index % 2 === 0 ? (
                <>
                  {/* LEFT CARD */}
                  <div className="md:w-5/12 mb-6 md:mb-0 md:pr-10">
                    <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10
                      hover:border-[#d4a017] hover:shadow-[0_0_30px_rgba(212,160,23,0.2)]
                      transition-all duration-500">
                      
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>

                      <p className="text-gray-400">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="md:w-2/12 flex justify-center mb-6 md:mb-0">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-[#d4a017] to-yellow-400
                        text-black font-bold text-xl shadow-[0_0_30px_rgba(212,160,23,0.6)]">
                        {step.year}
                      </div>
                    </div>
                  </div>

                  <div className="md:w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="md:w-5/12"></div>

                  {/* CENTER DOT */}
                  <div className="md:w-2/12 flex justify-center mb-6 md:mb-0">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center
                        bg-gradient-to-br from-[#d4a017] to-yellow-400
                        text-black font-bold text-xl shadow-[0_0_30px_rgba(212,160,23,0.6)]">
                        {step.year}
                      </div>
                    </div>
                  </div>

                  {/* RIGHT CARD */}
                  <div className="md:w-5/12 md:pl-10">
                    <div className="p-8 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10
                      hover:border-[#d4a017] hover:shadow-[0_0_30px_rgba(212,160,23,0.2)]
                      transition-all duration-500">
                      
                      <h3 className="text-2xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>

                      <p className="text-gray-400">
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

      {/* CTA */}
      <div className="max-w-2xl mx-auto text-center mt-24">
        <p className="text-gray-400 text-lg mb-8">
          Ready to be part of our next success story?
        </p>

        <a
          href="/contact"
          className="inline-block px-12 py-5 rounded-full font-bold uppercase tracking-widest
          bg-gradient-to-r from-[#d4a017] to-yellow-400 text-black
          hover:scale-105 hover:shadow-[0_0_30px_rgba(212,160,23,0.6)]
          transition-all duration-500"
        >
          Start Your Campaign
        </a>
      </div>
    </div>
  );
};

export default Journey;