import Appointment from "@/components/ui/appointment/Appointment";
import Discount from "@/components/ui/discount/Discount";
import Services from "@/components/ui/services/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Services />
      <Appointment />
      <Discount />
    </div>
  );
};

export default page;
