import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Languages from './components/Languages';
import Contact from './components/Contact';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white dark:bg-dark-bg text-slate-800 dark:text-dark-text font-sans antialiased transition-colors duration-300">
      <Header />
      <main className="container mx-auto px-6 md:px-12 pb-12 md:pb-20">
        <div className="flex flex-col gap-20 md:gap-28">
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Languages />
          <Contact />
        </div>
      </main>
      <footer className="text-center py-6 text-slate-500 dark:text-dark-subtext text-sm">
        <p>{t('footer.text')}</p>
      </footer>
    </div>
  );
};

export default App;