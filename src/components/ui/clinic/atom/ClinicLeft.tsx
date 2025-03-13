import Link from "next/link";
import React from "react";

const ClinicLeft = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800">
        Welcome to Medicus Clinic
      </h2>
      <p className="text-base font-normal text-gray-500 mt-3">
        We&lsquo; ve built a long standing relationship based on trust
      </p>
      <p className="text-base font-normal text-gray-500 mt-5">
        Personalized patient care is what sets Medicus Medical Center apart.
        When you visit one of our four San Francisco campus locations you can
        expect to receive world class care. Expert physician specialists and
        caring clinical staff provide you with an exceptional health care
        experience. Personalized patient care is what sets Medicus Medical
        Center apart.
      </p>
      <div className="flex flex-col xl:flex-row items-center gap-4  mt-8">
        <h4 className="text-gray-800 text-2xl font-semibold w-[500px] xl:w-[600px]">
          MODERN MEDICAL FACILITIES
        </h4>
        <div className="w-full">
          <div className="h-[1px] w-full bg-[#55C9C9] mt-1"></div>
        </div>
      </div>
      <p className="text-base font-normal text-gray-500 mt-8">
        Personalized patient care is what sets Medicus Medical Center apart.
        When you visit one of our four San Francisco campus locations you can
        expect to receive world class care. Expert physician specialists and
        caring clinical staff provide you with an exceptional health care
        experience.
      </p>
      <Link
        href="#"
        className="relative inline-block mt-8 items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
      >
        {/* Animated background layer - starts hidden */}
        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          Learn More
        </span>
      </Link>
    </div>
  );
};

export default ClinicLeft;
