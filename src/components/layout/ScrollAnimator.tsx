"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ScrollAnimator({ children }: { children: React.ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Sélectionne toutes les balises <section> à l'intérieur du container
    const sections = gsap.utils.toArray('section');
    
    sections.forEach((section: any, i: number) => {
      // Pour la première section (Hero), on déclenche l'animation sans délai
      const isHero = i === 0;

      gsap.set(section, { opacity: 0, y: isHero ? 30 : 80 });
      
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: isHero ? 'top bottom' : 'top 85%', // Hero démarre direct
          toggleActions: 'play none none none',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: isHero ? 0.2 : 0, // Petit délai pour le hero au chargement
      });
    });
  }, { scope: container });

  return <div ref={container}>{children}</div>;
}
