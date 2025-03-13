"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const QuickContactLeft = () => {
  type Inputs = {
    email: string;
    name: string;
    phone: string;
    resone: string;
    message: string;
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
    <div className="px-5  ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          {/* frist start */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="Name*"
                className="bg-white px-6 py-4 rounded-md shadow-sm"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs font-semibold text-red-500 mt-2">
                  Name is required
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <input
                type="email"
                placeholder="Email*"
                className="bg-white px-6 py-4 rounded-md shadow-sm"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs font-semibold text-red-500  mt-2">
                  Email field is required
                </span>
              )}
            </div>
          </div>
          {/* frist end */}
          {/* sec start */}
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="+01225546"
                className="bg-white px-6 py-4 rounded-md shadow-sm"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-xs font-semibold text-red-500 mt-2">
                  Phone is required
                </span>
              )}
            </div>
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="Subject*"
                className="bg-white px-6 py-4 rounded-md shadow-sm"
                {...register("resone", { required: true })}
              />
              {errors.resone && (
                <span className="text-xs font-semibold text-red-500  mt-2">
                  This field is required
                </span>
              )}
            </div>
          </div>
          {/* sec end */}
          {/* text aria */}
          <div className="flex flex-col w-full">
            <textarea
              placeholder="Message*"
              className="bg-white px-6 py-4 rounded-md shadow-sm"
              {...register("message", { required: true })}
              rows={8}
            />
            {errors.message && (
              <span className="text-xs font-semibold text-red-500  mt-2">
                This field is required
              </span>
            )}
          </div>
          {/* text aria */}

          <button
            type="submit"
            className="mt-3 flex items-center justify-center gap-2 text-base font-semibold bg-[#52CBCB] px-5 py-3 text-white cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickContactLeft;
