import React from 'react';
import Section from './Section';
import { useTranslation } from 'react-i18next';

type LanguageData = {
  language: string;
  level: string;
};

const LanguageCard: React.FC<LanguageData> = ({ language, level }) => (
    <div className="bg-slate-50 dark:bg-dark-card p-6 rounded-lg shadow-lg hover:shadow-brand-primary/20 transition-shadow duration-300 text-center">
        <h3 className="text-xl font-bold text-brand-primary">{language}</h3>
        <p className="mt-2 text-slate-600 dark:text-dark-subtext">{level}</p>
    </div>
);

const Languages: React.FC = () => {
  const { t } = useTranslation();
  const languageData = t('languages.data', { returnObjects: true }) as LanguageData[];

  return (
    <Section title={t('languages.title')} id="languages">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {languageData.map((lang, index) => <LanguageCard key={index} {...lang} />)}
      </div>
    </Section>
  );
};

export default Languages;