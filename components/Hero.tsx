import React from 'react';
import { MailIcon, PhoneIcon, GithubIcon, LinkedinIcon, MapPinIcon } from './icons';
// import './me.png'

const Hero: React.FC = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center gap-12 pt-16">
      <div className="md:w-1/3 w-full flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 bg-brand-primary rounded-full transform rotate-6"></div>
          <img
            src="./res/me.png"
            alt="Abdelhamid JAAFAR"
            className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-card shadow-lg"
          />
        </div>
      </div>
      <div className="md:w-2/3 w-full text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          Abdelhamid JAAFAR
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mt-2">
          Ingénieur conception et développement
        </h2>
        <p className="mt-6 text-lg text-slate-600 dark:text-dark-subtext max-w-2xl mx-auto md:mx-0">
          Ingénieur logiciel passionné, animé par une soif constante d'apprentissage et de perfectionnement. Curieux de nature, je m'efforce de comprendre en profondeur les principes et les mécanismes sous-jacents à chaque solution ou concept.
        </p>
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-4 text-slate-600 dark:text-dark-subtext">
          <div className="flex items-center gap-2">
            <MapPinIcon className="w-5 h-5 text-brand-primary" />
            <span>Casablanca, Maroc</span>
          </div>
          <a href="mailto:abdelhamidjaafar3@gmail.com" className="flex items-center gap-2 hover:text-brand-primary transition-colors">
            <MailIcon className="w-5 h-5" />
            <span>abdelhamidjaafar3@gmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5 text-brand-primary" />
            <span>+212708065528</span>
          </div>
        </div>
        <div className="mt-8 flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/Abdelhamidjaafar-byt" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-dark-subtext hover:text-brand-primary transition-colors">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/abdelhamid-jaafar/" target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-dark-subtext hover:text-brand-primary transition-colors">
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;