import { Link } from "react-router-dom";
import CourseContent from "../components/Course Description/CourseContent";
import CourseDetail from "../components/Course Description/CourseDetail";
import CourseHero from "../components/Course Description/CourseHero";
import CourseSidebar from "../components/Course Description/CourseSidebar";
import Instructor from "../components/Course Description/Instructor";
import WhatYouLearn from "../components/Course Description/WhatYouLearn";
import RatingCard from "../components/Reusable Components/Rating Card";
function CourseDescription() {
  return (
    <div >
      <CourseHero />
      <div className="mx-auto flex h-auto w-full">
        <WhatYouLearn />
      </div>
      <div className="px-2 sm:px-4 md:px-6 lg:px-8">
      <CourseContent />
        {/* <CourseSidebar /> */}
      <CourseDetail />
      <Instructor />
      <RatingCard />
      </div>
    </div>
  );
}

export default CourseDescription;
