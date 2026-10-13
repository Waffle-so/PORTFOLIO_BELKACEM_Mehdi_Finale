'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = '2026';

  return (
    <footer className={styles.footer} role="contentinfo" aria-label={t({ fr: 'Pied de page', en: 'Footer' })}>
      <div className={styles.container}>
        
        {/* ── Huge Name Display ── */}
        <div className={styles.nameWrapper}>
          <h2 className={styles.hugeName}>BELKACEM MEHDI</h2>
        </div>

        {/* ── Divider Line ── */}
        <div className={styles.divider} />

        {/* ── Bottom Bar ── */}
        <div className={styles.bottomBar}>
          <span className={styles.item}>
            {t({ fr: 'Conçu sur Figma', en: 'Designed in Figma' })}
          </span>

          <a
            href="/Belkacem_Mehdi_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {t({ fr: 'Curriculum Vitæ (PDF)', en: 'Resume (PDF)' })}
          </a>

          <a
            href="https://www.linkedin.com/in/belkacem-mehdi-771233276/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            LinkedIn
          </a>
          
          <span className={styles.item}>{currentYear}</span>
        </div>

      </div>
    </footer>
  );
}
