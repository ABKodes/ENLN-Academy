// // import React from 'react'
import login from "../assets/login.png";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
// import login from "../assets/login.png";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, emailupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  // useEffect(() => {
  //   sessionStorage.clear();
  // }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch(`http://localhost:3001/users?email=${email}`)
        .then((res) => {
          console.log(res); // Log the entire response
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json(); // Parse the JSON data
        })
        .then((users) => {
          console.log(users); // Log the parsed JSON data
          if (users.length === 0) {
            toast.error("User not found");
          } else {
            const user = users[0];
            if (user && user.password === password) {
              toast.success("Success");
              sessionStorage.setItem("email", email);
              usenavigate("/dashboard");
            } else {
              toast.error("Please enter valid credentials");
            }
          }
        })
        .catch((err) => {
          console.error("Login failed due to:", err);
          toast.error("Login failed. Please try again later.");
        });
    }
  };

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.warning("Please Enter email");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <div className="row">
      <div
        className="grid grid-cols-1 lg:grid-cols-2"
        style={{ marginTop: "100px" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 p-2 sm:gap-4 sm:p-4 md:flex-row md:gap-10 md:p-20 lg:gap-20  ">
          <div>
            <img
              src={login}
              alt="login page image"
              className="min-h-[255px] w-full md:w-[425px] "
            />
          </div>
        </div>
        <form
          onSubmit={ProceedLogin}
          className="flex flex-col items-center justify-center"
        >
          <p className="merb py-6 text-center text-[20px] font-semibold  text-[#025464] md:text-[25px] lg:text-[28px]">
            Welcome Back
          </p>
          <div className="card">
            <div className="card-body">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => emailupdate(e.target.value)}
                  className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:min-w-[300px]"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                >
                  Email
                </label>
              </div>
              <div className="pt-5">
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => passwordupdate(e.target.value)}
                    className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:min-w-[300px]"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
                  >
                    Password
                  </label>
                </div>
              </div>
            </div>
            <Link to="/forget" className="amir flex pb-2 pl-10">
              <p>Forget Password?</p>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <button
                type="submit"
                className=" mx min-w-[300px] bg-[#025464] py-2 text-center text-white"
              >
                Log in
              </button>{" "}
              <p className="amir py-3 text-center text-2xl font-normal">OR</p>
              <div className="flex flex-col gap-2">
                <div className="flex min-w-[300px] flex-row items-center justify-start rounded border-2 border-gray-100 bg-white px-2 py-2">
                  <img
                    src={google}
                    alt="Google login"
                    className="h-[25px] w-[25px]"
                  />
                  <p className="amib pl-4 text-base font-bold text-black">
                    Continue With Google
                  </p>
                </div>
                <div className="flex min-w-[300px] flex-row items-center justify-start rounded border-2 border-gray-100 bg-white px-2 py-2">
                  <img
                    src={linkedin}
                    alt="Google login"
                    className="h-[25px] w-[25px]"
                  />
                  <p className="amib pl-4 text-base font-bold text-black">
                    Continue With LinkedIn
                  </p>
                </div>
                <div className="flex min-w-[300px] flex-row items-center justify-start rounded border-2 border-gray-100 bg-white px-2 py-2">
                  <img
                    src={facebook}
                    alt="Google login"
                    className="h-[25px] w-[25px]"
                  />
                  <p className="amib pl-4 text-base font-bold text-black">
                    Continue With Facebook
                  </p>
                </div>
              </div>
              <div className="amir mt-3 flex w-full justify-start gap-1 pl-10 text-base">
                <p>Don&apos; have an account? </p>
                <Link to="/signup" className="font-semibold text-[#025464] ">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
