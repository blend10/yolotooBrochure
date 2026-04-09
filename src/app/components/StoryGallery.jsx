"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StoryGallery() {
  const galleryImages = [
    "/number1.jpg",
    "/number2.jpg",
    "/number3.jpg",
    "/number4.jpg",
    "/number5.jpg",
    "/number6.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const total = galleryImages.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Derive all three images based on the active index
  const topLeftImage = galleryImages[activeIndex];
  const topRightImage = galleryImages[(activeIndex + 1) % total];
  const bottomImage = galleryImages[(activeIndex + 2) % total];

  return (
    <section className="w-full bg-white py-16">
      <div className="w-full max-w-450 mx-auto px-4 md:px-6 flex flex-col gap-2">
        {/* TOP ROW - Two Split Images */}
        <div className="flex flex-col md:flex-row w-full gap-2 h-[300px] md:h-[450px]">
          <div className="w-full md:w-1/2 h-full relative rounded-t-2xl md:rounded-tl-2xl md:rounded-tr-none overflow-hidden bg-gray-200">
            <Image
              key={`tl-${activeIndex}`}
              src={topLeftImage}
              alt="Yacht View Top Left"
              fill
              className="object-cover animate-fadeIn"
            />
          </div>
          <div className="w-full md:w-1/2 h-full relative rounded-b-2xl md:rounded-b-none md:rounded-tr-2xl overflow-hidden bg-gray-200">
            <Image
              key={`tr-${activeIndex}`}
              src={topRightImage}
              alt="Yacht View Top Right"
              fill
              className="object-cover animate-fadeIn"
            />
          </div>
        </div>

        {/* BOTTOM ROW - Full Carousel */}
        <div className="w-full h-[350px] md:h-[650px] relative md:rounded-bl-2xl md:rounded-br-2xl overflow-hidden bg-gray-200">
          <Image
            key={`bot-${activeIndex}`}
            src={bottomImage}
            alt={`Yacht View Component ${activeIndex + 1}`}
            fill
            className="object-cover animate-fadeIn"
          />

          {/* Navigation Left */}
          <button
            onClick={prevSlide}
            className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/40 hover:bg-white/80 rounded-full flex justify-center items-center text-gray-800 transition-colors z-10 backdrop-blur-sm"
          >
            <ChevronLeft size={24} />
          </button>
          
          {/* Navigation Right */}
          <button
            onClick={nextSlide}
            className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/40 hover:bg-white/80 rounded-full flex justify-center items-center text-gray-800 transition-colors z-10 backdrop-blur-sm"
          >
            <ChevronRight size={24} />
          </button>

          {/* Line Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1 cursor-pointer transition-all duration-300 ease-in-out ${
                  activeIndex === idx ? "w-10 md:w-12 bg-white" : "w-10 md:w-12 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
