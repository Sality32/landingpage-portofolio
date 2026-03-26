export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  location: string;
  avatar: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export interface TechTool {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category: 'language' | 'framework' | 'tool' | 'database' | 'cloud' | 'other';
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  type: 'fulltime' | 'freelance';
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  techStack: TechTool[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  role: 'frontend' | 'backend' | 'fullstack';
  technologies: TechTool[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  featured: boolean;
  details: {
    problem: string;
    solution: string;
    challenges: string[];
    outcomes: string[];
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  experience: {
    summary: string;
    totalYears: number;
    highlights: string[];
  };
  workExperience: WorkExperience[];
  projects: Project[];
}
