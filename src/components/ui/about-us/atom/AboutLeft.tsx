import React from "react";
import pic1 from "/public/about-us/about1.png";
import pic2 from "/public/about-us/about2.png";
import pic3 from "/public/about-us/about3.png";
import Image from "next/image";

const AboutLeft = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Image src={pic1} alt="img" width={120} height={120} />
        <div>
          <h4 className="text-xl font-semibold text-gray-700">
            Online Booking{" "}
          </h4>
          <p className="text-base font-normal text-gray-500 mt-4 max-w-[500px]">
            We offer a wide range of paid medical services and consultations, as
            well as high quality service. Order a specialist or services.
            Teamwork is a hallmark of our medical centers, it is an advantage.{" "}
          </p>
        </div>
      </div>
      <div className="flex items-center flex-col sm:flex-row gap-4 mt-12">
        <Image src={pic2} alt="img" width={120} height={120} />
        <div>
          <h4 className="text-xl font-semibold text-gray-700">
            Medical Protection
          </h4>
          <p className="text-base font-normal text-gray-500 mt-4 max-w-[500px]">
            During the COVID-19 pandemic, we do our best to ensure your safety
            when visiting Nordis medical center. We combine experience and
            knowledge in different fields of medicine to find the right.
          </p>
        </div>
      </div>

      <div className="flex items-center flex-col sm:flex-row gap-4 mt-12">
        <Image src={pic3} alt="img" width={120} height={120} />
        <div>
          <h4 className="text-xl font-semibold text-gray-700">
            Own Laboratory
          </h4>
          <p className="text-base font-normal text-gray-500 mt-4 max-w-[500px]">
            We invite everyone who takes care of their health to undergo a
            comprehensive examination of the body at affordable prices. More
            than 100 doctors work in our center for the benefit of patients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutLeft;
