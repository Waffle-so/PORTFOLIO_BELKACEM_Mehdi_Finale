'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t({ fr: '4 projets livrés', en: '4 delivered projects' }),
      description: t({
        fr: 'Stages et missions en entreprise documentés : Algérie Télécom, Ooredoo et CNEP Banque',
        en: 'Documented enterprise internships & projects: Algérie Télécom, Ooredoo, and CNEP Banque',
      }),
    },
    {
      title: t({ fr: '1 IA souveraine', en: '1 sovereign AI' }),
      description: t({
        fr: 'Plateforme RAG privée pour banque nationale : serveur local, aucun appel API externe, accès contrôlé',
        en: 'Private RAG platform for national bank: local server, zero external API calls, access controlled',
      }),
    },
    {
      title: t({ fr: 'Bac+5 Ingénieur', en: 'MSc in Software Eng.' }),
      description: t({
        fr: 'Formation d’ingénieur logiciel alliant rigueur théorique et réalisations concrètes sur le terrain',
        en: 'Software engineering degree combining academic rigor with hands-on enterprise practice',
      }),
    },
    {
      title: t({ fr: 'Full stack', en: 'Full stack' }),
      description: t({
        fr: 'Design Figma, code front & back, déploiement — un interlocuteur unique et direct',
        en: 'Figma design, front & back code, deployment — one single and direct contact',
      }),
    },
  ];

  return (
    <section className={styles.section} id="experience">
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statBlock}>
              <h3 className={styles.title}>{stat.title}</h3>
              <p className={styles.description}>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
