import React from "react";

const QuickSpecs = () => {
  const specs = {
    accommodation: [
      "Guests: 12 Day / 10 Overnight",
      "Cabins: 4 en-suite",
      "1 x Master (Main Deck)",
      "1 x VIP",
      "1 x Double + Pullman",
      "1 x Twin + Pullman",
    ],
    equipment: [
      "Builder: Ferretti",
      "Year: 2001 / Refit 2024",
      "Length: 29.5m",
      "Stabilisers: 2 x Seakeeper 16 (2023)",
      "Speed: 16 kts (Cruise) / 22 kts (Max)",
    ],
    watersports: [
      "3.85m Williams Jet Tender",
      "2 x Jet e-foil",
      "1 x Seabob",
      "3 x SUP",
      "Waterski & Wakeboard",
      "Towable Doughnut",
      "Snorkeling Equipment",
    ],
  };

  const SpecColumn = ({ title, number, items }) => (
    <div className="flex flex-col">
      <div className="border-b border-gray-200 pb-3 mb-6">
        <h3 className="text-[#01747C] text-[18px] md:text-[22px] font-medium tracking-wide uppercase">
          {number}. {title}
        </h3>
      </div>
      <div className="flex flex-col gap-3">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-start gap-3 group">
            <div className="w-1.5 h-1.5 rounded-full bg-[#01747C] shrink-0 mt-2 transition-transform group-hover:scale-125" />
            <span className="text-sm md:text-base text-[#112F4E] leading-relaxed font-light">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
        <SpecColumn
          number="01"
          title="Accommodation"
          items={specs.accommodation}
        />
        <SpecColumn number="02" title="Equipment" items={specs.equipment} />
        <SpecColumn
          number="03"
          title="Watersports"
          items={specs.watersports}
        />
      </div>
    </section>
  );
};

export default QuickSpecs;
