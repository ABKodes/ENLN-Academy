import { Link } from "react-router-dom";
import CourseContent from "../components/Course Description/CourseContent";
import CourseDetail from "../components/Course Description/CourseDetail";
import CourseHero from "../components/Course Description/CourseHero";
import CourseSidebar from "../components/Course Description/CourseSidebar";
import Instructor from "../components/Course Description/Instructor";
import Rating from "../components/Course Description/Rating";
import WhatYouLearn from "../components/Course Description/WhatYouLearn";
import RatingCard from "../components/Reusable Components/Rating Card";
function CourseDescription() {
  return (
    <div>
      <CourseHero />
      <WhatYouLearn />
      <CourseSidebar />
      <CourseDetail />
      <Instructor />
      <CourseContent />
      <RatingCard/>
    </div>
  );
}

export default CourseDescription;
