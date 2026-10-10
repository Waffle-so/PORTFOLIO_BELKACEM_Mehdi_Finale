"use client";

import React, { Suspense } from 'react';
import { useParams } from 'next/navigation';
import { servicesDetails } from '@/data/servicesDetails';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';
import styles from './ServicePage.module.css';
import * as LucideIcons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Dynamic icon renderer from lucide-react
function Icon({ name, ...props }: { name: string } & LucideProps) {
  const LucideIcon = (LucideIcons as Record<string, React.ComponentType<LucideProps>>)[name];
  if (!LucideIcon) return null;
  return <LucideIcon {...props} />;
}

/* ─── Inner page content — uses useParams() ─── */
function ServicePageContent() {
  const params = useParams();
  const slug = params.slug as string;
  const { t, language } = useLanguage();

  const service = servicesDetails[slug];

  const getLoc = (localized: { fr: string; en: string }) =>
    localized[language as 'fr' | 'en'] ?? localized.en;

  if (!service) {
    return (
      <div className={styles.notFound}>
        <p>{t({ fr: 'Service introuvable.', en: 'Service not found.' })}</p>
        <Link href="/#services" className={styles.backLink}>
          ← {t({ fr: 'Retour aux services', en: 'Back to services' })}
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <span className={styles.badge}>{getLoc(service.badge)}</span>
        <h1 className={styles.heroTitle}>{getLoc(service.heroTitle)}</h1>
        <p className={styles.heroTagline}>{getLoc(service.heroTagline)}</p>
        <p className={styles.persona}>{getLoc(service.persona)}</p>
      </section>

      {/* ── Divider ── */}
      <div className={styles.divider} />

      {/* ── Benefits grid ── */}
      <section className={styles.benefitsSection}>
        <div className={styles.benefitsGrid}>
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className={styles.benefitCard}>
              <div className={styles.cardTop}>
                <div className={styles.iconWrap}>
                  <Icon name={benefit.iconName} size={20} strokeWidth={1.5} />
                </div>
                <span className={styles.cardNumber}>0{idx + 1}</span>
              </div>
              <h3 className={styles.benefitTitle}>{getLoc(benefit.title)}</h3>
              <p className={styles.benefitDesc}>{getLoc(benefit.description)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaText}>
            {t({
              fr: 'Prêt à démarrer ? Parlons de votre projet.',
              en: "Ready to start? Let's talk about your project.",
            })}
          </p>
          <Link href="/#contact" className={styles.ctaBtn}>
            {getLoc(service.ctaLabel)}
            <Icon name="ArrowRight" size={16} strokeWidth={2} />
          </Link>
        </div>
      </section>

    </div>
  );
}

/* ─── Page export — wraps content in Suspense ─── */
export default function ServicePage() {
  return (
    <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
      <ServicePageContent />
    </Suspense>
  );
}
