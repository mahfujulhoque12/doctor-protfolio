import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <h2 className="mt-5 text-2xl font-bold text-white">Services</h2>
      <div className="mt-12">
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} />{" "}
          Consultaion
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Heart
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Dental
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Child
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Pragnency
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Old
          People
        </Link>
      </div>
    </div>
  );
};

export default Services;
