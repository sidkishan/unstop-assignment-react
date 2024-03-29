import React, { useContext } from "react";
import mobile from "../../Assets/Mobile.svg";
import { AppContext } from "../../AppContext";
const Header = () => {
  const { isMobile, setIsMobile } = useContext(AppContext);
  return (
    <div className="nav-header">
      <div>
        <h3>Assesment</h3>
        <h4>My Assesments</h4>
      </div>
      <img
        src={mobile}
        alt="mobile-log"
        onClick={() => setIsMobile(!isMobile)}
      />
    </div>
  );
};

export default Header;
