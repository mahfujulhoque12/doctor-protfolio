import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import AdvantageCard from "./atom/AdvantageCard";
import Link from "next/link";

const Advantage = () => {
  return (
    <div className="bg-[#54CDCA]/10">
      <MaxWidthWrapper className="my-16">
        <div className="py-10">
          <h4 className="text-center font-bold text-lg uppercase text-[#54CDCA]">
            Advantages
          </h4>
          <h1 className="text-gray-800 text-3xl font-semibold text-center mt-5 capitalize">
            Good vision for many years
          </h1>

          <AdvantageCard />

          <div className="flex justify-center">
            <Link
              href="#"
              className="relative inline-block mt-8 items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
            >
              {/* Animated background layer - starts hidden */}
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
              {/* Content */}
              <span className="relative z-10 flex items-center gap-2">
                Book An Appointment
              </span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Advantage;
