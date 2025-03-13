import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

import man1 from "/public/review/man1.jpg";
import man2 from "/public/review/man2.jpg";

interface Slide {
  id: number;
  imageUrl: string | StaticImageData;
  name: string;
  description: string;
  title: string;
}

const Review = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: man1,
      name: "Alex Carry",
      title: "Heart Pasaint",
      description:
        "Our dedicated team provides personalized medical solutions to support your journey to better health.",
    },
    {
      id: 2,
      imageUrl: man2,
      title: "Heart Pasaint",

      name: "Joss Smith",
      description:
        "From routine checkups to specialized treatments, we’re here to guide you every step of the way.",
    },
    {
      id: 3,
      imageUrl: man1,
      title: "Heart Pasaint",

      name: "Kane Williams",
      description:
        "Experience top-tier healthcare tailored to your unique needs, delivered with warmth and understanding.",
    },
  ];
  return (
    <MaxWidthWrapper>
      <div className="my-16">
        <h1 className="font-bold text-4xl text-[#002345] text-center">
          Pasaint Feedback
        </h1>
        <Carousel className="mt-8">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem className="basis-full lg:basis-1/2" key={slide.id}>
                <div className="flex flex-col md:flex-row gap-5 items-center bg-white p-8 rounded-md shadow-md hover:shadow-lg border border-gray-200 transition-all duration-300">
                  <div>
                    <Image
                      src={slide.imageUrl}
                      width={150}
                      height={150}
                      alt="img"
                      className=" w-[150px] h-[150px] rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-[#52CBCB]">
                      {slide.name}
                    </h2>
                    <p className="text-base font-semibold text-gray-600 mt-2">
                      {slide.title}
                    </p>
                    <p className="text-base font-normal text-gray-500 mt-2 max-w-[400px]">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </MaxWidthWrapper>
  );
};

export default Review;
