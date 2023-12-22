import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeaderBefore = () => {
  return (
    <>
      <div className="overflow-y-auto whitespace-nowrap bg-accent px-4 py-3">
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
          <div className="mx-4">
            <img src="/public/header individual.png" className="h-8" />
          </div>
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
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
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
