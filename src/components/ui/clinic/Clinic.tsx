import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import ClinicLeft from "./atom/ClinicLeft";
import ClinicRight from "./atom/ClinicRight";

const Clinic = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="flex flex-col lg:flex-row gap-5 my-16 rounded-md shadow-md p-5 md:p-20">
          <div className="basis-full lg:basis-[60%]">
            <ClinicLeft />
          </div>

          <div className="basis-full lg:basis-[40%]">
            <ClinicRight />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Clinic;
