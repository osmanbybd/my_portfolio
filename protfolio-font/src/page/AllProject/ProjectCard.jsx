import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="glassmorphism rounded-2xl border border-white/10 p-5 text-white flex flex-col justify-between shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      {/* Project Image */}
      <motion.img
        src={project.image}
        alt={project.name}
        className="h-48 w-full object-cover rounded-xl mb-4 border border-indigo-600/30 shadow-md"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Title */}
      <h3 className="text-xl font-bold text-indigo-400 mb-1">{project.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-3 line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex gap-2 flex-wrap mb-4">
        {project.technologies?.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-gradient-to-r from-purple-600 to-indigo-600 px-2 py-1 rounded-full text-white shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center text-sm mt-auto">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 hover:text-white transition-colors flex items-center gap-1"
        >
          Live <FaExternalLinkAlt />
        </a>
        <a
          href={project.clientRepo}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-300 hover:text-white transition-colors flex items-center gap-1"
        >
          GitHub <FaGithub />
        </a>
      </div>

      {/* View Details */}
      <Link
        to={`/project/${project._id}`}
        className="mt-5 text-center bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-lg px-4 py-2 font-medium transition duration-300"
      >
        View Details
      </Link>

      {/* Glass Effect */}
      {/* <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(8px);
        }
      `}</style> */}
    </motion.div>
  );
};

export default ProjectCard;
