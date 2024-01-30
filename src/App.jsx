// import React from 'react'

import { Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./components/Instructor/Profile";
import GovForm from "./components/Home Gov/GovForm";
import ProfileDashboard from "./components/Profile/ProfileDashboard"
import Certificate from "./components/Profile/Certificate";
import { Setting } from "./components/Profile/Setting";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="profile" element={<Profile />} />
          <Route path="govform" element={<GovForm />} />
          <Route path="/certificate" element={<ProfileDashboard><Certificate /></ProfileDashboard>} />
          
          <Route path="/setting"  element={<ProfileDashboard><Setting /></ProfileDashboard>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
