import React from "react";
import "./styles.css";
//this is a higher-order component, it is a function that takes a component and returns a new component by modifying it.
const AdminNav = ({ NavItem, text, imgUrl }) => {
  return (
    <div className="admin-nav">
      <p>Admin</p>
      <NavItem text={text} imgUrl={imgUrl} />
    </div>
  );
};

export default AdminNav;
