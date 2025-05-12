import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    id: '1',
    role: ' Python Developer',
    company: 'CodSoft',
    period: 'Nov 2023 - Dec 2023 ',
    description: [
      'Developing Python-based applications, including a to-do list manager, a calculator, and a secure password generator. Focused on writing clean, efficient code and building user-friendly tools.'
    ]
  },
  {
    id:'2',
    role:'Full Stack Developer',
    company:'Byte Monk Technologies',
    period:'Jun 2024 - Jan 2025',
    description:[
      'Built a scalable e-commerce web application using the MEAN stack, implementing key features like product management, user authentication.'

    ]
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Anurag University',
    period: '2022 - 2026',
    description: 'Specialized in FrontEnd Web Technologies and Frameworks.'
  },
  {
    id: '2',
    degree: 'Intermediate',
    institution: 'Deeksha Junior Colllege',
    period: '2020 - 2022',
    description: 'Completed intermediate in the stream of Maths,Physics and Chemistry to pursue my B.Tech as Engineer'
  }
];