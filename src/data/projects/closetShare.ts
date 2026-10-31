import type { ProjectDetailData } from '../../types/projectDetail'

export const closetShareProjectData: ProjectDetailData = {
  id: 'closet-share',
  title: 'Closet Share',
  eyebrow: 'FEATURED ENGINEERING PROJECT / 02',
  tagline: 'Sustainable fashion rental. Scaled.',
  description:
    'A community-driven fashion rental marketplace empowering users to rent luxury outfits or monetize idle wardrobes with deposit-based escrow security and automated logistics.',
  badges: ['WEB APPLICATION', 'P2P ESCROW', 'CIRCULAR FASHION', 'NEXT.JS 15 + FIREBASE'],
  liveUrl: 'https://closetshare.vercel.app',
  role: 'Full Stack Developer & Product Designer',
  category: 'Engineering / P2P Marketplace',
  status: 'Live Beta • V1.2',
  timeline: '4 Months • 2026',

  mockupScreens: [
    {
      id: 'showcase-1',
      title: 'Wardrobe Rental Discovery',
      url: 'closetshare.vercel.app/explore',
      src: '/projects/closet-share/showcase_1.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435170/Closet_Share_fashion_rental_app_showcase-1.png',
      tag: 'FASHION DISCOVERY',
      accentColor: '#10B981',
    },
    {
      id: 'showcase-2',
      title: 'P2P Escrow & Wardrobe Suite',
      url: 'closetshare.vercel.app/wardrobe',
      src: '/projects/closet-share/showcase_2.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435172/Closet_Share_Fashion_Rental_App_Showcase-2.png',
      tag: 'P2P ESCROW',
      accentColor: '#1833FF',
    },
    {
      id: 'showcase-3',
      title: 'Sustainable Impact Metrics',
      url: 'closetshare.vercel.app/sustainability',
      src: '/projects/closet-share/showcase_3.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435168/Closet_Share_Sustainable_Fashion_UI_Showcase-3.png',
      tag: 'CIRCULAR ECONOMY',
      accentColor: '#059669',
    },
    {
      id: 'showcase-4',
      title: 'Marketplace UI & Logistics Collage',
      url: 'closetshare.vercel.app/marketplace',
      src: '/projects/closet-share/showcase_4.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435166/Closet_Share_Fashion_Marketplace_UI_Collage-4.png',
      tag: 'FULL MARKETPLACE',
      accentColor: '#F59E0B',
    },
  ],

  floatingCard: {
    tag: 'SAFE ESCROW',
    title: '100% Deposit Protection',
    subtitle: 'Automated deposit holding ensures damage protection and lender peace of mind.',
    tagBg: '#74DEB6',
  },

  topBadge: {
    label: 'P2P ESCROW ACTIVE',
  },

  heroImage: {
    src: '/projects/closet-share/showcase_2.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435172/Closet_Share_Fashion_Rental_App_Showcase-2.png',
    alt: 'Closet Share Luxury Fashion Rental Showcase',
    caption:
      'Peer-to-peer wardrobe monetization and fashion rental platform with deposit-based escrow security.',
  },

  overview: {
    heading: 'More than wardrobe sharing.',
    subheading:
      'Re-engineering apparel consumption by replacing one-off fast-fashion purchases with a circular, secure peer-to-peer rental ecosystem.',
    cards: [
      {
        number: '01',
        title: 'THE PROBLEM',
        description:
          'Designer fashion is prohibitively expensive, wardrobes sit 80% idle, and single-wear event purchases drive massive textile waste and carbon emissions.',
        color: 'bg-pastel-peach',
        shadow: '#FFD6AD',
      },
      {
        number: '02',
        title: 'THE SOLUTION',
        description:
          'Closet Share provides a frictionless digital rental interface featuring deposit-based escrow, verified community profiles, and door-to-door insured logistics.',
        color: 'bg-pastel-mint',
        shadow: '#74DEB6',
      },
      {
        number: '03',
        title: 'THE IMPACT',
        description:
          'Lenders monetize underutilized luxury garments into recurring passive income, while renters access high-end fashion at over 80% below retail costs.',
        color: 'bg-pastel-sky',
        shadow: '#BAE6FD',
      },
    ],
  },

  features: {
    heading: 'Engineered for trust. Built for style.',
    subheading:
      'Every layer of the platform was crafted to eliminate peer-to-peer friction, protect garment value, and make circular fashion effortless.',
    items: [
      {
        id: 'marketplace',
        title: 'P2P Fashion Marketplace',
        description:
          'Browse thousands of curated high-end apparel pieces available for weekend or monthly rentals at a fraction of retail.',
        iconName: 'CheckCircle2',
        badge: 'Core Platform',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/closet-share/features/feature_01_marketplace.png',
      },
      {
        id: 'escrow',
        title: 'Deposit-Based Escrow Protection',
        description:
          'Smart escrow hold system that locks security deposits until garments are returned and verified in pristine condition.',
        iconName: 'Award',
        badge: 'Zero-Risk Escrow',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/closet-share/features/feature_02_escrow.png',
      },
      {
        id: 'lender',
        title: 'Wardrobe Monetization Suite',
        description:
          'Seamless listing dashboard allowing fashion enthusiasts to turn idle designer clothes into recurring monthly revenue.',
        iconName: 'TrendingUp',
        badge: 'Passive Income',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/closet-share/features/feature_03_lender.png',
      },
      {
        id: 'calendar',
        title: 'Smart Calendar Booking',
        description:
          'Interactive calendar picker preventing double bookings and reserving buffer days for dry cleaning and transit.',
        iconName: 'CalendarDays',
        badge: 'Scheduler',
        accentBg: 'bg-pastel-lavender',
        previewImage: '/projects/closet-share/features/feature_04_calendar.png',
      },
      {
        id: 'chat',
        title: 'Real-Time P2P Chat',
        description:
          'Instant in-app messaging for lenders and renters to coordinate sizing queries, dry-clean preferences, and handover.',
        iconName: 'Users',
        badge: 'Direct Connect',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/closet-share/features/feature_05_chat.png',
      },
      {
        id: 'sustainability',
        title: 'Circular Economy Impact Meter',
        description:
          'Personalized dashboard metric tracking liters of water saved and kilograms of carbon offset by renting instead of buying.',
        iconName: 'Flame',
        badge: 'Eco Impact',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/closet-share/features/feature_06_sustainability.png',
      },
      {
        id: 'verification',
        title: 'Authenticity & Quality Verification',
        description:
          'Pre-listing image verification and multi-point condition checklists ensuring counterfeit-free luxury trades.',
        iconName: 'Award',
        badge: 'Verified Genuine',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/closet-share/features/feature_07_verification.png',
      },
      {
        id: 'logistics',
        title: 'Doorstep Delivery & Insured Logistics',
        description:
          'Integrated prepaid return packaging and tracked courier shipping with insurance against transit damages.',
        iconName: 'FileDown',
        badge: 'Transit Guard',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/closet-share/features/feature_08_logistics.png',
      },
      {
        id: 'pricing',
        title: 'Dynamic Rental Yield Estimator',
        description:
          'Algorithmic price recommendation based on garment retail value, brand demand, and seasonal peak events.',
        iconName: 'BarChart3',
        badge: 'Yield Math',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/closet-share/features/feature_09_pricing.png',
      },
    ],
  },

  gallery: {
    heading: 'Inside Closet Share',
    subheading:
      'A visual walkthrough of the product interface, rental flow, and verified marketplace.',
    items: [
      {
        id: 'screen-1',
        title: 'Community Fashion Rental Showcase',
        caption:
          'Interactive peer-to-peer apparel discovery interface featuring verified designer wardrobes and community collections.',
        src: '/projects/closet-share/showcase_1.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435170/Closet_Share_fashion_rental_app_showcase-1.png',
        alt: 'Closet Share community fashion rental interface showcase',
        type: 'desktop',
      },
      {
        id: 'screen-2',
        title: 'P2P Escrow & Wardrobe Monetization Suite',
        caption:
          'Full-stack rental flow integrating automated deposit escrow, rental insurance checks, and lender payouts.',
        src: '/projects/closet-share/showcase_2.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435172/Closet_Share_Fashion_Rental_App_Showcase-2.png',
        alt: 'Closet Share P2P Escrow & Wardrobe Suite',
        type: 'desktop',
      },
      {
        id: 'screen-3',
        title: 'Sustainable Fashion & Circular Economy UI',
        caption:
          'Real-time carbon and water savings calculator tracking the environmental benefits of garment reuse.',
        src: '/projects/closet-share/showcase_3.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435168/Closet_Share_Sustainable_Fashion_UI_Showcase-3.png',
        alt: 'Closet Share sustainable impact tracking interface',
        type: 'desktop',
      },
      {
        id: 'screen-4',
        title: 'Marketplace Architecture & Mobile Collage',
        caption:
          'End-to-end multi-device experience showcasing user onboarding, real-time messaging, and verified delivery tracking.',
        src: '/projects/closet-share/showcase_4.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435166/Closet_Share_Fashion_Marketplace_UI_Collage-4.png',
        alt: 'Closet Share marketplace mobile collage UI',
        type: 'desktop',
      },
    ],
  },

  techStack: {
    heading: 'Under the Hood',
    subheading:
      'Engineered with modern full-stack web standards prioritizing sub-second real-time sync, transaction security, and responsive editorial layout.',
    technologies: [
      {
        name: 'Next.js 15',
        role: 'App Router, Server Components & Dynamic API Routes',
        iconName: 'Atom',
        badge: 'Framework',
        category: 'Frontend & Backend',
      },
      {
        name: 'Firebase Auth & Firestore',
        role: 'Real-time database, OAuth security & instantaneous message sync',
        iconName: 'Flame',
        badge: 'Cloud BaaS',
        category: 'Database & Auth',
      },
      {
        name: 'TypeScript',
        role: 'Strict static typing across booking models, escrow schemas & API payloads',
        iconName: 'FileCode2',
        badge: 'Language',
        category: 'Language',
      },
      {
        name: 'Tailwind CSS',
        role: 'Utility-first neo-brutalist design tokens and bespoke border styling',
        iconName: 'Palette',
        badge: 'Styling',
        category: 'Design System',
      },
      {
        name: 'Framer Motion',
        role: 'Smooth spring animations, directional carousel slides & micro-interactions',
        iconName: 'Layers',
        badge: 'Motion Engine',
        category: 'Animation',
      },
      {
        name: 'Stripe Escrow Connect',
        role: 'Two-way pre-authorized payment hold, dispute resolution & split payouts',
        iconName: 'Cpu',
        badge: 'Fintech Gateway',
        category: 'Payments & Escrow',
      },
    ],
  },

  process: {
    heading: 'How It Was Built',
    subheading:
      'From identifying peer-to-peer wardrobe inefficiencies to shipping an end-to-end circular fashion rental engine.',
    stages: [
      {
        step: '01',
        title: 'Market Research & User Personas',
        description:
          'Interviewed fashion enthusiasts, boutique owners, and frequent wedding attendees to understand the pain points of single-wear luxury fashion and lender risk concerns.',
        deliverables: ['User Persona Dossiers', 'P2P Risk Matrix', 'Competitive Benchmark'],
      },
      {
        step: '02',
        title: 'Escrow Security Architecture',
        description:
          'Designed a 3-tier financial escrow protocol guaranteeing lenders 100% replacement value in case of unreturned or ruined garments, while keeping renter friction low.',
        deliverables: ['Escrow State Machine', 'Damage Claim Flow', 'Security Deposit Rules'],
      },
      {
        step: '03',
        title: 'Interactive Prototype & Neo-Brutal UI',
        description:
          'Crafted high-contrast responsive layouts featuring bold typography, pastel indicators, and seamless booking calendars optimized for quick mobile rentals.',
        deliverables: ['Figma Design System', 'Component Library', 'Interactive Mobile Flows'],
      },
      {
        step: '04',
        title: 'Full-Stack Build & Logistics Launch',
        description:
          'Implemented Next.js 15 Server Actions with Firestore real-time listeners, automated courier booking webhooks, and deployed with CI/CD on Vercel.',
        deliverables: ['Production Web App', 'Real-time Chat Engine', 'Automated Logistics Webhooks'],
      },
    ],
  },

  details: {
    projectName: 'Closet Share Platform',
    projectType: 'Peer-to-Peer Fashion Rental Web App',
    category: 'Engineering / Marketplace',
    status: 'Live Beta • Open Community',
    role: 'Full Stack Engineer & Lead UI/UX Designer',
    technologies: [
      'Next.js 15',
      'React 18',
      'TypeScript',
      'Firebase Auth',
      'Cloud Firestore',
      'Tailwind CSS',
      'Framer Motion',
      'Stripe Connect',
    ],
    liveUrl: 'https://closetshare.vercel.app',
  },

  cta: {
    heading: 'Experience the future of fashion rental.',
    description:
      'Explore the live Closet Share platform, browse designer collections, or review the engineering architecture behind the escrow engine.',
    primaryButtonText: 'VISIT CLOSET SHARE ↗',
    secondaryButtonText: 'TALK ABOUT THIS PROJECT',
  },
}
