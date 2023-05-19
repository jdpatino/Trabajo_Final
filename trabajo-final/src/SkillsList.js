import React, { useState } from "react";
import Skill from "./Skill";

const SkillsList = () => {
  const [skills] = useState([
    { name: "Spanish", level: 5 },
    { name: "English", level: 1 },
    { name: "Python", level: 3 },
    { name: "HTML5", level: 2 },
    { name: "CSS", level: 4 },
    { name: "JS", level: 3 }
  ]);
  return (
    <div>
      {skills.map(skill => (
        <Skill name={skill.name} level={skill.level} key={skill.index} />
      ))}
    </div>
  );
};
export default SkillsList;
