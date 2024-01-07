import React, { useContext } from "react";
import hamburger from "../../Assets/HAMBURGER_MENU.svg";
import desktop from "../../Assets/laptop_mac.svg";
import { AppContext } from "../../AppContext";
import search from "../../Assets/search.svg";
import filter from "../../Assets/filter.svg";
import stats from "../../Assets/bar_chart.svg";
import coloredStats from "../../Assets/bar_chart_colored.svg";
import Card from "../Desktop/Card";
import frame2 from "../../Assets/Frame 20.svg";
import frame3 from "../../Assets/Frame 3.svg";
import frame4 from "../../Assets/Frame 4.svg";
import frame1 from "../../Assets/Frame 1.svg";
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
} from "../Desktop/Constants";
import { useState } from "react";
const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const { isMobile, setIsMobile } = useContext(AppContext);
  return (
    <div className="root-container">
      <div className="header-container">
        <div>
          <img
            src={hamburger}
            alt="hamburger-menu-icon"
            onClick={() => setIsSidebarOpen(true)}
          />
          <h3>Assessment</h3>
        </div>
        <img
          src={desktop}
          alt="desktop-icon"
          onClick={() => setIsMobile(!isMobile)}
        />
      </div>
      <div className="second-header">
        <h3 className="selected">My Assessments</h3>
        <h3 className="unselected">Unstop Assessments</h3>
      </div>
      {/* stats figures animation */}
      <div
        className="stats-figures"
        style={{
          display: isStatsOpen ? "flex" : "none",
          transition: "maxHeight 1s ease-in-out",
        }}
      >
        {/* Reusing component Card with dynamic rendering of data */}
        <div className="small-stat">
          <Card heading={"Total Assesment"} imgUrl={frame2} data1={data1} />
          <Card heading={"Total Purpose"} imgUrl={frame1} data1={data7} />
        </div>
        <div>
          <Card
            heading={"Candidates"}
            imgUrl={frame3}
            data1={data2}
            data2={data3}
          />
        </div>
        <div>
          <Card
            heading={"Candidates Source"}
            imgUrl={frame4}
            data1={data4}
            data2={data5}
            data3={data6}
          />
        </div>
      </div>
      <div className="third-header">
        <h4>My Assessment</h4>
        <div>
          <img src={search} alt="search" />
          <img src={filter} alt="filter" />
          <img
            src={isStatsOpen ? coloredStats : stats}
            alt="stats"
            onClick={() => setIsStatsOpen(!isStatsOpen)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
