import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { GoQuestion } from "react-icons/go";

function HeaderLesson() {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSearchBarClick = () => {
    setIsClicked(true);
  };

  const handleSearchBarBlur = () => {
    setIsClicked(false);
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };


  const handleCloseSearch = () => {
    setIsSearchVisible(false);

  };

  return (
    <>
      <div className="bg-slate-300">
        <div className="navbar mx-auto w-11/12 ">
          <div className="navbar-start">
            {/* Mobile hamburger */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                onClick={toggleMenu}
              >
                {isOpen ? (
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
                ) : (
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
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </div>
              <div
                className={`absolute inset-x-0  z-20 w-full  px-6 py-2 transition-all duration-300 ease-in-out md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
                }`}
              >
                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                >
                  <li>
                    <Link className="group relative  text-primary hover:font-bold">
                      Notification
                      <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
                    </Link>
                  </li>
                  <li>
                    <Link className="group relative text-primary hover:font-bold">
                      Support
                      <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Logo */}
            <div className="mx-4 hidden lg:block">
              <img src="/public/header individual.png" className="h-8" />
            </div>

            {/* Search bar input */}
            <div className="mx-10 hidden duration-0 md:block">
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className={`h-5 w-5 duration-0 ${
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
                  className="w-full rounded-md border bg-white py-2 pl-10 pr-40 placeholder-gray-400 focus:border-primary focus:placeholder-primary focus:outline-none dark:border-secondary dark:text-gray-800"
                  placeholder="Search in Course"
                />
              </div>
            </div>
          </div>
          {/* Mobile Logo */}
          <div className="navbar-center lg:hidden">
            <img src="/public/header individual.png" className="h-8" />
          </div>

          {/*  menu items */}
          <div className="navbar-end flex items-center ">
            <div className="mt-3 hidden h-8 w-8 scale-x-110 transform text-2xl text-primary lg:flex">
              <GoQuestion />
            </div>
            <div className=" hidden lg:flex">
              <button class="btn btn-circle btn-ghost mr-2 mt-1 text-2xl text-primary">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span class="badge indicator-item badge-primary badge-xs"></span>
                </div>
              </button>
            </div>
            {/*   Mobile search icon */}
            {/* <div className="flex lg:hidden">
              <div>
                <button className="btn btn-circle btn-ghost text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6  cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={toggleSearch}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>

              {isSearchVisible && (
                <div className=" lg:hidden ">
                  <div className=" duration-0 ">
                    <div className="relative top-0 ">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg
                          className={`h-5 w-5 duration-0 ${
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
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost lg:hidden"
                          onClick={toggleeMenu}
                        > 
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white "
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
                         
                      </span>
                      <input
                        type="text"
                        onClick={handleSearchBarClick}
                        onBlur={handleSearchBarBlur}
                        className="w-full rounded-md border bg-white py-2 pl-10 pr-40 placeholder-gray-400 focus:border-primary focus:placeholder-primary focus:outline-none dark:border-secondary dark:text-gray-800"
                        placeholder="Search in Course"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div> */}
            <div className="fixed right-16 flex lg:hidden">
              <div className="w-">
                <button
                  className="btn btn-circle btn-ghost text-primary"
                  onClick={toggleSearch}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6  cursor-pointer"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z "
                    />
                  </svg>
                </button>
              </div>
              {isSearchVisible && (
                <div className="relative flex w-full space-x-3 duration-0 lg:hidden ">
                  <span className="absolute inset-y-0 ml-3 mr-3 flex items-center pr-5">
                    <svg
                      className={`h-7 w-7 pl-2 duration-0 ${
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
              )}
            </div>

            {/*  Mobile profile */}
            <div className="dropdown dropdown-end scale-x-110 transform">
              <div
                tabIndex={0}
                role="button"
                className="avatar btn btn-circle btn-ghost visible"
              >
                <div className="w-10 rounded-full ">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              {/* Dropdown menu items */}
              <div className="">
                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow "
                >
                  <li className="hover:bg-secondary hover:text-primary">
                    <a>Profile</a>
                  </li>
                  <li className="hover:bg-secondary hover:text-primary">
                    <a>My Courses</a>
                  </li>
                  <li className="hover:bg-secondary hover:text-primary lg:hidden">
                    <a>Notification</a>
                  </li>
                  <li className="hover:bg-secondary hover:text-primary">
                    <a>Settings</a>
                  </li>
                  <li className="hover:bg-secondary hover:text-primary lg:hidden">
                    <a>Help Center</a>
                  </li>
                  <li className="hover:bg-secondary hover:text-primary">
                    <a>Resources</a>
                  </li>
                  <li className="hover:bg-secondary hover:text-primary">
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLesson;
