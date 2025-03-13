import React from "react";
import map from "/public/contact/map.jpg";
import Image from "next/image";

const Map = () => {
  return (
    <div className="mt-16">
      <Image
        src={map}
        alt="map"
        width={4000}
        height={900}
        className="w-full h-[800px]"
      />
    </div>
  );
};

export default Map;
