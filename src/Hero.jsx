import React, { useEffect, useState } from "react";

const Hero = () => {
  // Add your images here (inside public folder)
  const images = [
    "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/10/13/09/47/ai-generated-9116870_1280.jpg",
    // you can add more later
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 3 seconds per image

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full h-screen relative overflow-hidden">

      {/* Slider Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Optional overlay for darker look */}
      <div className="absolute inset-0 bg-black/15"></div>

    </section>
  );
};

export default Hero;