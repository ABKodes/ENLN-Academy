import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const courseContent = [
  {
    title: "Nutrition for Beginners",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    numberoflectures: 3,
    numberofhours: 10,
    numberofminutes: 4,
  },
  {
    title: "Nutrition for Intermediates",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    numberoflectures: 6,
    numberofhours: 2,
    numberofminutes: 15,
  },
  {
    title: "Nutrition for Advanced",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    numberoflectures: 5,
    numberofhours: 12,
    numberofminutes: 7,
  },
];

const CourseContent = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleToggle = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <div className="mx-auto my-8 w-11/12">
      <h1 className="heading py-5">Course Content</h1>
      <div>
        {courseContent.map((item, index) => (
          <div key={index} className="">
            <div
              className="flex w-7/12 cursor-pointer items-center justify-between border border-secondary p-4"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className={`transform transition-transform ${
                    selectedQuestion === index ? "" : "rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#025464"
                  width="24"
                  height="24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="text-lg font-semibold">{item.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text font-light">
                  {item.numberoflectures} lectures
                </span>
                <div className="h-1 w-1 items-center justify-center rounded-full bg-primary"></div>
                <span className="text font-light">
                  {item.numberofhours}hr {item.numberofminutes} min
                </span>
              </div>
            </div>
            <AnimatePresence>
              {selectedQuestion === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="w-7/12 border border-secondary bg-white p-4">
                    <ul className="list-disc p-4">
                      <li>{item.answer}</li>
                      <li>{item.answer}</li>
                      <li>{item.answer}</li>
                      <li>{item.answer}</li>
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;
