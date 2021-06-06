import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faMapMarkerAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="gnb">
      <div className="gnb_main">
        <ul className="gnb">
          <li className="menu1">
            <span className="cateicon">
              <FontAwesomeIcon icon={faBars} />
            </span>
            <span>전체 카테고리</span>
          </li>
          <li className="menu2">신상품</li>
          <li className="menu3">베스트</li>
          <li className="menu4">알뜰쇼핑</li>
          <li className="lst">특가/혜택</li>
        </ul>
        <div className="gnb_search">
          <input type="text" className="inp_search" />
          <FontAwesomeIcon icon={faSearch} className="searchicon" />
        </div>
        <div className="gnb_rightmenu">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="righticon" />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
