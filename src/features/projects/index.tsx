import SectionHeading from '@/features/shared/section-heading';
import ProjectCard from './project-card';
import projects from './data';

export default function ProjectsSection() {
    return (
        <section id='projects' className='my-24 md:my-36 relative overflow-x-hidden'>
            <span className='hidden md:block w-[400px] h-[450px] absolute top-20 -right-60 opacity-10 bg-purple-500 rounded-full blur-xl animate-blob' />
            <div className='container px-3 md:px-0'>
                <SectionHeading title={`Featured Projects (${projects.length})`} />
            </div>
            <div className='mt-2'>
                <ul className='flex flex-col gap-20 items-center'>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            url={project.url}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.technology}
                            position={project.position}
                            isPrivate={project.isPrivate}
                            delay={index * 150}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}
