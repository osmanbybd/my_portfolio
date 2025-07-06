import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../hook/useProjects";

const AllProjects = () => {
  const { data: projects = [], isLoading } = useProjects();

  if (isLoading) return <p className="text-center text-white">Loading...</p>;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4 z-0 py-20 relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            My
          </span>{" "}
          Projects
        </motion.h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glassmorphism p-4 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Styles */}
      {/* <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .floating-shapes .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            rgba(59, 130, 246, 0.08),
            rgba(147, 51, 234, 0.08)
          );
          animation: float 20s infinite linear;
        }

        .shape-1 {
          width: 100px;
          height: 100px;
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 140px;
          height: 140px;
          top: 60%;
          right: 15%;
          animation-delay: -5s;
        }

        .shape-3 {
          width: 90px;
          height: 90px;
          bottom: 25%;
          left: 40%;
          animation-delay: -8s;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.2;
          }
          100% {
            transform: translateY(0) rotate(360deg);
            opacity: 0.5;
          }
        }
      `}</style> */}
    </section>
  );
};

export default AllProjects;
