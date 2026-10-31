import type { ProjectDetailData } from '../../types/projectDetail'

export const weddingInvitationProjectData: ProjectDetailData = {
  id: 'wedding-invitation',
  title: 'Heritage Wedding Invitation',
  eyebrow: 'FEATURED LUXURY PRINT & INVITATION SUITE / 04',
  tagline: 'Sacred traditions. Royal print craft.',
  description:
    'A bespoke luxury Hindu wedding invitation suite combining sacred Vedic calligraphy, intricate royal mandalas, 24K gold foil stamping, and handcrafted 400 GSM cotton deckle paper.',
  badges: ['WEDDING INVITATIONS', 'PRINT ARCHITECTURE', 'HOT FOIL STAMPING', 'CORELDRAW + VECTOR MOTIFS'],
  liveUrl: '',
  inquireUrl:
    'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20would%20like%20to%20commission%20a%20luxury%20wedding%20invitation%20suite',
  role: 'Print Architect, Calligrapher & Luxury Packaging Designer',
  category: 'Graphic Design & Print Architecture',
  status: 'Delivered • Bespoke Commission',
  timeline: '2 Months • 2026',

  mockupScreens: [
    {
      id: 'main-design',
      title: 'Main Wedding Invitation Showcase',
      url: 'invitations.adarsh.design/main-suite',
      src: '/projects/wedding-invitation/slide_01_main_design.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442829/Wedding_Invitation_3.png',
      tag: 'MAIN SUITE',
      accentColor: '#D97706',
    },
    {
      id: 'hindu-collection',
      title: 'Elegant Hindu Wedding Collection',
      url: 'invitations.adarsh.design/hindu-collection',
      src: '/projects/wedding-invitation/slide_02_hindu_collection.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442662/Elegant_Hindu_Wedding_Invitation_Collection.png',
      tag: 'ROYAL COLLECTION',
      accentColor: '#DC2626',
    },
    {
      id: 'traditional-showcase',
      title: 'Traditional Indian Wedding Showcase',
      url: 'invitations.adarsh.design/traditional-craft',
      src: '/projects/wedding-invitation/slide_03_traditional_showcase.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442662/Traditional_Indian_Wedding_Invitation_Showcase.png',
      tag: 'TRADITIONAL GOLD',
      accentColor: '#F59E0B',
    },
    {
      id: 'royal-suite',
      title: 'Royal Gatefold Card Architecture',
      url: 'invitations.adarsh.design/gatefold-card',
      src: '/projects/wedding-invitation/slide_04_invitation_royal_suite.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442884/Wedding_Invitation.png',
      tag: 'GATEFOLD SUITE',
      accentColor: '#8B5CF6',
    },
    {
      id: 'foil-detail',
      title: '24K Foil Stamping & Emboss Detail',
      url: 'invitations.adarsh.design/foil-emboss',
      src: '/projects/wedding-invitation/slide_05_invitation_detail.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442881/Wedding_Invitation_2.png',
      tag: 'EMBOSS RELIEF',
      accentColor: '#10B981',
    },
  ],

  floatingCard: {
    tag: 'ROYAL CRAFT',
    title: '24K Gold Hot Foil',
    subtitle: 'Sculpted brass embossing dies on 400 GSM handmade deckle paper.',
    tagBg: '#FEF08A',
  },

  topBadge: {
    label: 'SACRED VEDIC SUITE',
  },

  heroImage: {
    src: '/projects/wedding-invitation/slide_01_main_design.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442829/Wedding_Invitation_3.png',
    alt: 'Luxury Hindu Wedding Invitation Main Design Showcase',
    caption:
      'Main design showcase featuring royal Vedic calligraphy, gold foil mandalas, and multi-ceremony inserts.',
  },

  overview: {
    heading: 'More than an invitation card.',
    subheading:
      'Crafting the sacred herald of a lifelong union by combining centuries-old Vedic symbolism with modern luxury printmaking and typography.',
    cards: [
      {
        number: '01',
        title: 'THE VISION',
        description:
          'Modern Indian weddings require invitations that feel divine and steeped in ancestral sanctity, while offering the tactile distinction of high-end international stationery.',
        color: 'bg-pastel-peach',
        shadow: '#FFD6AD',
      },
      {
        number: '02',
        title: 'THE ROYAL CRAFT',
        description:
          'Handcrafted with 400 GSM textured cotton khadi board, multi-level embossed Ganesha seals, Kurz 24K hot foil stamping, and laser-cut gatefold enclosures.',
        color: 'bg-pastel-butter',
        shadow: '#FEF08A',
      },
      {
        number: '03',
        title: 'THE UNBOXING',
        description:
          'A modular ceremonial journey featuring individual color-coded inserts for Haldi, Mehendi, Sangeet, and Vivah, bundled in a custom wax-sealed velvet sleeve.',
        color: 'bg-pastel-mint',
        shadow: '#74DEB6',
      },
    ],
  },

  features: {
    heading: 'Sacred Artistry & Print Architecture',
    subheading:
      'Every curve, Sanskrit shloka, and fold dieline was architected to create an unforgettable, tactile unboxing experience for wedding guests.',
    items: [
      {
        id: 'typography',
        title: 'Vedic Calligraphy & Sanskrit Shlokas',
        description:
          'Handcrafted sacred Sanskrit shlokas rendered in refined Devanagari calligraphy, paired with high-contrast editorial serifs for guest names and venue details.',
        iconName: 'BookOpenCheck',
        badge: 'Sacred Type',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/wedding-invitation/features/feature_01_typography.png',
      },
      {
        id: 'motif',
        title: 'Mandala & Paisley Motif Geometry',
        description:
          'Symmetrical circular mandalas, auspicious peacock plumes, and traditional Indian floral borders engineered with mathematically pure vector curves.',
        iconName: 'Sparkles',
        badge: 'Royal Motifs',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/wedding-invitation/features/feature_02_motif.png',
      },
      {
        id: 'foil',
        title: '24K Metallic Gold Foil & Emboss',
        description:
          'Multi-level brass die stamping producing a brilliant reflective gold shine with 0.5mm tactile relief contouring the sacred wedding emblem.',
        iconName: 'Flame',
        badge: 'Foil Craft',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/wedding-invitation/features/feature_03_foil.png',
      },
      {
        id: 'paper',
        title: '400 GSM Cotton Khadi & Deckle Edge',
        description:
          'Artisanal tree-free paper hand-pulled from cotton fiber, featuring genuine feathered deckle edges and an opulent velvety matte handfeel.',
        iconName: 'Award',
        badge: 'Substrate',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/wedding-invitation/features/feature_04_paper.png',
      },
      {
        id: 'inserts',
        title: 'Multi-Event Ceremony Inserts',
        description:
          'Distinct color-coded invitation cards for Haldi, Mehendi, Sangeet, Wedding Ceremony, and Reception, creating a coordinated ceremonial suite.',
        iconName: 'CalendarDays',
        badge: 'Multi-Card',
        accentBg: 'bg-pastel-lavender',
        previewImage: '/projects/wedding-invitation/features/feature_05_inserts.png',
      },
      {
        id: 'envelope',
        title: 'Wax Seal & Laser-Cut Pockets',
        description:
          'Opulent metallic wax seal stamps bearing the couple’s monogram, securing laser-cut gatefold envelopes lined with custom floral patterns.',
        iconName: 'ShieldCheck',
        badge: 'Enclosure',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/wedding-invitation/features/feature_06_envelope.png',
      },
      {
        id: 'palette',
        title: 'Auspicious Royal Color Palette',
        description:
          'Rich Sindoor Crimson, Sacred Marigold Ochre, Metallic Temple Gold, and Antique Ivory balanced for timeless wedding celebration aesthetics.',
        iconName: 'Palette',
        badge: 'Color Harmony',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/wedding-invitation/features/feature_07_palette.png',
      },
      {
        id: 'dieline',
        title: 'Gatefold Dielines & Structural Boxes',
        description:
          'Rigorous packaging dielines designed for zero cracking along score folds, with integrated magnetic closures and silk pull tabs.',
        iconName: 'FileDown',
        badge: 'Packaging Dielines',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/wedding-invitation/features/feature_08_dieline.png',
      },
      {
        id: 'digital',
        title: 'Digital E-Invites & Vector Masters',
        description:
          'Flawless digital adaptations including high-resolution PDF invites, WhatsApp video story cards, and interactive RSVP micro-websites.',
        iconName: 'CheckCircle2',
        badge: 'Digital Suite',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/wedding-invitation/features/feature_09_digital.png',
      },
    ],
  },

  gallery: {
    heading: 'Inside the Invitation Suite',
    subheading:
      'A closer look at the bespoke Hindu wedding collection, intricate gold foil craftsmanship, and multi-ceremony cards.',
    items: [
      {
        id: 'screen-1',
        title: 'Main Wedding Invitation Showcase',
        caption:
          'The primary hero showcase illustrating the complete royal suite, Sanskrit shloka typography, and gold foil borders.',
        src: '/projects/wedding-invitation/slide_01_main_design.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442829/Wedding_Invitation_3.png',
        alt: 'Main Luxury Hindu Wedding Invitation Design Showcase',
        type: 'desktop',
      },
      {
        id: 'screen-2',
        title: 'Elegant Hindu Wedding Collection',
        caption:
          'Multi-format wedding invitation collection displaying ceremony cards, custom envelope liners, and wax seal stamps.',
        src: '/projects/wedding-invitation/slide_02_hindu_collection.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442662/Elegant_Hindu_Wedding_Invitation_Collection.png',
        alt: 'Elegant Hindu Wedding Invitation Collection',
        type: 'desktop',
      },
      {
        id: 'screen-3',
        title: 'Traditional Indian Wedding Showcase',
        caption:
          'Classic Indian wedding aesthetics featuring auspicious temple gold embellishments and deep crimson velvet textures.',
        src: '/projects/wedding-invitation/slide_03_traditional_showcase.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442662/Traditional_Indian_Wedding_Invitation_Showcase.png',
        alt: 'Traditional Indian Wedding Invitation Showcase',
        type: 'desktop',
      },
      {
        id: 'screen-4',
        title: 'Royal Gatefold Card Architecture',
        caption:
          'Architectural gatefold card presentation with custom monogram crest and laser-cut paisley frame.',
        src: '/projects/wedding-invitation/slide_04_invitation_royal_suite.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442884/Wedding_Invitation.png',
        alt: 'Royal Wedding Invitation Gatefold Card',
        type: 'desktop',
      },
      {
        id: 'screen-5',
        title: 'Gold Foil Stamping & Tactile Deboss',
        caption:
          'Close-up view of 24K hot foil stamping and sculptural relief deboss on raw cotton deckle paper.',
        src: '/projects/wedding-invitation/slide_05_invitation_detail.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442881/Wedding_Invitation_2.png',
        alt: 'Wedding Invitation Gold Foil Detail',
        type: 'desktop',
      },
    ],
  },

  techStack: {
    heading: 'Artisanal Craft & Vector Architecture',
    subheading:
      'Combining industry-grade vector drafting with traditional artisanal printmaking techniques to produce museum-quality wedding stationery.',
    technologies: [
      {
        name: 'CorelDRAW Graphics Suite',
        role: 'Master vector drafting, sacred mandala geometry & complex fold dielines',
        iconName: 'Cpu',
        badge: 'Vector Engine',
        category: 'Vector Drafting',
      },
      {
        name: 'Adobe Illustrator',
        role: 'Calligraphic stroke styling, Pantone colorway separations & prepress proofs',
        iconName: 'Layers',
        badge: 'Design Suite',
        category: 'Prepress',
      },
      {
        name: 'Adobe Photoshop',
        role: 'Photorealistic paper texture synthesis & metallic foil lighting simulation',
        iconName: 'Palette',
        badge: 'Visualization',
        category: 'Renders',
      },
      {
        name: 'Hot Foil Stamping Tooling',
        role: 'Deep-etched CNC brass dies engineered for crisp, razor-sharp foil transfer',
        iconName: 'Flame',
        badge: 'Embellishment',
        category: 'Print Finishing',
      },
      {
        name: 'Handcrafted Khadi Paper',
        role: '400 GSM tree-free cotton rag cardstock with organic deckled edges',
        iconName: 'Atom',
        badge: 'Substrate',
        category: 'Paper Craft',
      },
      {
        name: 'Bespoke Packaging Dielines',
        role: 'Structural packaging engineering for rigid invitation gift boxes and sleeves',
        iconName: 'FileCode2',
        badge: 'Packaging',
        category: 'Structural Design',
      },
    ],
  },

  process: {
    heading: 'The Sacred Creation Journey',
    subheading:
      'From consulting with the family on auspicious dates and Sanskrit verses to delivering hand-assembled luxury invitation boxes.',
    stages: [
      {
        step: '01',
        title: 'Family Consultation & Vedic Shlokas',
        description:
          'Conducted in-depth creative discovery with the couple to understand ceremony timelines, auspicious motifs, and curated sacred Sanskrit verses for the invocation.',
        deliverables: ['Creative Brief', 'Shloka Calligraphy Drafts', 'Palette Moodboard'],
      },
      {
        step: '02',
        title: 'Mandala Geometry & Monogram Design',
        description:
          'Engineered custom vector mandalas, floral border bands, and a bespoke couple monogram crest ready for wax sealing and foil stamping.',
        deliverables: ['Couple Monogram Crest', 'Vector Mandalas', 'Gatefold Layouts'],
      },
      {
        step: '03',
        title: 'Substrate Selection & Brass Dies',
        description:
          'Selected 400 GSM handcrafted deckle cotton paper, fabricated precision CNC brass hot-foil dies, and tested foil transfer onto textured paper stocks.',
        deliverables: ['Paper Swatch Dossier', 'Brass Embossing Tooling', 'Foil Proof Samples'],
      },
      {
        step: '04',
        title: 'Artisanal Pressing & Wax Assembly',
        description:
          'Executed multi-color offset and foil stamping, hand-assembled multi-event inserts into laser-cut pockets, and sealed each envelope with custom metallic wax.',
        deliverables: ['Final Invitation Suites', 'Digital E-Invites', 'Commemorative Keepsake'],
      },
    ],
  },

  details: {
    projectName: 'Heritage Wedding Invitation Suite',
    projectType: 'Bespoke Luxury Wedding Stationery & Packaging',
    category: 'Graphic Design & Print Architecture',
    status: 'Delivered • Bespoke Royal Commission',
    role: 'Lead Print Architect & Luxury Packaging Designer',
    technologies: [
      'CorelDRAW Graphics Suite',
      'Adobe Illustrator',
      'Adobe InDesign',
      'Adobe Photoshop',
      'Hot Foil Stamping Dies',
      'Laser-Cut Packaging Dielines',
    ],
    inquireUrl:
      'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20would%20like%20to%20commission%20a%20luxury%20wedding%20invitation%20suite',
  },

  cta: {
    heading: 'Commence your celebration with royal distinction.',
    description:
      'Looking for a bespoke luxury wedding invitation suite, sacred Sanskrit calligraphy, or custom wax-sealed stationery? Let’s create an heirloom for your special day.',
    primaryButtonText: 'COMMISSION AN INVITATION SUITE ↗',
    secondaryButtonText: 'BACK TO ALL PROJECTS',
  },
}
