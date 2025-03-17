import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import services from "/public/services/services.jpg";
import Image from "next/image";

const Services = () => {
  return (
    <div className="my-16">
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row items-center border shadow-md rounded-lg">
          <Image
            src={services}
            alt="services"
            width={1000}
            height={600}
            className="rounded-l-lg h-[500px] object-cover w-full"
          />
          <div className="bg-white rounded-r-lg min-h-[500px] p-10 w-full">
            <h2 className="text-4xl font-bold text-[#002345] text-center mt-8 ">
              Our Services
            </h2>
            <p className="bg-[#55C9C9] w-[45%] h-[1px] mt-2 flex mx-auto"></p>
            <p className="text-base font-normal text-gray-500 mt-5 max-w-[600px]  flex mx-auto">
              World-class rehabilitation solutions and individualized recovery
              plans, from acute care to ongoing outpatient treatment and beyond.
              World-class rehabilitation solutions and individualized recovery
              plans, from acute care to ongoing outpatient treatment and
              beyond.World-class rehabilitation solutions and individualized
              recovery plans, from acute care to ongoing outpatient treatment
            </p>

            <p className="text-base font-normal text-gray-500 mt-5 max-w-[600px]  flex mx-auto">
              World-class rehabilitation solutions and individualized recovery
              plans, from acute care to ongoing outpatient treatment and beyond.
              World-class rehabilitation solutions and individualized recovery
              plans, from acute care to ongoing outpatient treatment and
              beyond.World-class rehabilitation solutions and individualized
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Services;
