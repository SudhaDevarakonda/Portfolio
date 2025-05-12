import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', icon: 'react', level: 90 },
      { name: 'JavaScript', icon: 'code', level: 95 },
      { name: 'TypeScript', icon: 'file-code', level: 85 },
      { name: 'HTML/CSS', icon: 'layout', level: 90 },
    ]
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: 'server', level: 85 },
      { name: 'Express', icon: 'layers', level: 80 },
      { name: 'MongoDB', icon: 'database', level: 75 },
      { name: 'RESTful APIs', icon: 'repeat', level: 85 },
    ]
  },
  {
    name: 'Development Tools',
    skills: [
      { name: 'Git', icon: 'git-branch', level: 88 },
      { name: 'GitHub', icon: 'code', level: 85 },
      { name: 'VS Code', icon: 'code', level: 90 },
      { name: 'Eclipse', icon: 'layers', level: 82 },
    ]
  }
];