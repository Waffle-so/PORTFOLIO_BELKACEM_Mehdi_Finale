import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'gold' | 'ghost';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  id?: string;
  onClick?: () => void;
}

/** Reusable CTA button — gold variant matches Figma "Book a call" */
export default function Button({
  children,
  href,
  variant = 'gold',
  id,
  onClick,
}: ButtonProps) {
  const className = `${styles.btn} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className} id={id}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} id={id} onClick={onClick}>
      {children}
    </button>
  );
}
