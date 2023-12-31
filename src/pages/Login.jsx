import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import zxcvbn from "zxcvbn"; 
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
function Login() {

const [isPasswordVisible, setIsPasswordVisible] = useState(false);
const [passwordStrength, setPasswordStrength] = useState("");

function togglePasswordVisibility(event) {
  const newPassword = event.target.value;
  setIsPasswordVisible((prevState) => !prevState);

  // Only check password strength if there's input
  if (newPassword.trim() !== "") {
    const strength = zxcvbn(newPassword).score;
    setPasswordStrength(getStrengthLabel(strength));
  } else {
    setPasswordStrength(null);
  }
}
function getStrengthLabel(strength) {
  if (strength === 4) {
    return "strong";
  } else if (strength >= 2) {
    return "medium";
  } else {
    return "weak";
  }
}

  return (
    <>
      <div className='flex justify-center items-center my-5 pl-10'>
        <h1 className="heading">Welcome Back</h1>
      </div>
      <div className=" flex items-center">
        <div className=" hidden w-1/3 lg:block ml-32">
          <img src="/sign in.svg" />
        </div>
        <div className="relative ml-48 flex flex-col gap-3">
          <form
            action=""
            className=" top-5 flex flex-col gap-5 font-sans  lg:w-1/2"
          >
            <div className="relative z-0  flex">
              <input
                type="text"
                id="email"
                className="focus:ring-primary-500 peer  block  appearance-none  rounded  border  border-primary bg-transparent 
        px-4
        py-2
        text-base
        text-gray-900 outline-none
        focus:border-primary
        focus:outline-none
        focus:ring-1 dark:border-gray-600 dark:text-black"
                placeholder=" "
              />
              <label
                for="email"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
              >
                Email
              </label>
            </div>

            <div className="container relative   mx-auto flex w-full">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder=""
                className="focus:ring-primary-500 peer block  appearance-none  rounded  border  border-gray-300 bg-transparent 
        px-4
        py-2
        text-base
        text-gray-900 outline-none
        focus:border-primary
        focus:outline-none
        focus:ring-1 dark:border-gray-600 dark:text-black"
                onChange={togglePasswordVisibility}
              />
              <label
                for="password"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
              >
                Password
              </label>
              <button
                className="absolute ml-48 py-3 text-gray-600"
                onClick={() => setIsPasswordVisible((prevState) => !prevState)}
              >
                {isPasswordVisible ? (
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
              {passwordStrength && (
                <div
                  className={`mt-1  text-sm ${getStrengthColor(
                    passwordStrength,
                  )}`}
                >
                  {passwordStrength.charAt(0).toUpperCase() +
                    passwordStrength.slice(1)}
                </div>
              )}
            </div>
          </form>
          <Link className="text hover:text-bold relative flex hover:text-primary hover:underline">
            {" "}
            Forgot Password?{" "}
          </Link>
          <div className="card-actions justify-end">
            <button className="buttontext btn btn-primary w-full">
              Log in
            </button>
          </div>
          <div className="items-center ml-32">
            <h2 className="items-center">OR</h2>
          </div>
          <div className="card-actions justify-end">
            <button className="text btn w-full border-primary">
              <div className="text-3xl">
                <FcGoogle />
              </div>
              Continue With Google
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="text btn w-full border-primary">
              <div className="text-3xl text-[#1877F2]">
                <FaFacebook />
              </div>
              Continue With Facebook
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="text btn w-full border-primary">
              <div className="text-3xl text-[#0A66C2]">
                <FaLinkedin />
              </div>
              Continue With LinkedIn
            </button>
          </div>
          <Link className="text hover:text-bold relative flex ">
            {" "}
            Don't have account?
            <span className="px-2 font-bold text-primary hover:underline">
              SIGN UP
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login
 function getStrengthColor(strength) {
   switch (strength) {
     case "strong":
       return "text-green-600";
     case "medium":
       return "text-yellow-600";
     case "weak":
     default:
       return "text-red-600";
   }
 }