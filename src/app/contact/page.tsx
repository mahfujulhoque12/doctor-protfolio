import ContactBanner from "@/components/ui/contact-banner/ContactBanner";
import Map from "@/components/ui/quick-contact/atom/Map";
import QuickContact from "@/components/ui/quick-contact/QuickContact";
import React from "react";

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
