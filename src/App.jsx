import Hero from "./components/Home Ind/Hero";
import VerticalCard from "./components/Reusable Components/VerticalCard";
import Login from "./pages/Login";
import CourseHero from "./components/Course Description/CourseHero";
import ForgetPassword from "./pages/ForgetPassword";
// import Companies from "./components/Home Ind/Companies";
import OrgHero from "./components/Home Org/Hero";
import Partners from "./components/Home Org/Partners";
import HeaderOrg from "./components/Reusable Components/Header Org";
// import Enhanceexperiance from "./components/Home Org/Enhance experiance";
import Companies from "./components/Home Ind/Companies";
import WhatWeOffer from "./components/Home Ind/WhatWeOffer";
import BroadSelection from "./components/Home Ind/BroadSelection";
//import AllCourseList from "./components/Categories/AllCoursesList"
import FAQ from "./components/Home Ind/FAQ";
import RegisterToday from "./components/Home Ind/RegisterToday";
import Footer from "./components/Reusable Components/Footer";
import HeaderBefore from "./components/Reusable Components/HeaderBefore";
import Testimonial from "./components/Home Ind/Testimonial";
import Benefits from "./components/Home Ind/Benefits";
import ReviewModal from "./components/Reusable Components/Review Modal";
import HorizontalCard from "./components/Reusable Components/HorizontalCard";
import AllRating from "./components/Reusable Components/All Rating";
import AllCoursesList from "./components/Categories/AllCoursesList";
import FilterSidebar from "./components/Categories/FilterSidebar";
import CourseSidebar from "./components/Course Description/CourseSidebar";
import CourseDetail from "./components/Course Description/CourseDetail";
import WhatYouLearn from "./components/Course Description/WhatYouLearn";
const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const truncateLength = 100;
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeaderOrg />
        <br />
        <OrgHero />
        <br />
        <div className="overflow-x-hidden">
          <Partners />
        </div>
        <br />
        <AllRating />
        <br />
        <AllCoursesList />
        <br />
        <FilterSidebar />
        <br />
        <br />
        <br />
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
        <CourseSidebar />
        <div className="container mx-auto p-4">
          <CourseDetail text={longText} truncateLength={truncateLength} />
        </div>
        <WhatYouLearn />
        <br />
        <Login />
        <HorizontalCard />
        <br />
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

export default App;
