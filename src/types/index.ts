export interface Project {
    url: string;
    title: string;
    description: string;
    image: string;
    technology: string[];
    position: 'odd' | 'even';
    isPrivate?: boolean;
}

export interface Navigation {
    name: string;
    url: string;
}

export interface Skill {
    category: string;
    items: string[];
    isPrimary?: boolean;
}

export interface Experience {
    title: string;
    company: string;
    type: string;
    period: string;
    isCurrent?: boolean;
    bullets: string[];
}
