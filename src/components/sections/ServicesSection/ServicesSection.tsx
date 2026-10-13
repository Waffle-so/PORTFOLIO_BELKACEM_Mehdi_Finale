"use client";

import React, { useState } from 'react';
import styles from './ServicesSection.module.css';
import ServiceAccordion, { ServiceData } from '@/components/ui/ServiceAccordion';
import { useLanguage } from '@/context/LanguageContext';

export default function ServicesSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('s1');

  const services: ServiceData[] = [
    {
      id: 's1',
      number: '01',
      title: t({
        fr: 'Produits Web Sur-Mesure',
        en: 'Custom Web Products',
      }),
      slug: 'produits-web',
      description: t({
        fr: 'Du design au code, un seul interlocuteur. Je livre votre site, votre application ou votre boutique prêts pour la production — en marque blanche pour les agences, ou en direct pour les marques e-commerce.',
        en: 'From design to code, one point of contact. I deliver your website, app or store production-ready — white-label for agencies, or direct for e-commerce brands.',
      }),
      tags: t({
        fr: ['Next.js / React', 'Figma → Code', 'E-commerce', 'Marque Blanche', 'Mobile-First'],
        en: ['Next.js / React', 'Figma → Code', 'E-commerce', 'White-Label', 'Mobile-First'],
      }),
      imageSrc: '/Jewelry_website2.webp',
    },
    {
      id: 's2',
      number: '02',
      title: t({
        fr: 'IA Privée & Documents',
        en: 'Private AI & Documents',
      }),
      slug: 'ia-privee-documents',
      description: t({
        fr: "Un assistant IA qui connaît tous vos documents, installé sur votre serveur. Vos équipes trouvent n'importe quelle réponse en quelques secondes — en français ou en arabe — sans qu'aucune donnée ne sorte.",
        en: 'An AI assistant that knows all your documents, installed on your server. Your team finds any answer in seconds — in French or Arabic — with zero data leaving your premises.',
      }),
      tags: t({
        fr: ['LLM Local', 'RAG', '100% On-Premise', 'Français & Arabe', 'Sécurité'],
        en: ['Local LLM', 'RAG', '100% On-Premise', 'French & Arabic', 'Security'],
      }),
      imageSrc: '/CNEP_Stage.webp',
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>

        {/* ── Section Header ── */}
        <div className={styles.header}>
          <h2 className={styles.title}>Services</h2>
          <p className={styles.description}>
            {t({
              fr: 'Du design au code, deux offres d’intervention directes et une formule de cadrage au forfait, sans intermédiaire.',
              en: 'From design to code, two focused services and fixed-scope feature sprints, zero handoffs.',
            })}
          </p>
        </div>

        {/* ── Accordion List ── */}
        <div className={styles.accordionList}>
          {services.map((service) => (
            <ServiceAccordion
              key={service.id}
              data={service}
              isOpen={openId === service.id}
              onToggle={() => toggleAccordion(service.id)}
            />
          ))}
        </div>

        {/* ── Encadré : Feature sur-mesure ── */}
        <div className={styles.featureBox}>
          <div className={styles.featureBoxInner}>
            <div className={styles.featureBoxText}>
              <p className={styles.featureBoxEyebrow}>
                {t({ fr: 'Vous avez déjà un site ?', en: 'Already have a website?' })}
              </p>
              <h3 className={styles.featureBoxTitle}>
                {t({ fr: 'Ajoutez la fonctionnalité qui vous manque', en: 'Add the feature you\'re missing' })}
              </h3>
              <p className={styles.featureBoxDesc}>
                {t({
                  fr: 'Cadrage gratuit de 20 min, puis devis fixe avec délai. Périmètre défini à l\'avance : nombre de retours inclus, hors-périmètre et délai clairement écrits.',
                  en: 'Free 20-min scoping call, then a fixed quote with a deadline. Scope defined upfront: number of revisions, out-of-scope items, and deadline clearly written.',
                })}
              </p>
              <div className={styles.featureExamples}>
                {[
                  t({ fr: 'Espace membre / auth', en: 'Member area / auth' }),
                  t({ fr: 'Paiement en ligne', en: 'Online payment' }),
                  t({ fr: 'Dashboard analytics', en: 'Analytics dashboard' }),
                  t({ fr: 'Chatbot sur vos données', en: 'Chatbot on your data' }),
                ].map((item, i) => (
                  <span key={i} className={styles.featureTag}>{item}</span>
                ))}
              </div>
            </div>
            <a href="#contact" className={styles.featureBoxCta}>
              {t({ fr: 'Demander un cadrage', en: 'Request a scoping call' })}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
