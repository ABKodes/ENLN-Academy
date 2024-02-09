// import React from "react";
// import { PiCertificateThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";
function WhyUs() {
  return (
    <>
      <div
        className=" w-full bg-secondary dark:bg-gray-800
      "
        //   style={{ backgroundImage: "url(/heroo.png)" }}
      >
        {/* first row */}
        <div className=" w-full">
          <div className=" mx-auto my-auto w-full space-x-2 space-y-4 py-12 lg:px-52">
            <h1 className="heading px-2 sm:px-6 md:px-10 lg:px-20">
              {" "}
              Discover Why We&apos;re the Best: Choose Us Today
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
          <div className=" mx-2 grid grid-cols-1 items-start justify-center gap-10 md:mx-0 md:grid-cols-2 lg:mx-8 lg:grid-cols-3">
            <div className=" space-y-5">
              <div className="card mx-auto  md:h-60 w-full border border-black bg-base-100 md:w-96">
                <div className="card-body flex ">
                  <div className="-mt-5 mr-4 flex items-center justify-center">
                    <FaPeopleGroup className="text-5xl text-primary" />
                  </div>
                  <h2 className="card-title">Customized Course Content</h2>
                  <div>
                    <p className="lg:smalltext phonesmalltext mt-3">
                      Tailored curriculum designed to meet the specific needs of
                      professionals in the nutrition field. Courses crafted with
                      industry insights and the latest trends to ensure
                      relevance and practicality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card md:h-60 w-full border border-black bg-base-100 md:w-96">
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
              <div className="card hidden md:h-60 w-full border border-black bg-base-100 md:block md:w-96 lg:hidden">
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
              <div className="card md:h-60 w-full border border-black bg-base-100 md:w-96">
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
              <div className="card md:h-60 w-full border border-black bg-base-100 md:w-96">
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
              <div className="card hidden h-60 w-full border border-black bg-base-100 md:block md:w-96 lg:hidden">
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
            <div className=" mb-10 space-y-5 md:hidden lg:block">
              <div className="card  w-full lg:h-60 border border-black bg-base-100 ">
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
              <div className="card  w-full lg:h-60 border border-black bg-base-100">
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
          <Link
            to="/categories"
            className="w-1/2 md:mt-5 lg:mt-10 lg:flex lg:items-center "
          >
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="btn btn-outline btn-primary btn-md mb-8 w-full lg:ml-5 lg:flex lg:w-4/12 lg:items-center"
            >
               See Courses
            </motion.a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
