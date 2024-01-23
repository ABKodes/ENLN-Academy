import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Rating = () => {
  const eventData = [
    { date: "01", month: "Jan", event: "New Year's Day" },
    // Add more events as needed
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();

  const handleHover = () => {
    setIsFlipped(!isFlipped);
    controls.start({ rotateY: isFlipped ? 0 : 360 });
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {eventData.map((data, index) => (
        <div
          key={index}
          className="relative h-40 w-64 overflow-hidden rounded-md bg-blue-300 shadow-md"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {/* Front of the card */}
          <motion.div
            className={`absolute left-0 top-0 flex h-full w-full items-center justify-center bg-blue-300 ${
              isFlipped ? "hidden" : "block"
            }`}
            initial={{ rotateY: 0 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-bold text-white">
              {data.date} {data.month}
            </p>
          </motion.div>

          {/* Back of the card */}
          <motion.div
            className={`absolute left-0 top-0 flex h-full w-full items-center justify-center bg-green-300 ${
              isFlipped ? "block" : "hidden"
            }`}
            initial={{ rotateY: 360 }}
            animate={controls}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg font-bold text-white">{data.event}</p>
          </motion.div>
        </div>
      ))}

      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="/public/upcoming event.svg"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <div className="flex flex-col items-center justify-center">
            <h1 className="font-dmserif text-3xl font-bold text-white">
              March
            </h1>
            <h1 className="font-dmserif text-3xl font-bold text-white">31</h1>
          </div>

          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolore adipisci placeat.
          </p>
          <button className="font-com rounded-full bg-neutral-900 px-3.5 py-2 text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="flex h-full w-full space-x-2 bg-gray-900 p-2 sm:p-10">
        <div className="flex gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid grid-rows-3 gap-4">
            <div className="group container relative mx-auto flex h-[250px] w-[250px] cursor-pointer items-center justify-center gap-3 bg-white shadow-lg sm:h-[317px] sm:w-[317px]">
              <div className="">
                <img
                  className="w-full object-cover"
                  src="https://doublemakers.co/wp-content/uploads/2023/07/EDO_square_02.jpg"
                  alt=""
                />
              </div>
              <div className="hover-card invisible absolute right-0 z-10 -mx-2 h-full w-full translate-x-full transform bg-white p-4 text-gray-900 opacity-0 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100 ">
                <div className="mb-auto">
                  <span className="mb-2 text-sm font-light sm:text-lg">
                    Legal Services
                  </span>
                  <h1 className="text-xl font-light leading-normal tracking-wider sm:text-3xl">
                    Environmental Defenders Office
                  </h1>
                </div>
                <div className="mt-16 flex flex-wrap justify-start gap-1 text-xs sm:gap-2 sm:text-base">
                  <button className="rounded-full border border-gray-900 px-2 py-0.5">
                    Web design
                  </button>
                  <button className="rounded-full border border-gray-900 px-2 py-0.5">
                    Front-end development
                  </button>
                  <button className="rounded-full border border-gray-900 px-2 py-0.5">
                    Appeal landing page design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid grid-rows-3 gap-4">
            <div className="group container relative mx-auto flex h-[250px] w-[250px] cursor-pointer items-center justify-center gap-3 bg-white shadow-lg sm:h-[317px] sm:w-[317px]">
              <div className="">
                <img
                  className="w-full object-cover"
                  src="https://doublemakers.co/wp-content/uploads/2023/07/EDO_square_02.jpg"
                  alt=""
                />
              </div>
              <div className="hover-card invisible absolute right-0 z-10 -mx-2 h-full w-full translate-x-full transform bg-white p-4 text-gray-900 opacity-0 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100 ">
                <div className="mb-auto">
                  <span className="mb-2 text-sm font-light sm:text-lg">
                    Legal Services
                  </span>
                  <h1 className="text-xl font-light leading-normal tracking-wider sm:text-3xl">
                    Environmental Defenders Office
                  </h1>
                </div>
                <div className="mt-16 flex flex-wrap justify-start gap-1 text-xs sm:gap-2 sm:text-base">
                  <button className="rounded-full border border-gray-900 px-2 py-0.5">
                    Web design
                  </button>
                  <button className="rounded-full border border-gray-900 px-2 py-0.5">
                    Front-end development
                  </button>
                  <button className="rounded-full border border-gray-900 px-2 py-0.5">
                    Appeal landing page design
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="grid grid-rows-3 gap-4">
            <div className="group container relative mx-auto flex h-[250px] w-[250px] cursor-pointer items-center justify-center gap-3 shadow-lg sm:h-[317px] sm:w-[317px]">
              <div className="max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700">
                <a href="#">
                  <figure>
                    <img
                      src="/public/course image.svg"
                      className="h-52 w-full object-cover"
                    />
                  </figure>
                </a>
                <div className="px-5">
                  <a href="#">
                    <h5 className="text mb-2 font-bold dark:text-left  ">
                      The Complete Nutrition Course
                    </h5>
                  </a>
                  <p className="ratingcardtext mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Bekele Sewasew
                  </p>
                  <div className="flex items-center space-x-1">
                    <div className="flex items-center">
                      <p className="ratingcardtext pt-1 font-semibold">
                        4.95
                      </p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="me-1 h-3 w-3 text-primary lg:h-4 lg:w-4"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center">
                      <p className="ratingcardtext pt-1 font-medium">
                        (110,568)
                      </p>
                    </div>
                  </div>
                  <p className="phonetext my-3  dark:font-bold">Birr 1,500</p>
                </div>
              </div>

              <div className="hover-card invisible absolute right-0 z-10 -mx-2 h-auto w-full translate-x-full transform rounded-lg border border-primary bg-white p-4 text-gray-900 opacity-0 transition-opacity duration-300 ease-in-out group-hover:visible group-hover:opacity-100">
                <div className="mb-auto">
                  <h5 className="text mb-2 font-bold dark:text-left">
                    The Complete Nutrition Course
                  </h5>
                  <div className="flex items-center space-x-1 text-justify">
                    <span className="cardtext text-gray-500 dark:text-gray-400">
                      25 total hours
                    </span>
                    <span className="cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400"></span>
                    <span className="cardtext text-gray-500 dark:text-gray-400">
                      All levels
                    </span>
                    <span className="ratingcardtext badge badge-primary badge-outline badge-xs uppercase">
                      virtual
                    </span>
                  </div>
                </div>
                <div className="gap-1 text-xs sm:gap-2 sm:text-base">
                  <p className="cardtext">
                    Unlock the secrets to optimal health with our Complete
                    Nutrition Course, designed for individuals seeking a
                    holistic understanding of nutrition.
                  </p>
                  <ul className="cardtext text-left ">
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0 text-primary"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span>
                        Gain practical knowledge to make informed dietary
                        choices and achieve your health goals.
                      </span>
                    </li>
                    <li className="flex space-x-3 text-justify rtl:space-x-reverse">
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0 text-primary"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span className="text-justify">
                        Explore the science of nutrition, covering essential
                        nutrients, dietary patterns, and personalized meal
                        planning.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg
                        className="h-3.5 w-3.5 flex-shrink-0 text-primary"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M1 5.917 5.724 10.5 15 1.5"
                        />
                      </svg>
                      <span>
                        Acquire the skills to decipher food labels, assess
                        nutritional needs, and implement sustainable lifestyle
                        changes for lifelong well-being.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="card-actions justify-end">
                  <button className="buttontext btn btn-primary w-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
      </div>
    </div>
  );
};

export default Rating;
