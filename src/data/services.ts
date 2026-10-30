import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'web-engineering',
    number: '01',
    title: 'Full Stack Website & Web App Engineering',
    description:
      'Architecting high-performance systems with Next.js 15 App Router, React Server Components, serverless API routes, and Firebase authentication. Expert in real-time telemetry, sub-second latency, and responsive UI with Tailwind CSS.',
    deliverables: [
      'Dynamic Analytics Dashboards',
      'P2P Marketplaces & Platforms',
      'REST APIs & WebSockets',
      'SEO & SSR Optimization',
      'Mobile-responsive UI systems',
    ],
    tools: ['Next.js 15', 'Firebase', 'TypeScript', 'Tailwind CSS', 'React'],
    accentColor: '#fed01b',
    shadowColor: '#FACC15',
    hoverBg: 'hover:bg-pastel-butter',
  },
  {
    id: 'uiux',
    number: '02',
    title: 'UI/UX Systems & Digital Product Architecture',
    description:
      'Crafting end-to-end design systems that bridge visual audacity with component token modularity. Converting complex user logic into clear spatial flows with high-contrast accessibility standards.',
    deliverables: [
      'Interactive Wireframes & Prototypes',
      'Design System Tokenization',
      'Developer Handoff Protocol',
      'Accessibility Audits',
      'Mobile-first design systems',
    ],
    tools: ['Figma', 'Component Systems', 'Design Tokens', 'Accessibility'],
    accentColor: '#74DEB6',
    shadowColor: '#74DEB6',
    hoverBg: 'hover:bg-pastel-mint',
  },
  {
    id: 'branding',
    number: '03',
    title: 'Heritage Branding & Precision Industrial Packaging',
    description:
      'Production-ready vector engineering for luxury boxes, perfume packaging, textile hang tags, and brand seal identity systems. Clean tolerance specs for spot UV, debossing, and metallic foiling.',
    deliverables: [
      'Print-Ready Vector Files',
      'Packaging Dielines & Tolerances',
      'Textile Seal Emblems',
      'Industrial Packaging Proofing',
      'Brand Identity Systems',
    ],
    tools: ['CorelDRAW', 'Adobe Illustrator', 'Photoshop', 'Print Specs'],
    accentColor: '#FED7AA',
    shadowColor: '#FED7AA',
    hoverBg: 'hover:bg-pastel-peach',
  },
  {
    id: 'motion',
    number: '04',
    title: 'Cinematic Video Editing & Dynamic Motion Design',
    description:
      'High-impact storytelling through professional color grading and expert pacing. From cinematic event films to social media reels — bridging creative narrative with technical fidelity.',
    deliverables: [
      'Cinematic Color Grading',
      '2D/3D Motion Title Sequences',
      'Social Media Reels & Cuts',
      'Brand Video Production',
      'Event & Wedding Films',
    ],
    tools: ['Adobe Premiere Pro', 'After Effects', 'Lumetri Color'],
    accentColor: '#DDD6FE',
    shadowColor: '#DDD6FE',
    hoverBg: 'hover:bg-pastel-lavender',
  },
]
