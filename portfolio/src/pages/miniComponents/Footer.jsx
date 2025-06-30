
import { Heart, ArrowUp, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full relative mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent"></div>

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-[1050px] mx-auto px-5">
          {/* Decorative line */}
          <div className="relative mb-12">
            <hr className="border-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full"></div>
          </div>

          {/* Footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand section */}
            <div className="space-y-4">
              <h2 className="text-gradient text-2xl font-bold">Mahmoud</h2>
              <p className="text-gray-400 leading-relaxed">
                Full-stack developer passionate about creating innovative web
                solutions and sharing knowledge through content creation.
              </p>
              <div className="flex gap-4">
                <Link
                  to="https://github.com"
                  target="_blank"
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </Link>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Quick Links</h3>
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="#about"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About
                </Link>
                <Link
                  to="#skills"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Skills
                </Link>
                <Link
                  to="#portfolio"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  to="#contact"
                  className="block text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">
                    MahmoudFawzy.Helmy@gmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">
                    github.com/MahmoudFawzyHelmy
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">
                    Linkedin.com/in/mahmoud-fawzy-helmy/
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 pt-8 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-400">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>by Mahmoud</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-gray-400">©2025 All rights reserved</span>
                <button
                  onClick={scrollToTop}
                  className="p-2 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors"
                >
                  <ArrowUp className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
