import React from 'react';
import Section from './Section';

const experienceData = [
  {
    company: "BCP | MAMDA",
    role: "Ingénieur Développement Frontend Freelance",
    period: "Octobre 2024 - Présent",
    location: "Rabat, Maroc (Remote)",
    description: [
      "Création d'une plateforme d'investissement.",
      "Développement de microservices pour la gestion des données.",
      "Développement de composants d'interface utilisateur réutilisables et modulaires avec React.js, et mise en œuvre de Redux.js pour tous les composants React.js."
    ],
    tech: ["JavaScript", "TypeScript", "React.js", "HTML5", "CSS3", "Redux", "Zustand", "Apollo", "Git"]
  },
  {
    company: "Acentium | RainaCorp S.A.R.L",
    role: "Ingénieur Développement Frontend",
    period: "Novembre 2022 - Septembre 2024",
    location: "Boston, USA (Remote)",
    description: [
        "Maintenance et refactorisation d'un projet Angular existant, ajout de nouveaux composants UI, notamment un graphe en D3.js.",
        "Ajout d'un thème sombre pour plusieurs composants.",
        "Développement de composants d'interface utilisateur réutilisables et modulaires avec React.js, et mise en œuvre de Redux.js.",
        "Création et maintenance d'une application React.js agissant comme un conteneur ou un sandbox pour d'autres applications React.",
        "Création d'un composant UI de recherche de périphériques matériels avec filtrage, tri, et tableau à défilement infini."
    ],
    tech: ["JavaScript", "TypeScript", "React.js", "Angular", "HTML5", "CSS3", "Redux", "Zustand", "Apollo", "GraphQL", "D3.js", "Azure DevOps", "Git"]
  },
  {
    company: "RIDE-CREDIT",
    role: "Ingénieur Stagiaire en Développement Logiciel (PFE)",
    period: "Février 2022 - Octobre 2022",
    location: "Rabat, Maroc",
    description: [
        "Développement d'une assemblée marocaine intelligente pour la gouvernance.",
        "Mise en place d'un système d'examination des compétences et de recrutement sous forme de challenges.",
        "Création d'un support de formation continue pour les fonctionnaires.",
        "Développement d'une carte interactive en temps réel pour la visualisation des changements climatiques et données régionales."
    ],
    tech: ["PHP", "Laravel", "React.js", "JavaScript", "MySQL", "HTML5", "CSS3", "SYSMON", "Angular"]
  },
  {
    company: "WaveConnect",
    role: "Ingénieur Stagiaire en Développement Logiciel",
    period: "Juillet 2021 - Septembre 2021",
    location: "Paris, France (Remote)",
    description: [
      "Création d'une application web pour la génération de templates de pages vitrines, comprenant un système d'authentification et la gestion des pages et composants."
    ],
    tech: ["React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
  },
  {
    company: "Province de Figuig",
    role: "Ingénieur Stagiaire en Développement Logiciel",
    period: "Juillet 2020 – Août 2020",
    location: "Bouarfa, Maroc",
    description: [
      "Création d'une application web pour la gestion des bureaux d'ordre, avec système d'authentification, front office citoyen et back office administration."
    ],
    tech: ["PHP", "Laravel", "React.js", "JavaScript", "HTML5", "CSS3", "Bootstrap"]
  }
];

const ExperienceCard: React.FC<typeof experienceData[0]> = ({ company, role, period, location, description, tech }) => (
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
  return (
    <Section title="Expérience Professionnelle" id="experience">
      <div className="relative">
        {experienceData.map((exp, index) => <ExperienceCard key={index} {...exp} />)}
      </div>
    </Section>
  );
};

export default Experience;