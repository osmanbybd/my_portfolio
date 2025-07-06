import React from 'react';
import Hero from '../hero/Hero'
import AbouteMe from '../aboueme/AboutMe'
import Skill from '../skill/Skill'
import AllProject from '../AllProject/AllProjects'
import Education from '../Education/Education'
import Contact from '../contact/Contact'
import Footer from '../footer//Footer'
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AbouteMe></AbouteMe>
            <div className=' bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>

                <Skill></Skill>
            </div>
            <Education></Education>
            <AllProject></AllProject>
            <Contact></Contact>
            <Footer></Footer>
            

        </div>
    );
};

export default Home;