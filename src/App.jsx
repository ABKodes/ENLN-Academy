// import React from 'react'

import { Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./components/Instructor/Profile";
import GovForm from "./components/Home Gov/GovForm";
import ProfileDashboard from "./components/Profile/ProfileDashboard"

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="profile" element={<Profile />} />
          <Route path="govform" element={<GovForm />} />
          <Route path="profile-dashboard" element={<ProfileDashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
