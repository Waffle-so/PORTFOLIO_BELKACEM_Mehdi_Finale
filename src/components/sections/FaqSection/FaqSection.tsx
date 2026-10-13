"use client";

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './FaqSection.module.css';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export default function FaqSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>('q1');

  const faqData: FaqItem[] = [
    {
      id: 'q1',
      question: t({
        fr: 'Faites-vous vraiment le design ET le développement vous-même ?',
        en: 'Do you really handle both design AND development yourself?',
      }),
      answer: t({
        fr: 'Oui, et c’est mon principal atout. Je prends en charge le design UI/UX sur Figma et l’ingénierie full-stack (Next.js, TypeScript). Cela supprime les frictions habituelles et les retards de coordination entre agences. Le produit final fonctionne exactement comme il a été conçu — avec zéro intermédiaire.',
        en: 'Yes, and that is my core advantage. I handle UI/UX design on Figma and full-stack engineering (Next.js, TypeScript). This eliminates the usual friction and delays of coordinating between separate agencies. The final product works exactly as it was designed — with zero handoffs.',
      }),
    },
    {
      id: 'q2',
      question: t({
        fr: 'Nos données confidentielles sont-elles en sécurité avec vos solutions IA ?',
        en: 'Is our confidential data safe with your AI solutions?',
      }),
      answer: t({
        fr: 'Absolument. Pour les études juridiques, écoles et institutions, je déploie des systèmes RAG 100% on-premise. Les modèles et bases vectorielles tournent sur votre propre matériel local : aucun appel vers des API externes (ni OpenAI, ni Google), aucune fuite de données possible et des accès strictement contrôlés par utilisateur.',
        en: 'Absolutely. For law firms, schools, and institutions, I deploy 100% on-premise RAG systems. The models and vector databases run on your own local hardware: zero calls to external APIs (neither OpenAI nor Google), zero data leaks, and access strictly controlled per user.',
      }),
    },
    {
      id: 'q3',
      question: t({
        fr: 'Acceptez-vous de travailler en marque blanche pour notre agence ?',
        en: 'Do you accept working white-label for our agency?',
      }),
      answer: t({
        fr: 'Oui, c’est une part importante de mon activité. Je signe un accord de confidentialité (NDA), je ne contacte jamais votre client final et je livre un code propre, documenté et prêt pour la production que vos équipes peuvent maintenir facilement.',
        en: 'Yes, this is an important part of my work. I sign an NDA, never contact your end client, and deliver clean, documented, production-ready code that your team can easily maintain.',
      }),
    },
    {
      id: 'q4',
      question: t({
        fr: 'Combien de temps dure un projet en moyenne ?',
        en: 'How long does an average project take?',
      }),
      answer: t({
        fr: 'Tout dépend du périmètre : l’ajout d’une fonctionnalité ciblée sur un site existant prend généralement 1 à 2 semaines (devis fixe et délai garanti). Une boutique e-commerce ou plateforme web sur-mesure demande 3 à 5 semaines. Une solution IA locale nécessite 3 à 6 semaines selon le volume de documents à indexer.',
        en: 'It depends on the scope: adding a targeted feature to an existing website typically takes 1 to 2 weeks (fixed quote and guaranteed deadline). A custom e-commerce store or web platform takes 3 to 5 weeks. A local AI solution requires 3 to 6 weeks depending on document volume.',
      }),
    },
    {
      id: 'q5',
      question: t({
        fr: 'Êtes-vous disponible pour un recrutement en entreprise (CDD / CDI) ou uniquement en mission ?',
        en: 'Are you available for company employment (Full-time / Contract) or only freelance?',
      }),
      answer: t({
        fr: 'Je suis ouvert aux deux voies : des missions précises au forfait ou en marque blanche pour des agences et clients finaux, tout comme un recrutement en entreprise (CDD ou opportunité longue) pour rejoindre une équipe d’ingénierie ambitieuse à temps plein.',
        en: 'I am open to both: fixed-scope freelance or white-label missions for agencies and clients, as well as company hiring (Contract or full-time roles) to join an ambitious engineering team.',
      }),
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        
        {/* Left Column: FAQ List */}
        <div className={styles.faqColumn}>
          <h2 className={styles.title}>FAQ</h2>
          
          <div className={styles.faqList}>
            {faqData.map((faq) => {
              const isOpen = openId === faq.id;
              
              return (
                <div 
                  key={faq.id} 
                  className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
                >
                  <button 
                    className={styles.faqHeader} 
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.question}>{faq.question}</span>
                    <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                  </button>
                  
                  <div className={styles.faqBodyWrapper}>
                    <div className={styles.faqBodyInner}>
                      <p className={styles.answer}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Contact Card */}
        <div className={styles.contactColumn}>
          <div className={styles.contactCard}>
            <div className={styles.chatIcon}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
              </svg>
            </div>
            
            <h3 className={styles.contactTitle}>
              {t({ fr: 'Vous avez d’autres questions ?', en: 'Do you have more questions?' })}
            </h3>
            <p className={styles.contactText}>
              {t({
                fr: 'Ingénierie et design complets en une solution unifiée. Trouvez le bon partenaire pour concrétiser votre vision.',
                en: 'End-to-end engineering and design in a single solution. Meet the right partner to help realize your vision.',
              })}
            </p>
            
            <a href="mailto:xlutirax@gmail.com" className={styles.contactButton}>
              {t({ fr: 'Envoyer un e-mail direct', en: 'Shoot a Direct Mail' })}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
