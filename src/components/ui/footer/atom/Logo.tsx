import Image from "next/image";
import React from "react";
import logo from "/public/header/logo.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="mt-5">
        <Image
          src={logo}
          width={400}
          height={200}
          alt="img"
          className="w-[200px]"
        />
      </div>
      <div className="mt-10">
        <p className="text-gray-200 text-base font-normal">
          North Fifth Avenue
        </p>
        <p className="text-gray-200 text-base font-normal mt-1">
          {" "}
          Boni New York 10018
        </p>
      </div>
    </Link>
  );
};

export default Logo;
