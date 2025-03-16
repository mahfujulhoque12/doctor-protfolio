import React from "react";

import team1 from "/public/team/team1.jpg";
import team2 from "/public/team/team2.jpg";
import team3 from "/public/team/team3.jpg";
import team4 from "/public/team/team4.jpg";
import Image from "next/image";
import Link from "next/link";
import { TbArrowRightDashed } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io5";

const datas = [
  { id: 1, name: "Jon Doy", image: team1, title: "Sergent Speasalist" },
  { id: 2, name: "Jon carry", image: team2, title: "Child Speasalist" },
  { id: 3, name: "Alex hels", image: team3, title: "Old Speasalist" },
  { id: 4, name: " json roy", image: team4, title: "Women Speasalist" },
];

const TeamMembers = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
      {datas.map((data) => (
        <div
          className="border rounded-lg shadow-md transition-all duration-300 hover:shadow-lg cursor-pointer group relative"
          key={data.id}
        >
          <div className="relative">
            <Image
              src={data.image}
              alt="team"
              width={500}
              height={400}
              className="w-full h-[300px] rounded-t-lg object-cover transition-opacity duration-300 group-hover:opacity-30"
            />
            {/* Black background overlay for the image only */}
            <div className="absolute inset-x-0 top-0 h-[300px] bg-[#4DCEC6] opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-t-lg"></div>
            {/* Text that appears on hover */}
            <div className="absolute inset-x-0 top-0 h-[300px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center gap-4">
                <Link href="">
                  <FaFacebook className="text-[#01578C]" size={40} />
                </Link>
                <Link href="">
                  <BsTwitterX className="text-[#01578C]" size={40} />
                </Link>
                <Link href="">
                  <IoLogoLinkedin className="text-[#01578C]" size={40} />
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-white w-full rounded-b-lg">
            <h2 className="px-5 text-2xl pt-5 font-semibold text-gray-800">
              {data.name}
            </h2>
            <h2 className="px-5 text-lg pt-1 font-semibold text-gray-600">
              {data.title}
            </h2>
            <div className="px-5 py-7 flex items-center justify-between">
              <p className="text-base font-semibold text-gray-500">
                Open Profile
              </p>
              <Link href="#">
                <TbArrowRightDashed size={30} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
