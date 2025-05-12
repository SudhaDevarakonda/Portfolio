import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/SudhaDevarakonda', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/sudha-devarakonda-4a7a97287', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:sudhadevarakonda234@gmail.com', icon: 'mail' }
];

const Hero: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 bg-slate-50 dark:bg-slate-900/30">
      <div className="section-container px-4 md:px-8 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 flex justify-center md:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full opacity-20 blur-xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1.2 }}
              />
              <motion.div 
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/image.jpg" 
                  alt="D Sudha Varshini" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm D Sudha Varshini.<br />
              <span className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 text-transparent bg-clip-text">
                I am a FrontEnd Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8"
            >
              A passionate frontend developer with a focus on creating intuitive, 
              responsive and user-friendly web applications. I specialize in React, 
              TypeScript, and modern JavaScript.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12"
            >
              <a href="#projects" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                View Projects
              </a>
              <a href="#contact" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-full font-medium transition-all duration-300 dark:text-indigo-400 dark:border-indigo-400 dark:hover:bg-indigo-900/30">
                Get in Touch
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center md:justify-start gap-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getSocialIcon(link.icon)}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;