import { MdOutlineFileDownload } from "react-icons/md";
import img from "../../assets/alamin-removebg-preview.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import "./hero.css";
import { Button } from "flowbite-react";
import Stats from "../stats/Stats";
// import resume from "../../assets/Alamin_Resume_Backend.pdf";
const Hero = () => {
  return (
    <div style={{ background: "linear-gradient(60deg, #18101F, #28015f)" }}>
      <section className="pt-20">
        <div className="container mx-auto max-w-[90rem] px-8 lg:flex items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <h3 className="text-white text-2xl font-bold">Hi, I'm Al Amin</h3>
            <h1 className="gradienttext text-4xl lg:text-6xl xl:text-7xl font-bold leading-none">
              Backend Developer
            </h1>

            <p className="text-xl lg:text-2xl mt-6 font-light text-white">
              I am currently studying in computer science and engineering. I am
              passionate about coding and learning new technologies. I prefer
              both work alone and with team. I also competed in programming
              competitions.
            </p>
            <div className="mt-8 md:mt-12 flex items-center gap-4">
              <Button className="rounded-full me-2 bg-gradient-to-r from-indigo-950 to-indigo-800 border-0 py-1 px-3 font-bold hover:bg-gradient-to-r hover:from-indigo-800 hover:to-indigo-950 transition duration-200 ease-in-out ">
                <a
                  className="flex"
                  // href={resume}
                  href="https://drive.google.com/uc?export=download&id=1GXB2uGc9n3DW0WjPDLWjtKhqIeKT73C6"
                  download="Alamin_Resume_Backend.pdf"
                >
                  <p>Download Resume</p>
                  <MdOutlineFileDownload className="ms-1" size="18" />
                </a>
              </Button>
              <div className="text-white flex items-center gap-2 ">
                <div className="cursor-pointer border-2 border-indigo-700 rounded-full p-2 text-indigo-700 hover:text-white hover:bg-indigo-700">
                  <a
                    href="https://www.linkedin.com/in/alamin-developer/"
                    target="_blank"
                  >
                    <FaLinkedinIn className="" size="25" />
                  </a>
                </div>
                <div className="cursor-pointer border-2 border-indigo-700 rounded-full p-2 text-indigo-700 hover:text-white hover:bg-indigo-700">
                  <a href="https://github.com/alamin147" target="_blank">
                    <FaGithub className="" size="25" />
                  </a>
                </div>
                <div className="cursor-pointer border-2 border-indigo-700 rounded-full p-2 text-indigo-700 hover:text-white hover:bg-indigo-700">
                  <a href="#contact">
                    <IoMailOpenOutline className="" size="25" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mx-auto">
            <img
              src={img}
              className="mx-auto shadow-lg shadow-indigo-600/50 border border-indigo-600 rounded-[90px]"
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="container mx-auto max-w-7xl">
        <Stats />
      </div>
    </div>
  );
};
export default Hero;
