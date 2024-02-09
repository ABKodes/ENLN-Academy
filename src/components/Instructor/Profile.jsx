import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
import CourseInstructor from "/public/course instructor.avif"
function Profile() {
  const [value, setValue] = useState("");
  return (
    <div className="dark:bg-gray-800 dark:text-white">
      <div className="mx-auto my-10 w-9/12 rounded-lg bg-white dark:bg-gray-800 lg:p-5 ">
        <div className="lg:flex">
          <img
            className="h-36 w-36 rounded-full"
            src={CourseInstructor}
            alt="Profile picture"
          />
          <div className="text-left lg:mx-5">
            <h2 className="mt-3 text-xl font-semibold">John Doe</h2>
            <p className="mt-1  text-gray-600">
              Nutiritionist, Public Health Worker
            </p>
            <div className="flex items-center space-x-10 py-1">
              <div className="text-center">
                <div className="text-lg font-bold">50</div>
                <div className="text-sm">students</div>
              </div>

              <div className="text-center">
                <div className="text-lg font-bold">45</div>
                <div className="text-sm">reviews</div>
              </div>
            </div>
            <div className="flex ">
              <a
                href="#"
                className="mx-1 text-2xl text-primary hover:text-accent"
              >
                <CiFacebook />
              </a>
              <a
                href="#"
                className="mx-1 text-2xl text-primary hover:text-accent"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                className="mx-1 text-2xl text-primary hover:text-accent"
              >
                <AiOutlineLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
