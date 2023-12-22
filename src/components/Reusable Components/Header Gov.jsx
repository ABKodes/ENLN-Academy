import React from "react";
import { Link } from "react-router-dom";
const HeaderGov = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className="scroll-hidden -mx-3 overflow-y-auto whitespace-nowrap bg-accent px-4 py-3">
        <a
          className="smalltext mx-4 transform uppercase leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0"
          href="#"
        >
          For individuals
        </a>
        <a
          className="smalltext mx-4 transform uppercase leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0"
          href="#"
        >
          for government
        </a>
        <a
          className="smalltext mx-4 transform uppercase leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0"
          href="#"
        >
          for organization
        </a>
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
          <div className=" menu  menu-horizontal space-x-5">
           
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
        <div className="navbar-end">
          <Link className="btn mr-8 rounded-sm border-none bg-slate-300 px-2 py-0 text-white">
            Contact Sales
          </Link>
        </div>
      </div>
    </>
  );
};
export default HeaderGov
