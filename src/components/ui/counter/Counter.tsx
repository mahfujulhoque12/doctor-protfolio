"use client";
import { useEffect } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

function Counter() {
  useEffect(() => {
    function animateValue(
      obj: HTMLElement,
      start: number,
      end: number,
      duration: number
    ): void {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toString();
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const expertise = document.getElementById("expertise");
    const reservation = document.getElementById("reservation");
    const customer = document.getElementById("customer");
    const award = document.getElementById("award");

    if (
      expertise instanceof HTMLElement &&
      reservation instanceof HTMLElement &&
      customer instanceof HTMLElement &&
      award instanceof HTMLElement
    ) {
      animateValue(expertise, 0, 23, 5000);
      animateValue(reservation, 0, 125, 5000);
      animateValue(customer, 0, 99, 5000);
      animateValue(award, 0, 85, 5000);
    }
  }, []);

  return (
    <MaxWidthWrapper className="my-16 ">
      <div className="bg-white px-5 py-16 shadow-md rounded-md">
        <h1 className="text-center text-gray-800 capitalize font-bold text-4xl">
          Why Pasaint Come Here?
        </h1>

        {/* Second Part */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-3 text-black">
          <div className="flex bg-[#F7FCFC] flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300">
            <h2 className="flex justify-center p-0 m-0">
              <div
                id="expertise"
                className="flex items-center justify-center text-3xl font-bold text-[#52CBCB] "
              >
                23{" "}
              </div>
              <span className="text-3xl font-bold text-[#52CBCB] ">+</span>
            </h2>
            <span className="text-center text-gray-600">
              Years of Expertise
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300 bg-[#F7FCFC]">
            <h2 className="flex justify-center p-0 m-0">
              <div
                id="reservation"
                className="flex items-center justify-center text-3xl font-bold text-[#52CBCB] "
              >
                125
              </div>
              <span className="text-3xl font-bold text-[#52CBCB] ">+</span>
            </h2>
            <span className="text-center text-gray-600">
              Reservations Served
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300 bg-[#F7FCFC]">
            <h2 className="flex justify-center p-0 m-0">
              <div
                id="customer"
                className="flex items-center justify-center text-3xl font-bold text-[#52CBCB] "
              >
                99
              </div>
              <span className="text-3xl font-bold text-[#52CBCB] ">%</span>
            </h2>
            <span className="text-center text-gray-600">
              Satisfied Pasaints
            </span>
          </div>
          <div className="flex flex-col justify-center items-center border rounded-md shadow-md p-4 hover:scale-[101%] transition-all duration-300 bg-[#F7FCFC]">
            <h2 className="flex justify-center p-0 m-0">
              <div
                id="award"
                className="flex items-center justify-center text-3xl font-bold text-[#52CBCB] "
              >
                85
              </div>
              <span className="text-3xl font-bold text-[#52CBCB] ">+</span>
            </h2>
            <span className="text-center text-gray-600">Awards</span>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Counter;
