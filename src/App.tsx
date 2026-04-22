import React from 'react';
import Navigation from './components/Navigation';
import ScrollProgress from './components/ScrollProgress';
import CursorGlow from './components/CursorGlow';
import Hero from './components/Hero';
import About from './components/About';
import ImprovedTimeline from './components/ImprovedTimeline';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg text-white App">
      <ScrollProgress />
      <CursorGlow />
      <Navigation />
      <Hero />
      <About />
      <ImprovedTimeline />
      <Projects />
      <TechStack />
      <Achievements />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 glass text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p className="font-sora">@2026 Prachi</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
