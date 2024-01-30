// import React from 'react'
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsStopwatch } from "react-icons/bs";
import { PiBookOpenTextBold } from "react-icons/pi";

const CourseLine = () => {
  return (
    <div>
      <div className="flex min-h-[80vh] gap-2 bg-[#B3CBD0] px-2 py-3 lg:gap-8">
        <div className="z-50 my-4 rounded border-[1px] border-gray-300 bg-white px-4 pb-10 pt-4 md:w-1/3 lg:w-1/5">
          <p className="merb mb-5 pt-2 text-[20px]">Course Progress</p>
          <div className="flex items-center justify-between border-b-2 border-gray-300 pb-5">
            <p className="text-[16px] text-[#445D6E]">Videos Watched</p>
            <p className="font-serif font-semibold">0/12</p>
          </div>

          <p className="amib my-3">Lessons</p>
          <div className="flex flex-col items-center justify-start gap-5">
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <PiBookOpenTextBold className="mt-2" />
              <div>
                <p className="amir text-start">What is Nutrition?</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start gap-3">
              <FaRegCirclePlay className="mt-2" />
              <div>
                <p className="amir text-start">Introduction to Nutrition</p>
                <p className="-mt-1 text-start text-[14px] text-[#7E7E7E]">
                  Video 10 min
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="z-20 my-4 flex flex-col justify-start rounded border-[1px] border-gray-300 bg-white px-4 pb-10 pt-4  sm:px-4 md:w-2/3 md:px-8 lg:w-4/5">
          <p className="text-[#445D6E]">
            Home &gt; Nutrition Leadership &gt; Introduction
          </p>
          <div className="flex items-center justify-between py-5">
            <p className="mer text-[24px] text-[#02203C]">1- Introduction</p>
            <div className="flex flex-nowrap items-start justify-center gap-2 text-[#445D6E]">
              <BsStopwatch className="" />
              <p>5 min</p>
            </div>
          </div>
          <p className="pop text-[16px] font-medium text-[#445D6E]">
            Review this consepts for this week: Consecteur adipiscing elit duis
            tristique sollicuitudin nibh sit consecteur adipiscing elit duis
            tristique sollicuitudin nibh sit
          </p>
          <p className="pop pt-4 text-[16px] font-medium text-[#445D6E]">
            Hint: it starts with &quot;proper nutrition and diet&quot;
          </p>
          <div className="flex flex-col items-center justify-center">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/Ovry6x71gxE"
              title="Dr Iftekhar Rashid | Keynote Speech | Ethiopian Nutrition Leaders Network - ENLN | 2023 Annual Forum"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mt-10 lg:min-h-[458.44px] lg:min-w-[815px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLine;
