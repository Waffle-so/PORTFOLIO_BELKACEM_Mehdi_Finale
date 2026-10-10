"use client";

import React, { useRef, useEffect, useState } from 'react';
import styles from './WayOfWorkSection.module.css';

/* ─────────────────────────────────────
   DATA — Edit everything here freely
───────────────────────────────────── */

import { useLanguage } from '@/context/LanguageContext';

export interface WorkNode {
  id: string;
  col: 1 | 2 | 3;
  row: 1 | 2 | 3;
  iconEmoji: string;
  iconBg: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface WorkArrow {
  from: string;
  to: string;
}

export const ARROWS: WorkArrow[] = [
  { from: 'discovery', to: 'scope' },
  { from: 'scope', to: 'build' },
  { from: 'build', to: 'delivery' },
];

/* ─────────────────────────────────────
   COMPONENT
───────────────────────────────────── */

interface NodeRef {
  id: string;
  el: HTMLDivElement | null;
}

export default function WayOfWorkSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [arrowPaths, setArrowPaths] = useState<{ id: string; d: string }[]>([]);

  const nodes: WorkNode[] = [
    {
      id: 'discovery',
      col: 1,
      row: 2,
      iconEmoji: '💬',
      iconBg: '#2563eb',
      title: t({ fr: 'Appel Découverte', en: 'Discovery Call' }),
      subtitle: t({ fr: 'Votre activité & enjeux', en: 'Your business & problem' }),
      description: t({
        fr: 'Nous échangeons sur votre activité, vos objectifs et le problème précis à résoudre.',
        en: 'We discuss your business, the problem to solve, and your goals.',
      }),
      tags: t({ fr: ['Lancement'], en: ['Kickoff'] }),
    },
    {
      id: 'scope',
      col: 2,
      row: 1,
      iconEmoji: '✏️',
      iconBg: '#d97706',
      title: t({ fr: 'Définir le Périmètre', en: 'Define the Scope' }),
      subtitle: t({ fr: 'Validation des livrables', en: 'Agree on deliverables' }),
      description: t({
        fr: 'Nous cadrons vos besoins : site sur-mesure, e-commerce, MVP SaaS, design web ou intégration IA.',
        en: 'We define what you need: a custom or static site, e-commerce, SaaS MVP, feature, web design, or AI integration.',
      }),
      tags: t({ fr: ['Périmètre', 'Livrables'], en: ['Scope', 'Deliverables'] }),
    },
    {
      id: 'build',
      col: 2,
      row: 3,
      iconEmoji: '🔨',
      iconBg: '#dc2626',
      title: t({ fr: 'Recherche & Conception', en: 'Research & Build' }),
      subtitle: t({ fr: 'Analyser. Puis créer.', en: 'Adapt. Then create.' }),
      description: t({
        fr: 'J’analyse vos concurrents et sélectionne l’approche technique adaptée à vos contraintes et délais.',
        en: 'I study competitors and select an approach that fits your constraints and deadline. Then I design or build your deliverable.',
      }),
      tags: t({ fr: ['Recherche', 'Développement'], en: ['Research', 'Build'] }),
    },
    {
      id: 'delivery',
      col: 3,
      row: 2,
      iconEmoji: '➡️',
      iconBg: '#374151',
      title: t({ fr: 'Livraison Finale', en: 'Final Delivery' }),
      subtitle: t({ fr: 'Remise clé en main', en: 'Your work, handed over' }),
      description: t({
        fr: 'Je vous remets l’ensemble des livrables validés et prêts pour la production.',
        en: 'I hand over the completed deliverables we agreed on.',
      }),
      tags: t({ fr: ['Livré'], en: ['Done'] }),
    },
  ];

  // Calculate SVG arrow paths after layout
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    const paths = ARROWS.map(({ from, to }) => {
      const fromEl = nodeRefs.current.get(from);
      const toEl = nodeRefs.current.get(to);
      if (!fromEl || !toEl) return null;

      const fromNode = nodes.find((n) => n.id === from);
      const toNode = nodes.find((n) => n.id === to);

      const fromRect = fromEl.getBoundingClientRect();
      const toRect = toEl.getBoundingClientRect();

      let x1: number, y1: number, x2: number, y2: number;
      let cx1: number, cy1: number, cx2: number, cy2: number;

      const sameCol = fromNode?.col === toNode?.col;

      if (sameCol) {
        // Vertical arrow: bottom-center → top-center
        x1 = fromRect.left + fromRect.width / 2 - containerRect.left;
        y1 = fromRect.bottom - containerRect.top;
        x2 = toRect.left + toRect.width / 2 - containerRect.left;
        y2 = toRect.top - containerRect.top;
        cx1 = x1;
        cy1 = y1 + (y2 - y1) * 0.5;
        cx2 = x2;
        cy2 = y1 + (y2 - y1) * 0.5;
      } else {
        // Horizontal arrow: center-right → center-left
        x1 = fromRect.right - containerRect.left;
        y1 = fromRect.top + fromRect.height / 2 - containerRect.top;
        x2 = toRect.left - containerRect.left;
        y2 = toRect.top + toRect.height / 2 - containerRect.top;
        cx1 = x1 + (x2 - x1) * 0.5;
        cy1 = y1;
        cx2 = x1 + (x2 - x1) * (-1);
        cy2 = y2;
      }

      return {
        id: `${from}-${to}`,
        d: `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`,
      };
    }).filter(Boolean) as { id: string; d: string }[];

    setArrowPaths(paths);
  }, []);

  return (
    <section className={styles.section} id="how-i-work">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          {t({ fr: 'Méthode de travail', en: 'How I Work' })}
        </h2>

        <div className={styles.graphWrapper}>
          <div className={styles.graphInner} ref={containerRef}>
            <svg className={styles.arrowsSvg} aria-hidden="true">
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7"
                  refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255,255,255,0.25)" />
                </marker>
              </defs>
              {arrowPaths.map(({ id, d }) => (
                <path
                  key={id}
                  d={d}
                  fill="none"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                  markerEnd="url(#arrowhead)"
                />
              ))}
            </svg>

            <div className={styles.grid}>
              {nodes.map((node) => (
                <div
                  key={node.id}
                  className={styles.cell}
                  style={{
                    gridColumn: node.col,
                    gridRow: node.row,
                  }}
                >
                  <div
                    className={styles.card}
                    ref={(el) => {
                      if (el) nodeRefs.current.set(node.id, el);
                    }}
                  >
                    {node.col === 1 && (
                      <span className={styles.entryArrow}>▶</span>
                    )}
                    <div className={styles.cardIcon} style={{ backgroundColor: node.iconBg }}>
                      <span>{node.iconEmoji}</span>
                    </div>
                    <div className={styles.cardText}>
                      <span className={styles.cardTitle}>{node.title}</span>
                      <span className={styles.cardSubtitle}>{node.subtitle}</span>
                    </div>
                  </div>

                  <p className={styles.nodeDescription}>{node.description}</p>

                  <div className={styles.nodeTags}>
                    {node.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
