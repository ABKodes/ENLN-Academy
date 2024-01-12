import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function WhatYouLearn() {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const fadeVariants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };

  const listItems = [
    "Mastering the Fundamentals of Data Science",
    "Advanced Techniques in Digital Marketing Strategy",
    "Building Scalable and Secure Cloud Applications",
    "Effective Leadership and Team Management Skills",
    "Web Development with the Latest Frontend Frameworks",
    "Cybersecurity Essentials for IT Professionals",
    "Graphic Design Mastery with Adobe Creative Suite",
    "Financial Planning and Investment Strategies",
    "Mobile App Development for iOS and Android",
    "Business Analytics and Data Visualization",
    "UI/UX Design Principles and Best Practices",
    "Machine Learning Algorithms and Applications",
    "Social Media Marketing for Brand Growth",
    "Project Management in Agile Environments",
    "Creative Writing and Storytelling Techniques",
    "Blockchain Technology and Cryptocurrency",
    "Professional Photography and Photo Editing",
    "Public Speaking and Presentation Skills",
    "Game Development with Unity and Unreal Engine",
    "Effective Communication in the Workplace",
    // Repeat the list as needed
  ];

  const shownItems = isTruncated ? listItems.slice(0, 5) : listItems;

  return (
    <div className="mx-auto w-11/12 overflow-hidden">
      <h1 className="heading">What You'll Learn</h1>
      <div className={`relative w-7/12 border border-secondary p-5`}>
        <AnimatePresence>
          {isTruncated && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariants}
              transition={{ duration: 0.5 }}
              className="list-disc columns-2 gap-10 text-left"
            >
              {/* Only show the first 5 items */}
              {listItems.slice(0, 6).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </motion.div>
          )}
          {!isTruncated && (
            <motion.div
              key="content"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeVariants}
              transition={{ duration: 0.5 }}
              className="list-disc columns-2 gap-10 text-left"
            >
              {/* Show all items */}
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="mt-2 cursor-pointer rounded text-primary focus:outline-none"
          onClick={toggleTruncation}
        >
          {isTruncated ? (
            <div className="flex text-justify items-center">
              Show More <MdKeyboardArrowDown />
            </div>
          ) : (
            <div className="flex text-justify items-center">
              Show Less <MdKeyboardArrowUp />
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default WhatYouLearn;
