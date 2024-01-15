import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import VerticalCard from "../Reusable Components/VerticalCard";

function GetYouStarted() {
  const [activeTab, setActiveTab] = useState("tab1");
  const underlineControls = useAnimation();
  const [isMostPDropdownOpen, setMostPDropdownOpen] = useState(false);
  const [isNewDropdownOpen, setNewDropdownOpen] = useState(false);
  const [isTrendingDropdownOpen, setTrendingDropdownOpen] = useState(false);
 
const toggleMostPDropdown = () => {
  setMostPDropdownOpen((prev) => !prev);
};

const toggleNewDropdown = () => {
  setNewDropdownOpen((prev) => !prev);
};

const toggleTrendingDropdown = () => {
  setTrendingDropdownOpen((prev) => !prev);
};


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
      <div className="my-auto ml-5 lg:ml-20">
        <div className=" space-y-5">
          <h1 className="heading">Nutrition Leadership Courses</h1>
          <h2 className="subheading">Courses to get your Started</h2>
        </div>
        {/* Large screen view */}
        <ul className="relative hidden justify-start lg:flex">
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

        <div className="mt-4 hidden h-96 w-11/12 border-t-2 border-secondary p-4 lg:block">
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
        {/* Mobile view */}
        <div className="relative  mt-5 inline-block w-full border-t-2 text-left lg:hidden">
          <div
            onClick={toggleMostPDropdown}
            className=" text inline-flex w-full justify-between bg-white px-4 py-2 font-bold   focus:outline-none"
          >
            <span> Most Popular</span>

            <svg
              className=" h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {isMostPDropdownOpen && (
            <div className="relative mt-2  w-full origin-top-right  rounded-md  bg-white pl-5  ring-0">
              <div className="carousel carousel-center max-w-md space-x-4 rounded-box bg-neutral p-4">
                <div className="carousel-item ">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative  mt-5 inline-block w-full border-t-2 text-left lg:hidden">
          <div
            onClick={toggleTrendingDropdown}
            className=" text inline-flex w-full justify-between bg-white px-4 py-2 font-bold   focus:outline-none"
          >
            <span> Trending </span>

            <svg
              className=" h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {isTrendingDropdownOpen && (
            <div className="relative mt-2  w-full origin-top-right  rounded-md  bg-white pl-5  ring-0">
              <div className="carousel carousel-center max-w-md space-x-4 rounded-box bg-neutral p-4">
                <div className="carousel-item ">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="relative  mt-5 inline-block w-full border-t-2 text-left lg:hidden">
          <div
            onClick={toggleNewDropdown}
            className=" text inline-flex w-full justify-between bg-white px-4 py-2 font-bold   focus:outline-none"
          >
            <span> New </span>

            <svg
              className=" h-2.5 w-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 4 4 4-4"
              />
            </svg>
          </div>

          {isNewDropdownOpen && (
            <div className="relative mt-2  w-full origin-top-right  rounded-md  bg-white pl-5  ring-0">
              <div className="carousel carousel-center max-w-md space-x-4 rounded-box bg-neutral p-4">
                <div className="carousel-item ">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
                <div className="carousel-item">
                  <VerticalCard />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default  GetYouStarted;
