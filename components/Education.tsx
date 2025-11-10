import React from 'react';
import Section from './Section';
import { useTranslation } from 'react-i18next';

type EducationData = {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
};

const EducationCard: React.FC<EducationData> = ({ institution, degree, field, period, location }) => (
    <div className="bg-slate-50 dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-brand-primary/20 transition-shadow duration-300">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-brand-primary">{institution}</h3>
                <p className="font-semibold text-slate-800 dark:text-dark-text">{degree}</p>
            </div>
            <p className="text-slate-500 dark:text-dark-subtext text-sm flex-shrink-0 ml-4">{period}</p>
        </div>
        <p className="mt-2 text-slate-600 dark:text-dark-subtext">{field}</p>
        <p className="mt-1 text-slate-600 dark:text-dark-subtext text-sm">{location}</p>
    </div>
);

const Education: React.FC = () => {
  const { t } = useTranslation();
  const educationData = t('education.data', { returnObjects: true }) as EducationData[];

  return (
    <Section title={t('education.title')} id="education">
      <div className="grid md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => <EducationCard key={index} {...edu} />)}
      </div>
    </Section>
  );
};

export default Education;