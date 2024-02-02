// import React from 'react'
import login from "../assets/login.png";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 p-2 sm:gap-4 sm:p-4 md:flex-row md:gap-10 md:p-20 lg:gap-20  ">
        <div>
          <img
            src={login}
            alt="login page image"
            className="min-h-[255px] w-full md:w-[425px] "
          />
        </div>
        <div>
          <form>
            <p className="merb py-6 text-center text-[20px] font-semibold  text-[#025464] md:text-[25px] lg:text-[28px]">
              Welcome Back
            </p>
            <div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
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
            </div>
            <div className="pt-5">
              <div className="relative">
                <input
                  type="password"
                  id="password"
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
            <div>
              <p className="pt-2 text-[14px] font-semibold text-black">
                Forget Password?
              </p>
            </div>
          </form>
          <div>or</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
