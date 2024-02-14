import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { TfiClose } from "react-icons/tfi";
import HeaderLogo from "/public/header individual.png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("individuals");
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleSearchBarClick = () => {
    setIsClicked(true);
  };

  const handleSearchBarBlur = () => {
    setIsClicked(false);
  };
  return (
    <>
      <div className="hidden overflow-y-auto whitespace-nowrap bg-accent px-4 py-3 lg:block">
        <Link
          to="/individualhomepage"
          className={`smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0`}
          onClick={() => setActiveLink("individuals")}
        >
          For individuals
          {activeLink === "individuals" && (
            <motion.div
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-secondary underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.div>
          )}
        </Link>

        <Link
          to="/governmenthome"
          className={`smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0`}
          onClick={() => setActiveLink("government")}
        >
          For government
          {activeLink === "government" && (
            <motion.div
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-secondary underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.div>
          )}
        </Link>
        <Link
          to="/organizationhome"
          className={`smalltext group relative mx-4 transform uppercase leading-5 text-secondary duration-300 dark:text-secondary md:my-0`}
          onClick={() => setActiveLink("organization")}
        >
          For organization
          {activeLink === "organization" && (
            <motion.div
              className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-secondary underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            ></motion.div>
          )}
        </Link>
      </div>
      <div className="sticky top-0 z-50 bg-slate-300">
        <nav className="relative mx-auto flex w-11/12  items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <Link to="/individualhomepage" className="mx-4 hidden lg:block">
              <img src={HeaderLogo} className="h-8" />
            </Link>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center p-3 text-primary"
                onClick={toggleMenu}
              >
                <svg
                  className="block h-5 w-5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
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
          <Link to="/individualhomepage" className="mx-4  lg:hidden">
            <img src={HeaderLogo} className="h-8" />
          </Link>
          <div className="flex space-x-3">
            <div className="dropdown dropdown-end dropdown-hover">
              <Link to="/addtocart" className="btn btn-circle btn-ghost">
                {" "}
                {/* Modify this line */}
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
              </Link>{" "}
              {/* Modify this line */}
              <div
                tabIndex={0}
                className="card dropdown-content card-compact z-[1] mt-3 w-52 bg-base-100 shadow"
              >
                <div className="card-body bg-secondary">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <a href="/cart" className="btn btn-primary btn-block">
                      {" "}
                      {/* Modify this line */}
                      View cart
                    </a>{" "}
                    {/* Modify this line */}
                  </div>
                </div>
              </div>
            </div>
            <Link to="/login">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn btn-outline btn-primary hidden lg:flex lg:items-center"
              >
                Log In
              </motion.a>
            </Link>
            <Link to="/signup">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="btn btn-primary hidden lg:flex lg:items-center"
              >
                Sign Up
              </motion.a>
            </Link>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="navbar-menu fixed inset-0 z-50 bg-gray-800 bg-opacity-25"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className=" flex items-end justify-end  p-3 ">
              <button
                className="navbar-close flex items-center rounded-full bg-white p-3 "
                onClick={toggleMenu}
              >
                <TfiClose className="z-40 h-6 w-6 cursor-pointer font-bold text-primary hover:text-accent " />
              </button>
            </div>
            <motion.nav
              className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
            >
              <div>
                <ul>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Parent
                    </a>
                    <ul className="p-2">
                      <li>
                        <a
                          className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                          href="#"
                        >
                          Submenu 1
                        </a>
                      </li>
                      <li>
                        <a
                          className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                          href="#"
                        >
                          Submenu 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-1">
                    <a
                      className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-secondary hover:text-primary"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-auto">
                <div className="pt-6">
                  <Link
                    to="/login"
                    className="mb-3 block rounded-xl bg-secondary px-4 py-3 text-center text-xs font-semibold leading-loose text-primary"
                    href="#"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/signup"
                    className="mb-2 block rounded-xl bg-primary px-4 py-3 text-center text-xs font-semibold leading-loose text-white"
                    href="#"
                  >
                    Sign Up
                  </Link>
                </div>
                <div className="flex items-center justify-between lg:hidden">
                  <Link to="/individualhomepage" className="">
                    <img src={HeaderLogo} className="h-4" />
                  </Link>
                  <p className="my-4 text-center text-xs text-gray-400">
                    <span>Copyright © 2021</span>
                  </p>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Header;
