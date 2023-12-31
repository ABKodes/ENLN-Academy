import { Link } from "react-router-dom";
import { useState } from "react";
import { SiGoogleclassroom } from "react-icons/si";
const HeaderAfter = () => {
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
  return (
    <div className="sticky top-0 z-50 bg-slate-300">
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
                    About Us
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
                  </Link>
                </li>
                <li>
                  <Link className="group relative text-primary hover:font-bold">
                    Why Us
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
          {/* Categories */}
          <div className="dropdown-start dropdown dropdown-hover hidden lg:block">
            <div tabIndex={0} role="button" className="button">
              <div tabIndex={0} role="link" className="link m-1 no-underline">
                Categories
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body bg-secondary">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
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
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        {/* Mobile Logo */}
        <div className="navbar-center lg:hidden">
          <img src="/public/header individual.png" className="h-8" />
        </div>
        {/* Cart Icon, sign in and sign up button */}
        <div className="navbar-end space-x-2">
          {/* Class room */}
          <div className="dropdown dropdown-end dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <div className="indicator">
                <SiGoogleclassroom className="h-8 w-8 cursor-pointer font-thin text-primary" />
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body bg-secondary">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Cart */}
          <div className="dropdown dropdown-end dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 lg:h-8 lg:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#025464"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge indicator-item badge-primary badge-xs lg:badge-sm ">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
            >
              <div className="card-body bg-secondary">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Avatar */}
          <div className="dropdown dropdown-end scale-x-110 transform">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="visible w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow "
            >
              {/* Dropdown menu items */}
              <li className="hover:bg-secondary hover:text-primary">
                <a>Profile</a>
              </li>
              <li className="hover:bg-secondary hover:text-primary">
                <a>My Courses</a>
              </li>
              <li className="hover:bg-secondary hover:text-primary">
                <a>Settings</a>
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
  );
};


export default HeaderAfter;
