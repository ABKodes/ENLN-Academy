import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
function Instructor() {
  return (
    <div className="w-11/12 mx-auto py-5">
        <h1 className="heading">Instructors</h1>
      <div className="my-10 max-w-lg rounded-lg bg-white p-5 border">
        <div className="flex">
          <img
            className="h-32 w-32 rounded-full"
            src="https://picsum.photos/200"
            alt="Profile picture"
          />
          <div>
            <h2 className="mt-3 text-center text-2xl font-semibold">
              John Doe
            </h2>
            <p className="mt-1 text-center text-gray-600">Software Engineer</p>
            <div className="mt-5 flex justify-center">
              <a href="#" className="mx-3 text-blue-500 hover:text-blue-700">
                Twitter
              </a>
              <a href="#" className="mx-3 text-blue-500 hover:text-blue-700">
                LinkedIn
              </a>
              <a href="#" className="mx-3 text-blue-500 hover:text-blue-700">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="mt-2 text-gray-600">
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Instructor;
