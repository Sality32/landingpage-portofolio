'use client';

import { PortfolioData } from '@/types/portfolio';
import { Briefcase, TrendingUp, Award } from 'lucide-react';

interface ExperienceSectionProps {
  experience: PortfolioData['experience'];
}

export default function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                {experience.totalYears}+ Years
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Professional experience in web development and software engineering
            </p>
          </div>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Growing Expertise
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Continuously expanding into AI engineering and modern technologies
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Professional Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            {experience.summary}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experience.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
              >
                <Award className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
