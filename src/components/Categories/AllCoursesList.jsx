import React from 'react'
import HorizontalCard from '../Reusable Components/HorizontalCard'
function AllCoursesList() {
  return (
    <div >
      <div className="mt-12 flex flex-col">
        <p className="text flex lg:w-full w-10/12 justify-end">1000 results</p>
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
        <HorizontalCard />
      </div>
      <div className="mt-10 flex justify-center w-6/12 lg:w-full">
        <a
          href="#"
          className="mx-1 flex cursor-not-allowed items-center justify-center rounded-full bg-primary px-4 py-2 capitalize text-white rtl:-scale-x-100 dark:bg-primary dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        <a
          href="#"
          className="mx-1  transform rounded-full bg-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-primary dark:text-white dark:hover:bg-primary dark:hover:text-white sm:inline"
        >
          1
        </a>
        <a
          href="#"
          className="mx-1  transform rounded-full bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white sm:inline"
        >
          2
        </a>
        <a
          href="#"
          className="mx-1  transform rounded-full bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white sm:inline"
        >
          3
        </a>
        <a
          href="#"
          className="mx-1  transform rounded-full bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white sm:inline"
        >
          4
        </a>
        <a
          href="#"
          className="mx-1  transform rounded-full bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white sm:inline"
        >
          ..
        </a>

        <a
          href="#"
          className="mx-1  transform rounded-full bg-white px-4 py-2 text-black transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-white dark:text-black dark:hover:bg-primary dark:hover:text-white sm:inline"
        >
          10
        </a>
        <a
          href="#"
          className="mx-1  transform rounded-full bg-primary px-4 py-2 text-white transition-colors duration-300 hover:bg-primary hover:text-white dark:bg-primary dark:text-white dark:hover:bg-primary dark:hover:text-white sm:inline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default AllCoursesList;