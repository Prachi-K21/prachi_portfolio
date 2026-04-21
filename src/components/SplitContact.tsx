import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, GitBranch, Users, ExternalLink, MapPin, Phone } from 'lucide-react';

const SplitContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" />,
      label: "Email",
      value: "contact@prachi.dev",
      href: "mailto:contact@prachi.dev"
    },
    {
      icon: <Phone className="text-accent" />,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: <MapPin className="text-primary" />,
      label: "Location",
      value: "Maharashtra, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <GitBranch />,
      label: "GitHub",
      href: "https://github.com/prachi",
      color: "hover:text-primary"
    },
    {
      icon: <Users />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/prachi",
      color: "hover:text-accent"
    },
    {
      icon: <ExternalLink />,
      label: "Portfolio",
      href: "https://prachi.dev",
      color: "hover:text-primary"
    }
  ];

  return (
    <section id="contact" className="min-h-screen grid-bg py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white mb-4">
          Let's Connect
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        <p className="text-gray-300 max-w-2xl mx-auto font-inter">
          Ready to collaborate on exciting projects? Let's create something amazing together!
        </p>
      </motion.div>

      {/* Split Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 px-6">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl relative group"
        >
          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-radial opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
          
          <h3 className="text-2xl font-bold text-white mb-6 font-sora relative z-10">
            Send Me a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-dark-tertiary border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full btn-primary py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 glow-effect relative z-10"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-dark-bg border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>

          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-primary/20 border border-primary/30 rounded-lg text-primary text-center relative z-10"
            >
              {submitMessage}
            </motion.div>
          )}
        </motion.div>

        {/* Right: CTA Card with Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Glowing CTA Card */}
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)"
            }}
            className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md border border-primary/30 overflow-hidden"
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 animate-pulse"></div>
            
            <div className="relative z-10 text-center space-y-4">
              <h3 className="text-2xl font-bold text-white font-sora">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-300 font-inter">
                I'm always excited to work on innovative projects and collaborate with creative minds. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-px bg-gradient-to-r from-primary to-accent"></div>
              </div>
              <p className="text-primary font-semibold font-orbitron">
                Available for Freelance & Full-time Opportunities
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="glass p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4 font-sora">
              Get In Touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="p-3 bg-dark-tertiary rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-white font-semibold hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="glass p-6 rounded-2xl">
            <h4 className="text-lg font-bold text-white mb-4 font-sora">
              Connect With Me
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 p-3 bg-dark-tertiary rounded-lg text-gray-300 ${social.color} transition-all duration-300`}
                >
                  <div className="text-lg">{social.icon}</div>
                  <span className="text-sm font-medium">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SplitContact;
