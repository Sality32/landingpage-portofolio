'use client';

import { PersonalInfo } from '@/types/portfolio';
import { X, Mail, MapPin } from 'lucide-react';

interface HeroSectionProps {
  personalInfo: PersonalInfo;
}

export default function HeroSection({ personalInfo }: HeroSectionProps) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      // case 'github':
      //   return <GitHub className="w-5 h-5" />;
      // case 'linkedin':
      //   return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <X className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                {personalInfo.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
            {personalInfo.bio}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 transition-colors">
              {personalInfo.email}
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          {Object.entries(personalInfo.social).map(([platform, url]) => (
            url && (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 text-gray-700 hover:text-blue-600"
                aria-label={platform}
              >
                {getSocialIcon(platform)}
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
