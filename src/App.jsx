import Hero from "./components/Home Ind/Hero"
import VerticalCard from "./components/Reusable Components/VerticalCard";
import Login from "./pages/Login"
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
import Footer from "./components/Reusable Components/Footer"
import HeaderBefore from "./components/Reusable Components/HeaderBefore"
import Testimonial from "./components/Home Ind/Testimonial";
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
        <br />
        <div className="overflow-x-hidden">
          <VerticalCard />
        </div>
        <br />
        <Login />
        <ForgetPassword />
        <HeaderBefore/>
        <Hero />
        <Companies />
        <WhatWeOffer />
        <BroadSelection/>
        <FAQ/>
        <Testimonial />
        <RegisterToday/>
        <Footer/>
      </div>
      {/* <HorizontalCard /> */}
      {/* <Companies /> */}
    </>
  );
}

export default App;
