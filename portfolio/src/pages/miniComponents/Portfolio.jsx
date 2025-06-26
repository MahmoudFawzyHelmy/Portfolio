import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Eye, Calendar, Tag } from "lucide-react";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMyProjects = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/v1/project/getall",
          { withCredentials: true }
        );
        setProjects(response.data.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([
          {
            _id: "1",
            title: "E-Commerce Platform",
            description: "A full-stack e-commerce solution with React and Node.js",
            projectBanner: { url: "https://via.placeholder.com/400x250/667eea/ffffff?text=E-Commerce" },
            liveURL: "#",
            githubURL: "#",
            createdAt: "2024-01-15"
          },
          {
            _id: "2", 
            title: "Task Management App",
            description: "Real-time task management with drag-and-drop functionality",
            projectBanner: { url: "https://via.placeholder.com/400x250/764ba2/ffffff?text=Task+App" },
            liveURL: "#",
            githubURL: "#",
            createdAt: "2024-02-20"
          },
          {
            _id: "3",
            title: "Portfolio Website",
            description: "Modern portfolio website with dark mode and animations",
            projectBanner: { url: "https://via.placeholder.com/400x250/f093fb/ffffff?text=Portfolio" },
            liveURL: "#",
            githubURL: "#",
            createdAt: "2024-03-10"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    getMyProjects();
  }, []);

  const displayProjects = viewAll ? projects : projects.slice(0, 6);

  return (
    <div className="w-full relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-gradient text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight mb-4">
              MY <span className="text-white">PORTFOLIO</span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-xl text-gray-400 mt-6 font-medium">
            Showcasing my latest work and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProjects.map((project, index) => (
            <div
              key={project._id}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="modern-card overflow-hidden h-full hover:scale-105 transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img
                    src={project.projectBanner?.url || "https://via.placeholder.com/400x250/667eea/ffffff?text=Project"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {project.description || "A modern web application built with cutting-edge technologies."}
                      </p>
                      
                      <div className="flex gap-3">
                        {project.liveURL && (
                          <Link to={project.liveURL} target="_blank" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                            <ExternalLink className="w-4 h-4 text-white" />
                          </Link>
                        )}
                        {project.githubURL && (
                          <Link to={project.githubURL} target="_blank" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                            <Github className="w-4 h-4 text-white" />
                          </Link>
                        )}
                        <Link to={`/project/${project._id}`} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                          <Eye className="w-4 h-4 text-white" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-xl text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description || "A modern web application built with cutting-edge technologies."}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Tag className="w-3 h-3" />
                      <span>Web App</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center">
            <Button 
              className="modern-button px-8 py-4 text-lg"
              onClick={() => setViewAll(!viewAll)}
            >
              {viewAll ? "Show Less" : "View All Projects"}
            </Button>
          </div>
        )}

        <div className="mt-16">
          <div className="modern-card p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-gradient">{projects.length}+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-gradient">2+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-gradient">15+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="text-3xl font-bold text-gradient">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
