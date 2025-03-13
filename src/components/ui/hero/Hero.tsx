"use client";
import React from "react";

import doctor1 from "/public/hero/doctor1.jpg";
import doctor2 from "/public/hero/doctor2.jpg";
import doctor3 from "/public/hero/doctor3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  imageUrl: string | StaticImageData;
  title: string;
  description: string;
  action: string;
}

const slides: Slide[] = [
  {
    id: 1,
    imageUrl: doctor1,
    title: "Compassionate Care for a Healthier You",
    description:
      "Our dedicated team provides personalized medical solutions to support your journey to better health.",
    action: "Get Appoinment",
  },
  {
    id: 2,
    imageUrl: doctor2,
    title: "Your Trusted Partner in Wellness",
    description:
      "From routine checkups to specialized treatments, we’re here to guide you every step of the way.",
    action: "Get Appoinment",
  },
  {
    id: 3,
    imageUrl: doctor3,
    title: "Healing Lives, One Patient at a Time",
    description:
      "Experience top-tier healthcare tailored to your unique needs, delivered with warmth and understanding.",
    action: "Get Appoinment",
  },
];

const Hero: React.FC = () => {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="relative">
              <Image
                src={slide.imageUrl}
                alt="img"
                width={1800}
                height={800}
                className=" h-[450px] sm:max-h-[550px] opacity-50 object-cover w-full"
              />
              <div className="absolute top-[20%] sm:top-[40%] left-[10%] opacity-100">
                <h2 className="text-2xl sm:text-4xl font-bold text-start text-black w-full sm:max-w-[500px]">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg   text-black  font-semibold mt-2 sm:mt-4 max-w-[500px]">
                  {slide.description}
                </p>
                <Link
                  href="#"
                  className=" mt-5 relative flex w-[55%] sm:w-[34%] items-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white overflow-hidden group"
                >
                  {/* Animated background layer - starts hidden */}
                  <span className="absolute bottom-0 left-0 w-full h-0 bg-[#002345] transition-all duration-300 ease-in-out group-hover:h-full" />
                  {/* Content */}
                  <span className=" z-10 flex items-center gap-2">
                    Get Appointment
                  </span>
                </Link>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Hero;
