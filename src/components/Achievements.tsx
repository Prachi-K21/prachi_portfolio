import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, BookOpen, Target, Star, Medal, Calendar, MapPin, X, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "First Position - ORNATE",
      description: "Technical competition winner during diploma studies",
      year: "2024",
      icon: <Trophy className="text-primary" />,
      category: "competition"
    },
    {
      title: "Research Publication",
      description: "IJRASET journal publication for textile IoT project",
      year: "2024",
      icon: <BookOpen className="text-accent" />,
      category: "research",
      url: "https://www.ijraset.com/research-paper/textile-mending-machine-data-recording-system"
    },
    {
      title: "Academic Excellence",
      description: "91.43% in Computer Science Diploma",
      year: "2025",
      icon: <Award className="text-primary" />,
      category: "academic"
    },
    {
      title: "ML Internship Excellence",
      description: "Outstanding performance at iGAP Technologies",
      year: "2024",
      icon: <Target className="text-accent" />,
      category: "professional"
    },
    {
      title: "DIPEX Participation",
      description: "Multiple IoT and AI solutions with real impact",
      year: "2024",
      icon: <Star className="text-primary" />,
      category: "innovation"
    }
  ];

  const certifications = [
    {
      title: "Deloitte Australia",
      subtitle: "Cyber Job Simulation",
      year: "2026",
      icon: <Medal className="text-blue-400" />,
      category: "cybersecurity",
      linkedinUrl: "https://www.linkedin.com/in/prachi-karade-5b56b2385"
    },
    {
      title: "AI Leadership",
      subtitle: "Build Your Own Generative AI Model",
      year: "2026",
      icon: <Star className="text-purple-400" />,
      category: "ai",
      linkedinUrl: "https://www.linkedin.com/in/prachi-karade-5b56b2385"
    },
    {
      title: "Digital Transformation",
      subtitle: "Google Cloud Certification",
      year: "2026",
      icon: <Star className="text-green-400" />,
      category: "cloud",
      linkedinUrl: "https://www.linkedin.com/in/prachi-karade-5b56b2385"
    },
    {
      title: "Data Transformation",
      subtitle: "Google Cloud Certification",
      year: "2026",
      icon: <Star className="text-blue-400" />,
      category: "data",
      linkedinUrl: "https://www.linkedin.com/in/prachi-karade-5b56b2385"
    },
    {
      title: "Generative AI",
      subtitle: "Google Cloud Certification",
      year: "2026",
      icon: <Star className="text-cyan-400" />,
      category: "ai",
      linkedinUrl: "https://www.linkedin.com/in/prachi-karade-5b56b2385"
    }
  ];

  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
            Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Recognition for academic excellence, technical innovations, and professional growth
          </p>
        </motion.div>

        {/* Horizontal Scroll Achievements */}
        <div className="mb-20">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className={`flex-shrink-0 w-80 glass p-6 rounded-xl card-hover ${
                  achievement.url ? 'cursor-pointer' : ''
                }`}
                onClick={() => {
                  if (achievement.url) {
                    window.open(achievement.url, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-dark-tertiary rounded-lg">
                    {achievement.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white font-sora">
                        {achievement.title}
                      </h3>
                      <span className="text-primary text-sm font-semibold">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sora text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional certifications from industry leaders in AI, Cloud Computing, and Cybersecurity
          </p>
        </motion.div>

        {/* Clean Badge Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass p-4 rounded-xl text-center card-hover cursor-pointer block"
            >
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-dark-tertiary rounded-lg">
                  {cert.icon}
                </div>
              </div>
              <h3 className="text-sm font-bold text-white mb-1 font-sora">
                {cert.title}
              </h3>
              <p className="text-xs text-accent mb-2">
                {cert.subtitle}
              </p>
              <p className="text-xs text-gray-400">
                {cert.year}
              </p>
            </motion.a>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            { number: "91.43%", label: "Diploma Score", color: "text-primary" },
            { number: "5+", label: "Projects", color: "text-accent" },
            { number: "3", label: "Months ML Internship", color: "text-primary" },
            { number: "5+", label: "Certifications", color: "text-accent" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-lg text-center"
            >
              <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2 font-sora`}>
                {stat.number}
              </div>
              <div className="text-sm text-gray-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

          </section>
  );
};

export default Achievements;
