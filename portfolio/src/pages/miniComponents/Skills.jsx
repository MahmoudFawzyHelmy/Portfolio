import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Code, Zap, Star } from "lucide-react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMySkills = async () => {
      try {
        const { data } = await axios.get(
          "https://mern-stack-portfolio-backend-code.onrender.com/api/v1/skill/getall",
          { withCredentials: true }
        );
        setSkills(data.skills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      } finally {
        setLoading(false);
      }
    };
    getMySkills();
  }, []);

  // Default skills if API fails
  const defaultSkills = [
      { title: "HTML", category: "Language" },
    { title: "CSS", category: "Language" },
    { title: "React", category: "Frontend" },
    { title: "Node.js", category: "Backend" },
    { title: "MongoDB", category: "Database" },
    { title: "JavaScript", category: "Language" },
    { title: "TypeScript", category: "Language" },
    { title: "Git", category: "Tools" },
    { title: "Figma", category: "Design" }
  ];

  const displaySkills = skills.length > 0 ? skills : defaultSkills;

  return (
    <div className="w-full flex flex-col gap-12 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-yellow-400 to-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Code className="w-8 h-8 text-purple-400" />
            <h1 className="text-gradient text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight">
              SKILLS
            </h1>
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-xl text-gray-400 font-medium">
            Technologies I work with
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {displaySkills.map((skill, index) => (
            <div
              key={skill._id || index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="modern-card h-full p-6 flex flex-col justify-center items-center gap-4 hover:scale-105 transition-all duration-300 cursor-pointer">
                {/* Skill icon */}
                <div className="relative">
                  {skill.svg && skill.svg.url ? (
                    <img
                      src={skill.svg.url}
                      alt={skill.title}
                      className="h-16 w-16 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="h-16 w-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                  )}
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>

                {/* Skill name */}
                <div className="text-center">
                  <h3 className="font-semibold text-white text-lg mb-1">
                    {skill.title}
                  </h3>
                  {skill.category && (
                    <p className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                      {skill.category}
                    </p>
                  )}
                </div>

                {/* Progress indicator */}
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  ></div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Skills summary */}
        <div className="mt-16">
          <div className="modern-card p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Frontend</h3>
                  <p className="text-gray-400">React, Angular, Next.js</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Backend</h3>
                  <p className="text-gray-400">Node.js, MongoDb</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Tools</h3>
                  <p className="text-gray-400">Git, Docker,</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
