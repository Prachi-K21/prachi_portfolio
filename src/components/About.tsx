import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, BookOpen, Target, Users, Code, Cpu, Brain, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="text-primary" />,
      title: "AI/ML Projects",
      description: "Developed innovative machine learning solutions for real-world problems",
      color: "primary"
    },
    {
      icon: <BookOpen className="text-accent" />,
      title: "Research Paper Published",
      description: "Published research on IoT and textile technology in IJRASET journal",
      color: "accent"
    },
    {
      icon: <Cpu className="text-primary" />,
      title: "IoT + Web Integration",
      description: "Created seamless integrations between IoT devices and web applications",
      color: "primary"
    }
  ];

  const education = [
    {
      degree: "Diploma in Computer Science",
      school: "Sharad Institute of Technology Polytechnic, Kolhapur",
      year: "2023",
      score: "91.43%"
    },
    {
      degree: "Machine Learning Internship",
      school: "iGAP Technologies, Kolhapur",
      year: "2024",
      duration: "3 months"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-inter">
            My journey through technology, innovation, and continuous learning
          </p>
        </motion.div>

        {/* 2-Column Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Journey Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 font-sora">
                My Journey
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 font-inter">
                I'm a passionate developer with a strong foundation in Computer Science, 
                specializing in Artificial Intelligence and Machine Learning. My journey began 
                with a curiosity about how technology can solve real-world problems, which 
                led me to explore the fascinating world of AI and IoT.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 font-inter">
                During my diploma studies, I achieved an impressive 91.43% while working on 
                innovative projects that bridge the gap between theoretical knowledge and 
                practical application. My research on textile IoT systems was published in 
                the IJRASET journal, marking my first contribution to academic research.
              </p>
              <p className="text-gray-300 leading-relaxed font-inter">
                Currently, I'm expanding my expertise through hands-on projects and internships, 
                always seeking to learn new technologies and push the boundaries of what's 
                possible with AI and machine learning.
              </p>
            </div>

            {/* Education Quick Info */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 font-sora flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Education & Experience
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-4 bg-dark-tertiary rounded-lg"
                  >
                    <h4 className="text-white font-semibold font-sora">{edu.degree}</h4>
                    <p className="text-gray-300 text-sm">{edu.school}</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <span className="text-primary">{edu.year}</span>
                      {edu.score && <span className="text-accent">{edu.score}</span>}
                      {edu.duration && <span className="text-gray-400">{edu.duration}</span>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white font-sora">
              Key Highlights
            </h3>
            
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass p-6 rounded-xl card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-dark-tertiary rounded-lg flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 font-sora">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed font-inter">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core Values */}
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-4 font-sora">
                Core Values
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Rocket />, text: "Innovation" },
                  { icon: <Users />, text: "Collaboration" },
                  { icon: <Award />, text: "Excellence" },
                  { icon: <Briefcase />, text: "Practicality" }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-dark-tertiary rounded-lg"
                  >
                    <span className="text-primary">{value.icon}</span>
                    <span className="text-gray-300 text-sm font-medium">{value.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
