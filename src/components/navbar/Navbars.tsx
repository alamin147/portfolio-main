import logo from "../../assets/logo.png";
import { Navbar } from "flowbite-react";
import Buttons from "../button/Buttons";
import "./navbar.css";

const Navbars = () => {
  return (
    <div className="bg-indigo-900 bg-opacity-50 fixed w-full z-50 top-0 start-0 ">
      <Navbar fluid={true} className="bg-transparent ">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img src={logo} className="w-40 rounded-2xl" />
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a href="#contact">
            <Buttons text="Hire me" />
          </a>
          <Navbar.Toggle />
        </div>        <Navbar.Collapse className="md:bg-transparent bg-indigo-900 bg-opacity-80">
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link className="" href="#projects">
            Projects
          </Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#cp-profiles">CP Profiles</Navbar.Link>
          <Navbar.Link href="#blogs">Blogs</Navbar.Link>
          <Navbar.Link href="#education">Education</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbars;
