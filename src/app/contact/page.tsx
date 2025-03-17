import ContactBanner from "@/components/ui/contact-banner/ContactBanner";
import Map from "@/components/ui/quick-contact/atom/Map";
import QuickContact from "@/components/ui/quick-contact/QuickContact";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Doctor",
  description:
    "Contact us for more information about our doctor's appointment.",
  keywords: ["doctor", "appointment", "contact"],
};
const page = () => {
  return (
    <div>
      <ContactBanner />
      <QuickContact />
      <Map />
    </div>
  );
};

export default page;
