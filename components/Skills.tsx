import React from 'react';
import Section from './Section';
import { useTranslation } from 'react-i18next';

const SkillCard: React.FC<{ name: string }> = ({ name }) => (
    <div className="bg-slate-100 dark:bg-dark-card p-3 rounded-lg text-center text-slate-700 dark:text-dark-text font-medium shadow-md hover:shadow-brand-primary/20 hover:-translate-y-1 transition-all duration-300">
        {name}
    </div>
);

const Skills: React.FC = () => {
  const { t } = useTranslation();
  const skillsData = t('skills.categories', { returnObjects: true }) as Record<string, string[]>;

  return (
    <Section title={t('skills.title')} id="skills">
        <div className="space-y-8">
            {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                    <h3 className="text-xl font-bold text-brand-primary mb-4">{category}</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {skills.map(skill => <SkillCard key={skill} name={skill} />)}
                    </div>
                </div>
            ))}
        </div>
    </Section>
  );
};

export default Skills;