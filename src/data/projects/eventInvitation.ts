import type { ProjectDetailData } from '../../types/projectDetail'

export const eventInvitationProjectData: ProjectDetailData = {
  id: 'event-invitation',
  title: 'Maha Shivratri Invitation Card',
  eyebrow: 'FEATURED SACRED EVENT & FESTIVAL PRINT / 05',
  tagline: 'Divine celebrations. Auspicious print craft.',
  description:
    'A bespoke devotional festival invitation card designed for Maha Shivratri celebrations, featuring intricate Lord Shiva iconography, sacred Devanagari calligraphy, metallic gold foil highlights, and press-ready dielines.',
  badges: ['EVENT INVITATION', 'SACRED FESTIVAL', 'GOLD FOIL ACCENTS', 'CORELDRAW + DEVANAGARI'],
  liveUrl: '',
  inquireUrl:
    'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20an%20event%20invitation%20card%20project',
  role: 'Print Architect & Devotional Graphic Designer',
  category: 'Graphic Design & Event Invitations',
  status: 'Delivered • Community Celebration',
  timeline: '1 Month • 2026',

  mockupScreens: [
    {
      id: 'event-mockup',
      title: 'Hindu Event Invitation Showcase',
      url: 'events.adarsh.design/mockup',
      src: '/projects/event-invitation/slide_01_event_mockup.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443920/Hindu_Event_Invitation_Mockup_Showcase.png',
      tag: 'EVENT SHOWCASE',
      accentColor: '#F59E0B',
    },
    {
      id: 'shivratri-card',
      title: 'Maha Shivratri Invitation Card',
      url: 'events.adarsh.design/shivratri',
      src: '/projects/event-invitation/slide_02_shivratri_full.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
      tag: 'ROYAL INVITATION',
      accentColor: '#10B981',
    },
    {
      id: 'iconography',
      title: 'Sacred Iconography & Calligraphy',
      url: 'events.adarsh.design/calligraphy',
      src: '/projects/event-invitation/slide_03_shivratri_header.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
      tag: 'SACRED ICONS',
      accentColor: '#38BDF8',
    },
    {
      id: 'schedule-details',
      title: 'Ceremony Schedule & Rituals Detail',
      url: 'events.adarsh.design/schedule',
      src: '/projects/event-invitation/slide_04_shivratri_details.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
      tag: 'PUJA ITINERARY',
      accentColor: '#EC4899',
    },
  ],

  floatingCard: {
    tag: 'SACRED PRINT',
    title: '24K Gold Foil Accents',
    subtitle: 'Divine Trishul & Damru motifs on 350 GSM textured linen cardstock.',
    tagBg: '#FEF08A',
  },

  topBadge: {
    label: 'MAHA SHIVRATRI 2026',
  },

  heroImage: {
    src: '/projects/event-invitation/slide_01_event_mockup.png',
    cloudinaryUrl:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443920/Hindu_Event_Invitation_Mockup_Showcase.png',
    alt: 'Maha Shivratri Event Invitation Card Showcase',
    caption:
      'Bespoke devotional festival invitation card featuring sacred Vedic calligraphy and gold foil accents.',
  },

  overview: {
    heading: 'Honoring divinity. Inviting devotion.',
    subheading:
      'Designing an auspicious and spiritually uplifting invitation card that conveys the sanctity and grandeur of Maha Shivratri community festivities.',
    cards: [
      {
        number: '01',
        title: 'THE DEVOTIONAL BRIEF',
        description:
          'Spiritual celebrations and temple festivities demand an invitation that inspires reverent awe, clearly communicates complex multi-prahar timings, and honors sacred Vedic traditions.',
        color: 'bg-pastel-peach',
        shadow: '#FFD6AD',
      },
      {
        number: '02',
        title: 'THE SACRED DESIGN',
        description:
          'Crafted with custom vector Trishul and Damru emblems, authentic Sanskrit mantras, cosmic night blue and glowing temple saffron palettes, and radiant gold foil accents.',
        color: 'bg-pastel-butter',
        shadow: '#FEF08A',
      },
      {
        number: '03',
        title: 'THE COMMUNITY IMPACT',
        description:
          'Printed on tactile 350 GSM textured linen cardstock for distinguished patrons and distributed as high-definition digital broadcast invitations for thousands of participating devotees.',
        color: 'bg-pastel-mint',
        shadow: '#74DEB6',
      },
    ],
  },

  features: {
    heading: 'Spiritual Craft & Ceremonial Typography',
    subheading:
      'Every element from the sacred shlokas to the multi-prahar puja timing boxes was engineered with devotional respect and printmaking excellence.',
    items: [
      {
        id: 'shiva',
        title: 'Sacred Shiva Iconography',
        description:
          'Intricate vector emblems of the Trishul, Damru, Crescent Moon, and third eye radiating divine energy and spiritual sanctity.',
        iconName: 'Sparkles',
        badge: 'Divine Motifs',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/event-invitation/features/feature_01_shiva.png',
      },
      {
        id: 'calligraphy',
        title: 'Devanagari Calligraphy & Mantras',
        description:
          'Authentic "ॐ नमः शिवाय" Devanagari calligraphy paired with high-contrast serif typography for program times and venue directions.',
        iconName: 'BookOpenCheck',
        badge: 'Calligraphy',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/event-invitation/features/feature_02_calligraphy.png',
      },
      {
        id: 'borders',
        title: 'Ornate Temple Arch Borders',
        description:
          'Traditional Hindu temple mandap arches, intricate paisley filigrees, and floral border bands framing the sacred invitation layout.',
        iconName: 'CheckCircle2',
        badge: 'Ornate Borders',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/event-invitation/features/feature_03_borders.png',
      },
      {
        id: 'schedule',
        title: 'Multi-Prahar Puja Itinerary',
        description:
          'Structured chronological timetable documenting Rudrabhishek, Nishita Kaal Maha Aarti, Bhajan Sandhya, and Mahaprasad distribution.',
        iconName: 'CalendarDays',
        badge: 'Ritual Schedule',
        accentBg: 'bg-pastel-lavender',
        previewImage: '/projects/event-invitation/features/feature_04_schedule.png',
      },
      {
        id: 'foil',
        title: '24K Metallic Gold Foil Accents',
        description:
          'Brilliant reflective gold hot-foil highlights and sunburst contours accentuating the sacred focal points of the invitation card.',
        iconName: 'Flame',
        badge: 'Gold Accents',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/event-invitation/features/feature_05_foil.png',
      },
      {
        id: 'palette',
        title: 'Sacred Festival Color Palette',
        description:
          'Cosmic Night Blue, Auspicious Temple Saffron, Metallic Temple Gold, and Pearl Marigold harmonized for spiritual celebration.',
        iconName: 'Palette',
        badge: 'Sacred Palette',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/event-invitation/features/feature_06_palette.png',
      },
      {
        id: 'paper',
        title: '350 GSM Textured Linen Substrate',
        description:
          'Premium natural linen board providing a tactile, organic handfeel with spot UV gloss highlighting the sacred Sanskrit typography.',
        iconName: 'Award',
        badge: 'Paper Craft',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/event-invitation/features/feature_07_paper.png',
      },
      {
        id: 'digital',
        title: 'HD Digital WhatsApp Broadcast Cards',
        description:
          'Optimized mobile digital adaptations formatted for instant sharing across temple WhatsApp groups, Instagram stories, and community portals.',
        iconName: 'Users',
        badge: 'Digital E-Card',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/event-invitation/features/feature_08_digital.png',
      },
      {
        id: 'print',
        title: 'Press-Ready CMYK & Prepress Standards',
        description:
          'Calibrated offset printing files with 3mm bleeds, sharp vector curves, and rich black density for flawless industrial press execution.',
        iconName: 'FileDown',
        badge: 'Prepress Ready',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/event-invitation/features/feature_09_print.png',
      },
    ],
  },

  gallery: {
    heading: 'Inside the Event Invitation',
    subheading:
      'Explore the multi-format invitation presentation, sacred Lord Shiva iconography, and technical print layout.',
    items: [
      {
        id: 'screen-1',
        title: 'Hindu Event Invitation Mockup Showcase',
        caption:
          'Complete presentation mockup showing the invitation card in an ambient traditional festive setting.',
        src: '/projects/event-invitation/slide_01_event_mockup.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443920/Hindu_Event_Invitation_Mockup_Showcase.png',
        alt: 'Hindu Event Invitation Mockup Showcase',
        type: 'desktop',
      },
      {
        id: 'screen-2',
        title: 'Full Maha Shivratri Invitation Card',
        caption:
          'Comprehensive view of the complete ceremonial invitation layout, sacred shlokas, and puja timetable.',
        src: '/projects/event-invitation/slide_02_shivratri_full.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
        alt: 'Maha Shivratri Invitation Card Full View',
        type: 'desktop',
      },
      {
        id: 'screen-3',
        title: 'Sacred Iconography & Devanagari Calligraphy',
        caption:
          'Close-up focus on the gold foil Trishul, Damru, and radiant sacred mantras in traditional Devanagari script.',
        src: '/projects/event-invitation/slide_03_shivratri_header.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
        alt: 'Sacred Iconography Detail',
        type: 'desktop',
      },
      {
        id: 'screen-4',
        title: 'Ceremony Schedule & Auspicious Details',
        caption:
          'Detailed look at the multi-prahar puja timing boxes, venue coordinates, and ornate floral border framework.',
        src: '/projects/event-invitation/slide_04_shivratri_details.png',
        cloudinaryUrl:
          'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
        alt: 'Ceremony Schedule Detail',
        type: 'desktop',
      },
    ],
  },

  techStack: {
    heading: 'Design Engine & Prepress Architecture',
    subheading:
      'Engineered with professional vector software and print-production standards to achieve divine visual impact in both print and digital mediums.',
    technologies: [
      {
        name: 'CorelDRAW Graphics Suite',
        role: 'Master vector illustration, temple border drafting & Devanagari typographic layout',
        iconName: 'Cpu',
        badge: 'Primary Vector Engine',
        category: 'Vector Drafting',
      },
      {
        name: 'Adobe Illustrator',
        role: 'Color separation, spot gold foil masking & Pantone colorway calibration',
        iconName: 'Layers',
        badge: 'Design Suite',
        category: 'Color & Vectors',
      },
      {
        name: 'Adobe Photoshop',
        role: 'Lighting simulation, ambient event staging & photorealistic paper mockups',
        iconName: 'Palette',
        badge: 'Visualization',
        category: 'Staging',
      },
      {
        name: 'Prepress CMYK Calibration',
        role: 'Press-ready PDF/X-1a output with 300 DPI image fidelity and exact 3mm bleeds',
        iconName: 'FileCode2',
        badge: 'Prepress',
        category: 'Print Standards',
      },
      {
        name: 'Gold Foil Embellishment',
        role: 'Precision vector dies prepared for metallic gold hot foil stamping and spot UV',
        iconName: 'Flame',
        badge: 'Finishing',
        category: 'Embellishment',
      },
      {
        name: 'Devanagari Calligraphy',
        role: 'Traditional Indian letterforms harmonized with clean modern typography',
        iconName: 'Atom',
        badge: 'Typography',
        category: 'Calligraphy',
      },
    ],
  },

  process: {
    heading: 'The Sacred Creation Journey',
    subheading:
      'From consulting on auspicious astrological timings to delivering high-volume printed cards and mobile digital broadcasts.',
    stages: [
      {
        step: '01',
        title: 'Devotional Brief & Astrological Timings',
        description:
          'Consulted with the organizing committee and priests to record the exact Nishita Kaal muhurat timings, sacred Sanskrit verses, and event logistics.',
        deliverables: ['Event Brief', 'Auspicious Muhurat Verification', 'Devanagari Shloka Selection'],
      },
      {
        step: '02',
        title: 'Sacred Vector Iconography & Layout',
        description:
          'Constructed custom Lord Shiva vector emblems (Trishul, Damru, Moon) and created an ornate temple arch framework in CorelDRAW.',
        deliverables: ['Vector Icon Suite', 'Border Arch Architecture', 'Card Grid Layout'],
      },
      {
        step: '03',
        title: 'Color Harmonization & Foil Proofing',
        description:
          'Synthesized deep cosmic blue and radiant saffron tones, separated the gold foil stamping layer, and generated digital proof simulations.',
        deliverables: ['Color Proofs', 'Foil Stamp Mask Layer', 'Texture Renderings'],
      },
      {
        step: '04',
        title: 'Press Production & Social Broadcast',
        description:
          'Supervised offset press execution on 350 GSM textured linen cardstock and generated optimized digital cards for broad WhatsApp and social distribution.',
        deliverables: ['Printed Invitation Cards', 'WhatsApp E-Cards', 'Social Media Story Suite'],
      },
    ],
  },

  details: {
    projectName: 'Maha Shivratri Event Invitation',
    projectType: 'Devotional Event Invitation Card & Digital Broadcast',
    category: 'Graphic Design & Event Invitations',
    status: 'Delivered • Community Celebration',
    role: 'Lead Print Architect & Devotional Graphic Designer',
    technologies: [
      'CorelDRAW Graphics Suite',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Devanagari Calligraphy',
      'Prepress Offset Print (PDF/X-1a)',
      'Digital E-Card Optimization',
    ],
    inquireUrl:
      'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20an%20event%20invitation%20card%20project',
  },

  cta: {
    heading: 'Make your festive celebrations unforgettable.',
    description:
      'Need a bespoke devotional festival invitation card, temple celebration announcements, or custom event stationery? Let’s create an inspiring, sacred invitation for your event.',
    primaryButtonText: 'DISCUSS AN EVENT INVITATION ↗',
    secondaryButtonText: 'BACK TO ALL PROJECTS',
  },
}
