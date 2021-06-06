import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TopMenu from "../TopMenu/TopMenu";
import Logo from "../../../images/kurly_logo.png";
import Navbar from "../Navbar/Navbar";
const Header = () => {
  return (
    <div>
      <TopMenu />
      <div className="logo">
        <img src={Logo} alt="kurlyLogo" />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
