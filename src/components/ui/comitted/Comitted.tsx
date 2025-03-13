import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import CommitedLeft from "./atoms/CommitedLeft";
import ComittedRight from "./atoms/ComittedRight";

const Comitted = () => {
  return (
    <MaxWidthWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-8 mt-16 mb-10">
        <div>
          <CommitedLeft />
        </div>
        <div>
          <ComittedRight />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Comitted;
