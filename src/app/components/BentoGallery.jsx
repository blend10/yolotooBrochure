"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BentoGallery = () => {
  // Replace these image paths with your actual cabin/room photos.
  const slides = [
    {
      id: 1,
      title: "Private Cabins",
      description:
        "Elegant, thoughtfully designed cabins offering hotel-level comfort, plush bedding, and refined interiors—creating a quiet, private sanctuary at sea.",
      images: [
        "/slide1.jpg", // Main Left Image
        "/slide2.jpg", // Top Right Image
        "/slide3.jpg", // Bottom Right-Left Image
        "/slide4.jpg", // Bottom Right-Right Image
      ],
    },
    {
      id: 2,
      title: "Dining & Social Experience",
      description:
        "Enjoy refined onboard dining in an open, social setting, where exceptional service, fresh cuisine, and panoramic sea views come together for unforgettable moments.",
      images: ["/slide5.jpg", "/slide6.jpg", "/slide7.jpg", "/slide8.jpg"],
    },
    {
      id: 3,
      title: "Your Private Retreat",
      description:
        "Spacious above-deck cabins designed for ultimate comfort and privacy, featuring elegant interiors, abundant natural light, and panoramic sea views that create a serene onboard escape.",
      images: ["/slide9.jpg", "/slide10.jpg", "/slide111.jpg", "/slide12.jpg"],
    },
    {
      id: 4,
      title: "Comfort for Every Moment",
      description:
        "A warm, inviting interior designed for relaxation and quality time, where families can unwind, connect, and feel at home while at sea together in comfort.",
      images: ["/slide13.jpg", "/slide14.jpg", "/slide15.jpg", "/slide16.jpg"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section className="w-full bg-white py-16">
      <div className="w-full max-w-450 mx-auto px-4 md:px-6">
        <div className="w-full h-[500px] md:h-[650px] lg:h-[750px] flex flex-col md:flex-row gap-2 relative">
          {/* Mobile Only: Navigation Left */}
          <button
            onClick={prevSlide}
            className="md:hidden absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex justify-center items-center text-gray-800 z-30 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Desktop Navigation Left */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full justify-center items-center text-gray-800 transition-colors z-30 shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>

          {/* LEFT: Main Large Image */}
          <div className="w-full md:w-[65%] h-full relative rounded-2xl md:rounded-r-none md:rounded-l-2xl overflow-hidden group shadow-md">
            <div className="w-full h-full bg-gray-200">
              <Image
                key={`main-${activeIndex}`}
                src={currentSlide.images[0]}
                alt={`${currentSlide.title} Main`}
                fill
                className="object-cover transition-transform duration-700 animate-fadeIn"
              />
            </div>

            {/* Overlay Text Box (Glass effect) */}
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 w-[85%] md:w-[70%] lg:w-[60%] bg-[#2A2A2A]/40 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-xl z-20 transition-all">
              <h2 className="text-white text-2xl md:text-3xl font-medium mb-3 tracking-wide">
                {currentSlide.title}
              </h2>
              <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                {currentSlide.description}
              </p>
            </div>
          </div>

          {/* RIGHT: 3 Split Images (Desktop Only) */}
          <div className="hidden md:flex w-[35%] h-full flex-col gap-2">
            {/* Top Right */}
            <div className="w-full h-1/2 relative rounded-tr-2xl overflow-hidden group shadow-md bg-gray-200">
              <Image
                key={`tr-${activeIndex}`}
                src={currentSlide.images[1]}
                alt={`${currentSlide.title} Top Right`}
                fill
                className="object-cover transition-transform duration-700 animate-fadeIn"
              />
            </div>

            {/* Bottom Right Split */}
            <div className="w-full h-1/2 flex gap-2">
              <div className="w-1/2 h-full relative overflow-hidden group shadow-md bg-gray-200">
                <Image
                  key={`bl-${activeIndex}`}
                  src={currentSlide.images[2]}
                  alt={`${currentSlide.title} Bottom Left`}
                  fill
                  className="object-cover transition-transform duration-700 animate-fadeIn"
                />
              </div>
              <div className="w-1/2 h-full relative rounded-br-2xl overflow-hidden group shadow-md bg-gray-200">
                <Image
                  key={`br-${activeIndex}`}
                  src={currentSlide.images[3]}
                  alt={`${currentSlide.title} Bottom Right`}
                  fill
                  className="object-cover transition-transform duration-700 animate-fadeIn"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation Right */}
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full justify-center items-center text-gray-800 transition-colors z-30 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>

          {/* Mobile Navigation Right */}
          <button
            onClick={nextSlide}
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex justify-center items-center text-gray-800 z-30 shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BentoGallery;
