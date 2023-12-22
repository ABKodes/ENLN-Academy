import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
const HeaderBefore = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleSearchBarClick = () => {
      setIsClicked(true);
    };

    const handleSearchBarBlur = () => {
      setIsClicked(false);
    };
  return (
    <>
      <div className="overflow-y-auto whitespace-nowrap bg-accent px-4 py-3 hidden lg:block">
        <Link className="smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
          For individuals
          <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link className="smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
          For government
          <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
        </Link>
        <Link className="smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0">
          For organization
          <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
        </Link>
      </div>
      <div className="navbar mx-auto w-11/12 bg-slate-300">
        <div className="navbar-start">
          {/* Mobile hamburger */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <div className="mx-4 hidden lg:block">
            <img src="/public/header individual.png" className="h-8" />
          </div>
          {/* Categories */}
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="link" className="link m-1 no-underline">
              Categories
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          {/* Search bar input */}
          <div className="mx-10 hidden md:block">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className={`h-5 w-5 ${
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
                className="w-full rounded-md border bg-white py-2 pl-10 pr-4 placeholder-gray-400 focus:border-primary focus:placeholder-primary focus:outline-none dark:border-secondary dark:text-gray-800"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        {/* Mobile Logo */}
        <div className="navbar-center lg:hidden">
          <img src="/public/header individual.png" className="h-8" />
        </div>
        <div className="navbar-end space-x-2">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-outline btn-primary"
          >
            Log In
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-primary"
          >
            Sign Up
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default HeaderBefore;
