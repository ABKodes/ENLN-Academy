import React, { useState } from "react";

function Search() {
  const [isClicked, setIsClicked] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchBarClick = () => {
    setIsClicked(true);
  };

  const handleSearchBarBlur = () => {
    setIsClicked(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleCloseSearch = () => {
    setIsSearchVisible(false);
  };

  return (
    <>
      <div className="relative w-full lg:hidden flex duration-0 space-x-3 ">
              <span className="absolute inset-y-0 ml-3 mr-3 flex items-center pr-5">
                <svg
                  className={`h-7 w-7 duration-0 pl-2 ${
                    isClicked ? "text-primary" : "text-gray-400"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={isClicked ? "#025464" : "#b3cbd0"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" />
                </svg>
              </span>
              <input
                type="text"
                onClick={handleSearchBarClick}
                onBlur={handleSearchBarBlur}
                className="w-11/12 rounded-md border bg-white px-4  py-2 pl-8 placeholder-gray-400 focus:border-primary focus:placeholder-primary focus:outline-none dark:border-secondary dark:text-gray-800"
                placeholder="Search in Course"
              />

              {/* Your close button icon goes here */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost absolute right-0 top-1/2 -translate-y-1/2 transform cursor-pointer p-1 pr-6"
                onClick={handleCloseSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#025464"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
        </div>
    </>
  );
}

export default Search;

