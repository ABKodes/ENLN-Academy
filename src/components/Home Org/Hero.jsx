import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";


function WhyUs() {
  return (
    <>
      <div className="mx-auto my-auto  -mt-6 w-11/12">
        {/* Mobile image */}
        <div className="flex lg:hidden mx-auto my-auto justify-center">
          <img src="/ss.jpg" alt="" className="w-full "/>
        </div>
        <div className="mx-auto  my-auto flex w-full  flex-col lg:h-[500px] lg:flex-row border rounded-lg">
          <div className="  hidden w-1/2 justify-center overflow-hidden lg:flex">
            <div
              className=" w-full skew-x-3 bg-cover"
              style={{ backgroundImage: 'url("/ss.jpg")' }}
            ></div>
          </div>
          <div className="flex w-full justify-center bg-transparent bg-gradient-to-r from-transparent to-secondary p-8 lg:w-1/2">
            <div className="lg:left-0 flex flex-col items-center justify-center">
              {/* Large view heading */}
              <h1 className="orgherotext mb-5 hidden font-bold text-white lg:block">
                Empower individuals for enhanced opportunities <br />
              </h1>
              {/* mobile heading */}
              <h1 className="orgphoneherotext font-bold text-white lg:hidden">
                Empower individuals for enhanced opportunities
                <br />
              </h1>

              {/* Hero description */}
              <p className="heroinnertext mb-3 mt-3 text-justify text-white">
                Our organization provides cutting-edge skills, ensuring
                readiness for diverse and thriving careers. Elevate your
                potential with our targeted programs for today's job market
                demands.
              </p>

              {/* Call to action button */}
              <div className=" w-full  space-x-2 ">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="buttontext  btn btn-primary mt-6 w-full rounded-lg border-none px-8 py-2 uppercase tracking-wider duration-300 lg:w-auto"
                >
                  Contact Sales
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
