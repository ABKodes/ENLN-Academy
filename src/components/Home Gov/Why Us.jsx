import React from "react";
import { PiCertificateThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";

function WhyUs() {
  return (
    <>
      <div
        className=" w-full bg-secondary
      "
        //   style={{ backgroundImage: "url(/heroo.png)" }}
      >
        {/* first row */}
        <div className=" w-full">
          <div className=" mx-auto my-auto w-full space-x-2 space-y-4 py-12 lg:px-52">
            <h1 className="heading px-20">
              {" "}
              Discover Why We're the Best: Choose Us Today
            </h1>
            <p className="text-xl text-primary">
              Empower Yourself for Global Well-Being through Our Nutrition and
              Public Health E-Learning Platform.
            </p>
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-col items-center justify-center">
          {/* features */}
          <div className=" grid  grid-cols-2 items-start gap-8 lg:grid-cols-3">
            <div className=" space-y-5">
              <div className="card h-60 w-96 border border-black bg-base-100">
                <div className="card-body flex items-center justify-start">
                  <div className="-mt-5 mr-4 flex items-center justify-center">
                    <FaPeopleGroup className="text-5xl text-primary" />
                  </div>
                  <h2 className="card-title">Customized Course Content</h2>
                  <div>
                    <p className="smalltext mt-3">
                      Tailored curriculum designed to meet the specific needs of
                      professionals in the nutrition field. Courses crafted with
                      industry insights and the latest trends to ensure
                      relevance and practicality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card h-60 w-96 border border-black bg-base-100">
                <div className="card-body flex items-center justify-start">
                  <div className="-mt-5 mr-4 flex items-center justify-center">
                    <FaPeopleGroup className="text-5xl text-primary" />
                  </div>
                  <h2 className="card-title">Customized Course Content</h2>
                  <div>
                    <p className="smalltext mt-3">
                      Tailored curriculum designed to meet the specific needs of
                      professionals in the nutrition field. Courses crafted with
                      industry insights and the latest trends to ensure
                      relevance and practicality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className=" space-y-5">
              <div className="card h-60 w-96 border border-black bg-base-100">
                <div className="card-body flex items-center justify-start">
                  <div className="-mt-5 mr-4 flex items-center justify-center">
                    <FaPeopleGroup className="text-5xl text-primary" />
                  </div>
                  <h2 className="card-title">Customized Course Content</h2>
                  <div>
                    <p className="smalltext mt-3">
                      Tailored curriculum designed to meet the specific needs of
                      professionals in the nutrition field. Courses crafted with
                      industry insights and the latest trends to ensure
                      relevance and practicality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card h-60 w-96 border border-black bg-base-100">
                <div className="card-body flex items-center justify-start">
                  <div className="-mt-5 mr-4 flex items-center justify-center">
                    <FaPeopleGroup className="text-5xl text-primary" />
                  </div>
                  <h2 className="card-title">Customized Course Content</h2>
                  <div>
                    <p className="smalltext mt-3">
                      Tailored curriculum designed to meet the specific needs of
                      professionals in the nutrition field. Courses crafted with
                      industry insights and the latest trends to ensure
                      relevance and practicality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mb-10 space-y-5">
              <div className="card h-60 w-96 border border-black bg-base-100">
                <div className="card-body flex items-center justify-start">
                  <div className="-mt-5 mr-4 flex items-center justify-center">
                    <FaPeopleGroup className="text-5xl text-primary" />
                  </div>
                  <h2 className="card-title">Customized Course Content</h2>
                  <div>
                    <p className="smalltext mt-3">
                      Tailored curriculum designed to meet the specific needs of
                      professionals in the nutrition field. Courses crafted with
                      industry insights and the latest trends to ensure
                      relevance and practicality.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card h-60 w-96 border border-black bg-base-100">
                <div className="card-body flex items-center justify-start">
                  <div className="-mt-5 mr-4 flex items-center justify-center">
                    <FaPeopleGroup className="text-5xl text-primary" />
                  </div>
                  <h2 className="card-title">Customized Course Content</h2>
                  <div>
                    <p className="smalltext mt-3">
                      Tailored curriculum designed to meet the specific needs of
                      professionals in the nutrition field. Courses crafted with
                      industry insights and the latest trends to ensure
                      relevance and practicality.
                    </p>
                  </div>
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
