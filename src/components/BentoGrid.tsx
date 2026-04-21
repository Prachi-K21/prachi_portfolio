import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Cloud, Cpu, GitBranch, Award, BookOpen, Target, Zap, Globe, Smartphone, Palette } from 'lucide-react';

const BentoGrid: React.FC = () => {
  const bentoItems = [
    {
      id: 'about',
      size: 'large',
      title: 'About Me',
      icon: <Brain className="text-primary" size={32} />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer and AI Enthusiast with expertise in building 
            innovative solutions that bridge the gap between artificial intelligence and real-world applications.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Target className="text-accent" size={16} />
              <span className="text-sm text-gray-400">AI/ML Specialist</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="text-primary" size={16} />
              <span className="text-sm text-gray-400">Full Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="text-accent" size={16} />
              <span className="text-sm text-gray-400">IoT Integration</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'projects',
      size: 'medium',
      title: 'AI/ML Projects',
      icon: <Brain className="text-accent" size={24} />,
      content: (
        <div className="space-y-3">
          <div className="text-2xl font-bold text-primary">5+</div>
          <p className="text-sm text-gray-400">Machine Learning Projects</p>
          <div className="space-y-1">
            <div className="text-xs text-gray-300">• Textile Mending Machine</div>
            <div className="text-xs text-gray-300">• AI-Powered Analytics</div>
            <div className="text-xs text-gray-300">• Computer Vision Systems</div>
          </div>
        </div>
      )
    },
    {
      id: 'research',
      size: 'small',
      title: 'Research',
      icon: <BookOpen className="text-primary" size={20} />,
      content: (
        <div className="text-center space-y-2">
          <div className="text-xl font-bold text-accent">1</div>
          <p className="text-xs text-gray-400">Published Paper</p>
          <p className="text-xs text-gray-300">IJRASET Journal</p>
        </div>
      )
    },
    {
      id: 'techstack',
      size: 'wide',
      title: 'Tech Stack',
      icon: <Code className="text-primary" size={24} />,
      content: (
        <div className="space-y-3">
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <Brain className="text-primary mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">AI/ML</p>
            </div>
            <div className="text-center">
              <Database className="text-accent mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Backend</p>
            </div>
            <div className="text-center">
              <Cloud className="text-primary mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Cloud</p>
            </div>
            <div className="text-center">
              <Smartphone className="text-accent mx-auto mb-1" size={20} />
              <p className="text-xs text-gray-400">Mobile</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {['React', 'Python', 'TensorFlow', 'Node.js', 'MongoDB', 'AWS', 'IoT', 'Docker'].map((tech) => (
              <span key={tech} className="skill-tag text-xs">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'achievements',
      size: 'small',
      title: 'Achievements',
      icon: <Award className="text-accent" size={20} />,
      content: (
        <div className="text-center space-y-2">
          <div className="text-xl font-bold text-primary">1st</div>
          <p className="text-xs text-gray-400">Position</p>
          <p className="text-xs text-gray-300">ORNATE 2022</p>
        </div>
      )
    },
    {
      id: 'experience',
      size: 'medium',
      title: 'Experience',
      icon: <Cpu className="text-primary" size={24} />,
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <GitBranch className="text-accent" size={16} />
            <span className="text-sm font-semibold text-white">ML Internship</span>
          </div>
          <p className="text-xs text-gray-400">iGAP Technologies</p>
          <p className="text-xs text-gray-400">3 Months • 2023</p>
          <div className="text-xs text-gray-300">Practical ML applications</div>
        </div>
      )
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'bento-large';
      case 'wide':
        return 'bento-wide';
      case 'tall':
        return 'bento-tall';
      default:
        return '';
    }
  };

  return (
    <section id="bento" className="min-h-screen grid-bg">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
          Journey & Expertise
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto font-inter">
          A comprehensive view of my skills, projects, and achievements in an innovative layout
        </p>
      </motion.div>

      <div className="bento-grid">
        {bentoItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring"
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)"
            }}
            className={`bento-card ${getSizeClasses(item.size)}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-dark-tertiary rounded-lg">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-sora">
                  {item.title}
                </h3>
              </div>
            </div>
            
            <div className="text-gray-300">
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;
