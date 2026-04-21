import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, GitBranch, Cloud, Cpu, Users, MessageSquare, Clock, Target, Lightbulb } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-neon-cyan" />,
      skills: ['Python', 'Java', 'C++', 'JavaScript/TypeScript', 'HTML5/CSS3', 'SQL'],
      color: 'neon-cyan'
    },
    {
      title: 'Technologies & Frameworks',
      icon: <Cpu className="text-neon-purple" />,
      skills: ['Machine Learning', 'TensorFlow', 'Scikit-learn', 'React.js', 'Node.js', 'Express.js', 'Git/GitHub', 'Docker', 'IoT Platforms', 'Cloud Services'],
      color: 'neon-purple'
    },
    {
      title: 'Database',
      icon: <Database className="text-neon-blue" />,
      skills: ['MySQL', 'MongoDB', 'Firebase', 'SQLite'],
      color: 'neon-blue'
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-neon-green" />,
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Time Management', 'Leadership', 'Critical Thinking'],
      color: 'neon-green'
    }
  ];

  const quickStats = [
    { icon: <Code />, label: "6+ Languages", color: "text-neon-cyan" },
    { icon: <Database />, label: "4+ Databases", color: "text-neon-blue" },
    { icon: <GitBranch />, label: "Git Expert", color: "text-neon-purple" },
    { icon: <Cloud />, label: "Cloud Ready", color: "text-neon-green" }
  ];

  const coreValues = [
    { icon: <Target />, text: "Goal Oriented" },
    { icon: <Lightbulb />, text: "Innovative Thinking" },
    { icon: <Clock />, text: "Time Management" },
    { icon: <MessageSquare />, text: "Team Player" }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-secondary relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-tech mb-4 neon-glow">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Comprehensive skill set spanning programming languages, cutting-edge technologies, 
            and essential soft skills for modern software development
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-bg border border-gray-700 rounded-lg p-6 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-dark-secondary rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-tag px-4 py-2 rounded-full text-sm font-medium ${
                      category.color === 'neon-cyan' ? 'text-neon-cyan border-neon-cyan/30' : 
                      category.color === 'neon-purple' ? 'text-neon-purple border-neon-purple/30' : 
                      category.color === 'neon-blue' ? 'text-neon-blue border-neon-blue/30' : 
                      'text-neon-green border-neon-green/30'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-bg border border-gray-700 rounded-lg p-6 text-center hover:border hover:border-neon-cyan transition-all duration-300"
            >
              <div className={`text-3xl mb-3 ${stat.color} flex justify-center`}>
                {React.cloneElement(stat.icon, { size: 32 })}
              </div>
              <p className="text-white font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-dark-bg border border-gray-700 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Continuous Learning Journey
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Always exploring new technologies and staying updated with the latest trends 
              in AI, machine learning, and software development.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-dark-tertiary rounded-lg"
                >
                  <span className="text-neon-cyan">{value.icon}</span>
                  <span className="text-gray-300 text-sm font-medium">{value.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
