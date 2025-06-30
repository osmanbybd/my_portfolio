import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-[#0f172a] text-white p-5 rounded-xl border border-indigo-600 shadow-md flex flex-col justify-between"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5, boxShadow: "0 8px 24px rgba(99,102,241,0.3)" }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    >
      <motion.img
        src={project.image}
        alt={project.name}
        className="h-52 w-full object-cover rounded-lg mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <h3 className="text-xl font-bold text-indigo-400">{project.name}</h3>
      <p className="text-sm text-gray-300 my-2 line-clamp-3">{project.description}</p>

      <div className="flex gap-2 flex-wrap mb-2">
        {project.technologies?.map((tech, i) => (
          <span key={i} className="text-xs bg-indigo-700 px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center text-sm mt-2">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-400 flex items-center gap-1"
        >
          Live <FaExternalLinkAlt />
        </a>
        <a
          href={project.clientRepo}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-400 flex items-center gap-1"
        >
          GitHub <FaGithub />
        </a>
      </div>

      <Link
        to={`/project/${project._id}`}
        className="mt-4 inline-block text-center bg-indigo-600 hover:bg-indigo-700 rounded px-4 py-2 font-semibold transition"
      >
        View Details
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
