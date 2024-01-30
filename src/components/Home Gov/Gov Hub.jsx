import React from 'react'
import { LiaUniversitySolid } from "react-icons/lia";
import { motion } from "framer-motion";

function GovHub() {
  return (
    <>
      <div className="w-full lg:m-3">
        <h1 className="heading lg:pl-10">Government Training Hub</h1>
        <div className="mx-auto flex w-11/12 flex-col lg:flex-row lg:p-5">
          <div className="w-full lg:w-1/2">
            <img src="/government training hub.jpg" alt="" />
          </div>
          <div className="w-full space-y-3 p-2 lg:w-1/2 lg:p-3 lg:pl-10">
            <span className="flex space-x-2">
              <LiaUniversitySolid className="h-10 w-10 text-primary" />
              <h1 className="heading">ENLN INSTITUTE</h1>
            </span>
            <p className="text text-2xl">
              Equip officials with vital skills for high-demand roles through
              Career Academy.
            </p>
            <h2 className="subheading">
              With our Acadamy, Your team can earn
            </h2>
            <ul className="list-disc px-5">
              <li>Job-ready Professional Certificates, </li>
              <li>Acquire essential skills valued by employers</li>
              <li>Join a vibrant community of learners and professionals</li>
              <li>
                Receive personalized feedback and guidance from expert
                instructors
              </li>
              <li>
                Build a portfolio showcasing mastery in various in-demand roles
                across industries.
              </li>
            </ul>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="btn btn-outline btn-primary w-full lg:ml-5 lg:flex lg:w-1/4 lg:items-center"
            >
              See Courses
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
}

export default GovHub