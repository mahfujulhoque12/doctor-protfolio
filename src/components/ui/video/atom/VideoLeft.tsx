import Link from "next/link";
import React from "react";

const VideoLeft = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl md:text-4xl text-[#002345]">
        We have assembled a team of professionals and medical experts
      </h2>
      <p className="text-base font-medium text-gray-500 mt-4">
        More than 100 doctors work in our center for the benefit of patients.
        Caring nurses also provide attention and comfort. Teamwork is a hallmark
        of our medical centers, it is an advantage that helps us achieve
        excellent results in treatment. We combine experience and knowledge in
        different fields of medicine to find the right solutions and help
        patients even in the most difficult cases.
      </p>
      <Link
        href="#"
        className="relative inline-block mt-5 items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
      >
        {/* Animated background layer - starts hidden */}
        <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          Our Services
        </span>
      </Link>
    </div>
  );
};

export default VideoLeft;
