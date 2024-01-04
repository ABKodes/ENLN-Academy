import React from 'react'
import { PiCertificateThin } from "react-icons/pi";

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
          <div className=" grid  grid-cols-2 items-start lg:grid-cols-3 ">
            <div className="border-2">
              <div className='text-primary text-5xl'>
                <PiCertificateThin />
              </div>
            </div>
            <div className="border-2">
              <h2>y</h2>
            </div>
            <div className="border-2">
              <h3>z</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs