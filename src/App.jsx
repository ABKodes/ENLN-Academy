// import React from 'react'

import { Route, Routes } from "react-router-dom";
import All from "./All";
import Profile from "./components/Instructor/Profile";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
