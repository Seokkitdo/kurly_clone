import React from "react";
import "./Header.css";
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
