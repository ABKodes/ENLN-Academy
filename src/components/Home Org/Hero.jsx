import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <>
      <div className="mx-auto  flex h-screen w-11/12 flex-row rounded-lg">
        <div className="flex h-full w-1/2 justify-center overflow-hidden">
          <div
            className="h-full w-full skew-x-3 bg-cover"
            style={{ backgroundImage: 'url("/hr.jpg")' }}
          ></div>
        </div>
        <div className="flex h-full w-1/2 justify-center bg-transparent bg-gradient-to-r from-transparent to-secondary p-8">
          <div className="flex flex-col items-center justify-center">
            <h1 className="orgherotext hidden font-bold text-white lg:block ">
              Empower individuals for enhanced opportunities <br />
            </h1>
            <h1 className="orgphoneherotext font-bold text-white lg:hidden">
              Empower individuals for enhanced opportunities
              <br />
            </h1>

            {/* Hero description */}
            <p className="heroinnertext mt-3 text-justify text-white">
              Our organization provides cutting-edge skills, ensuring readiness
              for diverse and thriving careers. Elevate your potential with our
              targeted programs for today's job market demands.
            </p>

            {/* Call to action button */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="buttontext btn btn-primary mt-6 w-full rounded-lg border-none px-8 py-2 uppercase tracking-wider duration-300 lg:w-auto "
            >
              Contact Sales
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyUs;
