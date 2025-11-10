import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${i18n.language === 'en' ? 'bg-brand-primary text-white' : 'bg-gray-200 dark:bg-dark-card'}`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={`px-3 py-1 rounded ${i18n.language === 'fr' ? 'bg-brand-primary text-white' : 'bg-gray-200 dark:bg-dark-card'}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageSwitcher;
