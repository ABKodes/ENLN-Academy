import React, { useState } from "react";
import { Link } from "react-router-dom";
import HorizontalCard from "../Reusable Components/HorizontalCard";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function MyCourses() {
  const objectives = [
    <HorizontalCard key={1} />,
    <HorizontalCard key={2} />,
    <HorizontalCard key={3} />,
  ];

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div>
      <div>
        <h2 className="subheading group relative mx-auto  my-5 w-9/12 hover:font-bold lg:text-base ">
          <span className="relative inline-block">
            My Courses
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-black transition-transform group-hover:scale-x-100"></span>
          </span>
        </h2>

        <div className="mx-auto w-9/12">
          <div className="w-full">
            <HorizontalCard />
            <HorizontalCard />
            <HorizontalCard />
            <div className={showFullText ? "hidden" : "block"}>
              {objectives.map((objective, index) => (
                <div key={index} className="text">
                  {objective}
                </div>
              ))}
            </div>
          </div>
          <div className="my-4 flex justify-end">
            <button
              className="group relative ml-7 transform cursor-pointer font-bold leading-5 text-primary duration-300  md:my-0"
              onClick={toggleShowFullText}
            >
              {showFullText ? (
                <div className="flex items-center text-justify">
                  Show More
                  <MdKeyboardArrowDown />
                </div>
              ) : (
                <div className="flex items-center text-justify">
                  Hide
                  <MdKeyboardArrowUp />
                </div>
              )}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary underline transition-transform group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCourses;
