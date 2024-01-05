import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const BroadSelection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const underlineControls = useAnimation();

  const tabs = [
    { id: "tab1", label: "Nutrition Leadership", content: "Tab 1 Content" },
    { id: "tab2", label: "Evidence to Policy", content: "Tab 2 Content" },
    { id: "tab3", label: "Communication", content: "Tab 3 Content" },
    { id: "tab4", label: "Advocacy", content: "Tab 4 Content" },
    { id: "tab5", label: "Nutrition Courses", content: "Tab 5 Content" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    moveUnderline(tabId);
  };

  const moveUnderline = (tabId) => {
    const tabElement = document.getElementById(tabId);
    if (tabElement) {
      const { offsetLeft, offsetWidth } = tabElement;
      underlineControls.start({ left: offsetLeft, width: offsetWidth });
    }
  };

  return (
    <div className="mx-auto mt-8 w-11/12">
      <h1 className="heading">Broad Selection of Courses</h1>
      <p className="text py-5">
        Explore a selection of more than 210,000 online video courses, and
        discover new courses added every month.
      </p>
      <ul className="relative flex justify-start">
        {tabs.map((tab) => (
          <motion.li
            key={tab.id}
            whileTap={{ scale: 0.95 }}
            className={`mx-2 cursor-pointer rounded-t-md p-4 ${
              activeTab === tab.id ? "font-bold text-primary" : "text-gray-600"
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

      <div className="mt-4 border border-secondary p-4 h-96">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            ),
        )}
      </div>
    </div>
  );
};

export default BroadSelection;
