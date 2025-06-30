import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Diploma in Computer Engineering",
    institution: "Diploma Complete In CCN Polytechnic Institute Cumilla",
    duration: "2020 - 2024",
    status: "Completed",
    details: "Learned foundational and advanced topics in web development, programming, networking, and database systems.",
  },
  {
    title: "B.Sc in Computer Science and Engineering",
    institution: "Target: Public University or Reputed Private University",
    duration: "Upcoming (Expected 2024 - 2028)",
    status: "Admission Planned",
    details: "Aiming to pursue in-depth theoretical and practical knowledge in software engineering, data structures, AI, and full-stack development.",
  },

];

const Education = () => {
  return (
    <div className=" text-white py-12 px-4 md:px-10 container mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        <span className="text-indigo-400">My</span> Education
      </h2>

      <div className="space-y-8  ">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}    
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-indigo-800 rounded-lg shadow-md p-6 border-l-4 border-indigo-500   hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              <FaGraduationCap className="text-3xl text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <p className="text-gray-300 text-sm">{edu.institution}</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-1">🕒 {edu.duration}</p>
            <p className="text-green-400 font-medium mb-2">🎯 {edu.status}</p>
            <p className="text-gray-200 text-sm">{edu.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
