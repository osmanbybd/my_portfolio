import React, { useState, useEffect } from 'react';
import { Code, Lightbulb, Target, Rocket, Heart, Coffee, Zap } from 'lucide-react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState({});


  
  
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
        }
      });
    });

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);



  const milestones = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Early Curiosity",
      description: "Fascinated by how computers work from a young age",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Discovery",
      description: "Found my passion in building websites and solving problems",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Real Projects",
      description: "Built several web applications and found joy in turning ideas into reality",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { value: "2+", label: "Years of Learning", icon: <Coffee className="w-5 h-5" /> },
    { value: "∞", label: "Lines of Code", icon: <Code className="w-5 h-5" /> },
    { value: "💡", label: "Ideas to Reality", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white z-0 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>
      </div>

      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i % 5}`}></div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Hero Section */}
        <div id="hero" className={`text-center mb-20 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-7xl md:text-8xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              About
            </span>
            <span className="text-white ml-4">Me</span>
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Story Section */}
        <div id="story" className={`mb-20 transition-all duration-1000 delay-200 ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glassmorphism p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3 mb-8">
                <Heart className="w-6 h-6 text-pink-500 animate-pulse" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  My Story
                </h2>
              </div>
              
              <p className="text-xl leading-relaxed text-gray-200 font-light hover:text-white transition-colors duration-300">
                From a very young age, I was deeply fascinated by computers. I didn't just want to use them — I was curious to understand how they worked. While many around me talked about making money online through digital marketing, I found myself exploring that path out of curiosity. I even completed a course in digital marketing, but it didn't feel like my true calling.
              </p>

              <p className="text-xl leading-relaxed text-gray-200 font-light hover:text-white transition-colors duration-300">
                That's when I first heard about programming — the art of building websites and solving problems through code. It instantly sparked something in me. I began exploring it seriously and after nearly two years of self-discovery and learning, I enrolled in a structured course that truly changed my life. Since then, I've built several real-world projects and found joy in turning ideas into functional web applications.
              </p>
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div id="journey" className={`mb-20 transition-all duration-1000 delay-400 ${isVisible.journey ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            My Journey
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`milestone-card glassmorphism p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                  {milestone.icon}
                </div>
                <h3 className="text-lg font-semibold text-purple-300 mb-3 group-hover:text-white transition-colors duration-300">
                  {milestone.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div id="stats" className={`transition-all duration-1000 delay-600 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glassmorphism p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:rotate-180 transition-transform duration-500">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .glassmorphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
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
          width: 150px;
          height: 150px;
          top: 60%;
          right: 15%;
          animation-delay: -5s;
        }

        .shape-3 {
          width: 80px;
          height: 80px;
          bottom: 20%;
          left: 20%;
          animation-delay: -10s;
        }

        .shape-4 {
          width: 120px;
          height: 120px;
          top: 10%;
          right: 30%;
          animation-delay: -15s;
        }

        .shape-5 {
          width: 90px;
          height: 90px;
          bottom: 40%;
          right: 40%;
          animation-delay: -7s;
        }

        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(0) rotate(360deg);
            opacity: 0.7;
          }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          animation: particle-float 15s infinite linear;
        }

        .particle-0 {
          width: 4px;
          height: 4px;
          top: 10%;
          left: 20%;
          animation-delay: 0s;
        }

        .particle-1 {
          width: 3px;
          height: 3px;
          top: 20%;
          left: 40%;
          animation-delay: -2s;
        }

        .particle-2 {
          width: 5px;
          height: 5px;
          top: 30%;
          left: 60%;
          animation-delay: -4s;
        }

        .particle-3 {
          width: 2px;
          height: 2px;
          top: 40%;
          left: 80%;
          animation-delay: -6s;
        }

        .particle-4 {
          width: 4px;
          height: 4px;
          top: 50%;
          left: 10%;
          animation-delay: -8s;
        }

        @keyframes particle-float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }

        .milestone-card {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style> */}
    </section>
  );
};

export default AboutMe;