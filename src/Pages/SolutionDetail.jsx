import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const solutionData = {
  "political-strategy": {
    title: "Political Strategy",
    subtitle: "High-Impact Roadmaps for Electoral Dominance",
    description: "Our strategic command center develops comprehensive election roadmaps that go beyond simple campaigning. We dive deep into the fabric of the constituency to build winning outcomes.",
    detailedInfo: "We analyze constituency demographics, historical voting patterns, and real-time public sentiment to build a narrative that resonates with every voter group. Our approach involves multi-layered strategy development, ensuring that your leadership vision is effectively communicated and your path to victory is mathematically and strategically secured.",
    features: [
      "Deep Constituency Profiling",
      "Historical Voting Trend Analysis",
      "Voter Segment Micro-Targeting",
      "Winning Narrative Development",
      "Opponent Weakness Mapping",
      "Strategic Alliance Planning"
    ],
    image: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"
  },
  "digital-campaigns": {
    title: "Digital Campaigns",
    subtitle: "Precision-Targeted Presence in the Digital Age",
    description: "In an era of digital noise, we ensure your message leads the conversation. We deploy high-impact performance marketing to build authority and influence.",
    detailedInfo: "Dominate the digital landscape with micro-targeted advertising on Google and Meta platforms. We don't just run ads; we engineer virality and build digital authority. Our team manages social media presence, handles reputation management, and uses data-driven SEO strategies to ensure you are the first choice in the digital minds of your audience.",
    features: [
      "Meta & Google Ad Dominance",
      "Content Virality Engineering",
      "Digital Identity Protection",
      "Real-time Engagement Tracking",
      "Influencer Outreach Programs",
      "Strategic SEO & Search Visibility"
    ],
    image: "https://cdn.pixabay.com/photo/2024/10/13/09/47/ai-generated-9116870_1280.jpg"
  },
  "war-room": {
    title: "War Room",
    subtitle: "The 24/7 Command Center for Campaign Control",
    description: "A campaign is won on the ground in real-time. Our War Room setup ensures that every move is tracked, every narrative is countered, and every booth is secured.",
    detailedInfo: "Our War Room is the brain of your campaign. Operating 24/7, we manage booth-level coordination, track voter sentiment on a minute-by-micro-level, and counter opposition narratives instantly. We ensure that ground-level execution is perfectly synchronized with the overall strategy, providing the candidate with real-time data to make winning decisions.",
    features: [
      "24/7 Crisis Response Unit",
      "Booth-Level Data Management",
      "Sentiment Analysis Dashboards",
      "Opposition Narrative Neutralization",
      "Ground Force GPS Tracking",
      "Hourly Reporting Systems"
    ],
    image: "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
  }
};

const SolutionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = solutionData[id];

  // Scroll to top on mount to ensure fresh view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Solution Not Found</h1>
          <button 
            onClick={() => navigate("/")}
            className="text-[#fcab0f] flex items-center gap-2 mx-auto hover:underline"
          >
            <ArrowLeft size={20} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#fcab0f]/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <button 
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-gray-400 hover:text-[#fcab0f] transition mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
          <span className="uppercase tracking-widest text-sm font-bold">Back to Solutions</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Left */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#fcab0f] font-bold uppercase tracking-[0.3em] text-sm mb-4">
              Elite Strategic Solution
            </p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">
              {data.title}
            </h1>
            <h2 className="text-2xl font-bold text-gray-300 mb-8 italic">
              {data.subtitle}
            </h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
              {data.description}
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-10">
              <h3 className="text-xl font-bold mb-6 text-white uppercase tracking-wider">Key Masteries</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#fcab0f]" />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              {data.detailedInfo}
            </p>

            <button 
              onClick={() => navigate("/contact")}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#fcab0f] to-yellow-400 text-black font-black uppercase tracking-widest hover:scale-105 transition-all duration-500 shadow-lg"
            >
              Partner With Us
            </button>
          </motion.div>

          {/* Media Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-[#fcab0f]/20 blur-3xl rounded-[40px] z-0"></div>
            <img 
              src={data.image} 
              alt={data.title} 
              className="w-full h-[600px] object-cover rounded-[40px] border border-white/10 relative z-10 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;