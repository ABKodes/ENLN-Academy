
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
 const HeaderGov = () => {
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
       <div className="navbar bg-slate-300">
         <div className="navbar-start">
           <div className="dropdown">
             <div
               tabIndex={0}
               role="button"
               className="btn btn-ghost lg:hidden"
             >
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
           <a className="btn btn-ghost h-8 text-xl md:justify-center">
             <img src="header org.png" alt="" className="h-8" />
           </a>
         </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="menu menu-horizontal px-1">
             <li>
               <Link className="group relative  text-primary hover:font-bold">
                 About Us
                 <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
               </Link>
             </li>
             <li></li>
             <li>
               <Link className="group relative text-primary hover:font-bold">
                 Why Us
                 <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
               </Link>
             </li>
           </ul>
         </div>
         <div className="navbar-end space-x-2">
           <motion.a
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
             className="btn btn-primary"
           >
             Contact Sales
           </motion.a>
         </div>
       </div>
       ;
     </>
   );
 };
export default HeaderGov
