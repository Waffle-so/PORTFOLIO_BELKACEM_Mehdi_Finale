import React from 'react';
import styles from './Tag.module.css';

type TagColor = 'gold' | 'pink';

interface TagProps {
  children: React.ReactNode;
  color: TagColor;
}

/**
 * Status tags — top-right of hero.
 * gold  → "Available for freelance projects" (#f4d35e)
 * pink  → "Independent Software Engineer"   (#e63978)
 */
export default function Tag({ children, color }: TagProps) {
  return (
    <span className={`${styles.tag} ${styles[color]}`}>
      {children}
    </span>
  );
}
