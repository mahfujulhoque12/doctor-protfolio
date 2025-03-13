import React from "react";
import { Progress } from "@/components/ui/progress";

const ProgressRight = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-800">
        What to do if your head or neck hurts too often?
      </h3>
      <p className="text-base font-normal text-gray-500 mt-4 max-w-[700px]">
        &ldquo;Leverage agile frameworks to provide a robust synopsis for high
        level overviews. Iterative approaches to corporate strategy foster
        collaborative&ldquo;
      </p>

      <p className="text-base font-normal text-gray-500 mt-7 max-w-[700px]">
        If a headache has become a fairly common occurrence in your life, you
        feel discomfort in the occipital or temporal region, then you can
        undergo a preventive examination under the “If your head hurts often”
        program, which will help determine the source of the headache and choose
        an individual treatment that will eliminate the problem and restore your
        good health.
      </p>

      <div className="mt-8">
        {/* Shows only value over the bar */}
        <Progress
          value={80}
          color="bg-[#55C9C9]"
          className="h-5"
          textColor="text-white"
          text="Heart Checkup"
        />

        {/* Shows value over the bar and percentage below */}
        <Progress
          value={93}
          color="bg-[#55C9C9]"
          textColor="text-white"
          className="mt-5 h-5"
          text="Dental Services"
        />

        {/* Shows only value over the bar */}
        <Progress
          value={75}
          color="bg-[#55C9C9]"
          className="mt-5 h-5"
          textColor="text-white"
          text="Brain Checkup"
        />

        {/* Shows only value over the bar with custom text color */}
        <Progress
          value={70}
          color="bg-[#55C9C9]"
          textColor="text-white"
          className="mt-5 h-5"
          text="Body Checkup"
        />
      </div>
    </div>
  );
};

export default ProgressRight;
