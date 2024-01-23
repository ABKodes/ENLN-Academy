import React from 'react'
import { motion } from "framer-motion";

function Four0four() {
  return (
    <>
      <div className="my-5 flex flex-col items-center">
        <img src="./404.svg" alt="" className='h-[80vh]'/>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="buttontext btn  btn-primary hidden lg:flex lg:items-center"
        >
          Return to home
        </motion.a>
      </div>
    </>
  );
}

export default Four0four;