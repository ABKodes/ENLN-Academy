
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
 const HeaderGov = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
   return (
     <>
       <div className="hidden overflow-y-auto whitespace-nowrap bg-accent px-4 py-3 lg:block">
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
               onClick={toggleMenu}
             >
               {isOpen ? (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-6 w-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M6 18L18 6M6 6l12 12"
                   />
                 </svg>
               ) : (
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   className="h-6 w-6"
                   fill="none"
                   viewBox="0 0 24 24"
                   stroke="currentColor"
                 >
                   <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M4 6h16M4 12h16M4 18h16"
                   />
                 </svg>
               )}
             </div>
             <div
               className={`absolute inset-x-0  z-20 w-full  px-6 py-2 transition-all duration-300 ease-in-out md:relative md:top-0 md:mt-0 md:flex md:w-auto md:translate-x-0 md:items-center md:bg-transparent md:p-0 md:opacity-100 ${
                 isOpen
                   ? "translate-x-0 opacity-100"
                   : "-translate-x-full opacity-0"
               }`}
             >
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
           </div>
           {/* Logo */}
           <div className="mx-4 hidden lg:block">
             <Link>
               <img src="/public/header org.png" className="h-8" />
             </Link>
           </div>
         </div>
         <div className="navbar-center hidden lg:flex">
           <ul className="menu menu-horizontal px-1">
             <li>
               <Link className="group relative  text-lg text-primary hover:font-bold lg:text-base">
                 About Us
                 <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
               </Link>
             </li>
             <li></li>
             <li>
               <Link className="group relative  text-lg text-primary hover:font-bold lg:text-base">
                 Why Us
                 <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
               </Link>
             </li>
           </ul>
         </div>
         {/* Mobile Logo */}
         <div className="navbar-center lg:hidden">
           <img src="/public/header individual.png" className="h-8" />
         </div>
         <div className="navbar-end space-x-2 lg:mr-7">
           <motion.a
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
             className="btn btn-primary btn-sm lg:btn-md"
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
