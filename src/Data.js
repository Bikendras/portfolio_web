import React from 'react';
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

export const profile = {
  name: 'Bikendra Singh',
  title: 'Full Stack Engineer',
  tagline: 'Turning Ideas Into Interactive Reality',
  email: 'bikendra7848@gmail.com',
  phone: '8878685813',
  location: 'Gram Post Bihta, Dist Satna, MP',
  summary:
    'Dedicated Software Developer with expertise in MERN Stack, Next.js, REST APIs, and database management. Experienced in developing real-time and scalable applications for international clients. Seeking a challenging role to deliver high-quality software solutions and support organizational success.',
  resumeUrl: '/RESUME_F.pdf',
};

export const links = [
  { id: 1, url: 'home', text: 'Home' },
  { id: 2, url: 'about', text: 'About' },
  { id: 3, url: 'skills', text: 'Skills' },
  { id: 4, url: 'experience', text: 'Experience' },
  { id: 5, url: 'projects', text: 'Projects' },
  { id: 6, url: 'education', text: 'Education' },
  { id: 7, url: 'contact', text: 'Contact' },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/bikendrasingh7848',
    icon: <FaGithub />,
    label: 'GitHub',
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/bikendra-singh',
    icon: <FaLinkedin />,
    label: 'LinkedIn',
  },
  {
    id: 3,
    url: 'https://twitter.com',
    icon: <FaTwitter />,
    label: 'Twitter',
  },
  {
    id: 4,
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
    label: 'Facebook',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Front-End',
    icon: 'html.png',
    items: 'React.js, Next.js, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, Redux',
    description:
      'Building responsive, component-driven UIs with modern frameworks and state management for fast, accessible user experiences.',
  },
  {
    id: 2,
    title: 'Back-End',
    icon: 'javascript1.png',
    items: 'Node.js, Express.js, NestJS, Fastify, REST APIs, WebSockets',
    description:
      'Designing secure, scalable APIs and backend services with authentication, caching, and performance optimization.',
  },
  {
    id: 3,
    title: 'Database & DevOps',
    icon: 'logo192.png',
    items: 'MongoDB, PostgreSQL, Redis, Docker, AWS, GCP, CI/CD, Vercel, Netlify',
    description:
      'Managing databases, cloud deployments, and CI/CD pipelines to deliver reliable production-ready applications.',
  },
];

export const experience = [
  {
    id: 1,
    company: 'WebiWork Technologies',
    role: 'Software Engineer',
    period: 'Dec 2023 – Present',
    location: 'Indore',
    points: [
      'Developed scalable full-stack applications using Postgres/MongoDB, Express.js/NestJS, React.js, and Node.js.',
      'Designed backend services, database schemas, and RESTful APIs with auth, caching, and performance tuning.',
      'Collaborated in Agile/Scrum with product and UI/UX teams for enterprise-grade platform delivery.',
      'Integrated third-party APIs, cloud services, and AI-powered features including chatbots and analytics dashboards.',
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    school: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal',
    period: 'Jul 2019 – Aug 2021',
  },
];

export const projects = [
  {
    id: 1,
    title: 'CloudRent – Rental Management Platform',
    image: 'cloudrent.png',
    role: 'Full Stack MERN Developer',
    description:
      'Full-stack rental management platform for inventory tracking, warehouse operations, deliveries, collections, and reporting with damage reporting and advanced dashboards.',
    tech: 'React.js, Node.js, Fastify, Postgres, REST APIs',
    liveUrl: 'https://app.onlinerentalstore.com/',
    githubUrl: '',
  },
  {
    id: 2,
    title: 'StageMatch – Marketplace Platform',
    image: 'stagematch.jpeg',
    role: 'Senior MERN Stack Developer',
    description:
      'Online marketplace where users create product listings, buy/sell products, chat in real time, and receive notifications with Stripe payment integration.',
    tech: 'Next.js, MongoDB, Stripe, Real-Time Chat, REST APIs',
    liveUrl: 'https://stagematch.fr/',
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Little Big Shed – Resource Sharing Platform',
    image: 'LBS.jpeg',
    role: 'MERN Stack Developer',
    description:
      'Community-driven resource sharing platform enabling users to list, discover, and exchange tools and resources with secure transactions and optimized API performance.',
    tech: 'React.js, Redux, Node.js, Express.js, MongoDB, JWT, Docker, AWS',
    liveUrl: 'https://www.littlebigshed.co.nz/',
    githubUrl: '',
  },
  {
    id: 4,
    title: 'Suhavi Audio Books – Streaming Platform',
    image: 'SUHAVI.png',
    role: 'MERN Stack Developer',
    description:
      'Digital audio streaming platform for accessing and managing audiobook content with optimized playback, real-time interactions, and cloud-based media delivery.',
    tech: 'React.js, Redux, Node.js, Express.js, Postgres, WebSockets, AWS',
    liveUrl: 'https://www.suhaviaudiobooks.com/',
    githubUrl: '',
  },
];
