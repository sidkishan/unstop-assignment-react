import React, { useState } from "react";
import Header from "./Header";
import plusIcon from "../../Assets/plusIcon.svg";
import "./styles.css";
import Assesment from "../Desktop/Assesment";
import { customStyles2, dataObj1, dataObj2 } from "../Desktop/Constants";
import Modal from "react-modal";
import closeButton from "../../Assets/cut.svg";
import Skills from "../Desktop/Skills";
const MobileUI = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setModalIsOpen] = useState(false);
  const handleModal = () => {
    setModalIsOpen(true);
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }
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
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles2}
        contentLabel="Example Modal"
      >
        <div className="modal-header">
          <h3>Create new assesment</h3>
          <button onClick={closeModal}>
            <img src={closeButton} alt="close-button" />
          </button>
        </div>
        <form className="modal-form">
          <div className="input-flex">
            <label htmlFor="assesment-name">Name of assessment</label>
            <input id="assesment-name" type="text" placeholder="Type here" />
          </div>
          <div className="input-flex">
            <label htmlFor="purpose">Purpose of the test is</label>
            <select name="selectedFruit" defaultValue="hey" id="purpose">
              <option value="hey">Select</option>
              <option value="unstopabble">
                Get a chance to work with unstop
              </option>
            </select>
          </div>
          <div className="input-flex">
            <label htmlFor="desc">Description</label>
            <select name="selectedFruit" defaultValue="hey" id="desc">
              <option value="hey">Select</option>
              <option value="unstopabble">
                Get a chance to work with unstop
              </option>
            </select>
          </div>
          <div>
            <p>Skills</p>
            <div className="skills-section">
              <div className="skills-marked">
                <Skills skill={"UI/UX and Design"} />
                <Skills skill={"No of Question"} />
                <Skills skill={"Web Development"} />
                <Skills skill={"UI/UX and Design"} />
                <Skills skill={"Web Development"} />
              </div>
              <input
                type="text"
                placeholder="Type here"
                style={{
                  borderTopLeftRadius: "0",
                  borderTopRightRadius: "0",
                }}
              />
            </div>
          </div>
          <div className="input-flex">
            <label htmlFor="duration">Name of assessment</label>
            <input id="duration" type="text" placeholder="HH:MM:SS" />
          </div>
          <button className="save-form">Save</button>
        </form>
      </Modal>
      <Header
        isSideBarOpen={isSideBarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="items-container">
        <div className="add-test">
          <img src={plusIcon} alt="plus-icon" onClick={handleModal} />
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
