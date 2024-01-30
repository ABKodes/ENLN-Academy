// import React from 'react'

import { Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./components/Instructor/Profile";
import GovForm from "./components/Home Gov/GovForm";
import CourseLine from "./components/CourseContent/CourseLine";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="profile" element={<Profile />} />
          <Route path="govform" element={<GovForm />} />
          <Route path="course-line" element={<CourseLine />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
