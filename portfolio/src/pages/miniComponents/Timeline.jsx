import axios from "axios";
import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from "lucide-react";

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMyTimeline = async () => {
      try {
        const { data } = await axios.get(
          "https://mern-stack-portfolio-backend-code.onrender.com/api/v1/timeline/getall",
          { withCredentials: true }
        );
        setTimeline(data.timelines);
      } catch (error) {
        console.error("Error fetching timeline:", error);
        // Default timeline if API fails
        setTimeline([
          {
            _id: "1",
            title: "Software Engineering Degree",
            description: "Graduated with honors in Software Engineering from SMIU",
            timeline: { from: "2020", to: "2024" },
            type: "education"
          },
          {
            _id: "2",
            title: "Senior Web Developer",
            description: "Leading development team and mentoring junior developers",
            timeline: { from: "2023", to: "Present" },
            type: "work"
          },
          {
            _id: "3",
            title: "Freelance Developer",
            description: "Working on various client projects and building portfolio",
            timeline: { from: "2022", to: "Present" },
            type: "work"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    getMyTimeline();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-4 h-4" />;
      case 'work':
        return <Briefcase className="w-4 h-4" />;
      case 'award':
        return <Award className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getGradient = (index) => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-orange-500 to-red-500',
      'from-indigo-500 to-purple-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="w-full relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-gradient text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight mb-4">
              TIMELINE
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-xl text-gray-400 mt-6 font-medium">
            My journey through education and career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={item._id} className="relative flex items-start gap-8 group">
                {/* Timeline dot */}
                <div className={`absolute left-6 top-4 w-4 h-4 bg-gradient-to-r ${getGradient(index)} rounded-full ring-4 ring-gray-900 group-hover:scale-125 transition-transform duration-300`}>
                  <div className="w-full h-full flex items-center justify-center text-white">
                    {getIcon(item.type)}
                  </div>
                </div>

                {/* Content card */}
                <div className="ml-16 flex-1">
                  <div className="modern-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {item.timeline.from} - {item.timeline.to || "Present"}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Type badge */}
                    <div className="mt-4">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                        item.type === 'education' ? 'bg-blue-500/20 text-blue-400' :
                        item.type === 'work' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {item.type?.charAt(0).toUpperCase() + item.type?.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className="mt-16">
          <div className="modern-card p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                  <p className="text-gray-400">Software Engineering Degree</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Experience</h3>
                  <p className="text-gray-400">2+ Years in Web Development</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Achievements</h3>
                  <p className="text-gray-400">Multiple Successful Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
