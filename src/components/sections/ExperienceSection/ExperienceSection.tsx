'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ExperienceSection.module.css';

export default function ExperienceSection() {
  const { t } = useLanguage();

  const stats = [
    {
      title: t({ fr: '3 entreprises', en: '3 companies' }),
      description: t({
        fr: 'Systèmes réels en production conçus avant l’obtention de mon diplôme',
        en: 'Real production systems built before graduation',
      }),
    },
    {
      title: t({ fr: '1 IA souveraine', en: '1 sovereign AI' }),
      description: t({
        fr: 'Plateforme RAG privée déployée pour une banque nationale avec zéro fuite de données',
        en: 'On-premise RAG platform deployed for a national bank & zero data leakage',
      }),
    },
    {
      title: t({ fr: '+5 ans', en: '+5 years' }),
      description: t({
        fr: '4 ans de déploiements en entreprise réalisés en parallèle de mes 5 années d’études d’ingénierie',
        en: '4 years of real enterprise deployments executed alongside 5 years of engineering studies',
      }),
    },
    {
      title: t({ fr: 'Full stack', en: 'Full stack' }),
      description: t({
        fr: 'Logiciel, design et IA — un interlocuteur unique, une vision claire',
        en: 'Software, design and AI - one person, one vision',
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
