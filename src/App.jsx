// import React from 'react'

import { Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./components/Instructor/Profile";
import About from "./components/Instructor/About";
import MyCourses from "./components/Instructor/My Courses"
import Instructors from "./pages/Instructor";
import SignUp from "./pages/SignUp"
import HeroI from "./components/Home Gov/Hero";
import AddedCourses from "./components/Add to Cart/AddedCourses";
import OrderDetail from "./components/Check Out/Order Detail";
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeroI />
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
        <Sampleforwhyus />
        <br />
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
        <Instructor/>
        <RatingCard />
        <Rating />
        <br />
        <Login />
        <HorizontalCard />
        <AddedCourses/>
        <OrderDetail/>
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
};

export default App;
