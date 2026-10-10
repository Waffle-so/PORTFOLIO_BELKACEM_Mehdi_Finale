'use client';

import React, { useState, useEffect } from 'react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Header.module.css';

/**
 * Fixed top header — mirrors Figma "Navigation/Property3".
 * 1300px max-width, dark bg, nav links centred, gold CTA right.
 * Mobile: hamburger menu with animated slide-in overlay.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { label: t({ fr: 'Services', en: 'Services' }), href: '#services' },
    { label: t({ fr: 'Projets', en: 'Work' }), href: '#work-experiences' },
    { label: t({ fr: 'À propos', en: 'About' }), href: '#about' },
    { label: t({ fr: 'FAQ', en: 'FAQ' }), href: '#faq' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={styles.inner}>

          {/* ── Logo ── */}
          <a href="/" className={styles.logo} aria-label="Belkacem Mehdi — Accueil">
            M
          </a>

          {/* ── Nav links (desktop) ── */}
          <nav aria-label="Navigation principale" className={styles.navContainer}>
            <ul className={styles.navList} role="list">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={styles.navLink}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Actions: Lang switch + CTA + Hamburger ── */}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.langBtn}
              onClick={toggleLanguage}
              aria-label={t({ fr: 'Passer en anglais', en: 'Passer en français' })}
              title={t({ fr: 'Passer en anglais', en: 'Passer en français' })}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            <span className={styles.ctaBtnDesktop}>
              <Button href="#contact" variant="gold" id="nav-book-call">
                {t({ fr: 'Réserver un appel', en: 'Book a call' })}
              </Button>
            </span>

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

      {/* ── Mobile Overlay Menu ── */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Navigation mobile">
          <ul className={styles.mobileNavList} role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={styles.mobileNavLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={styles.mobileCtaBtn}
            onClick={() => setMenuOpen(false)}
          >
            {t({ fr: 'Réserver un appel', en: 'Book a call' })}
          </a>
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
