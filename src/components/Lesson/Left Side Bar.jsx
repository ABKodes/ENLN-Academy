import React, { useState, useEffect } from "react";

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
        <label key={week} className="text flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => handleCheckboxChange(week)}
            className="texty rounded-full focus:ring-0"
          />
          <span className="text">{`Week ${week}`}</span>
        </label>,
      );
    }

    return checkboxes;
  };

  return (
    <div className="flex flex-col items-center border-r-2 bg-white p-4 lg:w-[22%]">
        <h2 className="text font-bold">The complete Nutrition Course</h2>
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="text relative flex w-full items-center space-x-3 justify-between px-4 py-2 focus:outline-none"
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
          <div className="absolute bg-white p-4">{renderCheckboxes()}</div>
        )}
      </div>
    </div>
  );
}

export default LeftSideBar;
