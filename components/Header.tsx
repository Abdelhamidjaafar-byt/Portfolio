import React from 'react';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="font-medium text-slate-600 dark:text-dark-subtext hover:text-brand-primary dark:hover:text-brand-primary transition-colors">
    {children}
  </a>
);

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 dark:bg-dark-bg/80 border-b border-slate-200 dark:border-slate-800/50">
      <div className="container mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tight">
          Abdelhamid JAAFAR
          <span className="text-brand-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#skills">{t('header.skills')}</NavLink>
          <NavLink href="#experience">{t('header.experience')}</NavLink>
          <NavLink href="#education">{t('header.education')}</NavLink>
          <NavLink href="#contact">{t('header.contact')}</NavLink>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </nav>
        <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;