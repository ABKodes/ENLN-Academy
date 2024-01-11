import React from "react";

const HorizontalCard = () => {
  return (
    <>
      <div className="mx-auto grid w-11/12 grid-cols-1 gap-6 border border-black lg:w-8/12">
        <div className="flex w-full cursor-pointer overflow-hidden  rounded-lg bg-white shadow hover:shadow-md xl:flex-row">
          <img
            className="h-full w-11/12 object-cover lg:w-3/12"
            src="/public/course image.svg"
            alt="Flower and sky"
          />

          <div className="card-body">
            <div className="card-actions justify-between">
              <h2 className="text">The Complete Nutrition Course</h2>
              <h2 className="text font-bold">Birr 1,500</h2>
            </div>

            <p className="cardtext text-gray-500 dark:text-gray-400">
              Bekele Sewasew
            </p>

            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                <p className="ratingcardtext font-semibold">4.95</p>
              </div>

              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="me-1 h-4 w-4 text-primary"
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
                <p className="ratingcardtext font-medium">(110,568)</p>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <span className="cardtext text-gray-500 dark:text-gray-400">
                25 total hours
              </span>
              <span className="cardtext h-1 w-1 items-center justify-center rounded-full bg-gray-300 text-gray-500 dark:text-gray-400"></span>
              <span className="cardtext text-gray-500 dark:text-gray-400">
                All levels
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
