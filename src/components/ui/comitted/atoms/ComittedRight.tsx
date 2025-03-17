import Link from "next/link";
import React from "react";

const ComittedRight = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#002345] max-w-[500px]">
        Committed To Dental Excellence
      </h1>
      <p className="h-[1px] w-[150px] bg-[#52CBCB] my-8"></p>

      <p className="text-gray-500 text-base font-normal max-w-[500px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <p className="text-gray-500 text-base font-normal mt-3 max-w-[500px]">
        Urna habitasse imperdiet! Aut, deleniti nisl, varius? Nunc, iure iure
        nunc sit mi ducimus atque nostrum iure ducimus quae dolore. Massa sapien
        at do ipsum nostra adipisicing.
      </p>
      <Link
        href="#"
        className="relative inline-block mt-5 items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
      >
        {/* Animated background layer - starts hidden */}
        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          Get Appointment
        </span>
      </Link>
    </div>
  );
};

export default ComittedRight;
