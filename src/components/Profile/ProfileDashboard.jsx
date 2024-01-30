import { useState } from "react";
import "./dash.css";
import PropTypes from "prop-types";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaCog,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import tomprofile from "../../assets/tom.png";

const ProfileDashboard = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/my-courses",
      name: "My Courses",
      icon: <FaUserAlt />,
    },
    {
      path: "/certificate",
      name: "Certificate",
      icon: <FaRegChartBar />,
    },
    {
      path: "/support",
      name: "Support",
      icon: <FaCommentAlt />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaCog />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <FaThList />,
    },
  ];

  return (
    <div className="container">
      <div
        style={{ width: isOpen ? "350px" : "50px" }}
        className="sidebar max-w-[200px] md:max-w-full"
      >
        <div className="top_section">
          {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
          <div
            style={{ marginLeft: isOpen ? "50px" : "0px" }}
            className="bars flex-end items-center justify-end lg:hidden"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div>
          <img
            src={tomprofile}
            alt="profile picture"
            className={`${
              isOpen ? "rounded-full p-2 sm:p-4 md:p-6 lg:p-8" : "rounded-full"
            }`}
          />
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={`${
              isOpen
                ? "link flex-col items-start justify-center md:mx-10"
                : "link flex-col items-start justify-center"
            }`}
            activeClassName="active"
          >
            <div className="flex gap-5 list-none no-underline ">
              <div className="icon mt-2">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="no-underline"
              >
                <p className="no-underline decoration-transparent list-none">{item.name}</p>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default ProfileDashboard;

ProfileDashboard.propTypes = {
  children: PropTypes.string.isRequired,
};
