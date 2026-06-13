import HeroSection from '@/features/hero';
import AboutSection from '@/features/about';
import SkillsSection from '@/features/skills';
import ExperienceSection from '@/features/experience';
import ProjectsSection from '@/features/projects';

export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
        </>
    );
}
