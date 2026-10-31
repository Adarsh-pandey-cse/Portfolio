import type { ProjectDetailData } from '../../types/projectDetail'

export interface BrochurePage {
  pageNumber: number
  title: string
  subtitle: string
  src: string
  fallback: string
  description: string
}

export interface LogoShowcaseItem {
  id: string
  title: string
  category: string
  src: string
  fallback: string
  caption: string
  theme: 'dark' | 'light' | 'mockup'
}

export interface VisitingCardItem {
  id: string
  title: string
  subtitle: string
  src: string
  fallback: string
  caption: string
  aspect: string
}

export interface ColorToken {
  name: string
  hex: string
  role: string
  description: string
  textColor: string
  border?: string
}

export const wallsWindowSpacesBrochurePages: BrochurePage[] = [
  {
    pageNumber: 1,
    title: 'Brand Cover',
    subtitle: 'Interiors That Inspire',
    src: '/images/projects/walls-window-spaces/brochure/page-01.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445191/1.png',
    description:
      'Metallic gold debossed typography on deep obsidian linen stock introducing the Walls & Window Spaces design portfolio.',
  },
  {
    pageNumber: 2,
    title: 'Brand Introduction',
    subtitle: 'Architectural Vision & Craftsmanship',
    src: '/images/projects/walls-window-spaces/brochure/page-02.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445192/2.png',
    description:
      'Editorial narrative defining the brand’s core philosophy: transforming living and commercial spaces through bespoke interior finishes.',
  },
  {
    pageNumber: 3,
    title: 'Curtains & Drapery',
    subtitle: 'Tailored Fabrics & Sheer Elegance',
    src: '/images/projects/walls-window-spaces/brochure/page-03.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445194/3.png',
    description:
      'High-end textiles, motorized curtain tracks, acoustic drapes, and premium imported linens curated for luxury residences.',
  },
  {
    pageNumber: 4,
    title: 'Window Blinds Collection',
    subtitle: 'Motorized, Roller & Wooden Blinds',
    src: '/images/projects/walls-window-spaces/brochure/page-04.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445195/4.png',
    description:
      'Architectural light control solutions including motorized Venetian, custom wooden slats, honeycomb cellular, and dual-zebra shades.',
  },
  {
    pageNumber: 5,
    title: 'Wallpapers & Panels',
    subtitle: 'Textured Surfaces & 3D Feature Walls',
    src: '/images/projects/walls-window-spaces/brochure/page-05.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445197/5.png',
    description:
      'Designer wallcoverings, acoustical fluted wood panels, geometric brass inlays, and bespoke artistic murals.',
  },
  {
    pageNumber: 6,
    title: 'Flooring & Ceilings',
    subtitle: 'Hardwood, Vinyl & Architectural Finishes',
    src: '/images/projects/walls-window-spaces/brochure/page-06.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445198/6.png',
    description:
      'Engineered European oak, luxury vinyl tiles, seamless stretch ceilings, and recessed architectural illumination coves.',
  },
  {
    pageNumber: 7,
    title: 'Turnkey Interior Projects',
    subtitle: 'Residential & Commercial Solutions',
    src: '/images/projects/walls-window-spaces/brochure/page-07.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445201/7.png',
    description:
      'End-to-end interior execution for penthouses, boutique hospitality suites, flagship retail outlets, and corporate headquarters.',
  },
  {
    pageNumber: 8,
    title: 'Showroom & Studio',
    subtitle: 'Consultations & Client Inquiries',
    src: '/images/projects/walls-window-spaces/brochure/page-08.png',
    fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445202/8.png',
    description:
      'Showroom location, direct design consultation contact information, QR booking portal, and brand social credentials.',
  },
]

