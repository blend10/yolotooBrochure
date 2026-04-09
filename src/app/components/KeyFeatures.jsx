"use client";

import React, { useState } from "react";
import { PlusCircle, MinusCircle, CheckCircle2 } from "lucide-react";

export default function KeyFeatures() {
  const [openItemId, setOpenItemId] = useState(null);

  const toggleItem = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  const features = [
    {
      id: 1,
      title: "Panoramic Living Spaces",
      description:
        "Impressive volume and floor-to-ceiling windows create a bright, open atmosphere with uninterrupted sea views throughout the yacht.",
      bullets: [
        "Expansive Salon Layout",
        "Full-Height Panoramic Windows",
        "Natural Light From Every Angle",
      ],
    },
    {
      id: 2,
      title: "Dining with a View",
      description:
        "Multiple dining areas offer exceptional flexibility; each designed to showcase breathtaking surroundings.",
      bullets: [
        "Indoor And Outdoor Dining Options",
        "Sea-Facing Layouts",
        "Ideal For Relaxed Meals Or Formal Dining",
      ],
    },
    {
      id: 3,
      title: "Zero-Speed Comfort",
      description:
        "Advanced zero-speed stabilizers ensure exceptional comfort, even while anchored.",
      bullets: [
        "Reduced Motion At Anchor",
        "Enhanced Onboard Stability",
        "Smooth Experience Day And Night",
      ],
    },
    {
      id: 4,
      title: "Luxury Guest Accommodation",
      description:
        "Five elegant staterooms accommodate up to 10 guests, each designed as a private retreat.",
      bullets: [
        "Spa-Like En-Suite Bathrooms",
        "Refined Materials And Finishes",
        "Quiet, Comfortable Sleeping Spaces",
      ],
    },
    {
      id: 5,
      title: "Spacious Foredeck Lounge",
      description:
        "A generous foredeck provides the perfect setting for relaxation, sunbathing and social moments.",
      bullets: [
        "Multiple Seating And Lounging Areas",
        "Optional Shading",
        "Panoramic Forward Views",
      ],
    },
    {
      id: 6,
      title: "Entertainment-Ready Flybridge",
      description:
        "The flybridge is designed for socializing and relaxation, combining comfort with open-air elegance.",
      bullets: [
        "Bar And Dining Area",
        "Plush Sun Pads",
        "Ideal For Sunset Gatherings",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-0">
      <div className="max-w-450 mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-[#002b45] mb-4">
            Key Features
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl leading-relaxed">
            Experience a seamless blend of panoramic living, refined comfort, and
            thoughtfully designed spaces crafted for life at sea.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {features.map((feature) => {
            const isOpen = openItemId === feature.id;

            return (
              <div
                key={feature.id}
                onClick={() => toggleItem(feature.id)}
                className={`flex flex-col bg-[#F9F9F9] rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                  isOpen ? "shadow-md" : "hover:bg-[#f1f1f1]"
                }`}
              >
                {/* Card Top: Number, Title, and Icon */}
                <div className="flex justify-between items-start mb-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-[#01747C] text-xl font-medium">
                      {feature.id}
                    </span>
                    <h3 className="text-[#002b45] text-lg font-medium pr-4 mt-1">
                      {feature.title}
                    </h3>
                  </div>
                  <div>
                    {isOpen ? (
                      <MinusCircle
                        size={24}
                        className="text-[#01747C] shrink-0 stroke-[1.5]"
                      />
                    ) : (
                      <PlusCircle
                        size={24}
                        className="text-[#01747C] shrink-0 stroke-[1.5]"
                      />
                    )}
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#002b45] shrink-0 mt-[2px]"
                        />
                        <span className="text-gray-800 text-sm font-medium">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
