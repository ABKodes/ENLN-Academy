// // import React from 'react'
import login from "../assets/login.png";
import google from "../assets/google.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const Login = () => {
  const [email, emailupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [googleProfile, setgoogleProfile] = useState("");
  const [result, setResult] = useState({});
  const [p, setp] = useState("");
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: { Authorization: `Bearer ${response.access_token}` },
          },
        );
        console.log(res);
        setgoogleProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    },
  });
  const navigate = useNavigate();

  // useEffect(() => {
  //   sessionStorage.clear();
  // }, []);

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch(`http://localhost:3001/users?email=${email}`)
        .then((res) => {
          console.log("res : ", res); // Log the entire response
          
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json(); // Parse the JSON data
        })
        .then((users) => {
          console.log("users", users);
          setResult(users);
          console.log("result", result); // Log the parsed JSON data
          if (users.length === 0) {
            toast.error("User not found");
          } else {
            const user = users[0];
            if (user && user.password === password) {
              toast.success("Success");
              sessionStorage.setItem("email", email);
              navigate("/dashboard");
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
    // if (email === "" || email === null)
    if (!(p.email || googleProfile.email || email)) {
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
    <div className="row flex items-center justify-center">
      <div
        className="flex flex-col items-center justify-center gap-5 pb-10 md:flex-row md:gap-10 lg:gap-20"
        style={{ marginTop: "100px" }}
      >
        <div className="hidden flex-col items-center justify-center gap-2 p-2 sm:gap-4 sm:p-4 md:flex md:flex-row md:gap-10 md:p-20 lg:gap-20  ">
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
          <p className="merb -ml-3 py-6 text-center text-[20px] font-semibold  text-[#025464] md:text-[25px] lg:text-[28px]">
            Welcome Back
          </p>
          <div className="card">
            <div className="card-body">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={
                    p ? p.email : googleProfile ? googleProfile.email : email
                  }
                  onChange={(e) =>
                    emailupdate(
                      p
                        ? p.email
                        : googleProfile
                          ? googleProfile.email
                          : e.target.value,
                    )
                  }
                  className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600  lg:min-w-[300px]"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 "
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
                    className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-0 dark:border-gray-600 lg:min-w-[300px]"
                    placeholder=" "
                  />
                  <label
                    htmlFor="password"
                    className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 "
                  >
                    Password
                  </label>
                </div>
              </div>
            </div>
            <Link to="/forget" className="amir flex pb-2 pl-4 lg:pl-10">
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
                <div
                  className="flex min-w-[300px] flex-row items-center justify-start rounded border-2 border-gray-100 bg-white px-2 py-2"
                  onClick={() => login()}
                >
                  <img
                    src={google}
                    alt="Google login"
                    className="h-[25px] w-[25px]"
                  />
                  <p className="amib pl-4 text-base font-bold text-black">
                    Continue With Google
                  </p>
                </div>
                <LoginSocialFacebook
                  appId="2067050553674632"
                  onResolve={(response) => {
                    console.log(response);
                    setp(response.data);
                  }}
                  onReject={(error) => {
                    console.log(error);
                  }}
                >
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
                </LoginSocialFacebook>
              </div>
              <div className="amir mt-3 flex w-full justify-start gap-1 pl-4  text-base lg:pl-10">
                <p>Don&apos; have an account? </p>
                <Link to="/signup">
                  <button className="group relative transform cursor-pointer leading-5 text-primary duration-300 dark:text-primary md:my-0">
                    Sign up
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary underline transition-transform group-hover:scale-x-100"></span>
                  </button>
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
