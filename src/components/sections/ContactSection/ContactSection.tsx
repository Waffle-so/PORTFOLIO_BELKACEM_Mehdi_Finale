"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ContactSection.module.css';

export const CONTACT_STATIC = {
  email: 'xlutirax@gmail.com',
  phone: '+213 0541 78 96 99',
  imageSrc: '/projets.webp',
};

export default function ContactSection() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const servicesList = [
    t({ fr: 'Comment puis-je vous aider ?', en: 'How can I help you?' }),
    t({ fr: 'Lancer un projet SaaS / MVP', en: 'Launch a SaaS / MVP project' }),
    t({ fr: 'Intégrer une IA Souveraine (RAG)', en: 'Integrate Sovereign AI (RAG)' }),
    t({ fr: 'Partenariat Technique (Agence)', en: 'Technical Partnership (Agency)' }),
    t({ fr: 'Identité Visuelle & E-commerce', en: 'Visual Identity & E-commerce' }),
    t({ fr: 'Autre', en: 'Other' }),
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: "Nouveau message depuis le portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Erreur Web3Forms", result);
        alert(t({ fr: "Erreur lors de l'envoi.", en: "Error sending message." }));
      }
    } catch (error) {
      console.error(error);
      alert(t({ fr: "Erreur de connexion.", en: "Connection error." }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact" aria-label="Contact">
      <div className={styles.container}>

        {/* ── Top Header: Image + Text ── */}
        <div className={styles.headerRow}>

          {/* Left: Square Image / Placeholder */}
          <div className={styles.imageWrapper}>
            {CONTACT_STATIC.imageSrc ? (
              <Image
                src={CONTACT_STATIC.imageSrc}
                alt={t({ fr: 'Photo contact', en: 'Contact picture' })}
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                className={styles.image}
              />
            ) : (
              <div className={styles.imagePlaceholder} aria-hidden="true">
                <div className={styles.noiseOverlay} />
              </div>
            )}
          </div>

          {/* Right: Title, Subtitle & Direct Contact */}
          <div className={styles.textBlock}>
            <div className={styles.textTop}>
              <h2 className={styles.title}>
                {t({ fr: 'Un projet en tête ?', en: 'Have any project in mind ?' })}
              </h2>
              <p className={styles.subtitle}>
                {t({
                  fr: 'Créons ensemble quelque chose d’exceptionnel, discutons et démarrons la conversation !',
                  en: "Let's create something good together, get in touch and start the conversation !",
                })}
              </p>
            </div>

            <div className={styles.contactDetails}>
              <a href={`mailto:${CONTACT_STATIC.email}`} className={styles.contactLink}>
                {CONTACT_STATIC.email}
              </a>
              <a href={`tel:${CONTACT_STATIC.phone.replace(/\s+/g, '')}`} className={styles.contactLink}>
                {CONTACT_STATIC.phone}
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom: Contact Form ── */}
        <form className={styles.form} onSubmit={handleSubmit}>

          {/* Field: Name */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              {t({ fr: 'Nom', en: 'Name' })}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className={styles.input}
              placeholder="Belkacem Mehdi"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Field: Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              {t({ fr: 'E-mail', en: 'Email' })}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={styles.input}
              placeholder="Djawed12@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Field: Service */}
          <div className={styles.formGroup}>
            <label htmlFor="service" className={styles.label}>
              {t({ fr: 'Service', en: 'Service' })}
            </label>
            <div className={styles.selectWrapper}>
              <select
                id="service"
                name="service"
                className={styles.select}
                value={formData.service}
                onChange={handleChange}
              >
                {servicesList.map((srv, idx) => (
                  <option key={idx} value={idx === 0 ? '' : srv} disabled={idx === 0}>
                    {srv}
                  </option>
                ))}
              </select>
              <span className={styles.selectArrow}>▼</span>
            </div>
          </div>

          {/* Field: Message */}
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              {t({ fr: 'Message', en: 'Message' })}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className={styles.textarea}
              placeholder={t({ fr: 'Détails de votre projet...', en: 'Project inquiery' })}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {/* Submit Action */}
          <div className={styles.actionRow}>
            {submitted ? (
              <div className={styles.successMessage}>
                <span>{t({ fr: '✓ Message envoyé avec succès !', en: '✓ Message sent successfully!' })}</span>
                <p style={{ marginTop: '8px', fontSize: '14px', opacity: 0.8 }}>
                  {t({
                    fr: 'Je vous répondrai dans les plus brefs délais.',
                    en: 'I will get back to you as soon as possible.',
                  })}
                </p>
              </div>
            ) : (
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading
                  ? t({ fr: 'Envoi en cours...', en: 'Sending...' })
                  : t({ fr: 'Envoyer le message', en: 'Send Message' })}
              </button>
            )}
          </div>

        </form>

      </div>
    </section>
  );
}

