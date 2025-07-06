import React from "react";
import { Link, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();

  const { data: project = {}, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const res = await axios.get(`https://protfolio-server-amber.vercel.app/projects/${id}`);
      return res.data;
    },
  });

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-[#0f172a] text-white min-h-screen">
 <div className="text-sm text-gray-300 mb-6">
  <div className="flex items-center gap-2">
    <Link to="/" className="hover:text-indigo-400 transition duration-200">
      Home
    </Link>
    <span>/</span>
    <span className="text-indigo-400 font-semibold">Project Details</span>
  </div>
</div>

      <motion.div
        className="max-w-6xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center text-indigo-400 mb-4">
          {project.name}
        </h1>

        {/* Image */}
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-[300px] md:h-[450px] object-cover rounded-lg shadow-lg"
        />

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4 justify-center">
          {project.technologies?.map((tech, i) => (
            <span
              key={i}
              className="text-sm bg-indigo-700 text-white px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description */}
        <div className="space-y-4 mt-6">
          <div>
            <h2 className="text-xl font-semibold text-indigo-300">Description:</h2>
            <p className="text-gray-300">{project.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-300">Challenges:</h2>
            <p className="text-gray-300">{project.challenges}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-indigo-300">Future Plans:</h2>
            <p className="text-gray-300">{project.futurePlans}</p>
          </div>
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-medium transition"
          >
            Live Site <FaExternalLinkAlt />
          </a>

          <a
            href={project.clientRepo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-indigo-400 hover:bg-indigo-700 rounded text-white font-medium transition"
          >
            GitHub Repo <FaGithub />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
