import React from "react";
import pic1 from "/public/comitted/commited.jpg";
import pic2 from "/public/comitted/girl.jpg";
import Image from "next/image";

const CommitedLeft = () => {
  return (
    <div className="relative mb-10">
      <Image
        src={pic1}
        alt="img"
        width={500}
        height={800}
        className="w-[500px] h-[600px] object-cover rounded-lg  opacity-80"
      />
      <div className="absolute  sm:right-[15%] top-[35%] rounded-lg  border-8 border-[#52CBCB]">
        <Image
          src={pic2}
          alt="img"
          width={500}
          height={800}
          className="w-[400px] h-[450px] object-cover"
        />
      </div>
    </div>
  );
};

export default CommitedLeft;
