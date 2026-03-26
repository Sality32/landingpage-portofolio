import { readFileSync } from 'fs';
import { join } from 'path';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import WorkExperienceSection from '@/components/sections/WorkExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import { PortfolioData } from '@/types/portfolio';

export default function Home() {
  const portfolioData: PortfolioData = JSON.parse(
    readFileSync(join(process.cwd(), 'src/data/portfolio.json'), 'utf8')
  );

  return (
    <main className="min-h-screen">
      <HeroSection personalInfo={portfolioData.personalInfo} />
      <ExperienceSection experience={portfolioData.experience} />
      <WorkExperienceSection workExperience={portfolioData.workExperience} />
      <ProjectsSection projects={portfolioData.projects} />
    </main>
  );
}
