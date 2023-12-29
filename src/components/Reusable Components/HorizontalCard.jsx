import React from "react";

const HorizontalCard = () => {
  return (
    <div className="mx-auto grid w-11/12 lg:w-8/12 grid-cols-1 gap-6">
      <div className="flex w-full cursor-pointer overflow-hidden  rounded-lg bg-white shadow hover:shadow-md xl:flex-row">
        <img
          className="h-full w-11/12 object-cover lg:w-3/12"
          src="/public/course image.svg"
          alt="Flower and sky"
        />

        <div className="relative p-4">
          <h3 className=" text text-base font-medium text-gray-800 md:text-xl">
            The Complete Nutrition Course
          </h3>

          <p className="mt-4 text-light text-gray-600 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad
            assumenda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
