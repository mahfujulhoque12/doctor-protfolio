import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import progess from "/public/progress/progress.jpg";
import Image from "next/image";
import ProgressRight from "./atom/ProgressRight";

const Progress = () => {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-md p-5 lg:p-20 rounded-lg">
          <div>
            <Image
              src={progess}
              width={800}
              height={500}
              alt="img"
              className="object-cover w-full rounded-md"
            />
          </div>
          <div>
            <ProgressRight />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Progress;
