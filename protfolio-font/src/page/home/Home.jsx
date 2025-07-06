import React from "react";
import Hero from "../hero/Hero";
import AbouteMe from "../aboueme/AboutMe";
import Skill from "../skill/Skill";
import AllProject from "../AllProject/AllProjects";
import Education from "../Education/Education";
import Contact from "../contact/Contact";
import Footer from "../footer//Footer";
const Home = () => {
  return (
    <div>
      <div id="home">
        <Hero></Hero>
      </div>
      <div id="about">
        <AbouteMe></AbouteMe>
      </div>
      <div id="skill" className=" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Skill></Skill>
      </div>
      <div id="education">
        <Education></Education>
      </div>
      <div id="AllProject">
        <AllProject></AllProject>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
