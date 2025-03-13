import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Pages = () => {
  return (
    <div>
      <h2 className="mt-5 text-2xl font-bold text-white">Pages</h2>
      <div className="mt-12">
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Home
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> About us
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Contact
          Us
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Services
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} /> Booking
        </Link>
        <Link
          href="#"
          className="text-gray-200 text-base font-normal flex items-center  gap-2 mt-2"
        >
          <FaChevronRight className="mt-1 text-[#52CBCB]" size={15} />{" "}
          Consultation
        </Link>
      </div>
    </div>
  );
};

export default Pages;
