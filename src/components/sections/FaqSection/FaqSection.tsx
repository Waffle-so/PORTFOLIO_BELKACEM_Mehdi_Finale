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
        fr: 'Oui, et c’est mon principal atout. Je prends en charge la stratégie de marque, le design UI/UX et l’ingénierie full-stack. Cela supprime les frictions habituelles et les retards de coordination entre agences. Le produit final fonctionne exactement comme il a été conçu — avec zéro intermédiaire.',
        en: 'Yes, and that is my core advantage. I handle the brand strategy, the UI/UX design, and the full-stack engineering. This eliminates the usual friction and delays of coordinating between separate agencies. The final product works exactly as it was designed—with zero handoffs.',
      }),
    },
    {
      id: 'q2',
      question: t({
        fr: 'Nos données confidentielles sont-elles en sécurité avec vos IA ?',
        en: 'Is our confidential data safe with your AI systems?',
      }),
      answer: t({
        fr: 'Absolument. Pour les études juridiques, écoles et clients exigeants, je déploie des systèmes "IA Souveraine" (RAG on-premise). Les modèles d’IA et bases de données fonctionnent entièrement sur vos serveurs privés. Vos données sensibles ne quittent jamais votre infrastructure et ne sont jamais envoyées vers des API publiques comme OpenAI.',
        en: 'Absolutely. For law firms, schools, and demanding clients, I deploy "Sovereign AI" systems (On-premise RAG). The AI models and databases run entirely on your private servers. Your sensitive data never leaves your infrastructure and is never sent to public APIs like OpenAI.',
      }),
    },
    {
      id: 'q3',
      question: t({
        fr: 'Acceptez-vous de travailler en marque blanche (white-label) pour notre agence ?',
        en: 'Do you accept working white-label for our agency?',
      }),
      answer: t({
        fr: 'Oui, je m\'intègre régulièrement comme partenaire technique (Tech Partner) pour des agences digitales et créatives. Vous gérez la relation client, la stratégie et la direction artistique, et je m\'occupe de construire le produit final de manière invisible.',
        en: 'Yes, I regularly integrate as a Tech Partner for digital and creative agencies. You manage the client relationship, strategy, and art direction, and I handle building the final product invisibly.',
      }),
    },
    {
      id: 'q4',
      question: t({
        fr: 'Combien de temps dure un projet en moyenne ?',
        en: 'How long does an average project take?',
      }),
      answer: t({
        fr: 'Cela dépend du périmètre. Une identité de marque et un site e-commerce haute conversion prennent 3 à 6 semaines. Un MVP SaaS ou le déploiement d\'une architecture IA sur-mesure nécessitent 6 à 10 semaines. Nous fixons un calendrier strict avant le début des travaux.',
        en: 'It depends on the scope. A brand identity and high-conversion e-commerce site take 3 to 6 weeks. A SaaS MVP or the deployment of a custom AI architecture requires 6 to 10 weeks. We set a strict timeline before any work begins.',
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
