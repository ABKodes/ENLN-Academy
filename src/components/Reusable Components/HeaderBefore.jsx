import React from "react";
const HeaderBefore = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="scroll-hidden -mx-3 px-4 overflow-y-auto whitespace-nowrap py-3 bg-accent">
        <a
          className="mx-4 transform smalltext leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0 uppercase"
          href="#"
        >
          For individuals
        </a>
        <a
          className="mx-4 transform smalltext leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0 uppercase"
          href="#"
        >
          for government
        </a>
        <a
          className="mx-4 transform smalltext leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0 uppercase"
          href="#"
        >
          for organization
        </a>
      </div>
      <nav
        x-data={{ isOpen: false }}
        className="relative bg-gray-300 shadow "
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <a href="#">
                  <img
                    className="h-20 w-auto "
                    src="/public/headerlogo.png"
                    alt=""
                  />
                </a>

                {/* Search input on desktop screen */}
                <div className="mx-10 hidden md:block">
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <input
                      type="text"
                      className="w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                      placeholder="Search"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                  <svg
                    style={{ display: !isOpen ? "block" : "none" }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    style={{ display: isOpen ? "block" : "none" }}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu open: "block", Menu closed: "hidden" */}
            <div
              className={`${
                isOpen
                  ? "translate-x-0 opacity-100 "
                  : "-translate-x-full opacity-0"
              } absolute inset-x-0 top-24 z-20 w-full bg-white px-6 py-2 transition-all duration-300 ease-in-out dark:bg-gray-800 md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100`}
            >
              <div className="flex flex-col md:mx-1 md:flex-row">
                <a
                  className="my-2 transform text-sm leading-5 text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="my-2 transform text-sm leading-5 text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Blog
                </a>
                <a
                  className="my-2 transform text-sm leading-5 text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Compoents
                </a>
                <a
                  className="my-2 transform text-sm leading-5 text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-gray-200 dark:hover:text-blue-400 md:mx-4 md:my-0"
                  href="#"
                >
                  Courses
                </a>
              </div>

              {/* Search input on mobile screen */}
              <div className="my-4 md:hidden">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    className="w-full rounded-md border bg-white py-2 pl-10 pr-4 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                    placeholder="Search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderBefore;
