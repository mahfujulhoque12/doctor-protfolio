import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const CallToAction = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center flex-col lg:flex-row gap-5 py-16 px-5 md:px-8 lg:px-28 bg-[#01578C] my-16 rounded-md shadow-md w-full md:w-[90%] mx-auto">
        <div className="w-full">
          <h2 className="font-bold text-2xl sm:text-3xl text-white">
            Call Us Today for FREE Consultations
          </h2>
          <p className="text-base font-medium text-white mt-1.5">
            Urna habitasse imperdiet! Aut, deleniti nisl varius nunc iure iure
            nunc sit.
          </p>
        </div>
        <div className="flex  justify-start lg:justify-end w-full">
          <p className="relative flex items-center gap-2 text-base font-semibold bg-[#52CBCB] px-10 py-3 text-white overflow-hidden group rounded-lg">
            {/* Animated background layer - starts hidden */}
            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              Call: 012588742536
            </span>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CallToAction;
