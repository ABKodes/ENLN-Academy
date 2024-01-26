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
      <div className="container mx-auto w-11/12 px-6 py-8 lg:py-0">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              {/* Hero Image for mobile*/}
              <div className=" flex w-full items-center justify-center lg:mt-0 lg:hidden lg:w-1/2">
                <img
                  className="h-11/12 w-11/12 lg:max-w-3xl"
                  src="/public/hero section image 1.png"
                  alt="hero image"
                />
              </div>
              {/* Hero title */}
              <h1 className="herotext hidden text-left font-bold lg:block ">
                Empowering Leaders, Transforming Communities <br />
              </h1>
              <h1 className="phoneherotext text-left font-bold lg:hidden ">
                Empowering Leaders, Transforming Communities
                <br />
              </h1>
              <span className="text-left text-4xl font-bold text-primary lg:text-5xl">
                <TypeAnimation
                  sequence={[
                    "Empowering",
                    2000,
                    "Leaders",
                    2000,
                    "Transforming Communities",
                    2000,
                  ]}
                  wrapper="div"
                  speed={50}
                  style={{
                    fontSize: "1em",
                    display: "inline-block",
                    paddingLeft: "5px",
                  }}
                  className="py-5 text-left text-primary"
                  repeat={Infinity}
                />
              </span>

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
          <div className="mt-6 flex  w-full items-center justify-center lg:mt-0 lg:block lg:w-1/2">
            <img
              className="h-full w-full lg:max-w-3xl"
              src="/public/hero for gov.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
