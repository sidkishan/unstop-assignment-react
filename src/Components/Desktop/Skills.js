import React from "react";
import close from "../../Assets/cut.svg";
const Skills = ({ skill }) => {
  return (
    <div className="skill-strip">
      <span>{skill}</span>
      
        <img class="change-my-color" src={close} alt="close-it" />
      
    </div>
  );
};

export default Skills;
