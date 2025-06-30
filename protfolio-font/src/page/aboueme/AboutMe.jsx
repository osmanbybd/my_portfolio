import React from 'react';
import { motion } from "framer-motion";
const AboutMe = () => {
  return (
    <section className=" py-12 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-10">
          <span className="text-indigo-300">About</span> Me
        </h1>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3,  }} 
        className="space-y-6 bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-lg border bg-gradient-to-b from-[#0f172a] via-[#1e3a8a] to-[#3b82f6] shadow-xl">
          <p className="text-lg leading-relaxed text-gray-200">
            From a very young age, I was deeply fascinated by computers. I didn't just want to use them — I was curious to understand how they worked. While many around me talked about making money online through digital marketing, I found myself exploring that path out of curiosity. I even completed a course in digital marketing, but it didn’t feel like my true calling.
          </p>

          <p className="text-lg leading-relaxed text-gray-200">
            That’s when I first heard about programming — the art of building websites and solving problems through code. It instantly sparked something in me. I began exploring it seriously and after nearly two years of self-discovery and learning, I enrolled in a structured course that truly changed my life. Since then, I’ve built several real-world projects and found joy in turning ideas into functional web applications.
          </p>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
