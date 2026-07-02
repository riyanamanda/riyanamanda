import { Skill } from '@/types';

const skills: Skill[] = [
    {
        category: 'Backend',
        items: ['Go', 'Java (Spring Boot)'],
        isPrimary: true,
    },
    {
        category: 'Architecture',
        items: ['REST API Design', 'Modular Architecture', 'Clean Architecture'],
    },
    {
        category: 'Database',
        items: ['PostgreSQL', 'MySQL', 'Redis'],
    },
    {
        category: 'DevOps',
        items: ['Docker', 'CI/CD (GitHub Actions)', 'Linux'],
    },
    {
        category: 'Frontend',
        items: ['React', 'Vue.js', 'TypeScript'],
    },
];

export default skills;
