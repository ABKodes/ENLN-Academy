import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LeftSideBar({ userData }) {
  const [completedWeeks, setCompletedWeeks] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (userData && userData.completedWeeks) {
      setCompletedWeeks(userData.completedWeeks);
    }
  }, [userData]);

  const handleCheckboxChange = (week) => {
    // Handle logic when the checkbox state changes for a specific week
    // For example, update the user data on the server to indicate completion
    console.log(`Checkbox for Week ${week} changed`);
  };

  const renderCheckboxes = () => {
    const totalWeeks = 4;
    const checkboxes = [];

    for (let week = 1; week <= totalWeeks; week++) {
      const isChecked = completedWeeks.includes(week);

      checkboxes.push(
        <Link to="/coursecontent">
          <label key={week} className="text flex items-center space-x-2">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(week)}
              className="texty rounded-full focus:ring-0"
            />
            <span className="text">{`Week ${week}`}</span>
          </label>
        </Link>,
      );
    }

    return checkboxes;
  };

  return (
    <div className="lg:flex flex-col items-center border-r-2 bg-white p-4 hidden lg:w-full h-full">
      <div className="relative h-40 w-40">
        <svg
          className="h-full w-full"
          width={36}
          height={36}
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Circle */}
          <circle
            cx={18}
            cy={18}
            r={16}
            fill="none"
            className="stroke-current  dark:text-secondary"
            strokeWidth={4}
          />
          {/* Progress Circle inside a group with rotation */}
          <g className="origin-center -rotate-90 transform">
            <circle
              cx={18}
              cy={18}
              r={16}
              fill="none"
              className="stroke-current dark:text-primary"
              strokeWidth={4}
              strokeDasharray={100}
              strokeDashoffset={25}
            />
          </g>
        </svg>
        {/* Percentage Text */}
        <div className="absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <span className="text text-center font-bold dark:text-2xl dark:text-primary">
            72%
          </span>
        </div>
      </div>
      <h2 className="text font-bold mt-5">The complete Nutrition Course</h2>
      <div className="relative mt-4">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="text relative flex w-full items-center justify-between space-x-3 px-4 py-2 focus:outline-none"
        >
          <span>Course Material</span>
          <svg
            className={`h-2.5 w-2.5 transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute bg-white p-4 space-y-3 ml-5">{renderCheckboxes()}</div>
        )}
      </div>
    </div>
  );
}

export default LeftSideBar;
