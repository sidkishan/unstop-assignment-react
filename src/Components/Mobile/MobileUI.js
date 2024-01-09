import React, { useState } from "react";
import Header from "./Header";
import plusIcon from "../../Assets/plusIcon.svg";
import "./styles.css";
import Assesment from "../Desktop/Assesment";
import { dataObj1, dataObj2 } from "../Desktop/Constants";

const MobileUI = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="mobile-layout">
      {isSideBarOpen && (
        <div className="side-panel">
          <p
            onClick={() => setIsSidebarOpen(false)}
            style={{
              padding: "5px 5px",
              cursor: "pointer",
              fontSize: "x-large",
            }}
          >
            &times;
          </p>
          <p>Menu</p>
          <p>Dashboard</p>
          <p>Assessment</p>
          <p>My Library</p>
          <p>Round Status</p>
        </div>
      )}

      <Header
        isSideBarOpen={isSideBarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="items-container">
        <div className="add-test">
          {" "}
          {/**onClick={handleModal} */}
          <img src={plusIcon} alt="plus-icon" />
          <h3>New Assesment</h3>
          <p>
            From here you can add questions of multiple types like MCQs,
            subjective (text or paragraph)!
          </p>
        </div>
        <Assesment dataObj={dataObj1} />
        <Assesment dataObj={dataObj2} />
        <Assesment dataObj={dataObj2} />
      </div>
    </div>
  );
};

export default MobileUI;
