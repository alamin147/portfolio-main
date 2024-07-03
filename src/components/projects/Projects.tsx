import { useEffect, useState } from "react";
import Buttons from "../button/Buttons";
import "./project.css";
import { InputFields } from "../../pages/projectPage/ProjectsPage";

const Projects = () => {
  const [allProject, setAllProject] = useState<InputFields[]>();
  useEffect(() => {
    fetch(`https://server-mocha-tau.vercel.app/project`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setAllProject(result);
      });
  }, []);

  return (
    <div className="container mx-auto ">
      <h1 className="py-10 gradient-text text-center text-3xl md:text-6xl font-bold">
        Projects
      </h1>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 gap-4 mb-20">
        {/* /////////////////////////////////////////////////// */}

        {allProject?.map((singleProject: InputFields) => {
          return (
            <div
              key={singleProject?._id}
              className="relative mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 group"
            >
              <a href="#!">
                <img
                  className="rounded-lg "
                  src={singleProject?.imgUrl}
                  alt="Hollywood Sign on The Hill"
                />
              </a>
              <div className="hover:shadow-lg hover:shadow-indigo-600/60 rounded-lg  absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <h1 className="font-semibold mb-3">{singleProject?.title}</h1>_
                <a href={`/projects/${singleProject?._id}`}>
                  <Buttons text="View Details" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
