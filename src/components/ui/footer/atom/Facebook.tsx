import React from "react";
import Image from "next/image";
import pic1 from "/public/footer/pic1.jpg";
import pic2 from "/public/footer/pic2.jpg";
import pic3 from "/public/footer/pic3.jpg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";

const images = [pic1, pic2, pic3, pic1, pic2, pic3];

const Facebook = () => {
  return (
    <div>
      <h2 className="mt-5 text-2xl font-bold text-white">Facebook</h2>
      <div className="mt-10">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
                className="object-cover w-full h-auto"
              />
            </div>
          ))}
        </div>

        {/* Follow us link as a separate element below the grid */}
        <div className="mt-4">
          <Link
            href="#"
            className="relative flex items-center justify-center gap-2 text-base font-semibold bg-[#52CBCB] px-10 py-3 text-white overflow-hidden group rounded-lg w-full"
          >
            {/* Animated background layer */}
            <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2"><FaFacebookF /> Follow us on Facebook</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Facebook;
