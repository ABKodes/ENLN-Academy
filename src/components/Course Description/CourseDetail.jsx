import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "tailwindcss/tailwind.css";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const CourseDetail = ({ text, truncateLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const fadeVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <p className="text-gray-700">
          {isTruncated ? text.slice(0, truncateLength) + "..." : text}
        </p>
        {isTruncated && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeVariants}
            transition={{ duration: 0.5 }}
            className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-transparent to-white"
          />
        )}
      </div>
      <AnimatePresence>
        {!isTruncated && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={fadeVariants}
            transition={{ duration: 0.5 }}
            className="text-gray-700"
          >
            {text.slice(truncateLength)}
          </motion.span>
        )}
      </AnimatePresence>
      <Link className="smalltext group relative mx-4 transform leading-5 text-primary duration-300 dark:text-primary md:my-0">
        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary transition-transform group-hover:scale-x-100"></span>
        <motion.a
          className="mt-2 cursor-pointer rounded text-primary focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={toggleTruncation}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isTruncated ? (
            <div className="flex">
              Show More <MdKeyboardArrowDown />
            </div>
          ) : (
            <div className="flex">
              Show Less <MdKeyboardArrowUp />
            </div>
          )}
        </motion.a>
      </Link>
    </div>
  );
};

export default CourseDetail;