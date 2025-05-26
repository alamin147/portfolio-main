
import { useEffect, useState } from "react";
import Buttons from "../button/Buttons";
import "./project.css";
import { InputFields } from "../../pages/projectPage/ProjectsPage";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const [allProject, setAllProject] = useState<InputFields[]>();
  useEffect(() => {
    fetch(`https://admin-server-portfolio.vercel.app/project`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setAllProject(result);
      });
  }, []);

  return (
    <div className="container mx-auto pt-10">
      <h1 className="pt-10 pb-5 gradienttexts text-center text-3xl md:text-6xl font-bold">
        Projects
      </h1>
      <p className="mb-10 text-white text-center">Explore projects that highlight my skills, passion, and dedication to delivering innovative solutions.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
        <Fade cascade damping={0.1}>
          {allProject?.map((singleProject: InputFields) => (
            <div
              key={singleProject?._id}
              className="project-card relative mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 group"
            >
              <a href="#!">
                <img
                  className="rounded-lg"
                  src={singleProject?.imgUrl}
                  alt={singleProject?.title}
                />
              </a>
              <div className="hover:shadow-2xl hover:shadow-indigo-600/60 rounded-lg absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h1 className="font-semibold mb-3">{singleProject?.title}</h1>
                <a href={`/projects/${singleProject?._id}`}>
                  <Buttons text="View Details" />
                </a>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
