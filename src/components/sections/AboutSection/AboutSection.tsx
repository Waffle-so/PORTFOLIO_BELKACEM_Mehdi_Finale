'use client';

import Image from 'next/image';
import CTAButton from '@/components/ui/CTAButton';
import { useLanguage } from '@/context/LanguageContext';
import styles from './AboutSection.module.css';

const LOGOS = [
  { src: '/Ooredoo-Logo_CMYK_On-White-BG_FA-01-removebg-preview.png', alt: 'Ooredoo', width: 180, height: 72 },
  { src: '/Logo_CNEP_banque_DZ.svg.webp', alt: 'CNEP Banque', width: 120, height: 72 },
  { src: '/Logo_Algérie_Télécom.svg.webp', alt: 'Algérie Télécom', width: 120, height: 72 },
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.aboutSection} id="about">

      {/* ── Bandeau défilant de logos ── */}
      <div className={styles.logoMarquee} aria-label={t({ fr: 'Expériences en entreprise (secteurs : banque, télécoms)', en: 'Company experience (sectors: banking, telecoms)' })}>
        <div className={styles.marqueeTrack}>
          {[...Array(10)].flatMap(() => LOGOS).map((logo, i) => (
            <div className={styles.logoItem} key={i}>
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
                priority={i < 6}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Contenu Central ── */}
      <div className={styles.content}>
        <h2 className={styles.title}>
          {t({
            fr: (
              <>
                Je conçois ◎ logiciels, systèmes IA & produits<br />digitaux ✦
              </>
            ),
            en: (
              <>
                I engineer ◎ software, AI systems & digital<br />products ✦
              </>
            ),
          })}
        </h2>

        <CTAButton href="#contact">
          {t({ fr: 'Me contacter', en: 'Contact me' })}
        </CTAButton>
      </div>

    </section>
  );
}
