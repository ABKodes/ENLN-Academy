import React from 'react'
import { FaNutritionix } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { GiBullseye } from "react-icons/gi";

function Enhanceexperiance() {
  return (
    <>
      <div className="mx-auto my-auto w-full bg-secondary lg:grid lg:grid-cols-[40%,30%,30%] ">
        {/* first div */}
        <div className="mx-auto my-auto">
          <div className=" items-start  space-y-3 p-20">
            <h1 className="orgsubheading">
              Enhance Your Campus Learning Experience
            </h1>
            <p className="orgtext">
              Deliver practical, job-relevant learning experiences with
              professional content and courses from university and industry
              experts
            </p>
          </div>
        </div>
        {/* Second column */}
        <div className="mx-auto my-auto space-y-5 py-10 px-5">
          <div className="flex flex-col items-start space-y-3 ">
            <div className="text-5xl text-primary  ">
              <FaNutritionix />
            </div>
            <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
            <p className="orgsmalltext ">
              Expand your academic offerings with a nutrition-focused
              curriculum.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-3 ">
            <div className="text-5xl text-primary  ">
              <GiTeacher />
            </div>
            <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
            <p className="orgsmalltext ">
              Expand your academic offerings with a nutrition-focused
              curriculum.
            </p>
          </div>
        </div>
        {/* Third div */}
        <div className="mx-auto my-auto space-y-5 py-10 px-5">
          <div className="flex flex-col items-start space-y-3 ">
            <div className="text-5xl text-primary  ">
              <GiBullseye />
            </div>
            <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
            <p className="orgsmalltext ">
              Expand your academic offerings with a nutrition-focused
              curriculum.
            </p>
          </div>
          <div className="flex flex-col items-start space-y-3 ">
            <div className="text-5xl text-primary  ">
              <GiTeacher />
            </div>
            <h3 className="orgtext ">Nutrition-Focuse Curriculum</h3>
            <p className="orgsmalltext ">
              Expand your academic offerings with a nutrition-focused
              curriculum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Enhanceexperiance