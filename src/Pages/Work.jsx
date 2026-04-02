import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Work = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  // 🔥 ALL IMAGES + 50-word DESCRIPTION ADDED
  const items = [
    {
      name: "Vatashi",
      img: "https://www.3dotsdesign.in/mockups/vatashi/Newspaper%20Mock-Up%20Set-%20by%20PuneDesign.webp",
      description:
        "Vatashi was introduced during the pandemic to meet the rising need for affordable, high-efficiency filtration devices. Created by Pune Polymers, the brand focuses on helping people breathe pure air in the automotive segment. we successfully built its market presence and strengthened its identity."
    },
    {
      name: "Paranjape Schemes Construction Ltd.",
      img: "https://www.3dotsdesign.in/mockups/genj/PSCL-ATHASHRI-6.webp",
      description:
        "Paranjape Schemes is one of Pune’s most trusted real estate brands, with 190+ landmark projects across residential and commercial spaces. we strengthened their market presence by handling 30+ projects through strategic creativity across print, outdoor, digital, and social media communication."
    },
    {
      name: "Mangalam Landmarks",
      img: "https://www.3dotsdesign.in/mockups/miraya/Newspaper-Mock-Up-Set--by-PuneDesign.webp",
      description:
        "Mangalam Landmarks is a leading Pune developer with a strong commercial, residential, and industrial portfolio. we crafted complete 360° communication for the brand, using creative strategy to highlight the ‘Mangalam Way of Life’ across print, outdoor, digital, and social media platforms."
    },
    {
      name: "KWALITY WORLD DEVELOPERS",
      img: "https://www.3dotsdesign.in/mockups/kwd/1.webp",
      description:
        "Vrindavan Heights by Kwality Developers focuses on delivering spacious, affordable homes in prime Magarpatta—addressing the city’s rising small-home issue. At 3 Dots Design Pvt. Ltd., we crafted a curiosity-driven campaign that highlighted real value and smart living through integrated print, outdoor, digital, and social media communication."
    },
    {
      name: "EXER ENERGY",
      img: "https://www.3dotsdesign.in/images/portfolio/exer/website.jpg",
      description:
        "EXER ENERGY entered the rising e-scooter market with the goal of disrupting the industry through fast innovation and stylish design. Their production plant was set up in just 45 days, proving their ambition and competitive spirit. For the campaign, instead of focusing on performance, we highlighted the feeling of riding an EXER scooter. This led to the concept “The Sleek God”—a confident, modern identity inspired by its sleek looks and intelligent, playful brand attitude.Our creatives showcased EXER as more than a scooter—an experience built for bold, style-driven riders."
    },
    {
      name: "BOOKSTATION",
      img: "https://www.3dotsdesign.in/mockups/bookstation/RGT2J09.webp",
      description:
        "Bookstation connects Pune’s Appa Balwant Chowk bookstores with readers through 5-hour citywide delivery and quick pan-India shipping. We built a witty, hyperlocal campaign using Pune’s culture, slangs and book references to highlight its unique speed and identity. Our strategy helped Bookstation stand out as a smart, fast and relatable online book delivery brand."
    },
    {
      name: "VIVEDAA ORGANIX",
      img: "https://www.3dotsdesign.in/mockups/vivedaa/1234.webp",
      description:
        "Vivedaa Organix entered a crowded herbal market with a unique blend of 20+ natural ingredients. We positioned the brand as “Herbal Luxury Hair Oil,” offering a spa-like experience at an affordable price. With elegant green packaging and clean branding, we helped the product stand out as a premium yet natural wellness choice."
    },
    {
      name: "Jehangir Hospital",
      img: "https://www.3dotsdesign.in/mockups/jehangir/5.jpg",
      description:
        "For Jehangir Hospital, a 79-year-old healthcare institution, we focused on clear and memorable communication across all media. We led launch campaigns for key units like Breast Care, Pulmonology, IVF, Wellness and more. Our blend of strategic insight and creative storytelling strengthened the hospital’s brand visibility and patient engagement."
    },
    {
      name: "Happynest",
      img: "https://www.3dotsdesign.in/images/portfolio/happynest/print-media/01.jpg",
      description:
        "Happynest was created as an independent category of “value for money” homes designed for mid-segment buyers. We built a warm, confidence-boosting communication strategy that assured families their dream home was within reach. With impactful TVCs, outdoor ads and promotional campaigns, we shaped a relatable, uplifting brand identity."
    },
    {
      name: "7 Plumeria Drive",
      img: "https://www.3dotsdesign.in/images/portfolio/7pd/thumbnail.jpg",
      description:
        "7 Plumeria Drive is a premium luxury residence crafted for an elite audience. Our campaign focused on creating intrigue around the number “7,” turning it into the hero of the brand. By linking all premium features to this concept, we built a striking, memorable identity that stood out in the luxury market."
    },
    {
      name: "Pushpa International School",
      img: "https://www.3dotsdesign.in/images/portfolio/pis/pis-thumbnail.jpg",
      description:
        "Pushpa International School entered a competitive education market with no prior history. We positioned it as a New Age school for Generation Next, creating a complete brand identity from logo to website and promotional campaigns. With a strong, child-friendly yet serious communication approach, the school achieved full admissions within just three months."
    },
    {
      name: "KONKAN TRAILS",
      img: "https://www.3dotsdesign.in/mockups/konkan-trails/R5A6T7P.webp",
      description:
        "Konkan Trails offers vacation villas and plots across 51 serene acres in Dapoli. We turned “51” into the hero of the campaign, creatively blending it into words and visuals to highlight the project’s neo-rural Konkani lifestyle. The result was a playful, memorable branding that brought the Konkan experience to life."
    },
    {
      name: "Tarsh Gastronomia & Bar",
      img: "https://www.3dotsdesign.in/images/portfolio/tarsh/tarsh-thumbnail.jpg",
      description:
        "Tarsh is a multicuisine restaurant offering authentic dishes from four regions. We crafted a complete branding experience—from menu design to environmental branding and digital campaigns. With festive promotions, invites, and IPL-led marketing, we positioned Tarsh as a vibrant, memorable destination for food lovers."
    },
    {
      name: "TMR Group",
      img: "https://www.3dotsdesign.in/images/portfolio/tmr/thumbnail.jpg",
      description:
        "TMR Group, a leading plotting developer in Hyderabad, needed strong visibility in a competitive market. We created impactful corporate branding, including a standout Times of India ad, and strengthened their digital presence. Our strategic communication elevated the brand’s image and reinforced its position as a trusted name in land development."
    },
    {
      name: "Grande View 7",
      img: "https://www.3dotsdesign.in/images/portfolio/gv7/thumbnail.jpg",
      description:
        "Ambegaon was an overlooked locality, and GV7 needed a fresh identity for its 5th phase. We created the new brand “Kutumb”, supported by a strong multi-channel launch through print, outdoor ads, radio, site branding and digital touchpoints. The campaign successfully generated buzz and reshaped the project’s presence in the area."
    },
    {
      name: "Life 3600",
      img: "https://www.3dotsdesign.in/images/portfolio/life-360/sept18/main-thumbnail.gif",
      description:
        "Life 360 was positioned as a project offering truly holistic living. Our colourful, connectivity-focused ads and vibrant illustration style broke stereotypes and instantly grabbed attention. With strong print, outdoor and follow-up campaigns highlighting key amenities, the branding delivered big results—85 premium flats sold in just six months."
    },
    {
      name: "Water's Squares",
      img: "https://www.3dotsdesign.in/images/portfolio/waters-square/ws-thumbnail.gif",
      description:
        "Water’s Square combined office spaces, a hypermarket, retail and restaurants under one roof. To showcase these multiple offerings, we created a unified, smart communication approach. A four-page newspaper ad and strong outdoor branding highlighted every facet of the project, giving it clear visibility and a strong market presence."
    },
    {
      name: "Dent Care",
      img: "https://www.3dotsdesign.in/images/portfolio/dent-care/thumbnail.jpg",
      description:
        "For Dr. Disha Shah’s first clinic, we crafted a fresh, modern identity that reflected her advanced dental technology and contemporary approach. Through corporate branding, environmental design and digital promotions, we positioned the clinic as a standout, new-age destination for confident and reliable dental care."
    },
    {
      name: "Femcity Hospitals",
      img: "https://www.3dotsdesign.in/images/portfolio/femcity-hospitals/thumbnail.jpg",
      description:
        "Launching a women’s hospital in a crowded Hyderabad market required a distinct identity. We positioned Femcity as “A World of Happy Women” and built all branding around this idea. With a strategic two-phase launch—Women’s Day soft launch and a grand event—we created strong visibility and emotional connection with the audience."
    },
    {
      name: "Women's Express",
      img: "https://www.3dotsdesign.in/images/portfolio/we/thumbnail.jpg",
      description:
        "A new women’s apparel brand needed a smart global identity. We created “WE”—a short, memorable name inspired by “Women.” Its branding used a classy black-and-white palette with a touch of wine red, symbolising strength, clarity and passion, giving the brand a bold and contemporary persona."
    },
    {
      name: "Atlante",
      img: "https://www.3dotsdesign.in/images/portfolio/atlante/thumbnail.jpg",
      description:
        "Atlante, a residential project aimed at the IT crowd, was branded around its USP—“Measured to Perfection.” With subtle tech-inspired language and precise visuals, we created collaterals, outdoor ads and digital communication that reflected accuracy and detail. Miniature-themed brochure visuals further strengthened the project’s unique identity."
    }
  ];

  return (
    <div className="w-full bg-white text-slate-800">

      {/* ---------- HEADER ---------- */}
      <section className="max-w-7xl mx-auto px-5 pb-20 pt-24 md:pt-28">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide mb-6">
            Our{" "}
            <span className="text-[#d4a017] bg-gradient-to-r from-[#d4a017] to-yellow-400 bg-clip-text text-transparent">
              Work Showcase
            </span>
          </h1>

          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            A curated selection of our best branding, digital, and creative campaigns crafted with precision and storytelling.
          </p>
        </div>

        {/* ---------- GRID ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {items.map((item, i) => (
            <article
              key={i}
              onClick={() => setSelected(item)}
              className="cursor-pointer rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden bg-white max-w-[420px] mx-auto"
            >
              <img
                src={item.img}
                className="w-full h-[330px] object-cover"
                alt={item.name}
              />

              <div className="p-5">
                <h3 className="text-xl font-bold">{item.name}</h3>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* ---------- MODAL ---------- */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-7 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-3xl text-black"
            >
              ✕
            </button>

            <img
              src={selected.img}
              className="w-full h-80 object-cover rounded-xl"
              alt={selected.name}
            />

            <h2 className="text-2xl font-bold mt-5">{selected.name}</h2>
            <p className="text-slate-700 mt-3 leading-relaxed">{selected.description}</p>
          </div>
        </div>
      )}

      {/* ---------- CTA BUTTON ---------- */}
      <section className="bg-yellow-50 py-14 text-center">
        <h3 className="text-3xl font-bold mb-3">Ready to launch your next campaign?</h3>

        <button
          onClick={() => navigate("/contact")}
          className="px-8 py-3 bg-[#d4a017] text-white rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
        >
          Book a Strategy Call
        </button>
      </section>

    </div>
  );
};

export default Work;