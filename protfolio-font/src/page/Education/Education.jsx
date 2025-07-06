import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Diploma in Computer Engineering",
    institution: "CCN Polytechnic Institute, Cumilla",
    duration: "2020 - 2024",
    status: "✅ Completed",
    details:
      "Learned foundational and advanced topics in web development, programming, networking, and database systems.",
  },
  {
    title: "B.Sc in Computer Science and Engineering",
    institution: "🎯 Target: Public or Reputed Private University",
    duration: "Expected 2024 - 2028",
    status: "📚 Admission Planned",
    details:
      "Aiming to pursue in-depth theoretical and practical knowledge in software engineering, data structures, AI, and full-stack development.",
  },
];

const Education = () => {
  return (
    <section className=" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4 py-20 z-0 relative overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            My Education
          </span>
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glassmorphism p-6 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <FaGraduationCap className="text-3xl text-yellow-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-purple-300 hover:text-white transition duration-300">
                    {edu.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{edu.institution}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">🕒 {edu.duration}</p>
              <p className="text-green-400 font-medium mb-2">{edu.status}</p>
              <p className="text-gray-200 text-sm">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Extra CSS for effect */}
      {/* <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
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
          top: 15%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 120px;
          height: 120px;
          top: 60%;
          right: 20%;
          animation-delay: -5s;
        }

        .shape-3 {
          width: 90px;
          height: 90px;
          bottom: 25%;
          left: 40%;
          animation-delay: -10s;
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

export default Education;
