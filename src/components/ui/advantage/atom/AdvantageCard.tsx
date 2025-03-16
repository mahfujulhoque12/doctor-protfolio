import React from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";

const datas = [
  {
    id: 1,
    title: "High-quality services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "Individual treatment program",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Equipment with international standards",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "High-quality treatment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const AdvantageCard = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {datas.map((data) => (
        <div className="shadow-md rounded-md p-5" key={data.id}>
          <p className="flex items-center justify-center text-center">
            <IoMdCheckmarkCircle size={40} className="text-[#01578C]" />
          </p>
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">
            {data.title}
          </h3>
          <p className="text-base font-medium text-gray-600 mt-2 text-center">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AdvantageCard;
