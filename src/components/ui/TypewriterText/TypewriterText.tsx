import React from 'react';
import styles from './TypewriterText.module.css';

interface TypewriterTextProps {
  children: React.ReactNode;
}

/**
 * Composant dédié pour l'effet "machine à écrire".
 * Utilise une animation CSS de la largeur (width) pour révéler le texte.
 */
export default function TypewriterText({ children }: TypewriterTextProps) {
  return (
    <div className={styles.typewriterWrapper}>
      {/* Knob Gauche */}
      <div className={`${styles.knob} ${styles.knobLeft}`}>
        <div className={styles.knobDot} />
        <div className={styles.knobLine} />
      </div>

      <p className={styles.typewriterText}>
        {children}
      </p>

      {/* Knob Droit */}
      <div className={`${styles.knob} ${styles.knobRight}`}>
        <div className={styles.knobLine} />
        <div className={styles.knobDot} />
      </div>
    </div>
  );
}
