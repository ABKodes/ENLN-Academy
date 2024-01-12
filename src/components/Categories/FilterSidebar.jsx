import React, {useState} from 'react'
import { motion, useAnimation } from "framer-motion";
import { AiOutlineFilter } from "react-icons/ai";

function FilterSidebar() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setDropdownOpen((prev) => !prev);
    };
  return (
    <>
      <div className="mx-5">
        <h1 className="heading">All Leadership Courses</h1>
        <div className="navbar-end space-x-2 lg:mr-7">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn  btn-md lg:btn-md"
          >
            <AiOutlineFilter /> Filter
          </motion.a>

          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none  btn-md"
            >
              Sort By
              <svg
                className="ms-3 h-2.5 w-2.5"
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
              <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Most Popular
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    New
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Ascending
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Descending
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSidebar