import React, {useState} from 'react';
import { Password } from "primereact/password";        
import { Button } from "primereact/button";  
function Login() {
     const [value, setValue] = useState("");
  return (
    <>
      <div className="mx-4 hidden lg:block">
        <img src="/sign in.svg" />
      </div>
      <div className="space-x-10 p-2 pl-10 card flex  m-10">
        <Password
          value={value}
          onChange={(e) => setValue(e.target.value)}
          toggleMask
          className="space-x-2 text-primary"
        />
      </div>
      <div className="justify-content-center card flex">
        <Password
          onChange={(e) => setValue(e.target.value)}
          feedback={false}
          tabIndex={1}
        />
      </div>
      <form action="" className=" y ml-10 grid grid-cols-2 gap-3 font-sans">
        <div className="relative z-0">
          <input
            type="text"
            id="first-name"
            className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
            placeholder=" "
          />
          <label
            for="first-name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-700 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-700 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-500 peer-focus:dark:text-gray-700"
          >
            First Name
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            id="last-name"
            className="border-secodary peer block w-full appearance-none border-0 border-b-2 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
            placeholder=" "
          />
          <label
            for="last-name"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
          >
            Last Name
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            id="email"
            className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
            placeholder=" "
          />
          <label
            for="email"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
          >
            Email
          </label>
        </div>
        <div className="relative z-0">
          <input
            type="text"
            id="phone"
            className="peer block w-full appearance-none border-0 border-b-2 border-secondary bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-gray-400 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-black dark:focus:border-gray-500"
            placeholder=" "
          />
          <label
            for="phone"
            className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-gray-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-gray-500"
          >
            Phone
          </label>
        </div>
      </form>
    </>
  );
}

export default Login