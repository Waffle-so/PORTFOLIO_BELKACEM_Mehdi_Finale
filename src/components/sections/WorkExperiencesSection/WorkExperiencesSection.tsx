'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WorkExperiencesSection.module.css';

export default function WorkExperiencesSection() {
  const { t } = useLanguage();

  const experiences = [
    {
      badge: t({ fr: 'IA', en: 'AI' }),
      title: t({ fr: 'Ingénierie Systèmes IA', en: 'AI Systems Engineering' }),
      company: t({ fr: '@ CNEP Banque', en: '@ Bank CNEP' }),
      description: t({
        fr: 'Architecture d’une plateforme RAG souveraine et locale pour données bancaires. Pipelines de recherche sémantique avec LLMs locaux, ChromaDB et FastAPI garantissant zéro fuite de données.',
        en: 'Architected a sovereign, on-premise RAG platform for banking data. Built semantic search pipelines using local LLMs, ChromaDB, and FastAPI to guarantee zero data leakage.',
      }),
    },
    {
      badge: 'Ops',
      title: t({ fr: 'Architecture Infrastructure', en: 'Infrastructure Architecture' }),
      company: '@ Ooredoo',
      description: t({
        fr: 'Conception d’une base de connaissances centralisée et plateforme de gestion de projet. Architecture full-stack et environnement conteneurisé hautement sécurisé via Docker et Nginx.',
        en: 'Engineered a centralized Knowledge Base and Project Management platform. Designed the full-stack architecture and deployed a secure, containerized environment using Docker and Nginx.',
      }),
    },
    {
      badge: 'FS',
      title: t({ fr: 'Développement Full Stack', en: 'Full Stack Development' }),
      company: '@ Ooredoo',
      description: t({
        fr: 'Conception et développement d’un tableau de bord web temps réel pour le suivi d’activité des superviseurs. Modernisation de l’architecture pour optimiser performances et scalabilité.',
        en: 'Designed and developed a real-time web dashboard enabling supervisors to track progress. Modernized internal system architecture to significantly enhance performance and scalability.',
      }),
    },
    {
      badge: 'Web',
      title: t({ fr: 'Solutions Web Sur-Mesure', en: 'Custom Web Solutions' }),
      company: '@ Algérie Télécom',
      description: t({
        fr: 'Développement d’une application web sur-mesure pour fluidifier les workflows internes et la gestion relationnelle entre encadrants et stagiaires.',
        en: 'Built a custom web application from the ground up to streamline internal workflows and relationship management between supervisors and trainees.',
      }),
    },
  ];

  return (
    <section className={styles.section} id="work-experiences">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t({ fr: 'Expériences professionnelles', en: 'Work experiences' })}
        </h2>
        
        <div className={styles.grid}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.badge}>{exp.badge}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{exp.title}</h3>
                <span className={styles.company}>{exp.company}</span>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
