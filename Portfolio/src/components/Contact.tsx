import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin} from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="mb-12 text-center"
        >
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400">
                <Mail size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <a
              href="mailto:sudhadevarakonda234@gmail.com"
              className="link inline-block"
            >
              sudhadevarakonda234@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-secondary-100 dark:bg-secondary-900/30 rounded-full text-secondary-600 dark:text-secondary-400">
                <Phone size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <a
              href="tel:+917640954214"
              className="inline-block text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-300 font-medium transition-colors duration-200"
            >
              +91 7640954214
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card p-6 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-accent-100 dark:bg-accent-900/30 rounded-full text-accent-600 dark:text-accent-400">
                <MapPin size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="font-medium text-accent-600 dark:text-accent-400">
              Available for remote work
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Connect on Social Media</h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/SudhaDevarakonda"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sudha-devarakonda-4a7a97287"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;