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

  /* ─── 01 Produits Web Sur-Mesure ─────────────────────────────── */
  'produits-web': {
    slug: 'produits-web',
    badge: { fr: 'Service 01', en: 'Service 01' },
    heroTitle: {
      fr: 'Produits Web Sur-Mesure',
      en: 'Custom Web Products',
    },
    heroTagline: {
      fr: 'Du design au code, un seul interlocuteur livre votre site, votre application ou votre boutique, prêts pour la production.',
      en: 'From design to code, one person delivers your website, app or store — production-ready.',
    },
    persona: {
      fr: 'Pour les agences (sous-traitance marque blanche) · les marques e-commerce (bijoux, cosmétique, mode, artisanat)',
      en: 'For agencies (white-label outsourcing) · e-commerce brands (jewelry, cosmetics, fashion, crafts)',
    },
    benefits: [
      {
        iconName: 'Rocket',
        title: { fr: 'Un seul interlocuteur du design au déploiement', en: 'One person from design to deployment' },
        description: {
          fr: 'Fini les allers-retours entre designer, développeur et chef de projet. Je pilote tout le cycle : maquette Figma, code, mise en ligne.',
          en: 'No more back-and-forth between designer, dev, and PM. I own the full cycle: Figma wireframe, code, launch.',
        },
      },
      {
        iconName: 'EyeOff',
        title: { fr: 'Marque blanche : invisible pour vos clients', en: 'White-label: invisible to your clients' },
        description: {
          fr: 'Je signe des NDA, je ne contacte jamais votre client directement, je ne mets pas mon nom sur le produit. Votre image reste intacte.',
          en: 'I sign NDAs, I never contact your client directly, I don\'t put my name on the product. Your image stays intact.',
        },
      },
      {
        iconName: 'ShoppingBag',
        title: { fr: 'Boutiques e-commerce conçues pour convertir', en: 'E-commerce stores built to convert' },
        description: {
          fr: 'Chaque page, chaque bouton est pensé pour guider le visiteur vers l\'achat. Gestion du paiement à la livraison, formulaires adaptés au marché algérien.',
          en: 'Every page, every button is designed to guide visitors toward purchase. COD-ready, forms adapted to the Algerian market.',
        },
      },
      {
        iconName: 'Code2',
        title: { fr: 'Intégration Figma → Code pixel perfect', en: 'Pixel-perfect Figma → Code integration' },
        description: {
          fr: 'Vous fournissez les maquettes Figma, je les traduis en code exact. Le site final est optimisé pour les Web Vitals et parfaitement structuré pour le SEO.',
          en: 'You provide Figma designs, I translate them into exact code. The final site is optimized for Core Web Vitals and technical SEO.',
        },
      },
      {
        iconName: 'Zap',
        title: { fr: 'Time-to-market rapide, architecture solide', en: 'Fast time-to-market, solid architecture' },
        description: {
          fr: 'Stack moderne (Next.js, TypeScript, Docker). En ligne en quelques semaines, avec un code que votre prochain développeur peut reprendre sans friction.',
          en: 'Modern stack (Next.js, TypeScript, Docker). Live in weeks, with code your next developer can take over without friction.',
        },
      },
      {
        iconName: 'Headphones',
        title: { fr: 'Support post-lancement inclus', en: 'Post-launch support included' },
        description: {
          fr: 'Je reste disponible après la mise en ligne pour corriger, ajuster ou faire évoluer le produit selon vos premiers retours clients.',
          en: 'I stay available after launch to fix, adjust, or evolve the product based on your first user feedback.',
        },
      },
    ],
    ctaLabel: { fr: 'Discuter de votre projet', en: 'Discuss your project' },
  },

  /* ─── 02 IA Privée & Documents ────────────────────────────────── */
  'ia-privee-documents': {
    slug: 'ia-privee-documents',
    badge: { fr: 'Service 02', en: 'Service 02' },
    heroTitle: {
      fr: 'IA Privée & Documents',
      en: 'Private AI & Documents',
    },
    heroTagline: {
      fr: 'Un assistant IA qui connaît tous vos documents, installé chez vous, sans qu\'aucune donnée ne sorte.',
      en: 'An AI assistant that knows all your documents, installed on your servers — no data ever leaves.',
    },
    persona: {
      fr: 'Pour les notaires & avocats · les écoles privées & centres de formation',
      en: 'For notaries & lawyers · private schools & training centers',
    },
    benefits: [
      {
        iconName: 'Lock',
        title: { fr: 'Aucune donnée envoyée vers le cloud', en: 'Zero data sent to the cloud' },
        description: {
          fr: 'Le modèle tourne sur votre serveur ou votre machine locale. Ni OpenAI, ni Google, ni aucun tiers ne voit vos documents.',
          en: 'The model runs on your server or local machine. Neither OpenAI, Google, nor any third party sees your documents.',
        },
      },
      {
        iconName: 'Search',
        title: { fr: 'Recherche en langage naturel sur vos propres fichiers', en: 'Natural language search across your own files' },
        description: {
          fr: 'Vos équipes posent une question en français ou en arabe et le système retrouve la bonne réponse dans vos archives internes, avec la source citée.',
          en: 'Your team asks a question in French or Arabic and the system finds the right answer in your internal archives, with the source cited.',
        },
      },
      {
        iconName: 'Server',
        title: { fr: 'Installé sur votre infrastructure existante', en: 'Installed on your existing infrastructure' },
        description: {
          fr: 'Pas de SaaS, pas d\'abonnement cloud. Le système tourne en local sur votre matériel, sans dépendance externe.',
          en: 'No SaaS, no cloud subscription. The system runs locally on your hardware, with no external dependency.',
        },
      },
      {
        iconName: 'BrainCircuit',
        title: { fr: 'Pipeline RAG adapté à vos types de fichiers', en: 'RAG pipeline adapted to your file types' },
        description: {
          fr: 'PDF, Word, Excel, actes notariés, cours, contrats — le pipeline est calibré sur vos documents réels pour maximiser la pertinence des réponses.',
          en: 'PDF, Word, Excel, notarial deeds, courses, contracts — the pipeline is calibrated on your real documents to maximize answer relevance.',
        },
      },
      {
        iconName: 'TrendingUp',
        title: { fr: 'Des heures de recherche économisées chaque semaine', en: 'Hours of research saved every week' },
        description: {
          fr: 'Ce que vos collaborateurs cherchaient en 2 heures se trouve en 10 secondes. L\'IA travaille, vos équipes décident.',
          en: 'What your teams searched for in 2 hours is found in 10 seconds. AI works, your people decide.',
        },
      },
      {
        iconName: 'UserCheck',
        title: { fr: 'Accès contrôlé par authentification', en: 'Access controlled by authentication' },
        description: {
          fr: 'Chaque utilisateur se connecte avec ses propres identifiants. Les droits sont définis pour que chacun ne voie que ce qu\'il doit voir.',
          en: 'Each user logs in with their own credentials. Access rights are defined so each person only sees what they should see.',
        },
      },
    ],
    ctaLabel: { fr: 'Planifier une démo', en: 'Schedule a demo' },
  },
};
