import AboutUs from "@/components/ui/about-us/AboutUs";
import Clinic from "@/components/ui/clinic/Clinic";
import Progress from "@/components/ui/progress/Progress";
import React from "react";

const page = () => {
  return (
    <div>
      <Clinic />
      <AboutUs />
      <Progress />
    </div>
  );
};

export default page;
