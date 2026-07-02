'use client';
import SectionHeading from '@/features/shared/section-heading';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './project-card';
import projects from './data';

export default function ProjectsSection() {
    return (
        <section id='projects' className='my-24 md:my-36 relative overflow-x-hidden'>
            {/* Background Glow - Diubah dari purple-500 ke semantic token primary */}
            <span className='hidden md:block w-100 h-112.5 absolute top-20 -right-60 opacity-10 bg-primary rounded-full blur-3xl animate-blob' />
            
            <div className='container px-3 md:px-0'>
                <SectionHeading
                    title={`Featured Projects (${projects.length})`}
                    icon={FolderGit2}
                    tone='projects'
                />
            </div>
            
            <div className='mt-12 md:mt-16'>
                <ul className='flex flex-col gap-24 md:gap-32 items-center'>
                    {projects.map((project, index) => {
                        // Menentukan posisi odd/even secara dinamis berdasarkan urutan indeks
                        const cardPosition = index % 2 === 0 ? 'odd' : 'even';

                        return (
                            <ProjectCard
                                key={project.title + index}
                                url={project.url}
                                title={project.title}
                                description={project.description}
                                image={project.image}
                                tech={project.technology}
                                position={cardPosition}
                                isPrivate={project.isPrivate}
                                delay={(index % 3) * 0.15} // Stagger delay direset setiap 3 elemen agar tidak terlalu lama pada list panjang
                            />
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}