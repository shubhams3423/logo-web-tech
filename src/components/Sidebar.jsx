import React, { useContext } from "react";
import "../componentsCss/Sidebar.css";
import { NavLink } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Auth from "./Auth";
import UserContext from "../Context/UserContext";
const Sidebar = () => {
  const { hideSideBar, setSidebar } = useContext(UserContext);
  return (
    <div className={`${hideSideBar ? "sidebar1" : "sidebar2"}`}>
      <div
        className={`${hideSideBar ? "menuIcon1" : "menuIcon2"}`}
        onClick={hideSideBar ? () => setSidebar(false) : () => setSidebar(true)}
      >
        {hideSideBar ? (
          <IoIosArrowBack className="arrow" />
        ) : (
          <IoIosArrowForward />
        )}
      </div>
      <section className="sideMenu">
        <NavLink to="/">{hideSideBar ? "Page1" : "1"}</NavLink>
        <NavLink to="/page2">{hideSideBar ? "Page2" : "2"}</NavLink>
        <NavLink to="/page3">{hideSideBar ? "Page3" : "3"}</NavLink>
        <NavLink to="/page4">{hideSideBar ? "Page4" : "4"}</NavLink>
        <NavLink to="/page5">{hideSideBar ? "Page5" : "5"}</NavLink>
      </section>
      <div></div>
      <section className="authSection">
        <Auth />
      </section>
    </div>
  );
};

export default Sidebar;
