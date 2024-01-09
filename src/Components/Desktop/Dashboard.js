import React, { useState } from "react";
import Header from "./Header";
import frame1 from "../../Assets/Frame 1.svg";
import frame2 from "../../Assets/Frame 20.svg";
import frame3 from "../../Assets/Frame 3.svg";
import frame4 from "../../Assets/Frame 4.svg";
import Card from "./Card";
import "./styles.css";
//Using dummy data here,but in real time actual data can be fetched from backend api
import {
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  dataObj1,
  dataObj2,
  customStyles,
} from "./Constants";
import Assesment from "./Assesment";
import plusIcon from "../../Assets/plusIcon.svg";
import Modal from "react-modal";
import closeButton from "../../Assets/cut.svg";
import Skills from "./Skills";

const Dashboard = () => {
  //state variable to manipulate open close of modal
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
    <div className="dashboard">
      <Modal
        isOpen={isModalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
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
      <Header />
      <div className="dashboard-content">
        <h3>Assesments Overview</h3>
        <div className="assesments-stats">
          {/* Reusing component Card with dynamic rendering of data */}
          <div className="card-border">
            <Card heading={"Total Assesment"} imgUrl={frame2} data1={data1} />
          </div>
          <div className="card-border">
            <Card
              heading={"Candidates"}
              imgUrl={frame3}
              data1={data2}
              data2={data3}
            />
          </div>
          <div className="card-border">
            <Card
              heading={"Candidates Source"}
              imgUrl={frame4}
              data1={data4}
              data2={data5}
              data3={data6}
            />
          </div>
          <Card heading={"Total Purpose"} imgUrl={frame1} data1={data7} />
        </div>
        <h3>My Assesment</h3>
        <div className="test-container">
          <div className="add-test" onClick={handleModal}>
            <img src={plusIcon} alt="plus-icon" />
            <h3>New Assesment</h3>
            <p>
              From here you can add questions of multiple types like MCQs,
              subjective (text or paragraph)!
            </p>
          </div>
          <Assesment dataObj={dataObj1} />
          <Assesment dataObj={dataObj2} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
