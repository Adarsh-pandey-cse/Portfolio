import type { ProjectDetailData } from '../../types/projectDetail'

export const hkOswalProjectData: ProjectDetailData = {
  id: 'hk-oswal',
  title: 'H.K. Oswal Heritage',
  eyebrow: 'FEATURED BRAND IDENTITY & PACKAGING / 03',
  tagline: 'Legacy textile identity. Re-engineered.',
  description:
    'A comprehensive brand identity overhaul and complete logo redesign for H.K. Oswal, a legacy hosiery and textile brand operating since 1957. Featuring circular seal emblems, vector monograms, and an elite print-ready tag and packaging collection.',
  badges: ['LOGO REDESIGN', 'GRAPHIC DESIGN & BRAND', 'HERITAGE PACKAGING', 'CORELDRAW + PRINT DIELINES'],
  liveUrl: '',
  inquireUrl:
    'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20the%20HK%20Oswal%20brand%20identity%20project',
  role: 'Brand Designer, Logo Architect & Print Specialist',
  category: 'Graphic Design & Brand Architecture',
  status: 'Delivered • Commercial Production',
  timeline: '3 Months • 2026',

  mockupScreens: [
    {
      id: 'tag-collection',
      title: 'Premium Hosiery Tag Collection',
      url: 'brand.hkoswal.com/tags',
      src: '/projects/hk-oswal/slide_tag_collection.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441746/H.K._Oswal_Premium_Hosiery_Tag_Collection.png',
      tag: 'TAG COLLECTION',
      accentColor: '#F59E0B',
    },
    {
      id: 'beige-branding',
      title: 'Heritage Brand Identity & Stationery',
      url: 'brand.hkoswal.com/identity',
      src: '/projects/hk-oswal/slide_beige_branding.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441739/beigeee_page-0001.jpg',
      tag: 'LOGO REDESIGN',
      accentColor: '#10B981',
    },
    {
      id: 'logo-redesign',
      title: 'Circular Seal Emblem & Redesigned Crest',
      url: 'brand.hkoswal.com/seal',
      src: '/projects/hk-oswal/slide_logo_redesign.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441739/beigeee_page-0001.jpg',
      tag: 'HERITAGE SEAL',
      accentColor: '#1833FF',
    },
    {
      id: 'dielines',
      title: 'Precision Print Dielines & Die-Cut Suite',
      url: 'brand.hkoswal.com/dielines',
      src: '/projects/hk-oswal/slide_tag_dielines.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441746/H.K._Oswal_Premium_Hosiery_Tag_Collection.png',
      tag: 'PRINT DIELINES',
      accentColor: '#EC4899',
    },
  ],

  floatingCard: {
    tag: 'PRINT DISCIPLINE',
    title: '100% Vector Dielines',
    subtitle: 'Multi-point deboss & gold foil tolerances for luxury hosiery collections.',
    tagBg: '#FED7AA',
  },

  topBadge: {
    label: 'HERITAGE EST. 1957',
  },

  heroImage: {
    src: '/projects/hk-oswal/slide_tag_collection.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441746/H.K._Oswal_Premium_Hosiery_Tag_Collection.png',
    alt: 'H.K. Oswal Premium Hosiery Tag & Brand Collection',
    caption:
      'Comprehensive brand identity overhaul and logo redesign for a legacy apparel brand established in 1957.',
  },

  overview: {
    heading: 'Honoring heritage. Modernizing identity.',
    subheading:
      'How a 68-year-old legacy apparel manufacturer evolved its visual presence into a refined luxury identity through a complete logo redesign and high-precision packaging system.',
    cards: [
      {
        number: '01',
        title: 'THE CHALLENGE',
        description:
          'H.K. Oswal held decades of customer trust since 1957, but its dated visual identity, inconsistent typography, and fragmented product tags lacked modern luxury shelf presence.',
        color: 'bg-pastel-peach',
        shadow: '#FFD6AD',
      },
      {
        number: '02',
        title: 'THE LOGO REDESIGN',
        description:
          'I completely redesigned the H.K. Oswal brand mark into a balanced circular seal emblem with modernized serifs, regal monogram geometry, and strict vector reproduction standards.',
        color: 'bg-pastel-butter',
        shadow: '#FEF08A',
      },
      {
        number: '03',
        title: 'THE PRINT SYSTEM',
        description:
          'Engineered a cohesive apparel tag and packaging ecosystem featuring tactile 350 GSM beige cardstock, hot-stamped gold foil accents, and die-cut tolerances for flawless mass manufacturing.',
        color: 'bg-pastel-mint',
        shadow: '#74DEB6',
      },
    ],
  },

  features: {
    heading: 'Core Brand Pillars & Print Standards',
    subheading:
      'Every touchpoint from the redesigned brandmark to the micro-stitched woven care tags was built to reinforce premium luxury and institutional trust.',
    items: [
      {
        id: 'logo-redesign',
        title: 'Complete Logo Redesign',
        description:
          'Architected an authoritative circular seal mark uniting the legacy "Established 1957" heritage with contemporary geometric symmetry and serif balance.',
        iconName: 'Award',
        badge: 'Core Identity',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/hk-oswal/features/feature_01_logo.png',
      },
      {
        id: 'tags',
        title: 'Premium Hosiery Tag Collection',
        description:
          'Cohesive hangtag suite designed for multiple luxury product lines, featuring dual-tone beige cardstock and brass eyelet attachments.',
        iconName: 'CheckCircle2',
        badge: 'Print Suite',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/hk-oswal/features/feature_02_tags.png',
      },
      {
        id: 'dielines',
        title: 'Precision Print Dielines',
        description:
          'Mathematically verified technical vector dielines with exact 0.5mm rotary die-cut margins, bleed lines, and safety score zones.',
        iconName: 'FileDown',
        badge: 'Production Ready',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/hk-oswal/features/feature_03_dielines.png',
      },
      {
        id: 'typography',
        title: 'Editorial Typography Hierarchy',
        description:
          'Handpicked serif header typography paired with high-legibility geometric sans-serif for fabric composition, washing instructions, and barcode fields.',
        iconName: 'BookOpenCheck',
        badge: 'Type System',
        accentBg: 'bg-pastel-lavender',
        previewImage: '/projects/hk-oswal/features/feature_04_typography.png',
      },
      {
        id: 'foil',
        title: 'Gold Foil & Blind Deboss Specs',
        description:
          'Specialized print finishing vectors with multi-level brass die specifications for hot foil stamping (Pantone 871 C) and crisp tactile relief.',
        iconName: 'Flame',
        badge: 'Luxury Finish',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/hk-oswal/features/feature_05_foil.png',
      },
      {
        id: 'palette',
        title: 'Warm Heritage Color Palette',
        description:
          'Refined color architecture pairing warm organic beige and vintage ivory with high-contrast deep charcoal and warm metallic gold.',
        iconName: 'Sparkles',
        badge: 'Color Palette',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/hk-oswal/features/feature_06_palette.png',
      },
      {
        id: 'labels',
        title: 'Woven Damask Neck Labels',
        description:
          'High-density micro-thread woven label specifications ensuring soft skin contact, zero fraying, and permanent brand legibility across garment lifecycles.',
        iconName: 'Users',
        badge: 'Apparel Trims',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/hk-oswal/features/feature_07_labels.png',
      },
      {
        id: 'packaging',
        title: 'Rigid Retail Box Architecture',
        description:
          'Structural packaging design for premium presentation gift sets, complete with belly bands, magnetic closures, and embossed circular seals.',
        iconName: 'TrendingUp',
        badge: 'Packaging',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/hk-oswal/features/feature_08_packaging.png',
      },
      {
        id: 'vector',
        title: 'Infinite Resolution Vector Standards',
        description:
          'Pure vector geometry constructed with minimum node density for flawless reproduction across embroidery, billboard vinyl, and microscopic fabric tags.',
        iconName: 'BarChart3',
        badge: 'Vector Assets',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/hk-oswal/features/feature_09_vector.png',
      },
    ],
  },

  gallery: {
    heading: 'Inside the Brand Identity',
    subheading:
      'Explore the redesigned logo seal, the premium hosiery tag collection, and technical print production proofs.',
    items: [
      {
        id: 'screen-1',
        title: 'Premium Hosiery Tag Collection Showcase',
        caption:
          'Comprehensive multi-format hangtag system illustrating various sizes, typography weights, and gold foil finishes.',
        src: '/projects/hk-oswal/slide_tag_collection.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441746/H.K._Oswal_Premium_Hosiery_Tag_Collection.png',
        alt: 'H.K. Oswal Premium Hosiery Tag Collection Showcase',
        type: 'desktop',
      },
      {
        id: 'screen-2',
        title: 'Heritage Brand Stationery & Seal Overview',
        caption:
          'Warm beige identity sheet highlighting the redesigned circular seal, typography hierarchy, and corporate stationery layout.',
        src: '/projects/hk-oswal/slide_beige_branding.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441739/beigeee_page-0001.jpg',
        alt: 'H.K. Oswal Brand Stationery and Identity Showcase',
        type: 'desktop',
      },
      {
        id: 'screen-3',
        title: 'Redesigned Brand Logo & Heritage Seal',
        caption:
          'High-resolution macro focus on the redesigned H.K. Oswal crest, circular geometry, and "Est. 1957" heritage typography.',
        src: '/projects/hk-oswal/slide_logo_redesign.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441739/beigeee_page-0001.jpg',
        alt: 'H.K. Oswal Logo Redesign Detail',
        type: 'desktop',
      },
      {
        id: 'screen-4',
        title: 'Technical Print Dieline & Finishing Details',
        caption:
          'Close-up study of die-cut radiuses, string attachment eyelets, and metallic gold hot foil stamp placement.',
        src: '/projects/hk-oswal/slide_tag_dielines.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441746/H.K._Oswal_Premium_Hosiery_Tag_Collection.png',
        alt: 'H.K. Oswal Dieline and Printing Specifications',
        type: 'desktop',
      },
    ],
  },

  techStack: {
    heading: 'Design Engine & Production Tools',
    subheading:
      'Crafted with industry-standard vector software and rigorous prepress protocols to guarantee zero quality loss from screen to industrial offset printing.',
    technologies: [
      {
        name: 'CorelDRAW Graphics Suite',
        role: 'Primary vector drafting, bezier node optimization & complex rotary dielines',
        iconName: 'Cpu',
        badge: 'Primary Vector Engine',
        category: 'Vector Architecture',
      },
      {
        name: 'Adobe Illustrator',
        role: 'Brand book assembly, Pantone swatch mapping & CMYK separation proofs',
        iconName: 'Layers',
        badge: 'Design Suite',
        category: 'Brand Guidelines',
      },
      {
        name: 'Adobe Photoshop',
        role: 'Texture synthesis, foil stamp lighting simulation & tactile mockups',
        iconName: 'Palette',
        badge: 'Visualization',
        category: 'Mockups & Renders',
      },
      {
        name: 'Print Prepress & Dielines',
        role: 'Exact 0.5mm mechanical tolerances, knife die angles & punch registration',
        iconName: 'FileCode2',
        badge: 'Manufacturing',
        category: 'Print Standards',
      },
      {
        name: 'Emboss & Hot Foil Tooling',
        role: 'Vector separation layers specifically prepared for brass engraving and hot stamping',
        iconName: 'Flame',
        badge: 'Finishing',
        category: 'Embellishment',
      },
      {
        name: 'Typography Architecture',
        role: 'Harmonized serif and sans-serif type pairing balanced for luxury legibility',
        iconName: 'Atom',
        badge: 'Type System',
        category: 'Typography',
      },
    ],
  },

  process: {
    heading: 'The Redesign & Production Journey',
    subheading:
      'From auditing decades of historical archives to delivering commercial-ready print assets for high-volume textile manufacturing.',
    stages: [
      {
        step: '01',
        title: 'Heritage Audit & Logo Redesign',
        description:
          'Audited existing factory archives from 1957, identifying the core brand equity while stripping away clunky vintage artifacts in favor of a timeless circular seal emblem.',
        deliverables: ['Brand Equity Audit', 'Logo Redesign Exploration', 'Vector Monogram Studies'],
      },
      {
        step: '02',
        title: 'Seal Emblems & Typographic System',
        description:
          'Constructed mathematically balanced circular badges, choosing refined serifs for the primary mark and clean geometric types for industrial labeling.',
        deliverables: ['Primary Seal Vector', 'Secondary Lockups', 'Type Hierarchy Rules'],
      },
      {
        step: '03',
        title: 'Tag Collection & Dieline Engineering',
        description:
          'Drafted exact manufacturing dielines for hangtags, price tags, and woven labels with specific eyelet drill points and gold foil separation channels.',
        deliverables: ['Hangtag Dieline Templates', 'Foil Stamping Plates', 'Woven Label Specs'],
      },
      {
        step: '04',
        title: 'Paper Sampling & Press Approvals',
        description:
          'Selected 350 GSM textured beige board, conducted test pressings for foil adhesion, and delivered industrial print-ready PDF/X-1a files to the manufacturing unit.',
        deliverables: ['Substrate Swatches', 'Press Production Files', 'Final Brand Style Guide'],
      },
    ],
  },

  details: {
    projectName: 'H.K. Oswal Brand Overhaul',
    projectType: 'Brand Identity, Logo Redesign & Packaging System',
    category: 'Graphic Design & Brand Architecture',
    status: 'Delivered • In Commercial Distribution',
    role: 'Lead Brand Identity Designer & Print Specialist',
    technologies: [
      'CorelDRAW Graphics Suite',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Print Prepress (PDF/X-1a)',
      'Hot Foil Stamping Tooling',
      'Emboss Vector Dielines',
    ],
    inquireUrl:
      'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20a%20branding%20project',
  },

  cta: {
    heading: 'Elevate your brand with timeless heritage design.',
    description:
      'Need a complete brand identity redesign, custom packaging dielines, or luxury print collateral? Let’s architect an unforgettable visual identity for your business.',
    primaryButtonText: 'DISCUSS YOUR BRAND PROJECT ↗',
    secondaryButtonText: 'BACK TO ALL PROJECTS',
  },
}
