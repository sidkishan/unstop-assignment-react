import React from "react";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import "./styles.css";
const DesktopUi = () => {
  return (
    <div className="desktop-wrapper">
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default DesktopUi;
