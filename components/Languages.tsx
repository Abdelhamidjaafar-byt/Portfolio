import React from 'react';
import Section from './Section';

const languageData = [
  {
    language: "Français",
    level: "Maîtrise professionnelle",
  },
  {
    language: "Anglais",
    level: "Maîtrise professionnelle",
  },
  {
    language: "Arabe",
    level: "Langue maternelle",
  }
];

const LanguageCard: React.FC<typeof languageData[0]> = ({ language, level }) => (
    <div className="bg-slate-50 dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-brand-primary/20 transition-shadow duration-300 text-center">
        <h3 className="text-xl font-bold text-brand-primary">{language}</h3>
        <p className="mt-2 text-slate-600 dark:text-dark-subtext">{level}</p>
    </div>
);

const Languages: React.FC = () => {
  return (
    <Section title="Langues" id="languages">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {languageData.map((lang, index) => <LanguageCard key={index} {...lang} />)}
      </div>
    </Section>
  );
};

export default Languages;