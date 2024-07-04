import "./skill.css";
import { useEffect, useState } from "react";

const Skills = () => {
  const [allSkill, setAllSkill]: any = useState();
  useEffect(() => {
    fetch(`https://admin-server-portfolio.vercel.app/skill`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setAllSkill(result);
      });
  }, []);

  return (
    <div className="custom-gradient">
      <div className="mx-auto container">
        <h1 className="py-10 gradient-text text-center text-3xl md:text-6xl font-bold">
          Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid md:grid-cols-5 gap-4">
          {allSkill?.map((skill: any) => (
            <div key={skill._id} className="relative max-w-sm mx-auto my-8">
              <div className="relative bg-black text-white rounded-lg overflow-hidden shadow-lg group">
                <img
                  src={skill?.imgUrl}
                  alt=""
                  className="w-full h-32 object-cover opacity-70 white-image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-semibold">{skill?.title}</h2>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center group-hover:opacity-0 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
