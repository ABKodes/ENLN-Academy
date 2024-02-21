import React, { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function CourseDetail() {
  const longText =
    "Before embarking on this learning journey, ensure that you have the prerequisites to maximize engagement and success in the course. You should be comfortable using a computer, navigating software, and browsing the internet. A reliable internet connection is essential for accessing course materials and online resources. Whether using a computer, laptop, tablet, or smartphone, ensure your device has modern browsers for compatibility. Familiarity with common productivity tools like word processors and PDF readers is necessary. Proficiency in the language of instruction is vital for comprehending lectures and written materials. Dedicate sufficient time for reading, watching videos, and completing assignments according to the course schedule. Have note-taking tools, either digital or traditional, ready to capture key concepts. Approach the course with an open mindset, engaging with diverse perspectives and actively participating in discussions and collaborative projects. Intrinsic motivation and a positive learning attitude are key. Check for any hardware requirements specified in the course description and ensure familiarity with prerequisite subjects, if applicable. Enroll or have access to the designated learning platform for course materials and communication. For any questions or concerns about the requirements, feel free to reach out to the course instructor or support team for assistance.";

  const [showFullText, setShowFullText] = useState(false);

  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="mx-auto w-11/12">
      <div className="w-7/12">
        <p className="heading">Requirements</p>
        <p className={`text py-5 ${showFullText ? "block text-gray-700 amir text-start" : "truncate text-gray-700 amir text-start"}`}>
          {longText}
        </p>
        {showFullText ? (
          <>
            <p className="heading">Description</p>
            <p className="text py-5">{longText}</p>
            <p className="heading">Who is this Course for</p>
            <p className="text py-5">{longText}</p>
          </>
        ) : null}
      </div>
      <button
        className="group relative transform cursor-pointer leading-5 text-primary duration-300 dark:text-primary md:my-0"
        onClick={toggleShowFullText}
      >
        {showFullText ? (
          <div className="flex items-center text-justify">
            Show Less <MdKeyboardArrowUp />
          </div>
        ) : (
          <div className="flex items-center text-justify">
            Show More <MdKeyboardArrowDown />
          </div>
        )}
        <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary underline transition-transform group-hover:scale-x-100"></span>
      </button>
    </div>
  );
}

export default CourseDetail;
