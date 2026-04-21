import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, ExternalLink, Code, Database, Cloud, Smartphone, Brain, Cpu } from 'lucide-react';

const HorizontalProjects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Textile Mending Machine",
      description: "IoT-based automated textile repair system using computer vision and robotic mechanisms for defect detection and repair.",
      image: "/api/placeholder/400/250",
      techStack: ["Python", "TensorFlow", "IoT", "Computer Vision"],
      githubUrl: "https://github.com/prachi/textile-mending",
      liveUrl: "https://textile-mending.demo.com",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Analytics",
      description: "Real-time data analytics platform with machine learning insights for business intelligence and predictive analytics.",
      image: "/api/placeholder/400/250",
      techStack: ["React", "Python", "TensorFlow", "PostgreSQL"],
      githubUrl: "https://github.com/prachi/analytics-platform",
      liveUrl: "https://analytics.demo.com",
      featured: false
    },
    {
      id: 3,
      title: "Smart Home System",
      description: "Complete IoT ecosystem for home automation with voice control, mobile app, and energy monitoring.",
      image: "/api/placeholder/400/250",
      techStack: ["Node.js", "MQTT", "React Native", "Arduino"],
      githubUrl: "https://github.com/prachi/smart-home",
      liveUrl: "https://smarthome.demo.com",
      featured: false
    },
    {
      id: 4,
      title: "ML Model Optimizer",
      description: "Advanced tool for optimizing machine learning models with quantization and pruning techniques.",
      image: "/api/placeholder/400/250",
      techStack: ["Python", "PyTorch", "TensorFlow", "FastAPI"],
      githubUrl: "https://github.com/prachi/ml-optimizer",
      liveUrl: "https://ml-optimizer.demo.com",
      featured: true
    },
    {
      id: 5,
      title: "Computer Vision Pipeline",
      description: "End-to-end computer vision pipeline for object detection, tracking, and analysis in real-time.",
      image: "/api/placeholder/400/250",
      techStack: ["OpenCV", "Python", "CUDA", "Docker"],
      githubUrl: "https://github.com/prachi/vision-pipeline",
      liveUrl: "https://vision-pipeline.demo.com",
      featured: false
    }
  ];

  const getTechIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('react') || lowerTech.includes('node')) return <Code className="text-primary" size={16} />;
    if (lowerTech.includes('python') || lowerTech.includes('tensorflow') || lowerTech.includes('pytorch')) return <Brain className="text-accent" size={16} />;
    if (lowerTech.includes('database') || lowerTech.includes('sql')) return <Database className="text-primary" size={16} />;
    if (lowerTech.includes('cloud') || lowerTech.includes('aws')) return <Cloud className="text-accent" size={16} />;
    if (lowerTech.includes('mobile') || lowerTech.includes('ios') || lowerTech.includes('android')) return <Smartphone className="text-primary" size={16} />;
    if (lowerTech.includes('cpu') || lowerTech.includes('gpu')) return <Cpu className="text-accent" size={16} />;
    return <Code className="text-gray-400" size={16} />;
  };

  return (
    <section id="projects" className="min-h-screen grid-bg py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto font-inter">
          Explore my latest work in AI, IoT, and full-stack development
        </p>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="horizontal-scroll scrollbar-hide">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring"
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
            }}
            className="project-card"
          >
            {/* Featured Badge */}
            {project.featured && (
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="absolute top-4 right-4 z-10"
              >
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-dark-bg text-xs font-bold rounded-full">
                  Featured
                </span>
              </motion.div>
            )}

            {/* Project Image */}
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Project Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white font-sora">
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed font-inter">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <motion.div
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + techIndex * 0.05,
                      type: "spring"
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-1 px-3 py-1 bg-dark-tertiary border border-gray-700 rounded-full text-xs text-gray-300 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  >
                    {getTechIcon(tech)}
                    <span>{tech}</span>
                  </motion.div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-8"
      >
        <p className="text-gray-400 text-sm animate-pulse">
          ← Scroll horizontally for more projects →
        </p>
      </motion.div>
    </section>
  );
};

export default HorizontalProjects;
