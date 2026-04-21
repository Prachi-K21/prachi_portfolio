import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Trophy, BookOpen, Target, Brain } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineEvents = [
    {
      year: '2023',
      title: 'Diploma Started',
      subtitle: 'Computer Science Engineering',
      institution: 'Sharad Institute of Technology Polytechnic',
      location: 'Yadrav, Maharashtra',
      description: 'Began my journey in computer science with focus on practical learning and innovation.',
      icon: <GraduationCap className="text-primary" />,
      type: 'education'
    },
    {
      year: '2024',
      title: 'ML Internship',
      subtitle: 'Machine Learning Intern',
      institution: 'iGAP Technologies',
      location: 'Kolhapur, Maharashtra',
      description: '3-month intensive internship working on real-world ML projects and AI solutions.',
      icon: <Briefcase className="text-accent" />,
      type: 'work'
    },
    {
      year: '2023',
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
    <section id="timeline" className="py-20 relative overflow-hidden">
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
            Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto font-inter">
            My journey through education, research, and professional growth
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="timeline-line"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Year Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-dark-bg font-bold text-sm z-10 glow-effect"
                >
                  {event.year}
                </motion.div>

                {/* Timeline Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(0, 255, 255, 0.2)"
                  }}
                  className="glass p-6 rounded-xl card-hover mx-4 max-w-md relative group"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
                  
                  <div className="flex items-start gap-3 mb-4 relative z-10">
                    <div className="p-2 bg-dark-tertiary rounded-lg">
                      {event.icon}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-white mb-1 font-sora group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed font-inter relative z-10">
                    {event.description}
                  </p>
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="w-20"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
