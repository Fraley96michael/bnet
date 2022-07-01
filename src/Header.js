import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://image.shutterstock.com/image-photo/man-hip-hop-dancer-bboy-260nw-1752496451.jpg"
          alt=""
        />
      </div>
      <div className="header_middle"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
