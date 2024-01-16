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
// import AllCoursesList from "./components/Categories/AllCoursesList";
// import FilterSidebar from "./components/Categories/FilterSidebar";
import CourseSidebar from "./components/Course Description/CourseSidebar";
import WhatYouLearn from "./components/Course Description/WhatYouLearn";
import CourseContent from "./components/Course Description/CourseContent";
import Categories from "./pages/Categories";
import CourseDetail from "./components/Course Description/CourseDetail";
import Instructor from "./components/Course Description/Instructor";
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
        <LeftSideBar/>
        <br />
        <br />
        <Categories/>
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
        <WhatYouLearn />
        <CourseContent />
        <CourseDetail/>
        <Instructor />
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
