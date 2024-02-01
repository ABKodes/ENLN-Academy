import { Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./components/Instructor/Profile";
import GovForm from "./components/Home Gov/GovForm";
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
import GovernmentHome from "./pages/Government Home";
import OrganizationHome from "./pages/OrganizationHome";
function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <HeaderBefore/>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="profile" element={<Profile />} />
          <Route path="individualhomepage" element={<IndHomePage />} />
          <Route path="govform" element={<GovForm />} />
          <Route path="course-line" element={<CourseLine />} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route path="governmenthome" element={<GovernmentHome/>} />
          <Route path="organizationhome" element={<OrganizationHome/>} />
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

        </Routes>
      </div>
    </>
  );
}

export default App;