export const wallsWindowSpacesLogoShowcase: LogoShowcaseItem[] = [
  {
    id: 'original-master',
    title: 'Master Emblem & Logotype',
    category: 'PRIMARY BRAND MARK',
    src: '/images/projects/walls-window-spaces/logo/original-logo.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444997/Walls_and_window_spaces_logo_13.png',
    caption:
      'The original master brand identity featuring the architectural window arch with cascading drapery curves and classical high-contrast serif logotype.',
    theme: 'dark',
  },
  {
    id: 'logo-dark-palette',
    title: 'Obsidian & Gold Application',
    category: 'DARK MODE IDENTITY',
    src: '/images/projects/walls-window-spaces/logo/logo-dark.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444997/Walls_and_window_spaces_logo_13.png',
    caption:
      'High-contrast luxury presentation calibrated for premium black stationery, digital presentations, and dark showroom environments.',
    theme: 'dark',
  },
  {
    id: 'logo-light-palette',
    title: 'Ivory & Rich Black Edition',
    category: 'LIGHT STATIONERY',
    src: '/images/projects/walls-window-spaces/logo/logo-light.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444997/Walls_and_window_spaces_logo_13.png',
    caption:
      'Refined warm ivory (#FAF7EF) letterhead and corporate invoice treatment engineered for crisp contrast and official print documents.',
    theme: 'light',
  },
  {
    id: 'metallic-gold-mockup',
    title: 'Metallic Gold Emboss Mockup',
    category: 'FOIL STAMP SPECIFICATION',
    src: '/images/projects/walls-window-spaces/logo/logo-gold-mockup.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444976/Luxurious_Gold_Interior_Branding_Collection.png',
    caption:
      'Hot-stamped metallic gold foil simulation on heavy cardstock demonstrating realistic specular highlights and tactile luxury.',
    theme: 'mockup',
  },
  {
    id: 'feature-wall-mockup',
    title: 'Architectural Feature Wall',
    category: 'ENVIRONMENTAL BRANDING',
    src: '/images/projects/walls-window-spaces/logo/logo-feature-wall.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444991/Luxury_Gold_Interiors_Showroom_Entrance.png',
    caption:
      'Three-dimensional backlit brass emblem mounted on dark fluted wall paneling inside the flagship interior design showroom.',
    theme: 'mockup',
  },
  {
    id: 'storefront-signage',
    title: 'Luxury Showroom Storefront',
    category: 'EXTERIOR SIGNAGE',
    src: '/images/projects/walls-window-spaces/logo/logo-storefront.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444991/Luxury_Gold_Interiors_Showroom_Entrance.png',
    caption:
      'Exterior architectural entrance featuring gold-trimmed facade illumination and high-visibility prestige street branding.',
    theme: 'mockup',
  },
]

export const wallsWindowSpacesVisitingCards: VisitingCardItem[] = [
  {
    id: 'card-front',
    title: 'Visiting Card — Front Face',
    subtitle: 'Brand Emblem & Gold Dielines',
    src: '/images/projects/walls-window-spaces/visiting-card/front.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445331/singhpunit263_gmail.com_1.png',
    caption:
      'Obsidian matte 450 GSM card face featuring the centered gold window emblem, tagline, and architectural perimeter border.',
    aspect: 'aspect-[3281/1875]',
  },
  {
    id: 'card-back',
    title: 'Visiting Card — Contact Face',
    subtitle: 'Direct Information Architecture',
    src: '/images/projects/walls-window-spaces/visiting-card/back.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445328/singhpunit263_gmail.com_2.png',
    caption:
      'Complete executive contact details, services list, showroom address, and high-precision typographic hierarchy.',
    aspect: 'aspect-[3281/1875]',
  },
  {
    id: 'card-mockup-3d',
    title: '3D Angled Business Card Mockup',
    subtitle: 'Physical Print Experience',
    src: '/images/projects/walls-window-spaces/visiting-card/mockup.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445339/Luxury_Black-and-Gold_Business_Cards.png',
    caption:
      'Realistic perspective studio render showing metallic gold foil reflections, matte card texture, and premium edge bevels.',
    aspect: 'aspect-[3/2]',
  },
  {
    id: 'card-stacked',
    title: 'Stacked Cards & Edge Gilded Finish',
    subtitle: 'Weight & Tactile Density',
    src: '/images/projects/walls-window-spaces/visiting-card/stacked.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445339/Luxury_Black-and-Gold_Business_Cards.png',
    caption:
      'Displaying the substantial bulk of 450 GSM cotton duplex stock with gold foil edge gilding.',
    aspect: 'aspect-[3/2]',
  },
  {
    id: 'card-macro',
    title: 'Macro Typographic & Foil Detail',
    subtitle: 'Micro-Registration Precision',
    src: '/images/projects/walls-window-spaces/visiting-card/macro-gold.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445331/singhpunit263_gmail.com_1.png',
    caption:
      'Macro inspection of clean vector hair-lines, serif serifs, and sharp hot-foil stamp stamping without bleed.',
    aspect: 'aspect-[16/9]',
  },
]

