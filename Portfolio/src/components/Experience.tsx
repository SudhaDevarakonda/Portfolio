import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences, education } from '../data/experiences';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
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

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Experience</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My professional journey and educational background that have shaped my expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary-600 dark:text-primary-400 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="relative border-l-2 border-primary-200 dark:border-primary-900 pl-8 ml-4 space-y-12"
            >
              {experiences.map((exp, index) => (
                <motion.div key={exp.id} variants={item} className="relative">
                  <div className="absolute -left-[42px] bg-white dark:bg-slate-900 p-1 rounded-full border-2 border-primary-200 dark:border-primary-900">
                    <div className="w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-500"></div>
                  </div>
                  <div className="card p-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-slate-600 dark:text-slate-400 relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-primary-500">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-secondary-600 dark:text-secondary-400 mr-3" size={24} />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="relative border-l-2 border-secondary-200 dark:border-secondary-900 pl-8 ml-4 space-y-12"
            >
              {education.map((edu, index) => (
                <motion.div key={edu.id} variants={item} className="relative">
                  <div className="absolute -left-[42px] bg-white dark:bg-slate-900 p-1 rounded-full border-2 border-secondary-200 dark:border-secondary-900">
                    <div className="w-4 h-4 rounded-full bg-secondary-600 dark:bg-secondary-500"></div>
                  </div>
                  <div className="card p-6">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{edu.degree}</h4>
                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0">
                        <Calendar size={14} className="mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400 font-medium mb-4">{edu.institution}</p>
                    <p className="text-slate-600 dark:text-slate-400">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;