import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import services from "/public/services/services2.jpg";
import Image from "next/image";
import Link from "next/link";

const Discount = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full">
            <Image
              src={services}
              alt="service"
              width={1000}
              height={500}
              className="rounded-lg min-h-[400px]"
            />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-600">
              Free Consultation
            </h4>
            <h1 className="text-4xl font-bold text-[#002345]  mt-8  max-w-[600px]">
              Get a special 50% new patient discount and unleash your health.
            </h1>
            <p className="text-base font-normal text-gray-500 mt-5 max-w-[500px]  ">
              Get a special 50% new patient discount and unleash your health
              today! Take the first step towards a healthier, happier you with
              our comprehensive services. Get a special 50% new patient discount
              and unleash your health today! Take the first step towards a
              healthier, happier you with our comprehensive services.
            </p>
            <Link
              href="#"
              className="relative inline-block mt-8 items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
            >
              {/* Animated background layer - starts hidden */}
              <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
              {/* Content */}
              <span className="relative z-10 flex items-center gap-2">
                Learn More
              </span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Discount;
