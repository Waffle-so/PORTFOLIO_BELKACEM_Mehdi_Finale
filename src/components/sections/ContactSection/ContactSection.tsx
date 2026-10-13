"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ContactSection.module.css';

export const CONTACT_STATIC = {
  email: 'xlutirax@gmail.com',
  phone: '+213 541 78 96 99',
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
    t({ fr: 'Produits Web Sur-Mesure (Site / E-commerce / Marque Blanche)', en: 'Custom Web Products (Site / E-commerce / White-Label)' }),
    t({ fr: 'IA Privée & Documents (RAG On-Premise)', en: 'Private AI & Documents (On-Premise RAG)' }),
    t({ fr: 'Ajout de fonctionnalité (Cadrage 20 min / Devis fixe)', en: 'Feature Addition (20-min Scoping / Fixed Quote)' }),
    t({ fr: 'Opportunité professionnelle (CDD / Recrutement)', en: 'Job Opportunity (Contract / Hiring)' }),
    t({ fr: 'Autre demande', en: 'Other inquiry' }),
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
              <a
                href={`https://wa.me/213541789699`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappLink}
                aria-label="Contacter sur WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.524 5.849L.057 23.5a.5.5 0 0 0 .613.613l5.652-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.529-5.38-1.449l-.385-.229-3.993 1.037 1.037-3.993-.229-.385A9.951 9.951 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                WhatsApp
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

