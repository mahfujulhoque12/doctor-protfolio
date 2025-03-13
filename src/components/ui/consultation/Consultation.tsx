import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import consulation from "/public/consultation/consultation.png";
import Image from "next/image";
import Faq from "./atom/Faq";

const Consultation = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-16 bg-white rounded-md shadow-md p-5 md:p-10">
        <div>
          <Image
            src={consulation}
            width={600}
            height={500}
            alt="img"
            className="object-cover w-full "
          />
        </div>
        <div>
          <Faq />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Consultation;
