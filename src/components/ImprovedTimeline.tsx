import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Trophy, BookOpen, Brain, Cpu, Target } from 'lucide-react';

const ImprovedTimeline: React.FC = () => {
  const timelineEvents = [
    {
      year: "2025-Present",
      title: "BTech Computer Science",
      description: "Currently pursuing Bachelor's degree in Computer Science Engineering with focus on AI and Machine Learning.",
      location: "Rajarambapu Institute of Technology",
      icon: <GraduationCap className="text-primary" />,
      type: "education",
      highlighted: true
    },
    
    {
      year: "2024",
      title: "Machine Learning Internship",
      description: "Completed intensive 3-month internship focusing on practical ML applications and real-world problem solving.",
      location: "iGAP Technologies, Kolhapur",
      icon: <Briefcase className="text-primary" />,
      type: "work",
      highlighted: false
    },
    
    {
      year: "2023",
      title: "Diploma in Computer Science",
      description: "Graduated with outstanding 91.43% score, specializing in AI and machine learning technologies.",
      location: "Sharad Institute of Technology Polytechnic",
      icon: <GraduationCap className="text-primary" />,
      type: "education",
      highlighted: false
    }
  ];

  return (
    <section id="timeline" className="min-h-screen py-20 relative">
      {/* Section Separator */}
      <div className="section-separator"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl lg:text-6xl font-black font-orbitron text-white mb-6">
          My Journey
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
          From academic excellence to practical experience, here's my professional and educational journey
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto relative px-8">
        {/* Vertical Glowing Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

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
            className={`relative flex items-center mb-16 ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
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
              className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                event.highlighted 
                  ? 'bg-gradient-to-r from-primary to-accent' 
                  : 'bg-primary'
              }`}
              style={{
                boxShadow: event.highlighted 
                  ? '0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(155, 89, 182, 0.3)' 
                  : '0 0 20px rgba(0, 212, 255, 0.5)'
              }}
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
                boxShadow: event.highlighted 
                  ? "0 20px 40px rgba(0, 212, 255, 0.3)" 
                  : "0 20px 40px rgba(155, 89, 182, 0.2)"
              }}
              className={`relative glass p-8 rounded-2xl max-w-md ${
                index % 2 === 0 ? 'mr-auto ml-8' : 'ml-auto mr-8'
              } ${event.highlighted ? 'border-2 border-primary/50 soft-glow' : ''}`}
            >
              {/* Year Badge */}
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-bold font-orbitron ${
                  event.highlighted 
                    ? 'bg-gradient-to-r from-primary to-accent text-dark-bg' 
                    : 'bg-primary/20 text-primary'
                }`}>
                  {event.year}
                </span>
                <div className={`p-2 rounded-lg ${
                  event.highlighted ? 'bg-primary/20' : 'bg-dark-tertiary'
                }`}>
                  {event.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className={`text-xl font-bold font-sora ${
                  event.highlighted ? 'text-primary' : 'text-white'
                }`}>
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin size={14} />
                  <span>{event.location}</span>
                </div>
                
                <p className="text-gray-300 leading-relaxed font-inter">
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

              {/* Highlight Badge */}
              {event.highlighted && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 -right-3"
                >
                  <span className="px-3 py-1 bg-gradient-to-r from-primary to-accent text-dark-bg text-xs font-bold rounded-full">
                    Current
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <div className="flex items-center justify-center gap-6 text-gray-400">
          <Target className="text-primary" size={24} />
          <span className="text-lg font-inter">Continuously learning and growing</span>
          <Cpu className="text-accent" size={24} />
        </div>
      </motion.div>

      {/* Section Separator */}
      <div className="section-separator-accent mt-20"></div>
    </section>
  );
};

export default ImprovedTimeline;
