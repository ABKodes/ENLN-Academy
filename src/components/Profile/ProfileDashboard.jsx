import React, { useState } from 'react';
import "./dash.css"
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaCog,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const ProfileDashboard = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/my-courses",
            name:"My Courses",
            icon:<FaUserAlt/>
        },
        {
            path:"/certificate",
            name:"Certificate",
            icon:<FaRegChartBar/>
        },
        {
            path:"/support",
            name:"Support",
            icon:<FaCommentAlt/>
        },
        {
            path:"/settings",
            name:"Settings",
            icon:<FaCog/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default ProfileDashboard;