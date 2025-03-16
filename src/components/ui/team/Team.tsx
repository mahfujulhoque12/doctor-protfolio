import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import TeamMembers from "./atom/TeamMembers";

const Team = () => {
  return (
    <MaxWidthWrapper className="my-16">
      <div>
        <h4 className="text-lg font-semibold text-gray-600  uppercase text-center">
          Meet my team
        </h4>
        <h2 className="text-center text-3xl font-bold my-6">
          My Professional Team
        </h2>
        <TeamMembers />
      </div>
    </MaxWidthWrapper>
  );
};

export default Team;
