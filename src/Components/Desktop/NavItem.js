import React from "react";
import "./styles.css";

const NavItem = ({ text, imgUrl }) => {
  return (
    <div className="sidebar-item">
      <img src={imgUrl} alt="icon-pic" />
      <p>{text}</p>
    </div>
  );
};

export default NavItem;
