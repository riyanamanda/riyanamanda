import { ComponentType } from 'react';

export type Portfolio = {
    name: string;
    bio: string;
    stacks: { id: string | number; name: string }[];
    socials: {
        id: string | number;
        url: string;
        name: string;
        icon: ComponentType<{ size?: number }>;
    }[];
};
