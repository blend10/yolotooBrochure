"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Disable background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <>
      <footer className="w-full">
        {/* TOP SECTION: Dark left, Light right with curve */}
        <div className="flex flex-col lg:flex-row relative overflow-hidden">
          {/* Left Side: Dark Background */}
          <div className="w-full lg:w-[65%] bg-[#0F1724] px-6 py-12 md:py-24 lg:pl-32 lg:pr-12 relative">
            <div className="max-w-3xl">
              <h2 className="text-white text-3xl md:text-[54px] font-medium leading-[1.1] mb-12">
                Do you have any question, <br />
                or would you like additional <br />
                information?
              </h2>

              <div className="flex flex-col gap-10">
                <p className="text-white/70 text-sm md:text-base max-w-lg leading-relaxed">
                  I am here to answer all your questions and provide you with
                  personalized advice. Don’t hesitate to get in touch with me!
                </p>

                {/* Disclaimer Block */}
              </div>
            </div>

            {/* SVG Curve - This creates the overlapping effect */}
            <div className="hidden lg:block absolute top-0 left-full h-full w-64 z-10 -ml-[1px] pointer-events-none">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="h-full w-full fill-[#0F1724]"
              >
                <path d="M0,0 C30,0 20,100 0,100 Z" />
              </svg>
            </div>
          </div>

          {/* Right Side: Light Background with Profile Card */}
          <div className="w-full lg:w-[35%] bg-[#F3F4F6] px-6 py-12 md:py-24 flex items-center justify-center lg:justify-start lg:pl-20">
            <div className="flex flex-col items-center text-center">
              {/* Profile Image */}
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
                <Image
                  src="/martin.png"
                  alt="Martin Vassallo"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Persona Details */}
              <h3 className="text-[#0F1724] text-xl md:text-2xl font-bold tracking-widest uppercase mb-6">
                Martin Vassallo
              </h3>

              <div className="flex flex-col gap-4">
                <a
                  href="https://wa.me/34678983685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#0F1724] hover:opacity-70 transition-opacity group"
                >
                  <div className="bg-[#25D366] p-1.5 rounded-full text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg hover:underline">
                    +34 678 983 685
                  </span>
                </a>
                <a
                  href="mailto:info@yolotoo.com"
                  className="flex items-center gap-3 text-[#0F1724] hover:opacity-70 transition-opacity"
                >
                  <div className="bg-[#0F1724] p-1.5 rounded-full text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="w-4 h-4"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <line x1="22" y1="7" x2="12" y2="14" />
                      <line x1="2" y1="7" x2="12" y2="14" />
                    </svg>
                  </div>
                  <span className="font-semibold text-lg hover:underline">
                    info@yolotoo.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Dark Background */}
        <div className="bg-[#0F1724] px-6 py-12 lg:px-32 border-t border-white/5">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="flex flex-col md:flex-row gap-16 md:gap-32">
              <div className="flex flex-col gap-3">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                  Contact Us
                </span>
                <a
                  href="tel:+34678983685"
                  className="text-white flex items-center gap-2 hover:text-[#25D366] transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span className="font-semibold">+34 678 983 685</span>
                </a>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                  Availability
                </span>
                <span className="text-white font-semibold">
                  24/7 Concierge Service
                </span>
              </div>
            </div>

            <div className="flex flex-col lg:items-end gap-4 text-left lg:text-right">
              <Image src="/logo.svg" alt="logo" width={140} height={32} />
              <div className="text-white/30 text-[10px] leading-relaxed">
                <p>
                  Questions? Let&apos;s plan your escape. Contact our team for
                  personalized charter options.
                </p>
                <p>&copy; 2026 &mdash; Copyright</p>
              </div>
            </div>
          </div>
        </div>
      </footer>



    </>
  );
};

export default Footer;
