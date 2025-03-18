import AboutUs from "@/components/ui/about-us/AboutUs";
import Clinic from "@/components/ui/clinic/Clinic";
import Progress from "@/components/ui/progress/Progress";
import Team from "@/components/ui/team/Team";
import React from "react";
import { Metadata } from "next";


export const metadata:Metadata = {
  title: "About Us | Doctor",
  description: "Discover our team, services, and history at Doctor's Best Clinic."
}
const page = () => {
  return (
    <div>
      <Clinic />
      <AboutUs />
      <Progress />
      <Team />
    </div>
  );
};

export default page;
