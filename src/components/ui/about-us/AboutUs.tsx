import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import AboutLeft from "./atom/AboutLeft";
import Image from "next/image";
import about from "/public/about-us/about.jpg";
const AboutUs = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="my-16 bg-white p-5 md:p-20 rounded-md shadow-md grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <AboutLeft />
          </div>
          <div>
            <Image
              src={about}
              alt="img"
              width={1000}
              height={500}
              className="rounded-md min-h-[400px]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutUs;
