import { Project } from '@/types';

const projects: Project[] = [
    {
        url: 'https://livefueltrack.com',
        title: 'Live Fuel Track',
        description:
            'Live Fuel Track is a real-time fuel tracking and monitoring frontend application built with React & TypeScript for PT. Trifilosofi Utility Indonesia. Features modular component architecture, optimized data fetching with TanStack Query, seamless REST API integration, and targeted Go backend support.',
        image: '/images/livefueltrack.png',
        technology: ['React', 'TypeScript', 'TanStack Query', 'Vite', 'Go'],
        position: 'odd',
    },
    {
        url: 'https://admin.spacepro.id',
        title: 'SPACEPRO',
        description:
            'SPACEPRO is a fullstack production management system built for PT. Trifilosofi Lifestyle Indonesia using Spring Boot and React. Features an Admin Panel for internal management, REST APIs, Redis caching for performance, and a containerized CI/CD deployment pipeline with Docker.',
        image: '/images/spacepro.png',
        technology: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Docker', 'CI/CD'],
        position: 'even',
        isPrivate: true,
    },
    {
        url: 'https://simpleplan-regsumbagsel.com',
        title: 'Simple Plan',
        description:
            'Simple Plan is a multi-region oil billing verification and tracking system built for PT. Pertamina Patra Niaga. Includes relational database design for consistent querying, reporting and monitoring dashboards for operational visibility, and CI/CD automation via GitHub Actions.',
        image: '/images/patraniaga.png',
        technology: ['Laravel', 'MySQL', 'GitHub Actions', 'CI/CD'],
        position: 'odd',
    },
    {
        url: 'https://lingkaran.id',
        title: 'Lingkaran ID',
        description:
            'Lingkaran.id is a digital news portal combining online publishing with social network analysis (SNA) and analytics insight features, developed for PT. Lingkaran Sistem Intelektual. Contributed backend modules, frontend features, content workflows, and ongoing platform maintenance.',
        image: '/images/lingkaran.png',
        technology: ['Laravel', 'MySQL', 'GitHub Actions', 'CI/CD'],
        position: 'even',
    },
];

export default projects;
