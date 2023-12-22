import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const HeaderGov = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
      <div className="navbar bg-secondary">
        <div className="navbar-start">
          <Link to="/" className="">
            <img
              className="btn btn-ghost h-8"
              src="/header gov.png"
              alt="GOV Logo"
              // Adjust dimensions as needed
            />
          </Link>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <div className=" menu  menu-horizontal space-x-8">
            <Link className="group relative  text-primary hover:font-bold">
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link className="group relative text-primary hover:font-bold">
              Why Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
            </Link>
          </div>
        </div>
        <div className="navbar-end mr-8">
          <motion.a
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 0.9 }}
            whileTap={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="btn btn-primary"
          >
            Contact Sales
          </motion.a>
        </div>
      </div>
    </>
  );
};
export default HeaderGov
