import { MdOutlineFileDownload } from "react-icons/md";
import img from "../../assets/alamin-removebg-preview.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import "./hero.css";
import { Button } from "flowbite-react";
import Stats from "../stats/Stats";

const Hero = () => {  return (
    <div id="home" style={{ background: "linear-gradient(135deg, #0f0326, #2a015e)" }} className="relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <section className="pt-28 pb-10 relative z-10">
        <div className="container mx-auto max-w-[90rem] px-8 lg:flex items-center justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <span className="text-indigo-400 text-xl font-medium mb-4 inline-block tracking-wider">Hi, I'm Al Amin</span>
            <h1 className="gradienttext text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Fullstack<span className="block mt-2">Developer</span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 my-6 mx-auto lg:mx-0"></div>

            <p className="text-xl lg:text-2xl mt-6 font-light text-gray-300 leading-relaxed">
              I am currently studying computer science and engineering. Passionate about
              <span className="text-indigo-400"> coding </span> and learning new technologies. I thrive both
              working independently and in teams, with experience in
              <span className="text-indigo-400"> programming competitions</span>.
            </p>

            <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-5 justify-center lg:justify-start">
              <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-0 py-3 px-6 font-semibold text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-1 transition-all duration-300">
                <a
                  className="flex items-center"
                  href="https://drive.google.com/uc?export=download&id=1GXB2uGc9n3DW0WjPDLWjtKhqIeKT73C6"
                  download="Alamin_Resume_Backend.pdf"
                >
                  <p>Download Resume</p>
                  <MdOutlineFileDownload className="ml-2" size="20" />
                </a>
              </Button>

              <div className="flex items-center gap-4">
                <div className="cursor-pointer border-2 border-indigo-500 rounded-full p-3 text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:scale-110 transition-all duration-300 shadow-md">
                  <a
                    href="https://www.linkedin.com/in/alamin-developer/"
                    target="_blank"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedinIn size="22" />
                  </a>
                </div>
                <div className="cursor-pointer border-2 border-indigo-500 rounded-full p-3 text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:scale-110 transition-all duration-300 shadow-md">
                  <a
                    href="https://github.com/alamin147"
                    target="_blank"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub size="22" />
                  </a>
                </div>

                <div className="cursor-pointer border-2 border-indigo-500 rounded-full p-3 text-indigo-400 hover:text-white hover:bg-indigo-600 hover:border-indigo-600 hover:scale-110 transition-all duration-300 shadow-md">
                  <a
                    href="#contact"
                    aria-label="Contact Me"
                  >
                    <IoMailOpenOutline size="22" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 mx-auto relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[100px] blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            <img
              src={img}
              className="mx-auto relative rounded-[90px] border-4 border-indigo-500/30 shadow-2xl shadow-indigo-600/40 hover:shadow-indigo-600/60 transition-all duration-300"
              alt="Al Amin's profile"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl relative z-10">
        <Stats />
      </div>
    </div>
  );
};
export default Hero;
