import { motion } from "framer-motion";
function CourseSidebar() {
  return (
    <div className=" w-3/12 rounded-lg bg-white p-4 shadow border border-primary  sm:p-8">
      <div className="flex items-center space-x-2">
        <img src="/public/money svg.svg" className="h-20 w-20" />
        <div>
          <div className="flex items-center space-x-2 text-justify">
            <h5 className="text dark:text-gray-400">
              One time
            </h5>
            <p className=" text badge badge-primary badge-outline uppercase">
              virtual
            </p>
          </div>
          <h5 className="subheading">Birr 1,500</h5>
        </div>
      </div>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text ms-1 font-normal text-gray-500 dark:font-bold">
          What this code includes
        </span>
      </div>
      <ul role="list" className="my-7 space-y-5">
        <li className="flex items-center text-justify">
          <svg
            aria-hidden="true"
            fill="none"
            height={20}
            viewBox="0 0 16 16"
            width={20}
            className="css-f2w3r7"
          >
            <g
              clipPath="url(#cds-react-aria-24_0)"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
              <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
            </g>
            <defs>
              <clipPath id="cds-react-aria-24_0">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          <span className="ms-3 text font-normal leading-tight">
            2 team members
          </span>
        </li>
        <li className="flex">
          <svg
            aria-hidden="true"
            fill="none"
            height={20}
            width={20}
            viewBox="0 0 16 16"
            className="css-f2w3r7"
          >
            <g
              clipPath="url(#cds-react-aria-25_0)"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
              <path d="M3.5 5h3.518l.018.001a1.58 1.58 0 011.463 1.463l.001.018V12l-1 .03A1.1 1.1 0 006.484 11H3.5V5zm1 1v4h2.03a2.1 2.1 0 01.97.306V6.521A.58.58 0 006.98 6H4.5z" />
              <path d="M8.982 5H12.5v6H9.517a1.1 1.1 0 00-1.018 1.03L7.5 12V6.5H8l-.499-.036a1.58 1.58 0 011.463-1.463L8.982 5zM8.5 6.52v3.786a2.1 2.1 0 01.97-.305L9.485 10H11.5V6H9.02a.58.58 0 00-.52.52z" />
            </g>
            <defs>
              <clipPath id="cds-react-aria-25_0">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          <span className="ms-3 text font-normal leading-tight "> 
            20GB Cloud storage
          </span>
        </li>
        <li className="flex">
          <svg
            aria-hidden="true"
            fill="none"
            height={20}
            viewBox="0 0 16 16"
            width={20}
            data-testid="quiz-icon"
            className="css-0"
          >
            <g
              clipPath="url(#cds-react-aria-47_0)"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M4.39 3.61h7.22v8.78H4.39V3.61zm1 1v6.78h5.22V4.61H5.39z" />
              <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
              <path d="M6.5 6.29h3v1h-3v-1zm0 2.42h3v1h-3v-1z" />
            </g>
            <defs>
              <clipPath id="cds-react-aria-47_0">
                <path fill="#fff" d="M0 0h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          <span className="ms-3 text font-normal leading-tight ">
            Integration help
          </span>
        </li>
        <li className="flex">
          <svg
            aria-hidden="true"
            fill="none"
            height={20}
            viewBox="0 0 24 24"
            width={20}
            className="css-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M.5 2.5h23v19H.5v-19zm1 1v17h21v-17h-21z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.43 12.52h1v3.453l1.24-.635 1.24.635V12.52h1v5.087l-2.24-1.145-2.24 1.145V12.52z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.67 7.27a2.63 2.63 0 100 5.26 2.63 2.63 0 000-5.26zM13.04 9.9a3.63 3.63 0 117.26 0 3.63 3.63 0 01-7.26 0z"
              fill="currentColor"
            />
          </svg>
          <span className="ms-3 text text-justify font-normal leading-tight text-gray-500">
            Sketch Files
          </span>
        </li>
      </ul>
      <div className="space-y-5">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="buttontext btn btn-primary mt-6 w-full rounded-lg border-none px-8 py-2 tracking-wider duration-300 lg:w-full "
        >
          Add to Cart
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="buttontext btn btn-outline btn-primary flex lg:items-center"
        >
          Buy Now
        </motion.a>
      </div>
    </div>
  );
}

export default CourseSidebar;
