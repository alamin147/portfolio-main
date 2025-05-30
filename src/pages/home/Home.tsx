import Blog from "../../components/blogs/Blog";
import Contact from "../../components/contact/Contact";
import CPProfiles from "../../components/cp-profiles/CPProfiles";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbars from "../../components/navbar/Navbars";
import Projects from "../../components/projects/Projects";
import SEO from "../../components/seo/SEO";
import Skills from "../../components/skills/Skills";
import Study from "../../components/study/Study";

const Home = () => {
  return (
    <div className="">
      <SEO />
      <div >
        <Navbars />
      </div>
      <div>
        <Hero />
      </div>
      <div id="projects" className="bg-slate-950 pb-10">
        <Projects />
      </div>      <div id="skills">
        <Skills />
      </div>
      <div id="cp-profiles">
        <CPProfiles />
      </div>
      <div id="blogs">
        <Blog />
      </div>
      <div id="education">
        <Study />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
