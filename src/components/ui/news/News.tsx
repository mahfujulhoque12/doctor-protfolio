import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel";
import Image, { StaticImageData } from "next/image";
interface Slide {
  id: number;
  imageUrl: string | StaticImageData;

  description: string;
  title: string;
}
import news1 from "/public/news/news1.jpg";
import news2 from "/public/news/news2.jpg";

import news3 from "/public/news/news3.jpg";
import news4 from "/public/news/news4.jpg";

const News = () => {
  const slides: Slide[] = [
    {
      id: 1,
      imageUrl: news1,

      title: "Revaccination against coronavirus will help to stay healthy",
      description:
        "Pathophysiological consequences of sleep breathing disorders caused by day-night mode and circadian biorhythm collectively affect the electrophysiology of the heart, creating an ideal environment for arrhythmogenic predisposition..",
    },
    {
      id: 2,
      imageUrl: news2,
      title: "Prevention of colds with vitamins from natural products",

      description:
        "Pathophysiological consequences of sleep breathing disorders caused by day-night mode and circadian biorhythm collectively affect the electrophysiology of the heart, creating an ideal environment for arrhythmogenic predisposition..",
    },
    {
      id: 3,
      imageUrl: news3,
      title:
        "Breathing disorders in sleep led to the development of heart arrhythmias",

      description:
        "Pathophysiological consequences of sleep breathing disorders caused by day-night mode and circadian biorhythm collectively affect the electrophysiology of the heart, creating an ideal environment for arrhythmogenic predisposition.",
    },
    {
      id: 4,
      imageUrl: news4,
      title:
        "Breathing disorders in sleep led to the development of heart arrhythmias",

      description:
        "Pathophysiological consequences of sleep breathing disorders caused by day-night mode and circadian biorhythm collectively affect the electrophysiology of the heart, creating an ideal environment for arrhythmogenic predisposition.",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="my-16">
        <h1 className="font-bold text-4xl text-[#002345] text-center">
          Our News
        </h1>
        <Carousel className="mt-8">
          <CarouselContent>
            {slides.map((slide) => (
              <CarouselItem
                className="basis-full sm:basis-1/2 lg:basis-1/3 flex flex-start bg-white"
                key={slide.id}
              >
                <div className="rounded-md  border border-gray-200 group shadow-md">
                  <div className="relative">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.title}
                      width={1500}
                      height={1500}
                      className="w-full h-[300px] rounded-t-md object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="  px-5 p-8">
                    <h2 className="text-2xl font-semibold text-black group-hover:text-[#52CBCB] transition-all duration-300">
                      {slide.title}
                    </h2>
                    <p className="text-base text-gray-500 mt-3">
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

export default News;
