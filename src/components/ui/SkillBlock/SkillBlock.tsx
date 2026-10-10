import React from 'react';
import styles from './SkillBlock.module.css';

interface SkillBlockProps {
  title: string;
  icon: React.ReactNode;
  bg: string;
  color?: string;
  iconBorder?: string;
  width?: string | number;
  flex?: number;
}

export default function SkillBlock({
  title,
  icon,
  bg,
  color = '#ffffff',
  iconBorder = 'none',
  width,
  flex
}: SkillBlockProps) {
  return (
    <div 
      className={styles.skillWrapper} 
      style={{ 
        width: width,
        flex: flex,
      }}
    >
      {/* ── Text Block ── */}
      <div 
        className={styles.titleBlock} 
        style={{ 
          backgroundColor: bg, 
          color: color 
        }}
      >
        {title}
      </div>

      {/* ── Icon Block ── */}
      <div 
        className={styles.iconBlock} 
        style={{ 
          backgroundColor: bg, 
          color: color,
          border: iconBorder
        }}
      >
        {icon}
      </div>
    </div>
  );
}
