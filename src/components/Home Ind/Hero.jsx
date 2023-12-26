import React, { useState } from "react";

// Header component containing navigation and hero section
const Header = () => {
  // State to manage mobile menu open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-secondary">
      {/* Hero section */}
      <div className="container mx-auto w-11/12 px-6">
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
              <h1 className="herotext font-bold text-primary lg:text-4xl">
                Best place to choose <br /> your{" "}
                <span className="text-accent ">clothes</span>
              </h1>

              {/* Hero description */}
              <p className="heroinnertext mt-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>

              {/* Call to action button */}
              <button className="mt-6 w-full transform rounded-lg bg-blue-600 px-5 py-2 text-sm uppercase tracking-wider text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none lg:w-auto">
                Shop Now
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="mt-6 flex hidden w-full items-center justify-center lg:mt-0 lg:block lg:w-1/2">
            <img
              className="h-full w-full lg:max-w-3xl"
              src="/public/hero section image 1.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
