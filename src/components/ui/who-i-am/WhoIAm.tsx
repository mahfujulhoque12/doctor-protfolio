"use client";
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import who from "/public/who/who.jpg";
import Image from "next/image";
import Link from "next/link";

const WhoIAm = () => {
  return (
    <MaxWidthWrapper className="my-16">
      <div className="bg-white p-6 rounded-md shadow-md  ">
        <div className="flex flex-col md:flex-row gap-8 w-full md:w-[80%] mx-auto ">
          <div className="basis-full md:basis-[30%]">
            <Image
              src={who}
              alt="who"
              width={600}
              height={300}
              className="w-full h-[400px] "
            />
          </div>
          <div className="basis-full md:basis-[70%]  md:mt-8">
            <h1 className="text-3xl font-bold italic text-gray-800">
              Hello , I am Dr. ABCED Josn Dueh.{" "}
            </h1>
            <h3 className="my-3 text-gray-700 font-semibold text-2xl">
              MBBS(DMC), FCPS(UK), FRCS(Oxfoard)
            </h3>
            <p className="mt-2 text-base font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit quas quibusdam eum quia mollitia. Id doloribus
              asperiores impedit laborum quisquam voluptas, aliquid delectus
              beatae sapiente ea quam, suscipit doloremque adipisci? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Reprehenderit quas
              quibusdam eum quia mollitia. Id doloribus asperiores impedit
              laborum quisquam voluptas, aliquid delectus beatae sapiente ea
              quam, suscipit doloremque adipisci?
            </p>
            <p className="mt-4 text-base font-normal text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit quas quibusdam eum quia mollitia. Id doloribus
              asperiores impedit laborum quisquam voluptas, aliquid delectus
            </p>
            <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-6">
              <Link
                href="#"
                className="relative inline-block mt-5 items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
              >
                {/* Animated background layer - starts hidden */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  Let&apos;s Talk
                </span>
              </Link>

              <Link
                href="/test.pdf"
                download
                className="relative inline-block mt-5 items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
              >
                {/* Animated background layer - starts hidden */}
                <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
                {/* Content */}
                <span className="relative z-10 flex items-center gap-2">
                  Download My CV
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default WhoIAm;
