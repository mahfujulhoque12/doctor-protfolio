import React from "react";
import VideoLeft from "./atom/VideoLeft";
import VideoRight from "./atom/VideoRight";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Video = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 my-16 gap-5">
        <div>
          <VideoLeft />
        </div>
        <div>
          <VideoRight />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Video;
