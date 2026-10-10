'use client';

import React from 'react';
import SafariUrlBar from '@/components/ui/SafariUrlBar';
import SkillBlock from '@/components/ui/SkillBlock';
import { useLanguage } from '@/context/LanguageContext';
import styles from './WhoAmISection.module.css';

export default function WhoAmISection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="who-am-i">
      <div className={styles.container}>

        {/* ── Top Bar ── */}
        <div className={styles.topBar}>
          <SafariUrlBar url={t({ fr: 'QUI SUIS-JE?.com', en: 'WHO AM I?.com' })} />
        </div>

        {/* ── Quote ── */}
        <blockquote className={styles.quote}>
          {t({
            fr: '"Je suis Belkacem, ingénieur logiciel à Alger. Je conçois des systèmes d\'IA sur-mesure, des produits digitaux et des logiciels qui fonctionnent vraiment."',
            en: '"I\'m Belkacem a software engineer in Algiers who builds custom AI systems, digital products and software that actually works."',
          })}
        </blockquote>

        {/* ── Skills Grid ── */}
        <div className={styles.skillsGrid}>
          {/* Row 1 */}
          <div className={styles.gridRow}>
            <SkillBlock
              title={t({ fr: 'Ingénierie Logicielle', en: 'Software Engineering' })}
              bg="#d21558"
              color="#ffffff"
              flex={6}
              iconBorder="2px solid rgba(255,255,255,0.4)"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5 14C16.12 14 15 15.12 15 16.5C15 16.89 15.09 17.26 15.26 17.58L10.58 19.92C10.26 19.74 9.89 19.65 9.5 19.65C8.12 19.65 7 20.77 7 22.15C7 23.53 8.12 24.65 9.5 24.65C10.88 24.65 12 23.53 12 22.15C12 21.76 11.91 21.39 11.74 21.07L16.42 18.73C16.74 18.91 17.11 19 17.5 19C18.88 19 20 17.88 20 16.5C20 15.12 18.88 14 17.5 14ZM9.5 22.65C9.22 22.65 9 22.43 9 22.15C9 21.87 9.22 21.65 9.5 21.65C9.78 21.65 10 21.87 10 22.15C10 22.43 9.78 22.65 9.5 22.65ZM17.5 17C17.22 17 17 16.78 17 16.5C17 16.22 17.22 16 17.5 16C17.78 16 18 16.22 18 16.5C18 16.78 17.78 17 17.5 17ZM17.5 5C16.12 5 15 6.12 15 7.5C15 7.89 15.09 8.26 15.26 8.58L10.58 10.92C10.26 10.74 9.89 10.65 9.5 10.65C8.12 10.65 7 11.77 7 13.15C7 14.53 8.12 15.65 9.5 15.65C10.88 15.65 12 14.53 12 13.15C12 12.76 11.91 12.39 11.74 12.07L16.42 9.73C16.74 9.91 17.11 10 17.5 10C18.88 10 20 8.88 20 7.5C20 6.12 18.88 5 17.5 5ZM9.5 13.65C9.22 13.65 9 13.43 9 13.15C9 12.87 9.22 12.65 9.5 12.65C9.78 12.65 10 12.87 10 13.15C10 13.43 9.78 13.65 9.5 13.65ZM17.5 8C17.22 8 17 7.78 17 7.5C17 7.22 17.22 7 17.5 7C17.78 7 18 7.22 18 7.5C18 7.78 17.78 8 17.5 8Z" transform="translate(0, -3)" />
                </svg>
              }
            />
            <SkillBlock
              title={t({ fr: 'IA & RAG', en: 'AI & RAG' })}
              bg="#23a455"
              color="#ffffff"
              flex={4}
              iconBorder="4px dashed rgba(255,255,255,0.6)"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L1 21H23L12 2ZM12 6.51L18.46 17H5.54L12 6.51Z" />
                  <circle cx="12" cy="14" r="2" />
                </svg>
              }
            />
          </div>

          {/* Row 2 */}
          <div className={styles.gridRow}>
            <SkillBlock
              title={t({ fr: 'Design Web', en: 'Web Design' })}
              bg="#e1a426"
              color="#2a2a2a"
              flex={4}
              iconBorder="3px solid rgba(42,42,42,0.8)"
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <rect x="4" y="4" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" />
                  <circle cx="4" cy="4" r="2" />
                  <circle cx="20" cy="4" r="2" />
                  <circle cx="4" cy="20" r="2" />
                  <circle cx="20" cy="20" r="2" />
                </svg>
              }
            />
            <SkillBlock
              title="SaaS"
              bg="#2a9ee2"
              color="#ffffff"
              flex={6}
              icon={
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.43 4 16.05 4 12C4 11.66 4.03 11.33 4.08 11H11V19.93ZM13 19.93V11H19.92C19.97 11.33 20 11.66 20 12C20 16.05 16.95 19.43 13 19.93ZM19.74 9H13V4.14C16.14 4.8 18.66 6.64 19.74 9ZM11 4.14V9H4.26C5.34 6.64 7.86 4.8 11 4.14Z" />
                </svg>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}
