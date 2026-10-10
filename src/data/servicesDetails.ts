export interface LocalizedString {
  fr: string;
  en: string;
}

export interface ServiceBenefit {
  iconName: string; // lucide-react icon name
  title: LocalizedString;
  description: LocalizedString;
}

export interface ServiceDetail {
  slug: string;
  badge: LocalizedString;
  heroTitle: LocalizedString;
  heroTagline: LocalizedString;
  persona: LocalizedString;
  benefits: ServiceBenefit[];
  ctaLabel: LocalizedString;
}

export const servicesDetails: Record<string, ServiceDetail> = {

  /* ─── 01 SaaS & Produits Digitaux ─────────────────────────────── */
  'saas-digital-products': {
    slug: 'saas-digital-products',
    badge: { fr: 'Service 01', en: 'Service 01' },
    heroTitle: {
      fr: 'SaaS & Produits Digitaux',
      en: 'SaaS & Digital Products',
    },
    heroTagline: {
      fr: 'Votre MVP en production — vite, solide, sans coordination inutile.',
      en: 'Your MVP in production — fast, solid, no wasted coordination.',
    },
    persona: {
      fr: 'Pour les fondateurs & startups',
      en: 'For founders & startups',
    },
    benefits: [
      {
        iconName: 'Rocket',
        title: { fr: 'Un seul interlocuteur du design au déploiement', en: 'One person from design to deployment' },
        description: {
          fr: 'Fini les allers-retours entre designer, développeur et chef de projet. Je pilote tout le cycle : maquette, code, mise en ligne.',
          en: 'No more back-and-forth between designer, dev, and PM. I own the full cycle: wireframe, code, launch.',
        },
      },
      {
        iconName: 'Zap',
        title: { fr: 'Time-to-market 3× plus rapide', en: '3× faster time-to-market' },
        description: {
          fr: 'Une architecture choisie pour votre périmètre réel, pas sur-ingéniée. Vous êtes en ligne en quelques semaines, pas en mois.',
          en: 'Architecture chosen for your real scope, not over-engineered. Live in weeks, not months.',
        },
      },
      {
        iconName: 'ShieldCheck',
        title: { fr: 'Code maintenable dès le premier jour', en: 'Maintainable code from day one' },
        description: {
          fr: 'Stack moderne (Next.js, TypeScript, Docker) et conventions claires pour que votre futur développeur puisse reprendre sans friction.',
          en: 'Modern stack (Next.js, TypeScript, Docker) and clean conventions so your next developer can take over without friction.',
        },
      },
      {
        iconName: 'LayoutDashboard',
        title: { fr: 'Un design premium qui retient vos utilisateurs', en: 'Premium design that retains your users' },
        description: {
          fr: 'Je conçois l\'interface avant de coder. Votre produit doit paraître crédible dès le premier écran pour retenir vos utilisateurs.',
          en: 'I design the interface before coding. Your product needs to look credible from the first screen to retain users.',
        },
      },
      {
        iconName: 'GitBranch',
        title: { fr: 'Visibilité totale sur l\'avancement du projet', en: 'Full visibility on project progress' },
        description: {
          fr: 'Nous définissons un plan d\'action clair dès le départ. Vous suivez l\'avancement à chaque étape et restez toujours au courant de ce qui se passe.',
          en: 'We define a clear action plan from the start. You track the progress at every step and always stay informed about what is happening.',
        },
      },
      {
        iconName: 'Headphones',
        title: { fr: 'Support post-lancement inclus', en: 'Post-launch support included' },
        description: {
          fr: 'Je reste disponible après la mise en ligne pour corriger, ajuster ou faire évoluer le produit selon vos premiers retours.',
          en: 'I stay available after launch to fix, adjust, or evolve the product based on your first user feedback.',
        },
      },
    ],
    ctaLabel: { fr: 'Discuter de votre MVP', en: 'Discuss your MVP' },
  },

  /* ─── 02 Souveraineté des Données & IA ────────────────────────── */
  'data-sovereignty-ai': {
    slug: 'data-sovereignty-ai',
    badge: { fr: 'Service 02', en: 'Service 02' },
    heroTitle: {
      fr: 'Souveraineté des Données & IA',
      en: 'Data Sovereignty & AI',
    },
    heroTagline: {
      fr: 'L\'intelligence artificielle sur vos propres serveurs. Vos données ne bougent pas.',
      en: 'Artificial intelligence on your own servers. Your data never moves.',
    },
    persona: {
      fr: 'Pour les entreprises & institutions sensibles aux données',
      en: 'For enterprises & data-sensitive institutions',
    },
    benefits: [
      {
        iconName: 'Lock',
        title: { fr: 'Zéro donnée envoyée vers le cloud', en: 'Zero data sent to the cloud' },
        description: {
          fr: 'Vos documents, conversations et fichiers ne quittent jamais vos serveurs. Ni OpenAI, ni Google, ni personne d\'autre ne les voit.',
          en: 'Your documents, conversations, and files never leave your servers. Not OpenAI, not Google, no one else sees them.',
        },
      },
      {
        iconName: 'Search',
        title: { fr: 'Trouvez n\'importe quelle information en secondes', en: 'Find any information in seconds' },
        description: {
          fr: 'Vos employés posent une question en langage naturel et le système retrouve la réponse dans vos archives internes instantanément.',
          en: 'Your employees ask a question in natural language and the system finds the answer in your internal archives instantly.',
        },
      },
      {
        iconName: 'Server',
        title: { fr: 'Infrastructure performante requise', en: 'High-performance infrastructure required' },
        description: {
          fr: 'Ce service exclusif nécessite que vous disposiez déjà de serveurs (on-premise ou cloud privé) capables de supporter la charge d\'une IA en production.',
          en: 'This exclusive service requires you to already have servers (on-premise or private cloud) capable of supporting an AI model in production.',
        },
      },
      {
        iconName: 'BrainCircuit',
        title: { fr: 'Algorithme personnalisé sur-mesure', en: 'Custom tailored algorithm' },
        description: {
          fr: 'Le système n\'est pas générique. L\'algorithme est spécifiquement adapté à vos types de fichiers et intégré parfaitement à votre architecture interne.',
          en: 'The system is not generic. The algorithm is specifically adapted to your file types and integrated seamlessly into your internal architecture.',
        },
      },
      {
        iconName: 'TrendingUp',
        title: { fr: 'Des heures de recherche économisées chaque semaine', en: 'Hours of research saved every week' },
        description: {
          fr: 'Ce que vos équipes cherchaient en 2 heures se trouve en 10 secondes. L\'IA travaille, vos collaborateurs décident.',
          en: 'What your teams searched for in 2 hours is found in 10 seconds. AI works, your people decide.',
        },
      },
      {
        iconName: 'UserCheck',
        title: { fr: 'Conforme aux exigences de confidentialité strictes', en: 'Compliant with strict confidentiality requirements' },
        description: {
          fr: 'Idéal pour les cabinets d\'expertise comptable, les centres médicaux, les bureaux d\'études, ou toute entreprise gérant des données sensibles et un volume documentaire massif.',
          en: 'Ideal for accounting firms, medical centers, engineering firms, or any enterprise managing sensitive data and a massive document volume.',
        },
      },
    ],
    ctaLabel: { fr: 'Explorer une démo', en: 'Explore a demo' },
  },

  /* ─── 03 Partenaire Tech (Marque Blanche) ─────────────────────── */
  'tech-partner': {
    slug: 'tech-partner',
    badge: { fr: 'Service 03', en: 'Service 03' },
    heroTitle: {
      fr: 'Sous-traitance Web & Partenaire Tech (Marque Blanche)',
      en: 'Web Outsourcing & Tech Partner (White-Label)',
    },
    heroTagline: {
      fr: 'Dites oui à chaque brief client. Je construis, vous livrez.',
      en: 'Say yes to every client brief. I build, you deliver.',
    },
    persona: {
      fr: 'Pour les agences digitales & créatives',
      en: 'For digital & creative agencies',
    },
    benefits: [
      {
        iconName: 'Handshake',
        title: { fr: 'Votre renfort technique : aucun projet refusé', en: 'Your tech reinforcement: no project refused' },
        description: {
          fr: 'Un brief arrive avec une stack que votre équipe ne maîtrise pas ? Je m\'intègre discrètement et vous livrez sans briser la confiance.',
          en: 'A brief arrives with a stack your team doesn\'t master? I integrate discreetly and you deliver without breaking trust.',
        },
      },
      {
        iconName: 'EyeOff',
        title: { fr: 'Complètement invisible pour vos clients', en: 'Completely invisible to your clients' },
        description: {
          fr: 'Je signe des NDA, je ne contacte jamais votre client directement, je ne mets pas mon nom sur le produit. Votre image reste intacte.',
          en: 'I sign NDAs, I never contact your client directly, I don\'t put my name on the product. Your image stays intact.',
        },
      },
      {
        iconName: 'Target',
        title: { fr: 'Externalisation flexible : vos marges préservées sans CDI', en: 'Flexible outsourcing: margins preserved without a tech hire' },
        description: {
          fr: 'Pas de charges sociales, ni d\'onboarding. Vous payez une prestation (ex: création d\'un site vitrine, d\'un dashboard SaaS ou d\'une plateforme e-commerce) et vous récupérez le produit final.',
          en: 'No payroll taxes or onboarding. You pay for a specific mission (e.g., corporate site, SaaS dashboard, e-commerce platform) and receive the final product.',
        },
      },
      {
        iconName: 'Code2',
        title: { fr: 'Intégration Figma to Code pixel perfect', en: 'Pixel-perfect Figma to Code integration' },
        description: {
          fr: 'Vous fournissez les maquettes Figma, je les traduis en code exact. Le site final est optimisé pour les Web Vitals (vitesse de chargement) et parfaitement structuré pour le SEO technique.',
          en: 'You provide the Figma designs, I translate them into exact code. The final site is optimized for Core Web Vitals (speed) and perfectly structured for technical SEO.',
        },
      },
      {
        iconName: 'RefreshCw',
        title: { fr: 'Collaboration agile sur plusieurs projets', en: 'Agile collaboration across multiple projects' },
        description: {
          fr: 'Si vous avez un pic d\'activité avec plusieurs clients en même temps, je peux absorber la charge et gérer plusieurs développements en parallèle de manière organisée.',
          en: 'If you have a spike in activity with multiple clients at once, I can absorb the load and manage several developments in parallel in an organized manner.',
        },
      },
      {
        iconName: 'Award',
        title: { fr: 'Qualité d\'ingénieur logiciel certifié', en: 'Certified software engineering quality' },
        description: {
          fr: 'Diplômé RNCP niveau 7 (CESI Exia) avec une solide expérience terrain. Le code livré respecte les standards de l\'ingénierie (architecture propre, tests, sécurité).',
          en: 'RNCP Level 7 graduate (CESI Exia) with solid field experience. The delivered code respects engineering standards (clean architecture, tests, security).',
        },
      },
    ],
    ctaLabel: { fr: 'Devenir partenaire', en: 'Become a partner' },
  },

  /* ─── 04 Branding Premium & E-Commerce ────────────────────────── */
  'premium-branding-ecommerce': {
    slug: 'premium-branding-ecommerce',
    badge: { fr: 'Service 04', en: 'Service 04' },
    heroTitle: {
      fr: 'Branding Premium & E-Commerce',
      en: 'Premium Branding & E-Commerce',
    },
    heroTagline: {
      fr: 'Une marque à la hauteur de votre produit. Un site qui vend.',
      en: 'A brand that matches your product. A website that sells.',
    },
    persona: {
      fr: 'Pour les marques & entrepreneurs e-commerce',
      en: 'For brands & e-commerce entrepreneurs',
    },
    benefits: [
      {
        iconName: 'Star',
        title: { fr: 'Une identité visuelle qui reflète votre ADN', en: 'A visual identity that reflects your DNA' },
        description: {
          fr: 'Le design ne doit pas juste être beau, il doit incarner l\'âme de votre produit. Je conçois des interfaces authentiques qui créent une connexion immédiate avec vos clients.',
          en: 'Design shouldn\'t just be beautiful, it must embody the soul of your product. I design authentic interfaces that create an immediate connection with your customers.',
        },
      },
      {
        iconName: 'ShoppingBag',
        title: { fr: 'Tunnel de vente conçu pour convertir', en: 'Sales funnel designed to convert' },
        description: {
          fr: 'Chaque page, chaque bouton, chaque micro-interaction est pensé pour guider le visiteur vers l\'achat, sans friction.',
          en: 'Every page, every button, every micro-interaction is designed to guide the visitor toward purchase, without friction.',
        },
      },
      {
        iconName: 'Palette',
        title: { fr: 'Une marque cohérente sur tous les supports', en: 'A consistent brand across all channels' },
        description: {
          fr: 'Logo, couleurs, typographie, ton — tout est codifié dans un guide pour que votre marque reste reconnaissable partout.',
          en: 'Logo, colors, typography, tone — everything is codified in a guide so your brand stays recognizable everywhere.',
        },
      },
      {
        iconName: 'Smartphone',
        title: { fr: 'Mobile-first, parce que vos clients achètent sur mobile', en: 'Mobile-first, because your customers shop on mobile' },
        description: {
          fr: 'Plus de 60% des achats e-commerce se font sur téléphone. Votre boutique sera parfaite sur tous les écrans, en priorité sur mobile.',
          en: 'Over 60% of e-commerce purchases happen on phones. Your store will be perfect on every screen, mobile first.',
        },
      },
      {
        iconName: 'BarChart2',
        title: { fr: 'Tableaux de bord (Dashboarding) précis', en: 'Precise Dashboarding' },
        description: {
          fr: 'Ne naviguez pas à l\'aveugle. Je mets en place des dashboards clairs pour suivre vos visiteurs, vos paniers abandonnés et vos ventes en temps réel.',
          en: 'Don\'t fly blind. I set up clear dashboards to track your visitors, abandoned carts, and real-time sales.',
        },
      },
      {
        iconName: 'MapPin',
        title: { fr: 'Adapté aux réalités du marché local', en: 'Tailored to local market realities' },
        description: {
          fr: 'Gestion optimisée du paiement à la livraison (Cash on Delivery), formulaires simplifiés pour l\'Algérie, et des performances conçues pour charger vite sur réseau mobile.',
          en: 'Optimized Cash on Delivery (COD) management, simplified forms for Algeria, and performance designed to load fast on mobile networks.',
        },
      },
    ],
    ctaLabel: { fr: 'Lancer ma boutique', en: 'Launch my store' },
  },
};
