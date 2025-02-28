import { Navbar } from "flowbite-react";
import Buttons from "../button/Buttons";
import "./navbar.css";
const Navbars = () => {
  return (
    <div className="custom-gradient">
      {" "}
      <Navbar fluid className="bg-transparent">
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <img
              src="https://www.svgrepo.com/show/452102/slack.svg"
              alt="AI Logo"
              width="64"
              height="64"
              className="w-16"
            />
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a href="#contact">
            {" "}
            <Buttons text="Hire me" />
          </a>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#projects">Projects</Navbar.Link>
          <Navbar.Link href="#skills">Skills</Navbar.Link>
          <Navbar.Link href="#blogs">Blogs</Navbar.Link>
          <Navbar.Link href="#education">Education</Navbar.Link>
          <Navbar.Link href="#contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Navbars;
