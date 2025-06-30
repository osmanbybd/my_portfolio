import React from "react";
import { Typewriter } from "react-simple-typewriter";
import logo from "../../assets/code.png";
import { Fade } from "react-awesome-reveal";
import photo from '../../assets/photo.png'
import { FaFacebook, FaGithub, FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className=" hero ">
      <div className="container mx-auto  sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center p-3 md:gap-4 ">
        <div className="max-w-prose text-left">
          {/* <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
            MD
            <strong className="text-indigo-600"> OSMAN </strong>
            GONI
          </h1> */}
          <h4 className="text-gray-100 text-lg">Hi! I'm</h4>
          <span className="text-5xl text-indigo-600 font-bold">
            <Typewriter
              words={["MD OSMAN GONI"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={150}
              delaySpeed={8000}
            ></Typewriter>
          </span>

     
          <Fade delay={500} cascade damping={0.3}>
                 <h1 className="mt-4 text-3xl text-pretty text-gray-700  dark:text-gray-200 flex items-center  gap-2 ">
            {" "}
            <span>
              <img className="w-8 h-8" src={logo} alt="" />
             
              
            </span>{" "}
            MERN Stack Developer{" "}
          </h1>
          </Fade>
          <p
            direction="up"
            className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200"
          >
            A dedicated MERN Stack Developer with a strong passion for crafting
            full-stack web applications that are fast, scalable, and
            user-focused. Hands-on experience in MongoDB, Express.js, React, and
            Node.js to build modern, production-ready solutions.
          </p>
            <div className="py-3 flex items-center gap-3">
                <a href="https://github.com/osmanbybd" target="_blank"><FaGithub size={25} /></a>
                <a href="https://web.facebook.com/osman8068" target="_blank"><FaFacebook className="text-blue-400" size={25} /></a>
                <a href="https://web.facebook.com/osman8068" target="_blank"><FaInstagram className="text-red-400" size={25} /></a>
            </div>
          <div className="mt-4 flex gap-4 sm:mt-6">
           <button className="btn inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-gray-200 focus:ring-3 focus:outline-hidden">Resume</button>

          </div>
        </div>

      <div className="flex justify-center items-center mt-6">
 
     <motion.img  className="w-90 h-90 rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-500 hover:scale-110 hover:-translate-y-1"
    src={photo}
    alt="Profile" initial={{ scale: 0 }} animate={{ scale: 1 }}  delay={50}/>
</div>

      </div>
    </div>
  );
};

export default Hero;
