import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-gray-400/30">
      <div className="container mx-auto p-0 md:p-8 xl:px-0">
        <div className="mx-auto max-w-7xl px-6 pb-1 pt-5">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-4">
              <div>
                <a href="/">
                  <div className="flex items-center space-x-2 text-2xl font-medium">
                    <span>
                      <img
                        src={logo}
                        alt="AI Logo"
                        className="w-40 rounded-2xl"
                      />
                    </span>
                  </div>
                </a>
              </div>
              <div className="max-w-md pr-16 text-md text-gray-200">
                Enhance productivity and efficiency with cutting-edge solutions
                for your business.
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    My Solutions
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Backend Development
                    </li>
                    <li className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Software Devepolment
                    </li>
                    <li className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      Database Management
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Social Links
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      <a href="https://github.com/alamin147">Github</a>
                    </li>
                    <li className="text-md leading-6 text-gray-300 hover:text-gray-50">
                      <a href="https://www.linkedin.com/in/alamin-developer">
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-md font-semibold leading-6 text-white">
                    Links
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    <li>
                      <a
                        href="/aboutus"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#projects"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Projects
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#skills"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Skills
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#blogs"
                        className="text-md leading-6 text-gray-300 hover:text-gray-50"
                      >
                        Blogs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-400/30 pt-8 sm:mt-20 lg:mt-10">
            <div className="text-md text-center text-white">
              Copyright © 2024
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
