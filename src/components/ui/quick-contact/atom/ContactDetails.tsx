import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const ContactDetails = () => {
  return (
    <div className="border shadow-md p-10">
      <h3 className="text-2xl font-bold text-[#52CBCB] text-center">
        Contact Details
      </h3>
      <p className="max-w-[300px] text-gray-500 text-base font-normal mt-7 flex items-start gap-5">
        <FaLocationArrow size={30} className="text-[#52CBCB] mt-0.5" />
        Address: 121, Park Drive, Varick Str, New York, NY 10012, USA
      </p>
      <p className="max-w-[300px] text-gray-500 text-base font-normal mt-5 flex items-start gap-5">
        <FaSquarePhone size={30} className="text-[#52CBCB] mt-0.5" />
        Phone: (123) 0200 12345 & 1800-45-678-9012
      </p>
      <p className="max-w-[300px] text-gray-500 text-base font-normal mt-5 flex items-start gap-5">
        <IoMailSharp size={30} className="text-[#52CBCB] mt-0.5" />
        Mailus@austincoach.com support@austincoach.com
      </p>
    </div>
  );
};

export default ContactDetails;
