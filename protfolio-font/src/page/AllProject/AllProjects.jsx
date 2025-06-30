import React from "react";

import ProjectCard from "./ProjectCard";
import { useProjects } from "../../hook/useProjects";


const AllProjects = () => {
  const { data: projects = [], isLoading } = useProjects();

  if (isLoading) return <p className="text-center">Loading...</p>;

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
        <span className="text-indigo-400">My</span> Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
