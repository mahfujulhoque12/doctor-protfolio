import React from "react";
import clinic from "/public/clinic/clinic.jpg";
import Image from "next/image";

const ClinicRight = () => {
  return (
    <div>
      <Image
        src={clinic}
        alt="img"
        width={500}
        height={400}
        className="w-full lg:w-[400px] mt-20 rounded-ss-lg"
      />
      <div className="bg-[#52CBCB] p-5 w-full lg:w-[400px]">
        <h4 className="text-white text-xl font-bold">
          Patient & Visitor Guide{" "}
        </h4>
        <p className="text-gray-100 text-sm font-semibold mt-1">
          Plan your visit to our Clinic
        </p>
      </div>
    </div>
  );
};

export default ClinicRight;
