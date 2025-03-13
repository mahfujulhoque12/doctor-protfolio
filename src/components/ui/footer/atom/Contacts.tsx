import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { MdSmartphone } from "react-icons/md";

const Contacts = () => {
  return (
    <div>
      <h2 className="mt-5 text-2xl font-bold text-white">Contacts</h2>
      <div className="mt-12">
        <p className="text-gray-200 text-base font-normal flex  gap-2">
          <MdSmartphone className="mt-1 text-[#52CBCB]" size={20} />{" "}
          021584520552
        </p>
        <p className="text-gray-200 text-base font-normal flex  gap-2 mt-2">
          <MdSmartphone className="mt-1 text-[#52CBCB]" size={20} />{" "}
          021584520552
        </p>
        <p className="text-gray-200 text-base font-normal flex  gap-2 mt-2">
          <IoMailOutline className="mt-1 text-[#52CBCB]" size={20} />{" "}
          doctor@gamil.com
        </p>
      </div>
    </div>
  );
};

export default Contacts;
