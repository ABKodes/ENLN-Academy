import React from 'react'
import GetYouStarted from '../components/Categories/GetYouStarted'
import FilterSidebar from '../components/Categories/FilterSidebar'
import AllCoursesList from '../components/Categories/AllCoursesList'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
function Categories() {
  return (
    <>
      <div className="w-11/12">
        <GetYouStarted />
        <div className="grid-rows mt-20 grid w-full lg:grid-cols-[30%,70%] ">
          <div className="lg:ml-2">
            <FilterSidebar />
          </div>
          <div className="ml-5 lg:ml-5">
            <AllCoursesList />
          </div>
        </div>
      </div>
        <div className="w-7/12">
          {/* Title */}
          <div className="">
            <h2 className="heading md:leading-tight">
              Rating
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2">
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4  md:p-6">
              <div className="flex items-center gap-x-4">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800">Bekele Sewasew</h3>
                  <p className="text-xs uppercase text-gray-500">
                    Founder / CEO
                  </p>
                  <div className="mt-3 space-x-1">
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-500">
                John is a software engineer with over 10 years of experience in
          developing web and mobile applications. He is skilled in JavaScript,
          React, and Node.js.
          John is a software engineer with over 10 years of experience in
          developing web and mobile applications. He is skilled in JavaScript,
          React, and Node.js.
              </p>
              {/* End Social Brands */}
            </div>
            <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-4  md:p-6">
              <div className="flex items-center gap-x-4">
                <img
                  className="h-20 w-20 rounded-full"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                  alt="Image Description"
                />
                <div className="grow">
                  <h3 className="font-medium text-gray-800">Bekele Sewasew</h3>
                  <p className="text-xs uppercase text-gray-500">
                    Founder / CEO
                  </p>
                  <div className="mt-3 space-x-1">
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <FaXTwitter />
                    </a>
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="#"
                    >
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>
              <p className="mt-3 text-gray-500">
                John is a software engineer with over 10 years of experience in
          developing web and mobile applications. He is skilled in JavaScript,
          React, and Node.js.
          John is a software engineer with over 10 years of experience in
          developing web and mobile applications. He is skilled in JavaScript,
          React, and Node.js.
              </p>
              {/* End Social Brands */}
            </div>
          </div>
          {/* End Grid */}
        </div>
    </>
  );
}

export default Categories