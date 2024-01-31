import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Four0four() {
  return (
    <>
      <div className="my-5 flex flex-col items-center">
        <img src="./404.svg" alt="" className="h-[80vh]" />
        <Link to="/individualhomepage">
          {" "}
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="buttontext btn  btn-primary hidden lg:flex lg:items-center"
          >
            Return to home
          </motion.a>
        </Link>
      </div>
    </>
  );
}

export default Four0four;