export const wallsWindowSpacesColorTokens: ColorToken[] = [
  {
    name: 'Obsidian Black',
    hex: '#0B0F10',
    role: 'Primary Background & Foundation',
    description: 'Ultra-deep mineral black giving grounding weight, privacy, and theatrical luxury.',
    textColor: 'text-white',
    border: 'border-white/20',
  },
  {
    name: 'Imperial Metallic Gold',
    hex: '#C5A059',
    role: 'Primary Emblem & Foil Accent',
    description: 'Warm reflective metallic tone extracted directly from the master brand emblem.',
    textColor: 'text-black',
  },
  {
    name: 'Champagne Luster',
    hex: '#E5C07B',
    role: 'Secondary Highlight & Glow',
    description: 'Subtle warm light gold for hover interactions, active badges, and typography highlights.',
    textColor: 'text-black',
  },
  {
    name: 'Ivory Linen',
    hex: '#FAF7EF',
    role: 'Light Stationery & Editorial Paper',
    description: 'Soft organic natural paper substrate providing tactile warmth and readability.',
    textColor: 'text-black',
    border: 'border-black/20',
  },
  {
    name: 'Warm Architectural Stone',
    hex: '#78716C',
    role: 'Secondary Typography & Grids',
    description: 'Neutral warm gray for structural lines, captions, and architectural specifications.',
    textColor: 'text-white',
  },
]

