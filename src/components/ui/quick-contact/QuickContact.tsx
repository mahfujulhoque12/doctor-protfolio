import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import QuickContactLeft from "./atom/QuickContactLeft";
import ContactDetails from "./atom/ContactDetails";

const QuickContact = () => {
  return (
    <div className="my-16 ">
      <MaxWidthWrapper>
        <h2 className="italic font-semibold text-2xl text-[#52CBCB] text-center">
          Quick Contact
        </h2>
        <h1 className="text-4xl text-black font-bold text-center mt-2">
          Get Touch With Us
        </h1>

        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <div className="basis-full md:basis-[70%]">
            <QuickContactLeft />
          </div>
          <div className="basis-full md:basis-[30%]">
            <ContactDetails />
          </div>
        </div>
        
      </MaxWidthWrapper>
    </div>
  );
};

export default QuickContact;
