import React from 'react'
import GetYouStarted from '../components/Categories/GetYouStarted'
import FilterSidebar from '../components/Categories/FilterSidebar'
import AllCoursesList from '../components/Categories/AllCoursesList'
import HeaderBefore from "../components/Reusable Components/HeaderBefore";
import Footer from "../components/Reusable Components/Footer";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
function Categories() {
  return (
    <>
    <HeaderBefore/>
      <div className="w-11/12">
        <GetYouStarted />
        <div className="grid-rows mt-20 grid w-full lg:grid-cols-[30%,70%] ">
          <div className="lg:ml-2">
            <FilterSidebar />
          </div>
          <div className="ml-5 lg:ml-5">
            <AllCoursesList />
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
}

export default Categories