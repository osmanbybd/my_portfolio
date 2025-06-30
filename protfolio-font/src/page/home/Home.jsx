import React from 'react';
import Hero from '../hero/Hero';
import AboutMe from '../aboueme/AboutMe';
import Skill from '../skill/Skill';
import Education from '../Education/Education';
import AllProjects from '../AllProject/AllProjects';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';

const Home = () => {
    return (
        <div className='bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] text-white h-100%'>
            <div className=''>
                <Hero></Hero>
            </div>
           <div name="about">
             <AboutMe></AboutMe>
           </div>
            <div name="education">
                <Education></Education>
            </div>
            <Skill></Skill>
            <AllProjects></AllProjects>
            <div name="contact">
                <Contact></Contact>
            </div>
            <div className=''>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;