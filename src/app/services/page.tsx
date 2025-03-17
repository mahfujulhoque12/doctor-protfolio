import Advantage from "@/components/ui/advantage/Advantage";
import Appointment from "@/components/ui/appointment/Appointment";
import Discount from "@/components/ui/discount/Discount";
import Services from "@/components/ui/services/Services";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Services | Doctor",
  description:
    "Welcome to our doctor's office, offering high-quality care and support.",
};
const page = () => {
  return (
    <div>
      <Services />
      <Appointment />
      <Advantage />
      <Discount />
    </div>
  );
};

export default page;
