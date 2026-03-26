'use client';

import { Project, TechTool } from '@/types/portfolio';
import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Code, Monitor, Server } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
}

interface TechBadgeProps {
  tech: TechTool;
}

function TechBadge({ tech }: TechBadgeProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'advanced':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'beginner':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium border ${getLevelColor(
        tech.level
      )}`}
    >
      {tech.name}
    </span>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'frontend':
        return <Monitor className="w-5 h-5" />;
      case 'backend':
        return <Server className="w-5 h-5" />;
      case 'fullstack':
        return <Code className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'frontend':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'backend':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'fullstack':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 ${
      isExpanded ? 'md:col-span-2 lg:col-span-2' : ''
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              {project.featured && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                  Featured
                </span>
              )}
              <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getRoleColor(project.role)}`}>
                {getRoleIcon(project.role)}
                {project.role}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, isExpanded ? undefined : 5).map((tech, index) => (
            <TechBadge key={index} tech={tech} />
          ))}
          {!isExpanded && project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
              >
                <Code className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                Show Details
              </>
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-200 space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Problem</h4>
              <p className="text-sm text-gray-700">{project.details.problem}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Solution</h4>
              <p className="text-sm text-gray-700">{project.details.solution}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Challenges</h4>
              <ul className="space-y-1">
                {project.details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-orange-500 mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Outcomes</h4>
              <ul className="space-y-1">
                {project.details.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeRole, setActiveRole] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  
  const frontendProjects = projects.filter(p => p.role === 'frontend');
  const backendProjects = projects.filter(p => p.role === 'backend');
  const fullstackProjects = projects.filter(p => p.role === 'fullstack');

  const getFilteredProjects = () => {
    switch (activeRole) {
      case 'frontend':
        return frontendProjects;
      case 'backend':
        return backendProjects;
      case 'fullstack':
        return fullstackProjects;
      default:
        return projects;
    }
  };

  const roleTabs = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'frontend', label: 'Frontend', count: frontendProjects.length },
    { id: 'backend', label: 'Backend', count: backendProjects.length },
    { id: 'fullstack', label: 'Full Stack', count: fullstackProjects.length },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore my work across different domains and technologies. Click on any project to see detailed information.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {roleTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRole(tab.id as any)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeRole === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
                <span className="ml-2 px-2 py-1 rounded-full text-xs bg-white/20">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-max lg:min-w-0">
            {getFilteredProjects().map((project) => (
              <div key={project.id} className="min-w-[350px] lg:min-w-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        {getFilteredProjects().length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
