import React from "react";
import { motion } from "framer-motion";

function RightSideBar() {
  return (
    <div>
      <div
        className="justify-left relative flex h-screen items-center "
        style={{ backgroundImage: 'url("/ss.jpg")', backgroundSize: "cover" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-secondary to-transparent opacity-100"
          style={{ mixBlendMode: "multiply" }}
        ></div>
        <div className="z-10 ml-16 w-1/2 text-white">
          <h1 className=" mb-5 text-5xl hidden font-bold text-white lg:block">
            Empower individuals for enhanced opportunities <br />
          </h1>
          <p className="text-xl mb-3 mt-3 text-justify text-white">
            Our organization provides cutting-edge skills, ensuring readiness
            for diverse and thriving careers. Elevate your potential with our
            targeted programs for today's job market demands.
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
  );
}

export default RightSideBar;
