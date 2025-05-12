import React from 'react';

const Footer: React.FC = () => {
  
  return (
    <footer className="py-8 bg-slate-900 text-slate-300">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-lg">D Sudha Varshini</p>
            <p className="text-slate-400">Frontend Developer</p>
          </div>
          
          <div className="flex gap-8">
            <a href="#home" className="hover:text-primary-400 transition-colors duration-200">Home</a>
            <a href="#projects" className="hover:text-primary-400 transition-colors duration-200">Projects</a>
            <a href="#skills" className="hover:text-primary-400 transition-colors duration-200">Skills</a>
            <a href="#experience" className="hover:text-primary-400 transition-colors duration-200">Experience</a>
            <a href="#contact" className="hover:text-primary-400 transition-colors duration-200">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;