"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Planning = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send email goes here
    alert("Form submitted!");
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 1. Main Container */}
      <div className="relative w-[97%] md:w-full max-w-450 h-[600px] md:h-[900px]  mx-auto rounded-2xl my-20 overflow-hidden">
        {/* Background Video/Image */}
        <video
          src="/video1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />

        {/* Content Wrapper */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center w-full z-10">
          {/* Glass Card */}
          <div className="w-[90%] bg-[#00253933] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6 md:gap-0">
              {/* Title Section */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="font-semibold text-3xl md:text-[40px] leading-tight uppercase text-white drop-shadow-md">
                  Start Planning <br className="hidden md:block" /> Your Private
                  Yacht <br className="hidden md:block" /> Vacation
                </h1>
              </div>

              {/* Description & Button Section */}
              <div className="flex flex-col items-center md:items-end justify-between gap-6 w-full md:w-1/2">
                <h2 className="text-white max-w-lg text-center md:text-right">
                  Receive your personalized proposal with recommended yachts,
                  real-time availability & pricing tailored to your travel
                  style.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Modal Overlay */}
    </>
  );
};

export default Planning;