export const wallsWindowSpacesProjectData: ProjectDetailData = {
  id: 'walls-window-spaces',
  title: 'Walls & Window Spaces',
  eyebrow: 'BRANDING • GRAPHIC DESIGN • VISUAL IDENTITY',
  tagline: 'Interiors That Inspire',
  description:
    'A complete luxury brand identity and marketing collateral system developed for an interior solutions firm. Encompassing the original architectural window emblem, luxury gold foil visiting cards, promotional pamphlets, showroom signage, and an interactive 8-page brand brochure.',
  badges: [
    'COMPLETE BRAND IDENTITY',
    'ORIGINAL LOGO DESIGN',
    'LUXURY GOLD FOIL',
    '8-PAGE BRAND BROCHURE',
    'INTERIOR MARKETING COLLATERAL',
  ],
  liveUrl: undefined,
  inquireUrl:
    'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20am%20interested%20in%20a%20luxury%20brand%20identity%20and%20collateral%20design%20project%20like%20Walls%20%26%20Window%20Spaces',
  role: 'Brand Identity Designer, Print Architect & Collateral Specialist',
  category: 'Branding & Graphic Design',
  status: 'Delivered Brand Suite',
  timeline: 'Complete Brand Overhaul & Multi-Asset Delivery',
  floatingCard: {
    tag: 'BRAND SYSTEM',
    title: 'Full Identity Suite',
    subtitle: 'Logo, Cards, Pamphlets & 8-Page Brochure',
    tagBg: '#C5A059',
    accentBorder: '#C5A059',
  },
  topBadge: {
    label: '✨ SIGNATURE BRANDING CASE STUDY',
  },
  heroImage: {
    src: '/images/projects/walls-window-spaces/mockups/branding-collection.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444976/Luxurious_Gold_Interior_Branding_Collection.png',
    alt: 'Walls & Window Spaces Luxury Gold Branding Collection',
    caption:
      'Comprehensive brand identity showcase featuring metallic gold foil applications, 3D architectural signage, luxury stationery, and promotional catalog.',
  },
  mockupScreens: [
    {
      id: 'branding-suite',
      label: 'Brand Identity Suite',
      src: '/images/projects/walls-window-spaces/mockups/branding-collection.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444976/Luxurious_Gold_Interior_Branding_Collection.png',
      caption: 'Full multi-collateral brand presentation in gold and obsidian.',
    },
    {
      id: 'storefront-entrance',
      label: 'Showroom Storefront',
      src: '/images/projects/walls-window-spaces/mockups/storefront.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444991/Luxury_Gold_Interiors_Showroom_Entrance.png',
      caption: '3D brass illuminated storefront signage and architectural facade.',
    },
    {
      id: 'visiting-cards-mockup',
      label: 'Luxury Business Cards',
      src: '/images/projects/walls-window-spaces/visiting-card/mockup.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445339/Luxury_Black-and-Gold_Business_Cards.png',
      caption: '450 GSM dual-sided cardstock with metallic gold foil stamping.',
    },
    {
      id: 'brochure-spread',
      label: '8-Page Editorial Brochure',
      src: '/images/projects/walls-window-spaces/slides/slide_04_brochure_cover.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445191/1.png',
      caption: 'Comprehensive physical product catalog and interior solutions reader.',
    },
  ],
  overview: {
    heading: 'Architectural Elegance Meets Precision Branding',
    subheading:
      'Walls & Window Spaces required a sophisticated, high-end identity that communicates authority, bespoke craftsmanship, and turnkey luxury across every customer touchpoint.',
    cards: [
      {
        number: '01',
        title: 'Original Logo & Emblem',
        description:
          'Constructed a timeless architectural window arch with flowing drapery vectors, paired with classical high-contrast serif typography and balanced letter-spacing.',
        color: '#FED7AA',
        shadow: '#EA580C',
      },
      {
        number: '02',
        title: 'Color & Material Palette',
        description:
          'Standardized a refined palette of Obsidian Black (#0B0F10) and Metallic Gold (#C5A059), supported by Ivory Linen and warm architectural stone accents.',
        color: '#DDD6FE',
        shadow: '#7C3AED',
      },
      {
        number: '03',
        title: 'Executive Visiting Cards',
        description:
          'Engineered dual-sided business cards with millimeter-exact alignment, preserving all real contact details, services, and hot-stamped foil tolerances.',
        color: '#BAE6FD',
        shadow: '#0284C7',
      },
      {
        number: '04',
        title: '8-Page Catalog & Pamphlet',
        description:
          'Authored layout grids, photography direction, and typographic hierarchy for promotional pamphlets and the flagship 8-page product catalog.',
        color: '#FEF08A',
        shadow: '#CA8A04',
      },
    ],
  },
  features: {
    heading: 'Comprehensive Brand Ecosystem & Design Deliverables',
    subheading:
      'Every touchpoint was art-directed and delivered with industrial prepress rigor and architectural prestige.',
    items: [
      {
        id: 'feature-01',
        title: 'Original Window & Curtain Emblem',
        description:
          'Architectural vector geometry combining the symmetry of classical window portals with the soft fluidity of luxury curtains and blinds.',
        iconName: 'Sparkles',
        badge: 'ICONOGRAPHY',
        previewImage: '/images/projects/walls-window-spaces/logo/original-logo.png',
      },
      {
        id: 'feature-02',
        title: 'Metallic Gold Foil Stamp Specs',
        description:
          'Precise spot-color vector separation and 100% registration masks calibrated for metallic gold foil stamping on heavy obsidian cardstock.',
        iconName: 'Shield',
        badge: 'PRINT SPECS',
        previewImage: '/images/projects/walls-window-spaces/logo/logo-gold-mockup.png',
      },
      {
        id: 'feature-03',
        title: 'Dual-Sided Executive Visiting Cards',
        description:
          'Art-directed front and back layouts featuring complete authentic executive contact credentials, service lists, and bleed clearances.',
        iconName: 'CreditCard',
        badge: 'STATIONERY',
        previewImage: '/images/projects/walls-window-spaces/visiting-card/mockup.png',
      },
      {
        id: 'feature-04',
        title: 'Interactive 8-Page Brand Brochure',
        description:
          'A realistic digital 3D book-spread reader showcasing all 8 catalog pages with natural shadows, automatic page turning, and mobile touch gestures.',
        iconName: 'BookOpen',
        badge: 'DIGITAL READER',
        previewImage: '/images/projects/walls-window-spaces/brochure/page-01.png',
      },
      {
        id: 'feature-05',
        title: 'Curtains & Blinds Promotional Pamphlet',
        description:
          'Editorial flyer design with clean product matrices, feature bullets, and high-impact interior photography for customer distribution.',
        iconName: 'FileText',
        badge: 'PAMPHLET',
        previewImage: '/images/projects/walls-window-spaces/pamphlets/curtains-blinds.png',
      },
      {
        id: 'feature-06',
        title: 'Showroom Facade & Signage Design',
        description:
          'Exterior 3D architectural signage guidelines, backlit dimensional letter specifications, and street-level luxury brand visibility.',
        iconName: 'Building',
        badge: 'ENVIRONMENTAL',
        previewImage: '/images/projects/walls-window-spaces/mockups/storefront.png',
      },
      {
        id: 'feature-07',
        title: 'Interior Wall Accent Mockups',
        description:
          'Environmental graphics placed on fluted acoustic panels, marble reception counters, and consultation suites.',
        iconName: 'Layers',
        badge: 'INTERIOR 3D',
        previewImage: '/images/projects/walls-window-spaces/logo/logo-feature-wall.png',
      },
      {
        id: 'feature-08',
        title: 'Packaging & Retail Touchpoints',
        description:
          'Custom fabric sample tags, luxury shopping bag dielines, and branded ribbon specifications for interior client sample deliveries.',
        iconName: 'Package',
        badge: 'PACKAGING',
        previewImage: '/images/projects/walls-window-spaces/mockups/branding-collection.png',
      },
      {
        id: 'feature-09',
        title: 'Press-Ready CMYK Prepress Files',
        description:
          'High-resolution PDF/X-1a masters with embedded fonts, 3mm bleed margins, crop marks, and CMYK process color calibration.',
        iconName: 'Printer',
        badge: 'PREPRESS',
        previewImage: '/images/projects/walls-window-spaces/brochure/page-02.png',
      },
    ],
  },
  gallery: {
    heading: 'Brand Mockup & Collateral Gallery',
    subheading:
      'Explore the multi-dimensional implementation across print, spatial signage, stationery, and editorial layouts.',
    items: [
      {
        id: 'gallery-01',
        title: 'Master Branding Collection',
        caption:
          'Complete brand collateral ensemble displaying visiting cards, promotional catalog, packaging, and gold foil finishes.',
        src: '/images/projects/walls-window-spaces/mockups/branding-collection.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444976/Luxurious_Gold_Interior_Branding_Collection.png',
        alt: 'Walls and Window Spaces Branding Collection',
        type: 'desktop',
      },
      {
        id: 'gallery-02',
        title: 'Flagship Showroom Entrance',
        caption:
          'Exterior architectural signage with illuminated 3D gold lettering and floor-to-ceiling glass display glazing.',
        src: '/images/projects/walls-window-spaces/mockups/storefront.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444991/Luxury_Gold_Interiors_Showroom_Entrance.png',
        alt: 'Showroom Storefront Signage',
        type: 'desktop',
      },
      {
        id: 'gallery-03',
        title: 'Luxury Business Cards Suite',
        caption:
          'Angled perspective render of the 450 GSM cards highlighting the metallic gold foil stamp and deep obsidian matte finish.',
        src: '/images/projects/walls-window-spaces/visiting-card/mockup.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445339/Luxury_Black-and-Gold_Business_Cards.png',
        alt: 'Luxury Business Cards Mockup',
        type: 'desktop',
      },
      {
        id: 'gallery-04',
        title: 'Curtains & Blinds Promotional Pamphlet',
        caption:
          'Full-page marketing pamphlet showcasing premium drapery, motorized blinds, and client call-to-actions.',
        src: '/images/projects/walls-window-spaces/pamphlets/curtains-blinds.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445295/Curtains_Blinds_3.png',
        alt: 'Curtains and Blinds Pamphlet Design',
        type: 'feature',
      },
      {
        id: 'gallery-05',
        title: 'Editorial Brochure — Cover & Introduction',
        caption:
          'Opening two-page spread establishing the brand tone of voice and architectural interior credentials.',
        src: '/images/projects/walls-window-spaces/slides/slide_04_brochure_cover.png',
        cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445191/1.png',
        alt: 'Brochure Spread Preview',
        type: 'desktop',
      },
      {
        id: 'gallery-06',
        title: 'Master Vector Logo Emblem',
        caption:
          'The original high-resolution logo artwork featuring the window arch and flowing drapery curvature.',
        src: '/images/projects/walls-window-spaces/logo/original-logo.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444997/Walls_and_window_spaces_logo_13.png',
        alt: 'Original Logo Artwork',
        type: 'feature',
      },
    ],
  },
  techStack: {
    heading: 'Design & Production Tools',
    subheading:
      'Professional creative software, vector design tools, and industrial prepress workflows used across the brand rollout.',
    technologies: [
      {
        name: 'Adobe Illustrator',
        role: 'Master Vector Construction & Emblem Geometry',
        iconName: 'PenTool',
        badge: 'VECTOR MASTER',
        category: 'Identity Design',
      },
      {
        name: 'Adobe InDesign',
        role: '8-Page Editorial Layout & Typography Grid',
        iconName: 'Layout',
        badge: 'EDITORIAL PRINT',
        category: 'Catalog Architecture',
      },
      {
        name: 'Adobe Photoshop',
        role: '3D Photorealistic Mockups & Lighting Studio',
        iconName: 'Image',
        badge: 'MOCKUP STUDIO',
        category: 'Visualization',
      },
      {
        name: 'Prepress CMYK & Spot Foil',
        role: 'Print Separations & Foil Registration Masks',
        iconName: 'Printer',
        badge: 'PRESS READY',
        category: 'Production',
      },
    ],
  },
  process: {
    heading: 'Brand Identity & Collateral Design Process',
    subheading:
      'A structured 4-phase creative methodology from initial brand discovery to print delivery.',
    stages: [
      {
        step: '01',
        title: 'Discovery & Architectural Positioning',
        description:
          'Analyzed luxury interior market benchmarks, identifying the need for an identity that fuses classical architectural geometry with bespoke textile craftsmanship.',
        deliverables: [
          'Brand positioning matrix',
          'Moodboard & material study',
          'Color strategy (Black & Gold)',
        ],
      },
      {
        step: '02',
        title: 'Logo Construction & Typography',
        description:
          'Drafted multiple emblem concepts before refining the signature window arch and drapery symbol. Calibrated serif typography and kerning for maximum prestige.',
        deliverables: [
          'Original vector emblem',
          'High-contrast serif logotype',
          'Dark & light mode lockups',
        ],
      },
      {
        step: '03',
        title: 'Stationery & Visiting Card Architecture',
        description:
          'Constructed dual-sided business cards with millimeter precision. Specified 450 GSM matte cardstock, gold foil hot-stamping, and verified all contact information.',
        deliverables: [
          'Front & back card artwork',
          'Spot foil mask layers',
          '3D photorealistic mockups',
        ],
      },
      {
        step: '04',
        title: 'Editorial Brochure & Promotional Collateral',
        description:
          'Organized all 8 catalog pages and promotional pamphlets. Created layout grids for curtains, blinds, wallpapers, and turnkey interior services.',
        deliverables: [
          '8-page luxury catalog',
          'Promotional marketing pamphlet',
          'Press-ready PDF/X-1a files',
          'Digital brochure reader assets',
        ],
      },
    ],
  },
  details: {
    projectName: 'Walls & Window Spaces Brand Identity',
    projectType: 'Luxury Interior Brand Identity & Collateral Suite',
    category: 'Branding & Graphic Design',
    status: 'Complete & Delivered to Client',
    role: 'Creative Director, Logo Designer & Print Architect',
    technologies: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop', 'CMYK Prepress', 'Gold Foil'],
    inquireUrl:
      'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20am%20interested%20in%20a%20luxury%20brand%20identity%20and%20collateral%20design%20project%20like%20Walls%20%26%20Window%20Spaces',
  },
  cta: {
    heading: 'Looking to Elevate Your Brand With a Luxury Identity?',
    description:
      'Whether launching a high-end interior studio, architectural practice, or premium product line, I design bespoke logos, tactile stationery, and editorial brochures that captivate high-value clientele.',
    primaryButtonText: 'Discuss Your Branding Project',
    secondaryButtonText: 'View All Portfolio Projects',
  },
}
