import React from 'react'
import { PiCertificateThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

function WhyUs() {
  return (
    <>
      <div className=" w-11/12">
        {/* first row */}
        <div className="mx-auto my-auto flex w-full">
          <div className=" w-1/3 px-8">
            {" "}
            <img src="/why us.svg" alt="" />
          </div>
          <div className=" w-2/3 items-start space-x-2 space-y-6 px-10 py-32">
            <h1 className="heading"> Why Us</h1>
            <p className="text i">
              Choose ENLN Academy for a comprehensive nutrition education that
              seamlessly integrates cutting-edge theory with practical insights,
              ensuring your path to success is well-rounded and dynamic.
            </p>
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-col items-center justify-center space-y-5">
          <div className=" ">
            <h3 className="subheading"> Features</h3>
          </div>
          {/* features */}
          <div className=" grid  grid-cols-2 items-start gap-8 lg:grid-cols-3">
            <div className=" space-y-5">
              <div className="card w-80 bg-base-100 shadow-sm shadow-primary">
                <div className="card-body">
                  <PiCertificateThin className="card-actions justify-end text-5xl text-secondary" />
                  <h2 className="card-title">Customized Course Content</h2>
                  <p className="smalltext">
                    Tailored curriculum designed to meet the specific needs of
                    professionals in the nutrition field. Courses crafted with
                    industry insights and the latest trends to ensure relevance
                    and practicality.
                  </p>
                </div>
              </div>
              <div className="card w-80 bg-base-100 shadow-sm shadow-primary">
                <div className="card-body">
                  <PiCertificateThin className="card-actions justify-end text-5xl text-secondary " />
                  <h2 className="card-title">Customized Course Content</h2>
                  <p className="smalltext">
                    Tailored curriculum designed to meet the specific needs of
                    professionals in the nutrition field. Courses crafted with
                    industry insights and the latest trends to ensure relevance
                    and practicality.
                  </p>
                </div>
              </div>
            </div>

            <div className=" space-y-5">
              <div className="card w-80 bg-base-100 shadow-sm shadow-primary">
                <div className="card-body">
                  <PiCertificateThin className="card-actions justify-end text-5xl text-secondary" />
                  <h2 className="card-title">Customized Course Content</h2>
                  <p className="smalltext">
                    Tailored curriculum designed to meet the specific needs of
                    professionals in the nutrition field. Courses crafted with
                    industry insights and the latest trends to ensure relevance
                    and practicality.
                  </p>
                </div>
              </div>
              <div className="card w-80 bg-base-100 shadow-sm shadow-primary">
                <div className="card-body">
                  <PiCertificateThin className="card-actions justify-end text-5xl text-secondary " />
                  <h2 className="card-title">Customized Course Content</h2>
                  <p className="smalltext">
                    Tailored curriculum designed to meet the specific needs of
                    professionals in the nutrition field. Courses crafted with
                    industry insights and the latest trends to ensure relevance
                    and practicality.
                  </p>
                </div>
              </div>
            </div>
            <div className=" space-y-5 mb-10">
              <div className="card w-80 bg-base-100 shadow-sm shadow-primary">
                <div className="card-body">
                  <PiCertificateThin className="card-actions justify-end text-5xl text-secondary" />
                  <h2 className="card-title">Customized Course Content</h2>
                  <p className="smalltext">
                    Tailored curriculum designed to meet the specific needs of
                    professionals in the nutrition field. Courses crafted with
                    industry insights and the latest trends to ensure relevance
                    and practicality.
                  </p>
                </div>
              </div>
              <div className="card w-80 bg-base-100 shadow-sm shadow-primary">
                <div className="card-body">
                  <PiCertificateThin className="card-actions justify-end text-5xl text-secondary " />
                  <h2 className="card-title">Customized Course Content</h2>
                  <p className="smalltext">
                    Tailored curriculum designed to meet the specific needs of
                    professionals in the nutrition field. Courses crafted with
                    industry insights and the latest trends to ensure relevance
                    and practicality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs