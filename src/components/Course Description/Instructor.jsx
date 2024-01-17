import React, { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
function Instructor() {
    const [value, setValue] = useState('');
  return (
    <div className="">
    <div className="my-10 w-7/12 rounded-lg border border-primary bg-white p-5 shadow-md">
      <div className="flex">
        <img
          className="h-32 w-32 rounded-full"
          src="https://picsum.photos/200"
          alt="Profile picture"
        />
        <div className="mx-5 text-left">
          <h2 className="mt-3 text-center text-2xl font-semibold">John Doe</h2>
          <p className="mt-1 text-center text-gray-600">Software Engineer</p>
          <div className="flex justify-evenly">
            <a href="#" className="mx-3 text-2xl text-primary hover:text-accent">
              <CiFacebook/>
            </a>
            <a href="#" className="mx-3 text-2xl text-primary hover:text-accent">
              <FaXTwitter/>
            </a>
            <a href="#" className="mx-3 text-2xl text-primary hover:text-accent">
              <AiOutlineLinkedin/>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="mt-2 text-gray-600 text-justify">
          John is a software engineer with over 10 years of experience in
          developing web and mobile applications. He is skilled in JavaScript,
          React, and Node.js.
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
