import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
function Login() {

const [isPasswordVisible, setIsPasswordVisible] = useState(false);
function togglePasswordVisibility(event) {
  const newPassword = event.target.value;
  setIsPasswordVisible((prevState) => !prevState);

}

return (
  <>
    <div className=" space-x-25 mx-auto flex w-9/12 items-center">
      <div className="  hidden w-1/2 lg:block">
        <img src="/sign in.svg" />
      </div>
      <div className="relative ml-20 flex w-1/2 flex-col gap-2">
        <div className="flex w-1/2 items-center justify-center">
          <h1 className="heading py-5 ">Welcome Back</h1>
        </div>
        <form action="" className=" top-5  ">
          <div className="relative z-0">
            <input
              type="text"
              id="email"
              className="peer block w-1/2 pl-6 appearance-none border-2  bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-primary-500"
              placeholder=" "
            />
            <label
              for="email"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
            >
              Email
            </label>
          </div>

          <div className="container relative mx-auto  mt-5 flex  justify-between">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder=""
              className=" dark:border-primary-600 peer block  w-1/2   appearance-none     rounded bg-transparent px-4 py-2
        text-base
        text-gray-900
        outline
        outline-2 
        outline-primary
        focus:border-b-2
        focus:border-primary
         focus:outline-none dark:text-black"
              onChange={togglePasswordVisibility}
            />
            <label
              for="password"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
            >
              Password
            </label>

            <button
              type="button"
              className="flex-end absolute ml-64 flex justify-end px-2 py-3 text-gray-600"
              onClick={() => setIsPasswordVisible((prevState) => !prevState)}
            >
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="flex-end place-item-end flex h-5 w-5 justify-self-end"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
          </div>
        </form>
        <Link className="smalltext hover:text-bold relative flex w-1/2 items-center justify-center hover:text-primary hover:underline">
          Forgot Password?{" "}
        </Link>
        <div className="card-actions justify-start">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="buttontext  btn btn-primary hidden w-1/2 lg:flex lg:items-center"
          >
            Log In
          </motion.a>
        </div>
        <div className="relative flex w-1/2 items-center justify-center ">
          <h2 className=" ">OR</h2>
        </div>
        <div className="card-actions justify-start">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hover-border-primary text btn btn-outline w-1/2 justify-start hover:text-primary"
          >
            <div className="text-2xl">
              <FcGoogle />
            </div>
            Continue With Google
          </motion.a>
        </div>
        <div className="card-actions justify-start">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hover-border-primary text btn btn-outline w-1/2 justify-start hover:text-primary"
          >
            <div className="text-2xl text-[#1877F2]">
              <FaFacebook />
            </div>
            Continue With Facebook
          </motion.a>
        </div>

        <div className="card-actions justify-start">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hover-border-primary text btn btn-outline  w-1/2 justify-start hover:text-primary"
          >
            <div className="text-2xl text-[#0A66C2]">
              <FaLinkedin />
            </div>
            Continue With LinkedIn
          </motion.a>
        </div>
        <Link className="smalltext hover:text-bold relative flex w-1/2 items-center justify-center">
          {" "}
          Don't have account?
          <span className="px-2 font-bold text-primary hover:underline">
            Sign Up
          </span>
        </Link>
      </div>
    </div>
  </>
);
}

export default Login