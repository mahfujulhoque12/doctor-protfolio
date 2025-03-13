"use client";
import React, { useEffect } from "react";
import img from "/public/appointment/img.png";
import Image from "next/image";
import { useForm } from "react-hook-form";

const AppointmentRight = () => {
  type Inputs = {
    email: string;
    name: string;
    date: string;
  };
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="bg-white px-5 sm:px-16 lg:px-24 py-10 shadow-lg  border border-gray-200">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#52CBCB]">
        Book Your Appointment
      </h2>
      <p className="w-full h-[1px] bg-gray-200 mt-4"></p>

      <div className="flex flex-col xl:flex-row gap-5 mt-5">
        <div>
          <Image
            src={img}
            alt="img"
            width={350}
            height={350}
            className="w-[250px] h-[200px] flex mx-auto"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="inter your email address*"
                className="bg-white px-6 py-4 rounded-md shadow-sm"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs font-semibold text-red-500  mt-2">
                  Email field is required
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="inter your name*"
                className="bg-white px-6 py-4 rounded-md shadow-sm"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs font-semibold text-red-500 mt-2">
                  Name is required
                </span>
              )}
            </div>
            <div>
              <input
                type="date"
                className="bg-white px-6 py-4 rounded-md shadow-sm w-full"
                {...register("date", { required: true })}
              />
              {errors.date && (
                <span className="text-xs font-semibold text-red-500 mt-2">
                  Date is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="mt-3 flex items-center justify-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white cursor-pointer"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentRight;
