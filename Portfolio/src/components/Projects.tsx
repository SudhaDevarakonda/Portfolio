import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Projects</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted with attention to detail and user experience.
          </p>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === 'featured'
                  ? 'bg-primary-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div variants={item} className="card group">
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-slate-200 dark:bg-slate-700 ${!imageLoaded ? 'visible' : 'hidden'}`}>
          <div className="relative w-full h-full overflow-hidden">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${imageLoaded ? 'visible' : 'invisible'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {project.featured && (
          <span className="absolute top-3 left-3 bg-accent-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-3">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 link"
              >
                <Github size={16} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;