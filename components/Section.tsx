
import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center md:text-left">
        {title}
        <span className="text-brand-primary">.</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
