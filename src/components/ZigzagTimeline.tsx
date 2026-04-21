import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Trophy, BookOpen, Brain, Cpu, Target } from 'lucide-react';

const ZigzagTimeline: React.FC = () => {
  const timelineEvents = [
    {
      year: "2025",
      title: "AI Research & Development",
      description: "Continuing research in advanced machine learning applications and neural network architectures.",
      location: "Remote Research",
      icon: <Brain className="text-primary" />,
      type: "research"
    },
    {
      year: "2023",
      title: "Machine Learning Internship",
      description: "Completed intensive 3-month internship focusing on practical ML applications and real-world problem solving.",
      location: "iGAP Technologies, Kolhapur",
      icon: <Briefcase className="text-accent" />,
      type: "work"
    },
    {
      year: "2023",
      title: "Diploma in Computer Science",
      description: "Graduated with outstanding 91.43% score, specializing in AI and machine learning technologies.",
      location: "Sharad Institute of Technology Polytechnic",
      icon: <GraduationCap className="text-primary" />,
      type: "education"
    },
    {
      year: "2023",
      title: "Research Publication",
      description: "Published research paper on 'Textile Mending Machine: Data Recording System' in IJRASET journal.",
      location: "IJRASET Journal",
      icon: <BookOpen className="text-accent" />,
      type: "research"
    },
    {
      year: "2022",
      title: "First Position - ORNATE",
      description: "Secured first place in the prestigious technical competition ORNATE during diploma studies.",
      location: "Sharad Institute of Technology Polytechnic",
      icon: <Trophy className="text-primary" />,
      type: "achievement"
    }
  ];

  return (
    <section id="timeline" className="min-h-screen grid-bg py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
          Journey Timeline
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto font-inter">
          My professional and academic journey through technology and innovation
        </p>
      </motion.div>

      {/* Zigzag Timeline Container */}
      <div className="zigzag-timeline max-w-6xl mx-auto relative">
        {/* Vertical Glowing Line */}
        <div className="timeline-line"></div>

        {/* Timeline Events */}
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              type: "spring"
            }}
            viewport={{ once: true }}
            className={`timeline-item ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            {/* Timeline Node */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.2,
                type: "spring"
              }}
              viewport={{ once: true }}
              className="timeline-node"
            />

            {/* Timeline Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 + 0.3,
                type: "spring"
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)"
              }}
              className="timeline-content"
            >
              {/* Year Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-dark-bg text-sm font-bold rounded-full font-orbitron">
                  {event.year}
                </span>
                <div className="p-2 bg-dark-tertiary rounded-lg">
                  {event.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white font-sora">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed font-inter">
                  {event.description}
                </p>
              </div>

              {/* Type Indicator */}
              <div className="absolute top-4 right-4">
                <div className={`w-2 h-2 rounded-full ${
                  event.type === 'research' ? 'bg-accent' :
                  event.type === 'work' ? 'bg-primary' :
                  event.type === 'education' ? 'bg-blue-500' :
                  'bg-green-500'
                }`}></div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <div className="flex items-center justify-center gap-4 text-gray-400">
          <Target className="text-primary" size={20} />
          <span className="text-sm font-inter">Continuously learning and growing</span>
          <Cpu className="text-accent" size={20} />
        </div>
      </motion.div>
    </section>
  );
};

export default ZigzagTimeline;
