import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import VerticalCard from "../Reusable Components/VerticalCard";
const BroadSelection = () => {
  const [position, setPosition] = useState(0);

  const handlePreviousClick = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const handleNextClick = () => {
    if (position < 6) {
      setPosition(position + 1);
    }
  };

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item, index) => {
      if (index === position) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }, [position]);

  const [activeTab, setActiveTab] = useState("tab1");
  const underlineControls = useAnimation();

  const tabs = [
    {
      id: "tab1",
      label: "Nutrition Leadership",
      heading: "Expand your career opportunities with Nutrition Leadership",
      content:
        "Enhance your career prospects by delving into Nutrition Leadership. This program is designed to broaden your knowledge and skills in nutrition, providing valuable insights into leadership within the field. Elevate your career trajectory with a focus on nutrition leadership.",
    },
    {
      id: "tab2",
      label: "Evidence to Policy",
      heading: "Expand your career opportunities with Evidence to Policy",
      content:
        "Enhance your career prospects by delving into Nutrition Leadership. This program is designed to broaden your knowledge and skills in nutrition, providing valuable insights into leadership within the field. Elevate your career trajectory with a focus on nutrition leadership.",
    },
    {
      id: "tab3",
      label: "Communication",
      heading: "Expand your career opportunities with Communication",
      content:
        "Enhance your career prospects by delving into Nutrition Leadership. This program is designed to broaden your knowledge and skills in nutrition, providing valuable insights into leadership within the field. Elevate your career trajectory with a focus on nutrition leadership.",
    },
    {
      id: "tab4",
      label: "Advocacy",
      heading: "Expand your career opportunities with Advocacy",
      content:
        "Enhance your career prospects by delving into Nutrition Leadership. This program is designed to broaden your knowledge and skills in nutrition, providing valuable insights into leadership within the field. Elevate your career trajectory with a focus on nutrition leadership.Expand your career opportunities with Nutrition Leadership",
    },
    {
      id: "tab5",
      label: "Nutrition Courses",
      heading: "Expand your career opportunities with Nutrition Courses",
      content:
        "Enhance your career prospects by delving into Nutrition Leadership. This program is designed to broaden your knowledge and skills in nutrition, providing valuable insights into leadership within the field. Elevate your career trajectory with a focus on nutrition leadership.Expand your career opportunities with Nutrition Leadership",
    },
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
    <div className="mx-auto mt-8 w-11/12 overflow-hidden">
      <h1 className="heading">Broad Selection of Courses</h1>
      <p className="text py-5">
        Explore a selection of more than 210,000 online video courses, and
        discover new courses added every month.
      </p>
      <ul className="relative flex flex-col md:flex-wrap md:flex-row justify-start">
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
          className="absolute bottom-0 left-1 h-0 lg:h-1 bg-primary"
          animate={underlineControls}
        />
      </ul>

      <div className="mt-4 min-h-[77vh] border border-secondary p-4 lg:max-h-screen lg:min-h-[77vh]">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="subheading">{tab.heading}</h1>
                <h1 className="text lg:w-1/2 py-2">{tab.content}</h1>
                <Link to="/categories">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="buttontext btn btn-outline btn-primary my-5 px-10"
                  >
                    Explore
                  </motion.a>
                </Link>
                <div className="flex space-x-2">
                  <VerticalCard />
                </div>
              </motion.div>
            ),
        )}
      </div>
    </div>
  );
};

export default BroadSelection;
