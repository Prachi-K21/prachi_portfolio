import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Code, Database, Cloud, Cpu, Smartphone, Star } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "PillPilot Smart Medicine AI Reminder",
      shortDescription: "AI-powered medication management system",
      fullDescription: "Developed an intelligent medicine reminder system using AI to help patients manage their medication schedules with smart notifications and adherence tracking.",
      image: process.env.PUBLIC_URL + "/pillpilot.png",
      techStack: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "ai"
    },
    {
      title: "Personal Expense Tracker",
      shortDescription: "Java-based financial management application",
      fullDescription: "Built a comprehensive expense tracking system in Java with features for budget management, expense categorization, and financial analytics.",
      image: process.env.PUBLIC_URL + "/personal-tracker.png",
      techStack: ["Java", "Spring Boot", "MySQL", "React", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "web"
    },
    {
      title: "Textile Mending Machine Data Recording System",
      shortDescription: "IoT project for textile defect detection and repair",
      fullDescription: "Developed an innovative IoT solution for automated textile defect detection and repair using computer vision and robotic mechanisms with comprehensive data recording.",
      image: process.env.PUBLIC_URL + "/textile.png",
      techStack: ["Python", "TensorFlow", "IoT", "Computer Vision", "Arduino"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "iot"
    },
    {
      title: "Car Price Prediction Model",
      shortDescription: "Machine learning model for vehicle pricing",
      fullDescription: "Built a predictive model using machine learning algorithms to estimate car prices based on various features like make, model, year, and condition.",
      image: process.env.PUBLIC_URL + "/car.png",
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false,
      category: "ai"
    },
    {
      title: "Creative Hands Academy Website",
      shortDescription: "Sponsored educational platform website",
      fullDescription: "Developed a comprehensive educational website for Creative Hands Academy with course management, student enrollment, and interactive learning features. Sponsored project with real-world deployment.",
      image: process.env.PUBLIC_URL + "/weather.png",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true,
      category: "web"
    }
  ];

  
  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-inter">
            Explore my portfolio of innovative projects spanning AI, web development, and IoT
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
              }}
              className="glass rounded-2xl overflow-hidden card-hover relative group h-full flex flex-col"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-4 right-4 px-3 py-1 bg-primary text-dark-bg text-xs font-bold rounded-full flex items-center gap-1"
                  >
                    <Star size={12} />
                    FEATURED
                  </motion.div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 relative z-10 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 font-sora group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 font-inter">
                  {project.shortDescription}
                </p>
                
                <p className="text-gray-400 text-xs mb-4 font-inter line-clamp-3 flex-grow">
                  {project.fullDescription}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag text-xs group-hover:border-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex-1 text-sm justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GitBranch size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-sm justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Projects Message */}
        {projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
