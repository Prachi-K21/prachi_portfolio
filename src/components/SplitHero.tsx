import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Users, Mail, Download, ArrowRight, Menu, X, Cpu, Database, Cloud } from 'lucide-react';

const SplitHero: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'bento', label: 'Journey', icon: '🚀' },
    { id: 'projects', label: 'Projects', icon: '💻' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="split-screen">
      {/* Left Panel - Fixed Navigation */}
      <div className="left-panel">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden absolute top-4 right-4 z-20 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-orbitron">
            Hi, I'm <span className="text-gradient">Prachi</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary mb-4 font-sora">
            Full Stack + AI Developer
          </p>
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Building innovative AI-powered solutions and real-world systems. 
            Passionate about machine learning, web development, and creating impactful technology.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:scale-110 transition-transform"
            >
              <GitBranch className="text-primary" size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-lg hover:scale-110 transition-transform"
            >
              <Users className="text-primary" size={20} />
            </a>
            <a
              href="mailto:contact@prachi.dev"
              className="p-3 glass rounded-lg hover:scale-110 transition-transform"
            >
              <Mail className="text-primary" size={20} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn-primary flex items-center justify-center gap-2"
            >
              View Projects
              <ArrowRight size={16} />
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2">
              <Download size={16} />
              Resume
            </button>
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:block mt-12`}>
          <h3 className="text-lg font-semibold text-white mb-4 font-sora">Navigate</h3>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`nav-item flex items-center gap-3 ${
                    activeSection === item.id ? 'active' : ''
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Floating Tech Icons */}
        <div className="hidden lg:block relative mt-12">
          <div className="tech-icon absolute top-0 left-0 text-primary opacity-60">
            <Cpu size={24} />
          </div>
          <div className="tech-icon absolute top-8 right-0 text-accent opacity-60">
            <Database size={20} />
          </div>
          <div className="tech-icon absolute top-16 left-4 text-primary opacity-40">
            <Cloud size={22} />
          </div>
          <div className="tech-icon absolute top-24 right-8 text-accent opacity-50">
            <GitBranch size={18} />
          </div>
        </div>
      </div>

      {/* Right Panel - Scrollable Content */}
      <div className="right-panel">
        {/* This will contain all the sections */}
        <div className="space-y-8">
          {/* Content will be rendered here by App.tsx */}
        </div>
      </div>
    </div>
  );
};

export default SplitHero;
