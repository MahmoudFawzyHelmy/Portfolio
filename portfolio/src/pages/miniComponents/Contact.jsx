import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";

const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();
    if (!senderName || !subject || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    
    setLoading(true);
    try {
      const res = await axios.post(
        "https://mern-stack-portfolio-backend-code.onrender.com/api/v1/message/send",
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setSenderName("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-blue-400 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      <div className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-gradient text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight mb-4">
              CONTACT <span className="text-white">ME</span>
            </h1>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
          </div>
          <p className="text-xl text-gray-400 mt-6 font-medium">
            Let's work together on your next project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact information */}
          <div className="space-y-8">
            <div className="modern-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400">MahmoudFawzy.helmy@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-400">+201094755985</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400">Egypt , Qalyubia , Toukh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div className="modern-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">24h</div>
                  <div className="text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="modern-card p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-purple-400" />
              Send Message
            </h3>
            
            <form onSubmit={handleMessage} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Your Name
                </Label>
                <Input
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Subject
                </Label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="What's this about?"
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-white font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </Label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 min-h-[120px] resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                disabled={loading}
                className="modern-button w-full py-4 text-lg flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
