import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/skills';
import { Code, Server, Database, GitBranch, Wind, Layers, Box, Cloud, CheckCircle, Repeat } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'react':
        return <div className="text-blue-500"><Code size={24} /></div>;
      case 'code':
        return <div className="text-yellow-500"><Code size={24} /></div>;
      case 'file-code':
        return <div className="text-blue-400"><Code size={24} /></div>;
      case 'layout':
        return <div className="text-orange-500"><Code size={24} /></div>;
      case 'wind':
        return <div className="text-cyan-500"><Wind size={24} /></div>;
      case 'layers':
        return <div className="text-purple-500"><Layers size={24} /></div>;
      case 'server':
        return <div className="text-green-500"><Server size={24} /></div>;
      case 'database':
        return <div className="text-gray-500"><Database size={24} /></div>;
      case 'git-branch':
        return <div className="text-red-500"><GitBranch size={24} /></div>;
      case 'box':
        return <div className="text-blue-500"><Box size={24} /></div>;
      case 'cloud':
        return <div className="text-slate-500"><Cloud size={24} /></div>;
      case 'check-circle':
        return <div className="text-green-500"><CheckCircle size={24} /></div>;
      case 'repeat':
        return <div className="text-indigo-500"><Repeat size={24} /></div>;
      default:
        return <div className="text-gray-500"><Code size={24} /></div>;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Skills</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and frameworks. Here's an overview of my technical expertise.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.name} 
              variants={item}
              className="card p-6"
            >
              <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getSkillIcon(skill.icon)}
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 * index }}
                        className="bg-primary-600 dark:bg-primary-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;