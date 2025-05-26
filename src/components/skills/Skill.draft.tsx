// skills using react icons
import "../hero/hero.css";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
// https://tailwindflex.com/@arya/feature-icon-grid
const Skills = () => {
  const skills = [
    { icon: <SiExpress />, name: "Express", color: "white" },
    { icon: <FaNode />, name: "Node.js", color: "green" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "blue" },
    { icon: <SiMongodb />, name: "MongoDB", color: "green" },
    { icon: <SiMongoose />, name: "Mongoose", color: "red" },
    { icon: <TbBrandTypescript />, name: "TypeScript", color: "blue" },
    { icon: <RiJavascriptLine />, name: "JavaScript", color: "yellow" },
  ];

  return (
    <div className="custom-gradient">
      <h1 className="py-10 gradient-text text-center text-3xl md:text-6xl font-bold">
        Skills
      </h1>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-4"></div>
      {skills.map((skill, index) => (
        <div key={index} className="flex justify-center items-center">
          <div style={{ color: skill.color, fontSize: "3rem" }}>
            {skill.icon}
          </div>
          <p className="ml-2 text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Skills;
