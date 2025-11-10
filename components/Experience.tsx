import React from 'react';
import Section from './Section';
import { useTranslation } from 'react-i18next';

type ExperienceData = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
};

const ExperienceCard: React.FC<ExperienceData> = ({ company, role, period, location, description, tech }) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    <div className="absolute top-5 left-0 w-2 h-2 mt-1 bg-brand-primary rounded-full z-10 transition-all duration-500 group-hover:scale-[1.75]"></div>
    <div className="absolute top-6 left-1 h-full w-0.5 bg-slate-200 dark:bg-dark-card group-last:hidden"></div>
    <div className="flex flex-col sm:flex-row items-start mb-1 sm:items-center">
      <h3 className="text-xl font-bold text-slate-900 dark:text-dark-text">{role}</h3>
      <span className="text-brand-primary sm:ml-2">@ {company}</span>
    </div>
    <p className="text-sm text-slate-500 dark:text-dark-subtext mb-3">{period} &bull; {location}</p>
    <ul className="list-disc list-inside space-y-2 mb-4 text-slate-600 dark:text-dark-subtext">
      {description.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
    <div className="flex flex-wrap gap-2">
      {tech.map(t => <span key={t} className="bg-brand-secondary/20 text-brand-primary text-xs font-semibold px-2.5 py-1 rounded-full">{t}</span>)}
    </div>
  </div>
);

const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experienceData = t('experience.data', { returnObjects: true }) as ExperienceData[];

  return (
    <Section title={t('experience.title')} id="experience">
      <div className="relative">
        {experienceData.map((exp, index) => <ExperienceCard key={index} {...exp} />)}
      </div>
    </Section>
  );
};

export default Experience;