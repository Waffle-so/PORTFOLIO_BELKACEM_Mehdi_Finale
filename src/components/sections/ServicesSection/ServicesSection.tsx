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
        fr: 'SaaS & Produits Digitaux',
        en: 'SaaS & Digital Products',
      }),
      slug: 'saas-digital-products',
      description: t({
        fr: 'Sortez votre MVP rapidement, sans bugs et avec un rendu premium. Je gère le cycle complet (Design + Architecture + Code) pour vous éviter de perdre des mois à coordonner différents prestataires.',
        en: 'Launch your MVP quickly, bug-free, and with a premium feel. I handle the entire lifecycle (Design + Architecture + Code) so you don\'t waste months coordinating multiple freelancers.',
      }),
      tags: t({
        fr: ['Next.js / React', 'Architecture Full-Stack', 'Docker', 'Déploiement Rapide', 'MVP'],
        en: ['Next.js / React', 'Full-Stack Architecture', 'Docker', 'Fast Go-to-Market', 'MVP'],
      }),
      imageSrc: '/Dashboard_cele.webp',
    },
    {
      id: 's2',
      number: '02',
      title: t({
        fr: "Souveraineté des Données & IA",
        en: 'Data Sovereignty & AI',
      }),
      slug: 'data-sovereignty-ai',
      description: t({
        fr: "Gagnez du temps sur la recherche dans vos archives sans violer la confidentialité. Je déploie des modèles LLM et systèmes RAG 100% On-Premise (sur vos serveurs) pour interroger vos documents sensibles en toute sécurité.",
        en: 'Save time searching your archives without violating confidentiality. I deploy LLM models and RAG systems 100% On-Premise (on your servers) to query your sensitive documents securely.',
      }),
      tags: t({
        fr: ['LLMs Locaux', 'ChromaDB', 'RAG', '100% On-Premise', 'Sécurité'],
        en: ['Local LLMs', 'ChromaDB', 'RAG', '100% On-Premise', 'Security'],
      }),
      imageSrc: '/CNEP_Stage.webp',
    },
    {
      id: 's3',
      number: '03',
      title: t({
        fr: 'Partenaire Tech (Marque Blanche)',
        en: 'Tech Partner (White-Label)',
      }),
      slug: 'tech-partner',
      description: t({
        fr: 'Dites "Oui" à tous les briefs techniques de vos clients sans recruter à l\'année. Je m\'intègre à votre agence comme un développeur senior invisible : vous faites la stratégie et le design, je construis le produit final.',
        en: 'Say "Yes" to all your clients\' technical briefs without yearly hires. I integrate into your agency as an invisible senior developer: you handle strategy and design, I build the final product.',
      }),
      tags: t({
        fr: ['Sous-traitance', 'White-Label', 'Collaboration Agence', 'Design to Code'],
        en: ['Outsourcing', 'White-Label', 'Agency Collaboration', 'Design to Code'],
      }),
      imageSrc: '/Searchtube.webp',
    },
    {
      id: 's4',
      number: '04',
      title: t({
        fr: 'Branding Premium & E-Commerce',
        en: 'Premium Branding & E-Commerce',
      }),
      slug: 'premium-branding-ecommerce',
      description: t({
        fr: 'Votre site et votre marque doivent refléter la véritable valeur (et le prix) de vos produits. Je conçois des identités visuelles fortes et des boutiques sur-mesure conçues spécifiquement pour maximiser vos taux de conversion.',
        en: 'Your website and brand must reflect the true value (and price) of your products. I design strong visual identities and custom storefronts specifically engineered to maximize your conversion rates.',
      }),
      tags: t({
        fr: ['Identité Visuelle', 'Figma', 'UI/UX Design', 'Shopify / Next.js', 'Conversion'],
        en: ['Visual Identity', 'Figma', 'UI/UX Design', 'Shopify / Next.js', 'Conversion'],
      }),
      imageSrc: '/Jewelry_website2.webp',
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
              fr: 'Ingénierie et design de bout en bout. J’aide les fondateurs et entreprises à concrétiser des idées complexes en logiciels évolutifs, systèmes intelligents et marques premium, avec zéro intermédiaire.',
              en: 'End-to-end engineering and design. I help founders turn complex ideas into scalable software, intelligent systems, and premium brands with zero handoffs.',
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

      </div>
    </section>
  );
}
