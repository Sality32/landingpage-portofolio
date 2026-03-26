'use client';

import { WorkExperience, TechTool } from '@/types/portfolio';
import { Calendar, MapPin, ExternalLink, Code } from 'lucide-react';
import { useState } from 'react';

interface WorkExperienceSectionProps {
  workExperience: WorkExperience[];
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
      className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(
        tech.level
      )}`}
    >
      {tech.name}
    </span>
  );
}

function ExperienceCard({ experience }: { experience: WorkExperience }) {
  const [showTechStack, setShowTechStack] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {experience.position}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
            <span className="text-lg text-blue-600 font-medium">
              {experience.company}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                experience.type === 'fulltime'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-purple-100 text-purple-800'
              }`}
            >
              {experience.type === 'fulltime' ? 'Full-time' : 'Freelance'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>
                {formatDate(experience.startDate)} -{' '}
                {experience.endDate ? formatDate(experience.endDate) : 'Present'}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-700 leading-relaxed mb-4">
        {experience.description}
      </p>

      <div className="mb-4">
        <h4 className="font-medium text-gray-900 mb-2">Key Achievements:</h4>
        <ul className="space-y-1">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 mt-1">•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button
          onClick={() => setShowTechStack(!showTechStack)}
          className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          <Code className="w-4 h-4" />
          {showTechStack ? 'Hide' : 'Show'} Tech Stack ({experience.techStack.length})
        </button>
        
        {showTechStack && (
          <div className="mt-3 flex flex-wrap gap-2">
            {experience.techStack.map((tech, index) => (
              <TechBadge key={index} tech={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WorkExperienceSection({ workExperience }: WorkExperienceSectionProps) {
  const fulltimeJobs = workExperience.filter(job => job.type === 'fulltime');
  const freelanceJobs = workExperience.filter(job => job.type === 'freelance');

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey through various roles and technologies
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold text-sm">FT</span>
              </div>
              Full-time Positions
            </h3>
            <div className="grid gap-6">
              {fulltimeJobs.map((job) => (
                <ExperienceCard key={job.id} experience={job} />
              ))}
            </div>
          </div>

          {freelanceJobs.length > 0 && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-sm">FR</span>
                </div>
                Freelance Projects
              </h3>
              <div className="grid gap-6">
                {freelanceJobs.map((job) => (
                  <ExperienceCard key={job.id} experience={job} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
