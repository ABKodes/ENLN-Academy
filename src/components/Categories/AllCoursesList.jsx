import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import VerticalCard from "../Reusable Components/VerticalCard"

function AllCoursesList() {
  const [activeTab, setActiveTab] = useState("tab1");
  const underlineControls = useAnimation();

  const tabs = [
    { id: "tab1", label: "Most Popular", content: "Tab 1 Content" },
    { id: "tab2", label: "New", content: "Tab 2 Content" },
    { id: "tab3", label: "Trending", content: "Tab 3 Content" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    moveUnderline(tabId);
  };

  const moveUnderline = (tabId) => {
    const tabElement = document.getElementById(tabId);
    const UNDERLINE_WIDTH = 150; // Set this to your desired fixed width
    if (tabElement) {
      const { offsetLeft, offsetWidth } = tabElement;
      underlineControls.start({
        left: offsetLeft + (offsetWidth - UNDERLINE_WIDTH) / 2, // Center the underline
        width: UNDERLINE_WIDTH, // Fixed width
      });
    }
  };

  // Set the initial position of the underline when the component mounts
  useEffect(() => {
    moveUnderline(activeTab);
  }, [activeTab]); // dependency on activeTab to reposition underline if the activeTab changes

  return (
    <>
      <div className="my-auto ml-20">
        <div className=" space-y-5">
          <h1 className="heading">Nutrition Leadership Courses</h1>
          <h2 className="subheading">Courses to get your Started</h2>
        </div>
        <ul className="relative flex justify-start">
          {tabs.map((tab) => (
            <motion.li
              key={tab.id}
              whileTap={{ scale: 0.95 }}
              className={`mx-2 cursor-pointer rounded-t-md p-4 ${
                activeTab === tab.id
                  ? "font-bold text-primary"
                  : "text-gray-600"
              }`}
              onClick={() => handleTabClick(tab.id)}
              id={tab.id} // Added id to identify the tab element
            >
              {tab.label}
            </motion.li>
          ))}
          <motion.div
            className="absolute bottom-0 left-1 h-1 bg-primary"
            animate={underlineControls}
          />
        </ul>

        <div className="mt-4 h-96 w-11/12 border-t-2 border-secondary p-4">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex">
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                    <VerticalCard />
                  </div>
                </motion.div>
              ),
          )}
        </div>
      </div>
    </>
  );
}

export default AllCoursesList;
