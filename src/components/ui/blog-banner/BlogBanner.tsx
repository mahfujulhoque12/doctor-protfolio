import React from "react";
import blog from "/public/blog/blog.jpg";
import Image from "next/image";
import MaxWidthWrapper from "../MaxWidthWrapper";

const BlogBanner = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={blog}
          alt="img"
          width={2000}
          height={600}
          className="w-full h-[350px] object-cover opacity-50"
        />
        <h1 className="absolute top-36 left-[45%] text-5xl font-bold text-black">
          Blogs
        </h1>
      </div>
      <div className="py-5">
        <MaxWidthWrapper>
          <p className="text-lg font-normal text-gray-600">
            {" "}
            You are here: <span className="text-[#52CBCB]">Home</span> / Blog
          </p>
        </MaxWidthWrapper>
      </div>
      <hr />
    </div>
  );
};

export default BlogBanner;
