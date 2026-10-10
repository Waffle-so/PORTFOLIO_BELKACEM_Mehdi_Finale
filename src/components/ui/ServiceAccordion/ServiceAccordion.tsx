"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, X, ArrowUpRight } from 'lucide-react';
import styles from './ServiceAccordion.module.css';

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  imageSrc: string;
}

interface ServiceAccordionProps {
  data: ServiceData;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ServiceAccordion({ data, isOpen = false, onToggle }: ServiceAccordionProps) {
  // If no onToggle is provided, manage state internally
  const [internalIsOpen, setInternalIsOpen] = useState(isOpen);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const isExpanded = onToggle !== undefined ? isOpen : internalIsOpen;

  return (
    <div className={`${styles.accordion} ${isExpanded ? styles.expanded : ''}`}>
      {/* ── Header ── */}
      <div className={styles.header}>
        <Link href={`/services/${data.slug}`} className={styles.headerLeft}>
          <span className={styles.number}>{data.number}</span>
          <h3 className={styles.title}>{data.title}</h3>
          <ArrowUpRight size={16} className={styles.arrowIcon} strokeWidth={1.5} />
        </Link>
        <button className={styles.iconButton} onClick={handleToggle} aria-expanded={isExpanded} aria-label="Toggle accordion">
          {isExpanded ? (
            <X size={20} strokeWidth={1.5} />
          ) : (
            <Plus size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* ── Body (Expandable) ── */}
      <div className={styles.bodyWrapper}>
        <div className={styles.bodyContent}>
          
          <div className={styles.textContent}>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.tagsGroup}>
              {data.tags.map((tag, idx) => (
                <span key={idx} className={styles.tag}>
                  <span className={styles.dot}>•</span> {tag}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.imageBlock}>
            <div className={styles.imageWrapper}>
              <Image 
                src={data.imageSrc} 
                alt={data.title} 
                fill 
                sizes="(max-width: 900px) 100vw, 400px"
                className={styles.image}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
