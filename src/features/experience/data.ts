import { Experience } from '@/types';

const experiences: Experience[] = [
    {
        title: 'Fullstack Software Engineer',
        company: 'Ernaldi Bahar Hospital',
        type: 'Contract',
        period: 'Feb 2023 – Present',
        isCurrent: true,
        bullets: [
            'Supported and maintained existing systems, including reporting and internal tools',
            'Assisted in extending system functionality and handling production issues',
            'Performed monitoring, troubleshooting, and deployment support',
            'Contributed to improving system reliability in production environment',
        ],
    },
    {
        title: 'Senior Programmer',
        company: 'PT. Lingkaran Sistem Intelektual',
        type: 'Full-time',
        period: 'Apr 2020 – Dec 2022',
        bullets: [
            'Developed backend services for business applications and digital platforms',
            'Implemented CI/CD pipelines using GitHub Actions, improving deployment reliability',
            'Mentored junior developers and improved engineering practices',
            'Contributed to system design decisions and technology evaluation',
        ],
    },
    {
        title: 'Programmer',
        company: 'Universitas Bina Darma',
        type: 'Contract',
        period: 'Apr 2022 – Dec 2022',
        bullets: [
            'Developed web applications with focus on backend logic and API integration',
            'Managed deployments across development and production environments',
            'Assisted in feature development and bug fixing',
        ],
    },
];

export default experiences;
