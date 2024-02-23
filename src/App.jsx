import { Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./components/Instructor/Profile";
import CourseLine from "./components/CourseContent/CourseLine";
import ProfileDashboard from "./components/Profile/ProfileDashboard";
import Certificate from "./components/Profile/Certificate";
import { Setting } from "./components/Profile/Setting";
import Support from "./components/Profile/Support";
import MyCourse from "./components/Profile/MyCourses";
import Dashboard from "./components/Profile/Dashboard";
import IndHomePage from "./pages/Ind Home Page";
import HeaderBefore from "./components/Reusable Components/HeaderBefore";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Four0four from "./components/Reusable Components/Four0four";
import GovernmentHome from "./pages/Government Home";
import OrganizationHome from "./pages/OrganizationHome";
import CourseDescription from "./pages/Course Description";
import AddToCart from "./pages/Add To Cart";
import CheckOut from "./pages/Check Out";
import OrgForm from "./pages/OrgForm";
import AddedCourses from "./components/Add to Cart/AddedCourses";
import Categories from "./pages/Categories";
import OrderDetail from "./components/Check Out/Order Detail";
import ForgetPassword from "./pages/ForgetPassword";
// import HeaderLesson from "./components/Reusable Components/Header Lesson";
import GovForm from "./pages/Gov Form";
import AboutUs from "./pages/About Us"; 
import Footer from "./components/Reusable Components/Footer";
import Instructor from "./pages/Instructor";
import Lessons from "./pages/Lessons";
function App() {
  return (
      <div className="overflow-x-hidden">
        <HeaderBefore />
        <Routes>
          <Route path="/" index element={<IndHomePage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="individualhomepage" index element={<All />} />
          <Route path="govform" element={<GovForm />} />
          <Route path="course-line" element={<CourseLine />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="governmenthome" element={<GovernmentHome />} />
          <Route path="organizationhome" element={<OrganizationHome />} />
          <Route path="addtocart" element={<AddedCourses />} />
          <Route path="categories" element={<Categories />} />
          <Route path="checkout" element={<OrderDetail/>} />
          <Route path="forgetpassword" element={<ForgetPassword/>} />
          {/* <Route path="lessonheader" element={< HeaderLesson/>} /> */}
          <Route path = "instructor" element={<Instructor/>} />
          <Route path='lesson' element={<Lessons />} />
          <Route
            path="/certificate"
            element={
              <ProfileDashboard>
                <Certificate />
              </ProfileDashboard>
            }
          />
          <Route
            path="/settings"
            element={
              <ProfileDashboard>
                <Setting />
              </ProfileDashboard>
            }
          />
          <Route
            path="/support"
            element={
              <ProfileDashboard>
                <Support />
              </ProfileDashboard>
            }
          />
          <Route
            path="/my-courses"
            element={
              <ProfileDashboard>
                <MyCourse />
              </ProfileDashboard>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProfileDashboard>
                <Dashboard />
              </ProfileDashboard>
            }
          />
          <Route path="*" element={<Four0four />} />
          <Route path="coursedescription" element={<CourseDescription />} />
          <Route path="addtocart" element={<AddToCart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="organizationform" element={<OrgForm />} />
          <Route path="governmentform" element={<GovForm />} />
          <Route path="aboutus" element={<AboutUs />}/>
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
