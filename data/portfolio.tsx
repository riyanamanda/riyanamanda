import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

export const portfolio = {
    name: 'Riyan Amanda Nasution',
    role: 'Backend-focused Fullstack Software Engineer',
    bio: 'Experienced Software Engineer building scalable backend systems and modern web apps.',
    stacks: [
        { id: '1', name: 'Go', category: 'Backend' },
        { id: '2', name: 'Java (Spring Boot)', category: 'Backend' },
        { id: '3', name: 'TypeScript', category: 'Language' },
        { id: '4', name: 'Next.js', category: 'Frontend' },
        { id: '5', name: 'PostgreSQL', category: 'Database' },
        { id: '6', name: 'Docker', category: 'DevOps' },
    ],
    socials: [
        {
            id: '1',
            name: 'Github',
            icon: IconBrandGithub,
            url: 'https://github.com/riyanamanda',
        },
        {
            id: '2',
            name: 'Linkedin',
            icon: IconBrandLinkedin,
            url: 'https://www.linkedin.com/in/riyanamanda',
        },
        {
            id: '3',
            name: 'Instagram',
            icon: IconBrandInstagram,
            url: 'https://www.instagram.com/riyan.amanda/',
        },
    ],
};
