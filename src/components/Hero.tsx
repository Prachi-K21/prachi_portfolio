import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Users, Mail, Download, ArrowRight, Code, Cpu, Database, Cloud, Target } from 'lucide-react';

const Hero: React.FC = () => {
  const taglines = [
    "Building AI-powered solutions...",
    "Designing real-world IoT systems...",
    "Turning ideas into impactful tech..."
  ];
  const [currentTaglineIndex, setCurrentTaglineIndex] = React.useState(0);
  const [taglineText, setTaglineText] = React.useState('');
  const [isTaglineDeleting, setIsTaglineDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentTagline = taglines[currentTaglineIndex];
    const typingSpeed = isTaglineDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isTaglineDeleting && taglineText.length < currentTagline.length) {
        setTaglineText(currentTagline.slice(0, taglineText.length + 1));
      } else if (isTaglineDeleting && taglineText.length > 0) {
        setTaglineText(taglineText.slice(0, -1));
      } else if (!isTaglineDeleting && taglineText.length === currentTagline.length) {
        setTimeout(() => setIsTaglineDeleting(true), 2000);
      } else if (isTaglineDeleting && taglineText.length === 0) {
        setIsTaglineDeleting(false);
        setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [taglineText, isTaglineDeleting, currentTaglineIndex, taglines]);

  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Open for Opportunities Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring"
        }}
        className="absolute top-20 right-8 z-20"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-primary to-accent text-dark-bg px-4 py-2 rounded-full font-bold text-sm font-sora shadow-lg">
            <span className="flex items-center gap-2">
              <Target size={16} />
              Open for Internships & Opportunities
            </span>
          </div>
        </div>
      </motion.div>

      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-secondary to-black opacity-50"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-8 lg:px-16 z-10 relative"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Column - Name, Role, Tagline, CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl lg:text-8xl font-black font-orbitron leading-tight"
            >
              Hi, I'm <br />
              <span className="text-gradient">Prachi</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-primary font-sora">
                Full Stack Developer
              </h2>
              <h3 className="text-xl lg:text-2xl font-semibold text-accent font-sora">
                AI & ML Specialist
              </h3>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed font-inter"
            >
              {taglineText}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
                <ArrowRight size={20} />
              </motion.button>
              <motion.a
                href={process.env.PUBLIC_URL + "/Prachi_Karade_Resume.pdf"}
                download="Prachi_Karade_Resume.pdf"
                className="btn-secondary inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                Resume
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://github.com/Prachi-K21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <GitBranch className="text-primary" size={20} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/prachi-karade-5b56b2385"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-lg hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <Users className="text-primary" size={20} />
              </motion.a>
              <motion.a
                href="mailto:prachikarade21@gmail.com"
                className="p-3 glass rounded-lg hover:scale-110 transition-transform"
                whileHover={{ scale: 1.1 }}
              >
                <Mail className="text-primary" size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Soft Glowing Border */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0, 212, 255, 0.3)",
                    "0 0 40px rgba(155, 89, 182, 0.3)",
                    "0 0 20px rgba(0, 212, 255, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl"
              />
              
              {/* Profile Image Container */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative glass rounded-full p-2 w-full h-full"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-dark-secondary to-dark-tertiary flex items-center justify-center border-2 border-primary/30 overflow-hidden">
                  <img 
                    src={process.env.PUBLIC_URL + "/profile.jpeg"} 
                    alt="Prachi - Full Stack Developer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
