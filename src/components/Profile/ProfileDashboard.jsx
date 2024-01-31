import { useState } from "react";
import "./dash.css";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import tomprofile from "../../assets/tom.png";
import { MdLogout } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { LuBookMarked } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { MdContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const ProfileDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <RxDashboard />,
    },
    {
      path: "/my-courses",
      name: "My Courses",
      icon: <LuBookMarked />,
    },
    {
      path: "/certificate",
      name: "Certificate",
      icon: <PiCertificate />,
    },
    {
      path: "/support",
      name: "Support",
      icon: <MdContactSupport />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <IoSettingsOutline />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <MdLogout />,
    },
  ];

  return (
    <>
      <div className="container">
        <div
          style={{ width: isOpen ? "350px" : "50px" }}
          className="sidebar ml-16 mt-16 max-w-[200px] md:max-w-full"
        >
          <div className="top_section">
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars flex-end items-center justify-end "
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div>
            <img
              src={tomprofile}
              alt="profile picture"
              className={`${
                isOpen
                  ? "rounded-full p-2 sm:p-4 md:p-6 lg:p-8"
                  : "rounded-full"
              }`}
            />
          </div>
          <div
            className={`${
              isOpen
                ? "flex flex-col items-start justify-center"
                : "flex flex-col items-center justify-center"
            }`}
          >
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={` first-letter:${
                  isOpen
                    ? "link flex-col items-center  justify-center md:mx-10 lg:items-center"
                    : "link flex-col items-center justify-center"
                }`}
                activeclassName="active"
              >
                <div className="flex gap-5 ">
                  <div className="icon mt-2">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default ProfileDashboard;

ProfileDashboard.propTypes = {
  children: PropTypes.string,
};
