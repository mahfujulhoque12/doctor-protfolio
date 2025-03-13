import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import AppointmentLeft from "./atom/AppointmentLeft";
import AppointmentRight from "./atom/AppointmentRight";

const Appointment = () => {
  return (
    <MaxWidthWrapper>
      <div className=" flex flex-col lg:flex-row gap-5  w-[90%] mx-auto my-16">
        <div className="z-20 mt-10">
          <AppointmentLeft />
        </div>
        <div className="  ">
          <AppointmentRight />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Appointment;
