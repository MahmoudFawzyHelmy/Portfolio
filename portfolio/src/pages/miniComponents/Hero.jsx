import {

  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Download,
  ArrowRight,
} from "lucide-react";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import axios from "axios";

const Hero = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://mern-stack-portfolio-backend-code.onrender.com/api/v1/user/portfolio/me",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  
  return (
    <div className="w-full relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10">
        {/* Online status with modern design */}
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <span className="bg-green-400 rounded-full h-3 w-3 animate-pulse"></span>
            <span className="absolute top-0 left-0 bg-green-400 rounded-full h-3 w-3 animate-ping"></span>
          </div>
          <p className="text-green-400 font-medium tracking-wide">Available for opportunities</p>
        </div>

        {/* Main heading with enhanced typography */}
        <div className="mb-8">
          <h1 className="text-gradient text-[2rem] sm:text-[2.5rem] md:text-[3.2rem] lg:text-[4rem] font-bold tracking-tight mb-4 leading-tight">
            Hey, I&apos;m <span className="text-white">{user.name || "Mahmoud"}</span>
          </h1>
          <div className="h-20 sm:h-24 md:h-28 lg:h-32 flex items-center">
            <h2 className="text-tubeLight-effect text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-wide">
              <Typewriter
                words={["FULLSTACK DEVELOPER", "FREELANCER", "CREATIVE THINKER"]}
                loop={50}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>
          </div>
        </div>

        {/* Social media links with glass morphism */}
        <div className="glass w-fit px-6 py-4 rounded-2xl flex gap-6 items-center mb-8 backdrop-blur-md">
          <Link to={"https://www.youtube.com/@CodeWithZeeshu"} target="_blank" className="hover:scale-110 transition-transform duration-300">
            <Youtube className="text-red-500 w-8 h-8 hover:text-red-400"/>
          </Link>
          <Link to={user.instagramURL} target="_blank" className="hover:scale-110 transition-transform duration-300">
            <Instagram className="text-pink-500 w-8 h-8 hover:text-pink-400" />
          </Link>
          <Link to={user.facebookURL} target="_blank" className="hover:scale-110 transition-transform duration-300">
            <Facebook className="text-blue-600 w-8 h-8 hover:text-blue-500" />
          </Link>
          <Link to={user.linkedInURL} target="_blank" className="hover:scale-110 transition-transform duration-300">
            <Linkedin className="text-sky-500 w-8 h-8 hover:text-sky-400" />
          </Link>
          <Link to={user.twitterURL} target="_blank" className="hover:scale-110 transition-transform duration-300">
            <Twitter className="text-blue-400 w-8 h-8 hover:text-blue-300" />
          </Link>
        </div>

        {/* Action buttons with modern design */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link to={user.githubURL} target="_blank">
            <Button className="modern-button flex items-center gap-3 px-8 py-4 text-lg">
              <Github className="w-5 h-5" />
              <span>View GitHub</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to={user.resume && user.resume.url} target="_blank">
            <Button className="modern-button flex items-center gap-3 px-8 py-4 text-lg" style={{background: 'linear-gradient(45deg, #4ecdc4, #44a08d)'}}>
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </Button>
          </Link>
        </div>

        {/* About me section with enhanced styling */}
        <div className="modern-card p-8 mb-8">
          <p className="text-xl leading-relaxed text-gray-300 tracking-wide">
            {user.aboutMe || "Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and sharing knowledge through content creation."}
          </p>
        </div>

        {/* Decorative line */}
        <div className="relative">
          <hr className="border-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
