import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Code, Database, Brain } from 'lucide-react';

const Experience: React.FC = () => {
  const experience = {
    company: "iGAP Technologies",
    position: "Machine Learning Intern",
    period: "3 Months",
    location: "Kolhapur, Maharashtra",
    description: "Worked on cutting-edge machine learning projects, developing and implementing AI models for real-world applications.",
    responsibilities: [
      "Developed machine learning models for predictive analytics",
      "Implemented data preprocessing and feature engineering pipelines",
      "Collaborated with senior engineers on model optimization",
      "Created documentation and technical reports for ML projects",
      "Participated in code reviews and team meetings"
    ],
    technologies: [
      { name: "Python", icon: <Code className="text-neon-cyan" /> },
      { name: "TensorFlow", icon: <Brain className="text-neon-purple" /> },
      { name: "Scikit-learn", icon: <Database className="text-neon-blue" /> },
      { name: "Pandas", icon: <Database className="text-neon-green" /> }
    ],
    achievements: [
      "Improved model accuracy by 15% through feature optimization",
      "Reduced processing time by 30% with efficient algorithms",
      "Successfully deployed 2 ML models to production"
    ]
  };

  return (
    <section id="experience" className="py-20 bg-dark-bg relative overflow-hidden">
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
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-dark-secondary border border-neon-cyan/20 rounded-lg p-8 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {experience.position}
                </h3>
                <div className="flex items-center gap-2 text-neon-cyan">
                  <Briefcase size={20} />
                  <span className="font-semibold">{experience.company}</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-8 leading-relaxed">
              {experience.description}
            </p>

            {/* Responsibilities */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-neon-blue mb-4">Key Responsibilities</h4>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300">{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-xl font-bold text-neon-purple mb-4">Technologies Used</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {experience.technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark-tertiary p-4 rounded-lg text-center hover:border hover:border-neon-cyan transition-all duration-300"
                  >
                    <div className="flex justify-center mb-2">
                      {tech.icon}
                    </div>
                    <span className="text-white font-medium">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-bold text-neon-green mb-4">Key Achievements</h4>
              <div className="grid md:grid-cols-3 gap-4">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-neon-cyan/10 to-neon-blue/10 p-4 rounded-lg border border-neon-cyan/30"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                      <span className="text-neon-green font-semibold">Achievement</span>
                    </div>
                    <p className="text-gray-300 text-sm">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-bold rounded-full hover:shadow-lg hover:shadow-neon-cyan transition-all duration-300 inline-flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Company Profile
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
