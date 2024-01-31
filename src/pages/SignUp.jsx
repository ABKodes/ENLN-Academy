import { useState } from "react";
import { PiEyeThin, PiEyeClosedThin } from "react-icons/pi";
// import { InputText } from "primereact/inputtext";
// import { Password } from 'primereact/password';
import HeaderBefore from "../components/Reusable Components/HeaderBefore";
import Footer from "../components/Reusable Components/Footer";
import { toast } from "react-toastify";

function SignUp() {
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let regobj = { name, email, password };
    // console.log(regobj);

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(regobj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed: ${res.status} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        toast.success("Sign Up Successfully.");
        // window.location.href = "/login";
        console.log("data", data);
      })
      .catch((error) => {
        toast.error("Failed: ", error.message);
      });

    // Clear the form data
    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <HeaderBefore />
      {/* TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com */}
      <section className="mx-auto h-screen w-9/12 ">
        <div className="container h-full px-6 py-24 ">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* Left column container with background*/}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="/public/sign up.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            {/* Right column container with form */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={handleSubmit}>
                <h1 className="heading flex justify-center">Sign Up</h1>
                {/* Input first name */}
                <div className=" w-full rounded-lg bg-white p-4 px-3">
                  <div className="relative w-full bg-inherit">
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="peer h-10 w-full rounded-md border-none bg-transparent px-2 py-[0.32rem] text-gray-900 placeholder-transparent ring-1 ring-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label
                      htmlFor="fullname"
                      className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-3 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Full Name
                    </label>
                  </div>
                </div>
                {/* Email input */}
                <div className=" w-full rounded-lg bg-white p-4 px-3">
                  <div className="relative w-full bg-inherit">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="peer h-10 w-full rounded-md border-none bg-transparent px-2 py-[0.32rem] text-gray-900 placeholder-transparent ring-1 ring-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      htmlFor="email"
                      className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-3 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Email
                    </label>
                  </div>
                </div>
                {/* Password input */}
                <div
                  className={`relative w-full rounded-lg bg-white p-4 px-3 ${
                    password ? "ring-primary" : ""
                  }`}
                >
                  <div className="relative flex w-full items-center bg-inherit">
                    <input
                      type={open ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={() => setPassword(password)}
                      className="peer h-10 flex-1 rounded-md border-none bg-transparent px-2 py-[0.32rem] text-gray-900 placeholder-transparent ring-1 ring-secondary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-3 text-sm text-secondary transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-secondary peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
                    >
                      Password
                    </label>
                    {password && (
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 transform text-2xl">
                        {open ? (
                          <PiEyeThin onClick={toggle} />
                        ) : (
                          <PiEyeClosedThin onClick={toggle} />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Password input */}
                {/* <div className="relative mb-6 " data-te-input-wrapper-init="">
                  <input
                    type="password"
                    className="peer block min-h-[auto] w-full rounded border-secondary bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:border focus:outline-none focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput33"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="exampleFormControlInput33"
                    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                  >
                    Password
                  </label>
                </div> */}

                {/* Submit button */}
                <button
                  type="submit"
                  className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mt-8 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  Sign Up
                </button>
                {/* Divider */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-primary after:mt-0.5 after:flex-1 after:border-t after:border-primary">
                  <p className="text mx-4 mb-0 text-center font-semibold dark:text-primary">
                    OR
                  </p>
                </div>
                {/* Social login buttons */}
                <a
                  className="hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  style={{ backgroundColor: "#3b5998" }}
                  href="#!"
                  role="button"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {/* Facebook */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Continue with Facebook
                </a>
                <a
                  className="hover:bg-info-600 focus:bg-info-600 active:bg-info-700 mb-3 flex w-full items-center justify-center rounded bg-info px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(84,180,211,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.2),0_4px_18px_0_rgba(84,180,211,0.1)]"
                  style={{ backgroundColor: "#55acee" }}
                  href="#!"
                  role="button"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  {/* Twitter */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Continue with Twitter
                </a>
              </form>
              <div className="mb-6 flex items-center justify-center space-x-2">
                {/* Forgot password link */}
                <p>Do you have an account ? </p>
                <button className="group relative transform cursor-pointer leading-5 text-primary duration-300 dark:text-primary md:my-0">
                  Login
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transform bg-primary underline transition-transform group-hover:scale-x-100"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
