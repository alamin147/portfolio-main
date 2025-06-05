import "./skill.css";
import { FaNode, FaReact } from "react-icons/fa";
import { SiPostgresql, SiMongodb, SiMongoose, SiExpress, SiC, SiCplusplus, SiHtml5, SiCss3 } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiTailwindCssFill, RiJavascriptLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
const Skills = () => {
  const skills = [
      { icon: <TbBrandTypescript />, name: "TypeScript", color: "typescript" },
      { icon: <RiJavascriptLine />, name: "JavaScript", color: "yellow" },
      { icon: <SiExpress />, name: "Express Js", color: "white" },
      { icon: <FaNode />, name: "Node Js", color: "green" },
    { icon: <FaReact />, name: "React Js", color: "blue" },
    { icon: <SiMongodb />, name: "MongoDB", color: "green" },
    { icon: <SiMongoose />, name: "Mongoose", color: "mongoose" },
    { icon: <SiPostgresql />, name: "PostgreSQL", color: "postgres" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS", color: "lightBlue" },    { icon: <SiRedux />, name: "Redux Toolkit", color: "redux" },
    { icon: <SiCplusplus />, name: "C++", color: "cpp" },
    { icon: <SiC />, name: "C", color: "c" },
    { icon: <SiHtml5 />, name: "HTML", color: "html" },
    { icon: <SiCss3 />, name: "CSS", color: "css" },
  ];
  return (
    <div className="text-white bg-gradient-to-r from-indigo-950 to-indigo-800 text-center">
      <div className="container mx-auto px-4">
        <h1 className="py-20 gradienttexts text-center text-3xl md:text-6xl font-bold">
          Skills
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-3"></div>
        </h1>
        <div className="-mt-14 mb-10">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </div>

        <div className="pb-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            //   <div
            //     key={index}
            //     className="
            // bg-indigo-950
            // p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105
            // brder flex flex-col justify-center items-center
            // hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.7)]
            // hover:ring-4 hover:ring-indigo-500/50"
            //   >
            //     <div className="text-4xl mb-4 text-white hover:text-indigo-500/50">{skill.icon}</div>
            //     <p className="text-xl text-purple-300">{skill.name}</p>
            //   </div>

            <div
              key={index}
              className="
              skill-card
            bg-indigo-950
            p-6 rounded-lg text-center shadow-lg transition-transform transform hover:scale-105
            brder flex flex-col justify-center items-center
            hover:shadow-[0_0_15px_5px_rgba(99,102,241,0.7)]
            hover:ring-4 hover:ring-indigo-500/50"
              data-color={skill.color}
            >
              <div className="skill-icon text-4xl mb-4 text-white">
                {skill.icon}
              </div>
              <p className="text-xl text-purple-300 ">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
