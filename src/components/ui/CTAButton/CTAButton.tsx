import styles from './CTAButton.module.css';

interface CTAButtonProps {
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  id?: string;
}

/**
 * Call-to-Action button — gold with grain texture + spinning asterisk icon.
 * Matches the "Contact me" button from Figma (Frame 8).
 */
export default function CTAButton({ children = 'Contact me', href, onClick, id }: CTAButtonProps) {
  const inner = (
    <>
      {/* Asterisk/sparkle icon — spins on hover */}
      <span className={styles.icon} aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
        </svg>
      </span>
      <span className={styles.label}>{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={styles.cta} id={id}>
        {inner}
      </a>
    );
  }

  return (
    <button className={styles.cta} id={id} onClick={onClick}>
      {inner}
    </button>
  );
}
