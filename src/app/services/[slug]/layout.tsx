"use client";

import React, { Suspense, useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { servicesDetails } from '@/data/servicesDetails';
import styles from './ServiceLayout.module.css';

/* ─────────────────────────────────────────────
   Breadcrumb — isolé pour que useParams()
   soit dans Suspense et ne bloque pas le rendu
───────────────────────────────────────────── */
function Breadcrumb() {
  const params = useParams();
  const { language } = useLanguage();
  const slug = params?.slug as string;
  const service = servicesDetails[slug];

  const getLoc = (localized: { fr: string; en: string }) =>
    localized?.[language as 'fr' | 'en'] ?? localized?.en ?? '';

  if (!service) return null;

  return (
    <div className={styles.breadcrumb}>
      <Link href="/#services" className={styles.breadcrumbParent}>
        Services
      </Link>
      <span className={styles.sep}>/</span>
      <span className={styles.breadcrumbCurrent}>{getLoc(service.heroTitle)}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Header — n'utilise PAS useParams directement
───────────────────────────────────────────── */
function ServiceHeader() {
  const { t, language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  // Ferme le menu si on resize > 900px
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Empêche le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: t({ fr: 'Services', en: 'Services' }), href: '/#services' },
    { label: t({ fr: 'Projets', en: 'Work' }), href: '/#work-experiences' },
    { label: t({ fr: 'À propos', en: 'About' }), href: '/#about' },
    { label: t({ fr: 'FAQ', en: 'FAQ' }), href: '/#faq' },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Belkacem — Home">
            M
          </Link>

          {/* Breadcrumb isolé dans Suspense */}
          <Suspense fallback={<div className={styles.breadcrumb} />}>
            <Breadcrumb />
          </Suspense>

          <nav aria-label="Navigation principale" className={styles.desktopNav}>
            <ul className={styles.navList} role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={styles.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.langBtn}
              onClick={toggleLanguage}
              aria-label={t({ fr: 'Switch to English', en: 'Passer en français' })}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
            <Link href="/#contact" className={`${styles.ctaBtn} ${styles.ctaBtnDesktop}`}>
              {t({ fr: 'Me contacter', en: 'Contact me' })}
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navigation mobile">
          <ul className={styles.mobileNavList} role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={styles.mobileNavLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/#contact"
            className={styles.mobileCtaBtn}
            onClick={() => setMenuOpen(false)}
          >
            {t({ fr: 'Me contacter', en: 'Contact me' })}
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   Layout export
───────────────────────────────────────────── */
export default function ServiceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ServiceHeader />
      {children}
    </>
  );
}
