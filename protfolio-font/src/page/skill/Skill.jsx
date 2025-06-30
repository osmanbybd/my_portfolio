import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiDaisyui,
  SiReact,
  SiReactrouter,
  SiFramer,
  SiAframe,
  SiSwiper,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiAxios,
  SiJsonwebtokens,
  SiStripe,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillCategories = {
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26", level: "Advanced", desc: "Semantic structure & SEO-friendly markup" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6", level: "Advanced", desc: "Responsive & modern design" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E", level: "Advanced", desc: "Core JS, DOM & ES6+" },
    { name: "React", icon: <SiReact />, color: "#61DAFB", level: "Advanced", desc: "Component-based SPA" },
    { name: "React Router", icon: <SiReactrouter />, color: "#CA4245", level: "Intermediate", desc: "Dynamic routing & nested routes" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4", level: "Advanced", desc: "Utility-first styling" },
    { name: "DaisyUI", icon: <SiDaisyui />, color: "#FFD500", level: "Advanced", desc: "Prebuilt Tailwind components" },
    { name: "Swiper", icon: <SiSwiper />, color: "#6332F6", level: "Intermediate", desc: "Responsive sliders" },
    { name: "Framer Motion", icon: <SiFramer />, color: "#0055FF", level: "Intermediate", desc: "Modern animations" },
    { name: "AOS Animation", icon: <SiAframe />, color: "#FCA311", level: "Intermediate", desc: "Scroll animation library" },
  ],
  Backend: [
    { name: "Node.js", icon: <SiNodedotjs />, color: "#339933", level: "Intermediate", desc: "Backend API & scripting" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000", level: "Intermediate", desc: "RESTful API & middleware" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", level: "Intermediate", desc: "NoSQL document database" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28", level: "Intermediate", desc: "Auth & hosting" },
    { name: "Axios", icon: <SiAxios />, color: "#5A29E4", level: "Intermediate", desc: "Promise-based HTTP client" },
    { name: "JWT", icon: <SiJsonwebtokens />, color: "#000000", level: "Intermediate", desc: "Token-based auth system" },
    { name: "Stripe", icon: <SiStripe />, color: "#635BFF", level: "Beginner", desc: "Secure payment gateway" },
  ],
  Tools: [
    { name: "Git", icon: <SiGit />, color: "#F05032", level: "Intermediate", desc: "Version control" },
    { name: "GitHub", icon: <SiGithub />, color: "#181717", level: "Intermediate", desc: "Code hosting" },
    { name: "Netlify", icon: <SiNetlify />, color: "#00C7B7", level: "Intermediate", desc: "Static hosting & CI" },
    { name: "Vercel", icon: <SiVercel />, color: "#000000", level: "Intermediate", desc: "React/Vite hosting" },
    { name: "Figma", icon: <SiFigma />, color: "#F24E1E", level: "Intermediate", desc: "UI/UX Design" },
  ],
};

const Skill = () => {
  return (
    <section className="py-12 text-white bg-[#0f172a] rounded-lg overflow-hidden container mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        <span className="text-indigo-400">My</span> Skills
      </h2>

      {Object.entries(skillCategories).map(([category, skills], idx) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-300 ">{category}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="w-40 p-4 rounded-xl shadow-md flex flex-col  items-center text-center bg-indigo-800 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                title={skill.desc}
              >
                <div className="text-4xl mb-2" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <p className="font-semibold">{skill.name}</p>
                {/* <p className="text-xs text-gray-300">Level: {skill.level}</p> */}
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skill;
