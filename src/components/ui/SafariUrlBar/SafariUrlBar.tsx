import React from 'react';
import styles from './SafariUrlBar.module.css';

interface SafariUrlBarProps {
  url?: string;
}

export default function SafariUrlBar({ url = 'WHO AM I?.com' }: SafariUrlBarProps) {
  return (
    <div className={styles.safariBar} aria-hidden="true">
      <span className={styles.aa}>AA</span>
      <div className={styles.urlContainer}>
        <svg
          className={styles.lockIcon}
          width="10"
          height="12"
          viewBox="0 0 10 12"
          fill="currentColor"
        >
          <path d="M2.5 5V3.5C2.5 2.11929 3.61929 1 5 1C6.38071 1 7.5 2.11929 7.5 3.5V5H8C8.55228 5 9 5.44772 9 6V10C9 10.5523 8.55228 11 8 11H2C1.44772 11 1 10.5523 1 10V6C1 5.44772 1.44772 5 2 5H2.5ZM3.5 5H6.5V3.5C6.5 2.67157 5.82843 2 5 2C4.17157 2 3.5 2.67157 3.5 3.5V5Z" />
        </svg>
        <span className={styles.url}>{url}</span>
      </div>
      <svg
        className={styles.refreshIcon}
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="currentColor"
      >
        <path d="M11 7C11 9.76142 8.76142 12 6 12C3.23858 12 1 9.76142 1 7C1 4.23858 3.23858 2 6 2C7.30605 2 8.49506 2.5009 9.39575 3.32757L11 1.5V6H6.5L8.52985 3.75487C7.88607 3.27581 7.07826 3 6 3C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11C8.20914 11 10 9.20914 10 7H11Z" />
      </svg>
    </div>
  );
}
