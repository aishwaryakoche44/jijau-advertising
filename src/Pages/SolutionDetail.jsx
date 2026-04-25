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
    subtitle: "Comprehensive Election Planning & Execution",
    description: "We craft winning political strategies through deep voter insights, constituency-level planning, and strong on-ground execution.",
    detailedInfo: "Jijau Advertising delivers end-to-end political campaign management for Lok Sabha, Assembly, Municipal Council, and Corporation elections. Our approach includes constituency profiling, voter segmentation, booth-level structuring, manifesto positioning, media coordination, and leadership branding. We integrate real-time ground intelligence with data analytics to ensure precise decision-making and impactful campaign execution.",
    features: [
      "Constituency Profiling & Voter Segmentation",
      "Booth-Level Strategy & Management",
      "Ground Surveys & Feedback Collection",
      "Public Sentiment & Trend Analysis",
      "Political Branding & Image Building",
      "Media & Public Relations Management"
    ],
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200&auto=format&fit=crop"
  },

  "digital-campaigns": {
    title: "Digital Campaigns",
    subtitle: "Data-Driven Digital Growth & Engagement",
    description: "We execute high-performance digital campaigns that maximize reach, engagement, and measurable results across all platforms.",
    detailedInfo: "Our digital marketing solutions are designed to create demand, capture leads, and convert audiences effectively. We provide complete services including website development, landing pages, SEO, Local SEO, Google Ads, Meta Ads, and social media management. With performance tracking, CRM integration, and continuous optimization, we ensure consistent growth and strong ROI for political and business campaigns.",
    features: [
      "Website Development & Landing Pages",
      "Lead Generation & Funnel Strategy",
      "SEO & Local SEO Optimization",
      "Google Ads & Meta Ads Management",
      "Social Media Content & Growth",
      "Analytics, Reporting & Performance Tracking"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },

  "war-room": {
    title: "War Room",
    subtitle: "24/7 Campaign Monitoring & Rapid Response System",
    description: "Our War Room ensures complete control over campaigns with real-time monitoring, instant decisions, and strategic execution.",
    detailedInfo: "The War Room acts as the central command center for campaign operations. We monitor live data, track booth-level performance, analyze opposition activities, and manage social media narratives in real time. With a dedicated team working кругл the clock, we ensure rapid response to challenges, crisis management, and seamless coordination between ground teams, digital teams, and leadership for maximum campaign efficiency.",
    features: [
      "24/7 Live Monitoring & Command Center",
      "Real-Time Data Tracking & Analysis",
      "Crisis Management & Rapid Response",
      "Social Media Monitoring & Narrative Control",
      "Opposition Tracking & Strategy Adjustment",
      "Daily Reports & Decision Support System"
    ],
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
  }
};

const SolutionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = solutionData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Solution Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-white pt-28 pb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#fcab0f]/10 blur-[120px] rounded-full"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 text-gray-400 hover:text-[#fcab0f] transition mb-12">
          <ArrowLeft size={20} /> Back to Solutions
        </button>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="text-[#fcab0f] font-bold uppercase tracking-[0.3em] text-sm mb-4">Elite Strategic Solution</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-6">{data.title}</h1>
            <h2 className="text-2xl font-bold text-gray-300 mb-8 italic">{data.subtitle}</h2>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">{data.description}</p>

            <div className="bg-white/5 border border-white/10 rounded-[32px] p-8 mb-10">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">Key Services</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-[#fcab0f]" />
                    <span className="text-gray-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10">{data.detailedInfo}</p>

            <button onClick={() => navigate('/contact')} className="px-10 py-4 rounded-full bg-gradient-to-r from-[#fcab0f] to-yellow-400 text-black font-black uppercase tracking-widest hover:scale-105 transition-all duration-500">
              Partner With Us
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <img src={data.image} alt={data.title} className="w-full h-[600px] object-cover rounded-[40px] border border-white/10 shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetail;
