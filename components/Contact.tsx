import React from 'react';
import { useTranslation } from 'react-i18next';
import Section from './Section';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon } from './icons';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t('contact.title')} id="contact">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg text-slate-600 dark:text-dark-subtext mb-8">
          {t('contact.description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a href="mailto:abdelhamidjaafar3@gmail.com" className="inline-flex items-center gap-3 bg-slate-100 dark:bg-dark-card px-6 py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-brand-secondary transition-colors font-semibold text-slate-800 dark:text-dark-text">
                <MailIcon className="w-6 h-6 text-brand-primary" />
                <span>abdelhamidjaafar3@gmail.com</span>
            </a>
            <div className="inline-flex items-center gap-3 bg-slate-100 dark:bg-dark-card px-6 py-3 rounded-lg font-semibold text-slate-800 dark:text-dark-text">
                <PhoneIcon className="w-6 h-6 text-brand-primary" />
                <span>+212708065528</span>
            </div>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/Abdelhamidjaafar-byt" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-dark-subtext hover:text-brand-primary transition-colors transform hover:scale-110">
            <GithubIcon className="w-10 h-10" />
          </a>
          <a href="https://www.linkedin.com/in/abdelhamid-jaafar/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-dark-subtext hover:text-brand-primary transition-colors transform hover:scale-110">
            <LinkedinIcon className="w-10 h-10" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;