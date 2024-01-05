import React from "react";

const Assesment = ({ dataObj }) => {
  const {
    jobIcon,
    threeDotIcon,
    examName,
    examType,
    dateIcon,
    date,
    duration,
    questions,
    shareIcon,
    userIcon,
  } = dataObj;
  return (
    <div className="assesment-container">
      <div className="icon-set1">
        <img src={jobIcon} alt="assesment-icon" />
        <img src={threeDotIcon} alt="three-dot" />
      </div>
      <div>
        <h3>{examName}</h3>
        <div className="exam-type-date">
          <p>{examType}</p>
          <div>
            <img src={dateIcon} alt="date-icon" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="duration-ques-share-icon">
        <div className="duration-questions">
          <div>
            <p style={{ fontSize: "14px", fontWeight: "600" }}>{duration}</p>
            <p>Duration</p>
          </div>
          <div>
            <p style={{ fontSize: "14px", fontWeight: "600" }}>{questions}</p>
            <p>Questions</p>
          </div>
        </div>
        <div className="share-user-icon">
          <img src={shareIcon} alt="share-icon" />
          <img src={userIcon} alt="users-icon" />
        </div>
      </div>
    </div>
  );
};

export default Assesment;
