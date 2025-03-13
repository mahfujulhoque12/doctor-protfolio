import React from "react";
import contact from "/public/contact/contact.jpg";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";
const ContactBanner = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={contact}
          alt="img"
          width={2000}
          height={600}
          className="w-full h-[350px] object-cover opacity-50"
        />
        <h1 className="absolute top-36 left-[20%] sm:left-[28%]  md:left-[45%] text-4xl md:text-5xl font-bold text-black">
          Contact Us
        </h1>
      </div>
      <div className="py-5">
        <MaxWidthWrapper>
          <p className="text-lg font-normal text-gray-600">
            {" "}
            You are here: <span className="text-[#52CBCB]">Home</span> / Contact
            us
          </p>
        </MaxWidthWrapper>
      </div>
      <hr />
    </div>
  );
};

export default ContactBanner;
