'use client';

import React, { useRef } from 'react';
import Tag from '@/components/ui/Tag';
import TypewriterText from '@/components/ui/TypewriterText';
import { useLanguage } from '@/context/LanguageContext';
import styles from './HeroSection.module.css';
import gsap from 'gsap';

/**
 * Hero section — mirrors Figma "Homepage" frame (1300 × 544px).
 */
export default function HeroSection() {
  const { t } = useLanguage();
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  const nameStr = "BELKACEM MEHDI";
  const letters = nameStr.split('');

  const handleMouseMove = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const mouseX = e.clientX;

    lettersRef.current.forEach((letter) => {
      if (!letter) return;

      const letterRect = letter.getBoundingClientRect();
      const letterX = letterRect.left + letterRect.width / 2;
      const distance = Math.abs(mouseX - letterX);

      const maxDist = 180; // Rayon d'action en pixels
      if (distance < maxDist) {
        // Calcule le y (jusqu'à 25px vers le bas)
        const y = 10 * (1 - distance / maxDist);
        gsap.to(letter, { y: y, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
      } else {
        gsap.to(letter, { y: 0, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
      }
    });
  };

  const handleMouseLeave = () => {
    // Effet rebond quand la souris quitte complètement le nom
    gsap.to(lettersRef.current, { y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' });
  };

  return (
    <section className={styles.hero} id="hero" aria-label="Section principale">
      <div className={styles.container}>
        {/* ── Top row: status tags aligned right ── */}
        <div className={styles.topRow}>
          <div className={styles.tagCluster} aria-label="Statuts">
            <Tag color="gold">
              {t({
                fr: 'Disponible en CDD & missions',
                en: 'Open to full-time & freelance',
              })}
            </Tag>
            <Tag color="pink">
              {t({
                fr: 'Ingénieur Logiciel Indépendant',
                en: 'Independent Software Engineer',
              })}
            </Tag>
          </div>
        </div>

        {/* ── Center: Name ── */}
        <div className={styles.nameBlock}>
          <p className={styles.preTitle}>
            {t({ fr: "Je m'appelle", en: 'My name is' })}
          </p>
          <h1
            className={styles.name}
            aria-label="Belkacem Mehdi"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0 0.3em', cursor: 'default' }}
          >
            {nameStr.split(' ').map((word, wordIdx) => {
              const startIndex = wordIdx === 0 ? 0 : nameStr.split(' ')[0].length + 1;
              return (
                <span key={wordIdx} style={{ display: 'flex' }}>
                  {word.split('').map((char, charIdx) => (
                    <span
                      key={charIdx}
                      ref={(el) => {
                        lettersRef.current[startIndex + charIdx] = el;
                      }}
                      style={{ display: 'inline-block' }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              );
            })}
          </h1>
        </div>

        {/* ── Bottom row: Tagline + CTAs on left, Location on right ── */}
        <div className={styles.bottomRow}>
          <div className={styles.bottomLeft}>
            <div className={styles.taglineBlock}>
              <TypewriterText>
                {t({
                  fr: (
                    <>
                      Design premium, Ingénierie Full-Stack &{' '}
                      <strong>IA Souveraine</strong>
                    </>
                  ),
                  en: (
                    <>
                      Premium Design, Full-Stack Engineering &{' '}
                      <strong>Sovereign AI</strong>
                    </>
                  ),
                })}
              </TypewriterText>
            </div>

            {/* ── CTA Buttons ── */}
            <div className={styles.ctaButtons}>
              <a href="#contact" className={styles.ctaPrimary}>
                {t({ fr: 'Démarrer un projet', en: 'Start a project' })}
              </a>
              <a
                href="https://www.linkedin.com/in/belkacem-mehdi-771233276/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaSecondary}
              >
                {t({ fr: 'Me recruter', en: 'Hire me' })}
              </a>
            </div>
          </div>

          {/* ── Bottom-right: location ── */}
          <p className={styles.location}>
            {t({
              fr: (
                <>
                  Basé en <strong>Algérie</strong>
                </>
              ),
              en: (
                <>
                  Based in <strong>Algeria</strong>
                </>
              ),
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
