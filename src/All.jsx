import Hero from "./components/Home Ind/Hero";
import VerticalCard from "./components/Reusable Components/VerticalCard";
import Login from "./pages/Login";
import CourseHero from "./components/Course Description/CourseHero";
import ForgetPassword from "./pages/ForgetPassword";
// import Companies from "./components/Home Ind/Companies";
import Companies from "./components/Home Ind/Companies";
import WhatWeOffer from "./components/Home Ind/WhatWeOffer";
import BroadSelection from "./components/Home Ind/BroadSelection";
import FAQ from "./components/Home Ind/FAQ";
import RegisterToday from "./components/Home Ind/RegisterToday";
import Footer from "./components/Reusable Components/Footer";
import HeaderBefore from "./components/Reusable Components/HeaderBefore";
import Testimonial from "./components/Home Ind/Testimonial";
import Benefits from "./components/Home Ind/Benefits";
import ReviewModal from "./components/Reusable Components/Review Modal";
import HorizontalCard from "./components/Reusable Components/HorizontalCard";
import AllRating from "./components/Reusable Components/All Rating";
import CourseSidebar from "./components/Course Description/CourseSidebar";
import WhatYouLearn from "./components/Course Description/WhatYouLearn";
import CourseContent from "./components/Course Description/CourseContent";
import Categories from "./pages/Categories";
import CourseDetail from "./components/Course Description/CourseDetail";
import Instructor from "./components/Course Description/Instructor";
import RatingCard from "./components/Reusable Components/Rating Card";
import Rating from "./components/Course Description/Rating";
import OrganizationHome from "./pages/OrganizationHome";
import Lessons from "./pages/Lessons"
import NoCourseFound from "./components/Reusable Components/No Course Found";
import Four0four from "./components/Reusable Components/Four0four";
import Instructors from "./pages/Instructor";
import SignUp from "./pages/SignUp"
import AddedCourses from "./components/Add to Cart/AddedCourses";
import OrderDetail from "./components/Check Out/Order Detail";
import GovernmentHome from "./pages/Government Home"
import HeaderLesson from "./components/Reusable Components/Header Lesson";
import PrivacyAndPolicy from "./pages/PrivacyAndPolicy";

function All() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeaderLesson />
        <GovernmentHome />
        <PrivacyAndPolicy/>
        <br />
        <Instructors />
        <br />
        <SignUp />
        <br />
        <NoCourseFound />
        <br />
        <Four0four />
        <br />
        <Lessons />
        <br />
        <OrganizationHome />
        <br />
        <AllRating />
        <br />
        <br />
        <Categories />
        <br />
        <br />
        <br />
        <br />
        <div className="overflow-x-hidden">
          <VerticalCard />
        </div>
        <ReviewModal />
        <br />
        <HeaderBefore />
        <CourseHero />
        <WhatYouLearn />
        <CourseSidebar />
        <CourseContent />
        <CourseDetail />
        <Instructor />
        <RatingCard />
        <Rating />
        <br />
        <Login />
        <HorizontalCard />
        <OrderDetail/>
        <br />
        <AddedCourses/>
        <ForgetPassword />
        <HeaderBefore />
        <Hero />
        <Companies />
        <WhatWeOffer />
        <BroadSelection />
        <Benefits />
        <FAQ />
        <Testimonial />
        <RegisterToday />
        <Footer />
      </div>
      {/* <HorizontalCard /> */}
      {/* <Companies /> */}
    </>
  );
}

export default All;
