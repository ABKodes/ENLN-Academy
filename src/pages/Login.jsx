// // import React from 'react'
// import login from "../assets/login.png";

// const Login = () => {
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center gap-2 p-2 sm:gap-4 sm:p-4 md:flex-row md:gap-10 md:p-20 lg:gap-20  ">
//         <div>
//           <img
//             src={login}
//             alt="login page image"
//             className="min-h-[255px] w-full md:w-[425px] "
//           />
//         </div>
//         <div>
//           <form>
//             <p className="merb py-6 text-center text-[20px] font-semibold  text-[#025464] md:text-[25px] lg:text-[28px]">
//               Welcome Back
//             </p>
//             <div>
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:min-w-[300px]"
//                   placeholder=" "
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
//                 >
//                   Email
//                 </label>
//               </div>
//             </div>
//             <div className="pt-5">
//               <div className="relative">
//                 <input
//                   type="password"
//                   id="password"
//                   className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500 lg:min-w-[300px]"
//                   placeholder=" "
//                 />
//                 <label
//                   htmlFor="password"
//                   className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
//                 >
//                   Password
//                 </label>
//               </div>
//             </div>
//             <div>
//               <p className="pt-2 text-[14px] font-semibold text-black">
//                 Forget Password?
//               </p>
//             </div>
//           </form>
//           <div>or</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import { useEffect, useState } from "react";
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
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={ProceedLogin} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => emailupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => passwordupdate(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/signup"}>
                SignUp
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
