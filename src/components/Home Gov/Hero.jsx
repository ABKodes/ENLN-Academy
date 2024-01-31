import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

// Header component containing navigation and hero section
const Hero = () => {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="">
      {/* Hero section */}
      <div
        className=" container mx-auto h-[80vh] w-full bg-cover opacity-100 "
        style={{
          backgroundImage: "url('/hr.jpg')",
          backgroundGradient: "linear-gradient(to right, secondary, #000000)", // your gradient colors
        }}
      >
        <div className="mx-auto max-w-screen-xl items-center lg:flex">
          <div className="w-full lg:w-full  ">
            <div className="lg:max-w-lg">
              {/* Hero Image for mobile*/}
              {/* <div className=" flex w-full items-center justify-center lg:mt-0 lg:hidden lg:w-1/2">
                <img
                  className="h-11/12 w-full lg:max-w-3xl"
                  src="/public/hero for gov.png"
                  alt="hero image"
                />
              </div> */}
              {/* Hero title */}
              <h1 className="heading hidden font-bold lg:block ">
                Empowering Leaders, Transforming Communities <br />
              </h1>
              <h1 className="phoneherotext text-left font-bold lg:hidden ">
                Empowering Leaders, Transforming Communities
                <br />
              </h1>

              {/* Hero description */}
              <p className="heroinnertext mt-3 text-justify">
                Harness the strength of collaboration and align yourself with a
                network deeply committed to the cultivation of healthier
                communities.
              </p>

              {/* Call to action button */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="buttontext btn btn-primary mt-6 w-full rounded-lg border-none px-8 py-2 uppercase tracking-wider duration-300 lg:w-auto "
              >
                Enroll Now
              </motion.a>
            </div>
          </div>
          {/* Hero image */}
          {/* <div className="mt-6 hidden w-full items-center justify-center lg:mt-0 lg:block lg:w-1/2">
            <img
              className="h-full w-full lg:max-w-3xl"
              src="/public/hero for gov.png"
              alt="hero image"
            />
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Hero;
