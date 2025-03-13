import React from "react";
import MaxWidthWrapper from "../../MaxWidthWrapper";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BiSolidLocationPlus } from "react-icons/bi";

const HeaderTop = () => {
  return (
    <div className= "bg-white">
      <MaxWidthWrapper>
        <div className="py-4 flex items-center flex-col lg:flex-row justify-between bg-white">
          <div className=" flex flex-col xl:flex-row items-center  gap-2">
            <Link
              href="#"
              className="text-base font-semibold text-[#002345] flex gap-2  uppercase"
            >
              Book Online
              <FaLongArrowAltRight className="text-[#52CBCB] mt-1" size={20} />
            </Link>
            <p className="text-base font-medium text-[#002345]">
              You can request appointment (pending confirmation) in 24 hours
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <p className="text-base font-medium text-[#002345] flex items-center gap-2">
              <IoMailOutline className="text-[#52CBCB] mt-1" size={18} />
              doctordis@gmail.com
            </p>
            <p className="h-[18px] w-[1px] bg-gray-200"></p>
            <p className="text-base font-medium text-[#002345] flex items-center gap-2">
              <BiSolidLocationPlus className="text-[#52CBCB] mt-1" size={20} />
              Banasree, Dhaka-1212, Bangladesh
            </p>
          </div>
        </div>
        <p className="w-full h-[1px] bg-gray-200"></p>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeaderTop;
