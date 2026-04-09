import React from "react";

const QuickSpecs = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-0">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start">
        {/* Column 1 */}
        <div className="flex flex-col">
          <div className="border-b border-gray-200 pb-3 mb-6">
            <h3 className="text-[#01747C] text-[18px] md:text-[22px] font-medium tracking-wide uppercase">
              01. Accommodation
            </h3>
          </div>
          <div className="flex flex-col  text-sm md:text-base text-[#112F4E] leading-relaxed font-light">
            <p>Number of guests: 10</p>
            <p>Number of cabins: 5</p>
            <p>
              Cabin configuration: 4 Double <br /> Cabins, 1 Twin Cabins
            </p>
            <p>
              Bed configuration: 1 King Bed, <br /> 3 Queen Beds, 2 Single Beds
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col">
          <div className="border-b border-gray-200 pb-3 mb-6">
            <h3 className="text-[#01747C] text-[18px] md:text-[22px] font-medium tracking-wide uppercase">
              02. Equipment
            </h3>
          </div>
          <div className="text-sm md:text-base text-[#112F4E] leading-relaxed font-light">
            <p>
              Engines 2 x Man V12-1900HP <br /> (new 2023) 2 single-phase <br />
              generator-27kW / 230V <br /> AC - 50Hz for EU system 29kW / <br />
              60Hz for USA system Range is <br /> 1,000nm at 10kts
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col">
          <div className="border-b border-gray-200 pb-3 mb-6">
            <h3 className="text-[#01747C] text-[18px] md:text-[22px] font-medium tracking-wide uppercase">
              03. Watersports
            </h3>
          </div>
          <div className="text-sm md:text-base text-[#112F4E] leading-relaxed font-light">
            <p>
              Tender + Toys 14' Williams tender 2 <br />
              Seabobs upgraded with quick <br />
              chargers and fixed selfie camera <br /> Wakeboard Fishing Rods 2 x
              SUPs <br />
              (Inflatable) Snorkel Gear <br /> Beach chairs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickSpecs;
