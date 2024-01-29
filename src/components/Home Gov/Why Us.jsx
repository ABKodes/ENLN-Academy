import React from "react";
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
      <div className=" w-full bg-secondary">
        {/* first row */}
        <div className=" w-full">
          <div className=" mx-auto my-auto w-full space-x-2 space-y-6 lg:px-52 py-32">
            <h1 className="heading px-20">
              {" "}
              Discover Why We're the Best: Choose Us Today
            </h1>
            <p className="text-xl text-primary">
              Empower Yourself for Global Well-Being through Our Nutrition and
              Public Health E-Learning Platform
            </p>
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-col items-center justify-center space-y-5">
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
            <div className=" mb-10 space-y-5">
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

export default WhyUs;
