'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import styles from './GallerySection.module.css';

const PLACEHOLDER_IMG = '/robo.webp';
const PLACEHOLDER_IMG2 = '/9ccdc6fa-760e-421a-b678-79be39b8be84.webp';

export default function GallerySection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="gallery">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Image 1 */}
          <div className={styles.imageWrapper}>
            <Image
              src={PLACEHOLDER_IMG}
              alt={t({ fr: 'Projet IA & Robotique', en: 'AI & Robotics project' })}
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          {/* Image 2 */}
          <div className={styles.imageWrapper}>
            <Image
              src={PLACEHOLDER_IMG2}
              alt={t({ fr: 'Aperçu projet digital', en: 'Digital project showcase' })}
              fill
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
