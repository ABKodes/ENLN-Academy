import React from "react";
const HeaderBefore = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <div className=" overflow-y-auto whitespace-nowrap bg-accent px-4 py-3">
        <a
          className="smalltext mx-4 transform uppercase leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0"
          href="#"
        >
          For individuals
        </a>
        <a
          className="smalltext mx-4 transform uppercase leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0"
          href="#"
        >
          for government
        </a>
        <a
          className="smalltext mx-4 transform uppercase leading-5 text-secondary duration-300 hover:underline dark:text-secondary md:my-0"
          href="#"
        >
          for organization
        </a>
      </div>
      <div className="navbar bg-slate-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src="/public/header individual.png" className="h-8" />
          <ul className="menu dropdown-hover menu-dropdown menu-horizontal px-1">
            <li className="relative">
              <details className="z-10">
                <summary>Parent</summary>
                <ul className="absolute left-0 top-full p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default HeaderBefore;
