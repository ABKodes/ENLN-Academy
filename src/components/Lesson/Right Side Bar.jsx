import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { FiClock } from "react-icons/fi";


function RightSideBar() {
  return (
    <>
      <div className=" bg-white lg:w-[23%] ">
        <div className="flex w-full flex-col items-center space-y-3">
          <img src="/Schedule.svg" alt="Schedule Pic" className="w-full" />
          <h2 className="subheading ">Schedule</h2>
          <div className="flex space-x-3">
            <MdLocationOn className="h-5 w-5"/>
            <span>Start Date: </span>
            <span> 18 jan 2024</span>
          </div>
          <div className="flex space-x-3">
            <PiCertificateLight className="h-5 w-5"/>
            <span>End Date: </span>
            <span> 18 mar 2024</span>
          </div>
        </div>
        <div className="my-3 flex w-full flex-col items-center">
          <h2 className="subheading">Upcoming Events</h2>
          <hr className="my-4 w-3/4 border-t border-gray-300" />

          <div className="flex w-[65%] flex-row items-center justify-center shadow-sm shadow-primary">
            <div className="flex w-1/4 flex-col space-x-2 border-r border-primary text-center font-bold">
              <span>10</span>
              <span>Dec</span>
            </div>
            <div className="w-3/4 p-3 ">
              <div className="flex items-center space-x-2">
                <FiClock className="text-primary" />
                <span className="">8:00 PM EAT</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdLocationOn className="text-primary" />
                <span className="">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar