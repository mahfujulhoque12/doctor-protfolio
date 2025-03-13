import React from "react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Link from "next/link";
import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const BottomFooter = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row justify-between">
        <p className="text-base font-semibold text-black">
          &copy; 2025 All right reserved
        </p>
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="text-[#52CBCB] hover:text-[#01578C] transition-all duration-200"
          >
            <FaSquareFacebook size={25} />
          </Link>
          <Link
            href="#"
            className="text-[#52CBCB] hover:text-[#01578C] transition-all duration-200"
          >
            <FaSquareTwitter size={25} />
          </Link>
          <Link
            href="#"
            className="text-[#52CBCB] hover:text-[#01578C] transition-all duration-200"
          >
            <FaSquareYoutube size={25} />
          </Link>
          <Link
            href="#"
            className="text-[#52CBCB] hover:text-[#01578C] transition-all duration-200"
          >
            <FaInstagramSquare size={25} />
          </Link>
          <Link
            href="#"
            className="text-[#52CBCB] hover:text-[#01578C] transition-all duration-200"
          >
            <FaLinkedin size={25} />
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default BottomFooter;
