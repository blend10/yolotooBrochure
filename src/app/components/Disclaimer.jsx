"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Disclaimer = () => {
  // Placeholder layout data. Add more objects and appropriate images here once available.
  const layouts = [
    { id: 1, image: "/bow1.png" },
    { id: 2, image: "/bow2.png" },
    { id: 3, image: "/bow3.png" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % layouts.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + layouts.length) % layouts.length);
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-0">
      {/* Container to match other sections */}
      <div className="max-w-450 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-[#002b45]">
            Disclaimer
          </h2>
        </div>

        {/* Global wrapper for diagram and disclaimer text */}
        <div className="w-full rounded-2xl overflow-hidden bg-[#FAFAFA] flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
          {/* Top Section: Diagram Map / Carousel */}
          <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center p-4 lg:p-12">
            {/* Left Control Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 w-10 h-10 md:w-12 md:h-12 bg-gray-200/60 hover:bg-gray-200 rounded-full flex justify-center items-center text-gray-600 transition-colors z-10"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Layout Image */}
            <div className="relative w-[85%] md:w-[70%] h-full flex items-center justify-center">
              <div className="relative w-full h-full opacity-60 transition-opacity duration-300">
                <Image
                  key={activeIndex} // Force re-render of Image for smooth visual update if needed, though Next/Image handles src transitions
                  src={layouts[activeIndex].image}
                  alt={`Yacht Deck Plan / Layout - ${layouts[activeIndex].name}`}
                  fill
                  className="object-contain animate-fadeIn"
                />
              </div>
            </div>

            {/* Right Control Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-gray-200/60 hover:bg-gray-200 rounded-full flex justify-center items-center text-gray-600 transition-colors z-10"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Bottom Section: Disclaimer Text Footer */}
          <div className="w-full bg-[#f4f4f4] p-5 md:p-6 lg:px-12 border-t border-gray-200">
            <p className="text-gray-500 text-[12px] md:text-[20px] text-start leading-relaxed">
              The Company offers the details of this vessel in good faith but
              cannot guarantee or warrant the accuracy of this information nor
              warrant the condition of the vessel. This vessel is offered
              subject to prior sale, price change, or withdrawal without notice,
              the description is not bound to contract
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
