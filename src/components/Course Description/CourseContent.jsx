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
    <div className="mx-auto my-8 w-full lg:w-11/12">
      <h1 className="heading py-5">Course Content</h1>
      <div>
        {courseContent.map((item, index) => (
          <div key={index} className="">
            <div
              className="flex cursor-pointer flex-wrap items-center justify-between border border-secondary p-4 lg:w-7/12"
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
                  {item.numberofhours} hr {item.numberofminutes} min
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
                  className="w-full overflow-hidden"
                >
                  <div className="w-7/12 border border-secondary bg-white p-4">
                    <ul className="p-4">
                      <li className="flex">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height={24}
                          viewBox="0 0 16 16"
                          width={24}
                          className="css-f2w3r7 inline space-x-2"
                          id="cds-react-aria-58"
                        >
                          <g
                            clipPath="url(#cds-react-aria-58_0)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                          >
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                            <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
                          </g>
                          <defs>
                            <clipPath id="cds-react-aria-58_0">
                              <path fill="#fff" d="M0 0h16v16H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height={24}
                          viewBox="0 0 16 16"
                          width={24}
                          className="css-f2w3r7"
                          id="cds-react-aria-59"
                        >
                          <g
                            clipPath="url(#cds-react-aria-59_0)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                          >
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                            <path d="M3.5 5h3.518l.018.001a1.58 1.58 0 011.463 1.463l.001.018V12l-1 .03A1.1 1.1 0 006.484 11H3.5V5zm1 1v4H6.53a2.1 2.1 0 01.97.306V6.521A.58.58 0 006.98 6H4.5z" />
                            <path d="M8.982 5H12.5v6H9.517a1.1 1.1 0 00-1.018 1.03L7.5 12V6.5H8l-.499-.036a1.58 1.58 0 011.463-1.463L8.982 5zM8.5 6.52v3.786a2.1 2.1 0 01.97-.305L9.485 10H11.5V6H9.02a.58.58 0 00-.52.52z" />
                          </g>
                          <defs>
                            <clipPath id="cds-react-aria-59_0">
                              <path fill="#fff" d="M0 0h16v16H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height={24}
                          viewBox="0 0 16 16"
                          width={24}
                          data-testid="quiz-icon"
                          id="cds-react-aria-60"
                          className="css-0"
                        >
                          <g
                            clipPath="url(#cds-react-aria-60_0)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                          >
                            <path d="M4.39 3.61h7.22v8.78H4.39V3.61zm1 1v6.78h5.22V4.61H5.39z" />
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                            <path d="M6.5 6.29h3v1h-3v-1zM6.5 8.71h3v1h-3v-1z" />
                          </g>
                          <defs>
                            <clipPath id="cds-react-aria-60_0">
                              <path fill="#fff" d="M0 0h16v16H0z" />
                            </clipPath>
                          </defs>
                        </svg>

                        {item.answer}
                      </li>
                      <li className="flex">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height={24}
                          viewBox="0 0 16 16"
                          width={24}
                          className="css-f2w3r7 inline space-x-2"
                          id="cds-react-aria-58"
                        >
                          <g
                            clipPath="url(#cds-react-aria-58_0)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                          >
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                            <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
                          </g>
                          <defs>
                            <clipPath id="cds-react-aria-58_0">
                              <path fill="#fff" d="M0 0h16v16H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                        {item.answer}
                      </li>
                      <li className="flex">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height={24}
                          viewBox="0 0 16 16"
                          width={24}
                          className="css-f2w3r7 inline space-x-2"
                          id="cds-react-aria-58"
                        >
                          <g
                            clipPath="url(#cds-react-aria-58_0)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                          >
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                            <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
                          </g>
                          <defs>
                            <clipPath id="cds-react-aria-58_0">
                              <path fill="#fff" d="M0 0h16v16H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                        {item.answer}
                      </li>
                      <li className="flex">
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height={24}
                          viewBox="0 0 16 16"
                          width={24}
                          className="css-f2w3r7 inline space-x-2"
                          id="cds-react-aria-58"
                        >
                          <g
                            clipPath="url(#cds-react-aria-58_0)"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="currentColor"
                          >
                            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM.5 8a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0z" />
                            <path d="M5.5 3.59L12.431 8 5.5 12.41V3.59zm1 1.82v5.18L10.569 8 6.5 5.41z" />
                          </g>
                          <defs>
                            <clipPath id="cds-react-aria-58_0">
                              <path fill="#fff" d="M0 0h16v16H0z" />
                            </clipPath>
                          </defs>
                        </svg>
                        {item.answer}
                      </li>
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