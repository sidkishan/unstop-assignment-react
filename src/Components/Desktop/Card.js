import React from "react";
import "./styles.css";
// const datasample = {
//   num: 11145,
//   jump: "+89",
//   text: "Total Candidate",
// };

const Card = ({ heading, imgUrl, data1, data2, data3 }) => {
  return (
    <div className="card">
      <h4>{heading}</h4>
      <div className="card-stats">
        <img src={imgUrl} alt="icon1" />
        <div className="count-container">
          <div className="user-count">
            {/* using positional operator to avoid any data not found error */}
            <p className="bold-stats">{data1?.num}</p>
            <p className="green">{data1?.jump}</p>
          </div>
          <p className="sub-text">{data1?.text}</p>
        </div>
        <div className="count-container" style={{ paddingLeft: "25px" }}>
          <div className="user-count">
            {data2 && <p className="bold-stats">{data2?.num}</p>}
            {data2 && <p className="green">{data2?.jump}</p>}
          </div>
          {data2 && <p className="sub-text">{data2?.text}</p>}
        </div>
        <div className="count-container" style={{ paddingLeft: "25px" }}>
          <div className="user-count">
            {data3 && <p className="bold-stats">{data3?.num}</p>}
            {data3 && <p className="green">{data3?.jump}</p>}
          </div>
          {data3 && <p className="sub-text">{data3?.text}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
