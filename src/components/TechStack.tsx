import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  GitBranch, 
  Server, 
  Smartphone, 
  Palette,
  Terminal,
  Globe,
  Shield,
  Zap,
  Brain
} from 'lucide-react';

const TechStack: React.FC = () => {
  const techCategories = [
    {
      title: 'Frontend',
      icon: <Palette className="text-primary" />,
      technologies: [
        { name: 'React', icon: <Code size={24} />, color: 'text-cyan-400' },
        { name: 'TypeScript', icon: <Code size={24} />, color: 'text-blue-400' },
        { name: 'Tailwind CSS', icon: <Palette size={24} />, color: 'text-teal-400' },
        { name: 'HTML5/CSS3', icon: <Globe size={24} />, color: 'text-orange-400' }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="text-accent" />,
      technologies: [
        { name: 'Node.js', icon: <Server size={24} />, color: 'text-green-400' },
        { name: 'Express.js', icon: <Terminal size={24} />, color: 'text-yellow-400' },
        { name: 'Python', icon: <Code size={24} />, color: 'text-blue-500' },
        { name: 'SQL', icon: <Database size={24} />, color: 'text-purple-400' }
      ]
    },
    {
      title: 'AI/ML',
      icon: <Brain className="text-primary" />,
      technologies: [
        { name: 'TensorFlow', icon: <Cpu size={24} />, color: 'text-orange-500' },
        { name: 'Scikit-learn', icon: <Brain size={24} />, color: 'text-indigo-400' },
        { name: 'PyTorch', icon: <Zap size={24} />, color: 'text-red-400' },
        { name: 'OpenCV', icon: <Shield size={24} />, color: 'text-green-500' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: <GitBranch className="text-accent" />,
      technologies: [
        { name: 'Git', icon: <GitBranch size={24} />, color: 'text-red-500' },
        { name: 'Docker', icon: <Cloud size={24} />, color: 'text-blue-400' },
        { name: 'Firebase', icon: <Cloud size={24} />, color: 'text-yellow-500' },
        { name: 'VS Code', icon: <Terminal size={24} />, color: 'text-blue-600' }
      ]
    }
  ];

  return (
    <section id="techstack" className="py-20 relative overflow-hidden">
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
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-inter">
            Technologies and tools I work with to build amazing solutions
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-dark-tertiary rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-sora">
                  {category.title}
                </h3>
              </div>

              {/* Technologies List */}
              <div className="space-y-4">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-3 p-3 bg-dark-tertiary rounded-lg cursor-pointer"
                  >
                    <div className={`${tech.color} transition-transform duration-300`}>
                      {tech.icon}
                    </div>
                    <span className="text-gray-300 font-medium font-inter">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons Animation */}
        <div className="relative mt-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="relative w-64 h-64"
            >
              {[
                { icon: <Code />, position: 'top-0 left-1/2 -translate-x-1/2' },
                { icon: <Database />, position: 'top-1/2 right-0 -translate-y-1/2' },
                { icon: <Cloud />, position: 'bottom-0 left-1/2 -translate-x-1/2' },
                { icon: <Cpu />, position: 'top-1/2 left-0 -translate-y-1/2' },
                { icon: <GitBranch />, position: 'top-1/4 left-1/4' },
                { icon: <Server />, position: 'top-1/4 right-1/4' },
                { icon: <Smartphone />, position: 'bottom-1/4 left-1/4' },
                { icon: <Terminal />, position: 'bottom-1/4 right-1/4' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${item.position} p-3 glass rounded-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.25,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-2 font-sora">
                Always Learning
              </h3>
              <p className="text-gray-300 font-inter">
                Continuously expanding my tech stack to stay current with industry trends
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
