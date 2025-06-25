import React, { useEffect, useState } from "react";
import { User, Award, Clock, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-400 to-red-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="relative z-10">
        {/* Section header with enhanced design */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-gradient text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight mb-4">
              ABOUT <span className="text-white">ME</span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-xl text-gray-400 mt-6 font-medium">
            Allow me to introduce myself
          </p>
        </div>

        {/* Main content with modern layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image section with enhanced styling */}
          <div className="flex justify-center items-center relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img
                src="/me.jpg"
                alt="avatar"
                className="relative bg-white p-4 rounded-3xl h-[280px] sm:h-[380px] md:h-[400px] lg:h-[500px] object-cover shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Text content with modern styling */}
          <div className="space-y-8">
            <div className="modern-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <User className="w-6 h-6 text-purple-400" />
                Who I Am
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                My name is Mahmoud Fawzy Helmy, a graduate of Benha University,
                further honed his skills at the ITI institute, specializing in
                the MERN stack with a strong focus on front-end development. He
                approaches projects with professionalism, ensuring high-quality
                outcomes.
              </p>
            </div>

            <div className="modern-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-white flex items-center gap-3">
                <Heart className="w-6 h-6 text-pink-400" />
                My Interests
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                I have interests not only in technology but also in movies,
                series, video games, and cooking. I excel in meeting deadlines
                for my work and always strive for excellence in everything I do.
              </p>
            </div>
          </div>
        </div>

        {/* Additional info section */}
        <div className="modern-card p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Dedication
                </h4>
                <p className="text-gray-300">
                  My dedication and perseverance in timely delivery of work are
                  integral to me. I maintain the courage to face any challenges
                  for extended periods.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-2">
                  Timeliness
                </h4>
                <p className="text-gray-300">
                  I prioritize meeting deadlines and delivering high-quality
                  work on time. Time management is one of my core strengths.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills preview */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">
            Technical Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "Node.js",
              "MongoDB",
              "JavaScript",
              "TypeScript",
              "HTML",
              "CSS",
             
           
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
