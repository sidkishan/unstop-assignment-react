import React, { useContext } from "react";
import hamburger from "../../Assets/HAMBURGER_MENU.svg";
import desktop from "../../Assets/laptop_mac.svg";
import { AppContext } from "../../AppContext";
const Header = () => {
  const { isMobile, setIsMobile } = useContext(AppContext);
  return (
    <div className="header-container">
      <div>
        <img src={hamburger} alt="hamburger-menu-icon" />
        <h3>Assessment</h3>
      </div>
      <img
        src={desktop}
        alt="desktop-icon"
        onClick={() => setIsMobile(!isMobile)}
      />
    </div>
  );
};

export default Header;
