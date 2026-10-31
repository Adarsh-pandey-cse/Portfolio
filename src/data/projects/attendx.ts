import type { ProjectDetailData } from '../../types/projectDetail'

/**
 * AttendX Dashboard Case Study Data Configuration
 * Centralized asset and content configuration for /projects/attendx
 * 
 * Image replacement:
 * Drop image files into /public/projects/attendx/ matching the paths below,
 * or update the src strings to your hosted image links.
 */
export const attendxProjectData: ProjectDetailData = {
  id: 'attendx',
  title: 'AttendX Dashboard',
  eyebrow: 'FEATURED ENGINEERING PROJECT / 01',
  tagline: 'Attendance intelligence. Simplified.',
  description:
    'An intelligent student attendance and analytics platform designed to simplify academic monitoring, provide meaningful insights, and make attendance management more efficient.',
  badges: [
    'WEB APPLICATION',
    'SMART ANALYTICS',
    'LIVE PROJECT',
    'NEXT.JS + FIREBASE',
  ],
  liveUrl: 'https://attendx9.netlify.app',
  role: 'Full Stack Developer & UI Designer',
  category: 'Engineering',
  status: 'Live V2.4',
  timeline: '2024 — Present',

  heroImage: {
    src: '/projects/attendx/hero.webp',
    alt: 'AttendX Dashboard — Executive attendance monitoring & predictive analytics interface',
    caption: 'Executive Dashboard — Real-time attendance rate, streak badges, and subject breakdowns',
  },

  overview: {
    heading: 'More than attendance tracking.',
    subheading: 'A purpose-built digital ecosystem bridging student transparency with academic compliance.',
    cards: [
      {
        number: '01',
        title: 'THE PROBLEM',
        description:
          'Traditional attendance management can be time-consuming and makes it difficult to understand attendance patterns quickly.',
        color: 'bg-pastel-butter',
        shadow: '#FACC15',
      },
      {
        number: '02',
        title: 'THE SOLUTION',
        description:
          'AttendX provides an organized digital interface for attendance tracking, student monitoring, and analytical insights.',
        color: 'bg-pastel-mint',
        shadow: '#74DEB6',
      },
      {
        number: '03',
        title: 'THE IMPACT',
        description:
          'A centralized dashboard helps users understand attendance performance and access relevant information more efficiently.',
        color: 'bg-pastel-sky',
        shadow: '#BAE6FD',
      },
    ],
  },

  features: {
    heading: 'Everything important. One dashboard.',
    subheading: 'Engineered with focused tools designed for instant clarity, zero cognitive friction, and daily utility.',
    items: [
      {
        id: 'tracking',
        title: 'Attendance Tracking',
        description:
          'Instant one-tap attendance logging with immediate feedback on overall and subject-specific percentages.',
        iconName: 'CheckCircle2',
        badge: 'Core Engine',
        accentBg: 'bg-pastel-butter',
      },
      {
        id: 'students',
        title: 'Student Management',
        description:
          'Structured directory displaying individual profiles, roll numbers, registered courses, and real-time status.',
        iconName: 'Users',
        badge: 'Directory',
        accentBg: 'bg-pastel-sky',
      },
      {
        id: 'analytics',
        title: 'Attendance Analytics',
        description:
          'Calculates safe-absence margins, minimum required attendance buffers, and projected trend lines.',
        iconName: 'TrendingUp',
        badge: 'Smart Math',
        accentBg: 'bg-pastel-mint',
      },
      {
        id: 'charts',
        title: 'Visual Charts and Reports',
        description:
          'High-contrast visual graphs illustrating attendance distribution across theory, practical, and elective modules.',
        iconName: 'BarChart3',
        badge: 'Visualization',
        accentBg: 'bg-pastel-peach',
      },
      {
        id: 'weekly',
        title: 'Weekly Attendance Overview',
        description:
          'Calendar-style multi-day matrix mapping attendance patterns, class timings, and upcoming holiday schedules.',
        iconName: 'CalendarDays',
        badge: 'Scheduler',
        accentBg: 'bg-pastel-lavender',
      },
      {
        id: 'streaks',
        title: 'Attendance Streaks',
        description:
          'Engaging continuity tracker tracking consecutive days attended to reinforce positive academic habits.',
        iconName: 'Flame',
        badge: 'Habit Engine',
        accentBg: 'bg-pastel-butter',
      },
      {
        id: 'badges',
        title: 'Weekly Badges',
        description:
          'Milestone recognitions for maintaining target attendance tiers and recovering missed attendance buffers.',
        iconName: 'Award',
        badge: 'Milestones',
        accentBg: 'bg-pastel-mint',
      },
      {
        id: 'export',
        title: 'PDF Export',
        description:
          'Generates clean, formatted academic summary dossiers ready for institutional review and offline records.',
        iconName: 'FileDown',
        badge: 'Compliance',
        accentBg: 'bg-pastel-sky',
      },
      {
        id: 'subjects',
        title: 'Subject-wise Insights',
        description:
          'Individual subject cards tracking attended vs. total lectures, warning alerts when falling below 75%.',
        iconName: 'BookOpenCheck',
        badge: 'Drilldown',
        accentBg: 'bg-pastel-peach',
      },
    ],
  },

  gallery: {
    heading: 'Inside AttendX',
    subheading: 'A closer look at the product interface across core workflows.',
    items: [
      {
        id: 'gallery-hero',
        title: 'Primary Executive Overview',
        caption: 'Central command interface featuring real-time attendance rate, active streak badge, and alert summary.',
        src: '/projects/attendx/hero.webp',
        alt: 'AttendX Executive Dashboard Overview',
        type: 'desktop',
      },
      {
        id: 'gallery-dashboard',
        title: 'Subject Performance Matrix',
        caption: 'High-contrast cards displaying individual subject percentages, safe cuts left, and required attendance.',
        src: '/projects/attendx/dashboard.webp',
        alt: 'AttendX Subject Performance Matrix',
        type: 'desktop',
      },
      {
        id: 'gallery-analytics',
        title: 'Predictive Trend Analytics',
        caption: 'Visual timeline projection forecasting attendance health towards end-of-semester examination gates.',
        src: '/projects/attendx/analytics.webp',
        alt: 'AttendX Predictive Trend Analytics',
        type: 'desktop',
      },
      {
        id: 'gallery-students',
        title: 'Student Roster Directory',
        caption: 'Clean, filterable student list with roll-number indexing, contact metadata, and attendance status chips.',
        src: '/projects/attendx/students.webp',
        alt: 'AttendX Student Roster Directory',
        type: 'desktop',
      },
      {
        id: 'gallery-records',
        title: 'Daily Attendance Ledger',
        caption: 'Granular lecture-by-lecture audit log enabling quick modifications and historical review.',
        src: '/projects/attendx/records.webp',
        alt: 'AttendX Daily Attendance Ledger',
        type: 'desktop',
      },
      {
        id: 'gallery-reports',
        title: 'Dossier & PDF Export Engine',
        caption: 'Standardized institutional print preview with attendance percentages, official seals, and signatures.',
        src: '/projects/attendx/reports.webp',
        alt: 'AttendX Dossier and PDF Export Engine',
        type: 'desktop',
      },
      {
        id: 'gallery-mobile',
        title: 'Responsive Mobile Experience',
        caption: 'Thumb-friendly touch UI optimized for rapid logging on smartphones between lectures.',
        src: '/projects/attendx/mobile.webp',
        alt: 'AttendX Responsive Mobile Interface',
        type: 'mobile',
      },
    ],
  },

  techStack: {
    heading: 'Built with the right tools.',
    subheading: 'Selected for sub-second database synchronization, strict type safety, and 60fps responsive interfaces.',
    technologies: [
      {
        name: 'Next.js 15',
        role: 'App Router architecture, optimized production builds, and lightning-fast route streaming.',
        iconName: 'Code2',
        badge: 'Framework',
        category: 'Frontend & Architecture',
      },
      {
        name: 'React 18',
        role: 'Component composition, concurrent rendering, and reactive state management.',
        iconName: 'Atom',
        badge: 'UI Library',
        category: 'Client Layer',
      },
      {
        name: 'TypeScript',
        role: 'End-to-end type safety across attendance formulas, data models, and API interfaces.',
        iconName: 'FileCode2',
        badge: 'Type Safety',
        category: 'Language',
      },
      {
        name: 'Firebase Firestore',
        role: 'Real-time NoSQL database with offline persistence and sub-second multi-device sync.',
        iconName: 'Flame',
        badge: 'Backend & DB',
        category: 'Data & Auth',
      },
      {
        name: 'Tailwind CSS',
        role: 'Neo-brutalist high-contrast design system with fluid typography and dark mode surfaces.',
        iconName: 'Palette',
        badge: 'Styling',
        category: 'Design System',
      },
    ],
  },

  process: {
    heading: 'From idea to implementation.',
    subheading: 'A disciplined engineering journey transforming a widespread campus pain point into production software.',
    stages: [
      {
        step: '01',
        title: 'Research & Planning',
        description:
          'Understanding the attendance management problem, gathering student pain points regarding complex 75% university eligibility criteria, and defining the core user experience.',
        deliverables: ['User Journey Map', 'Attendance Formula Logic', 'Feature Priority Matrix'],
      },
      {
        step: '02',
        title: 'Interface Design',
        description:
          'Building a clear and intuitive dashboard experience. Crafting high-contrast typography, color-coded urgency indicators, and responsive card hierarchies in Figma.',
        deliverables: ['Design System Tokens', 'Figma Interactive Prototype', 'Dark Theme Palette'],
      },
      {
        step: '03',
        title: 'Development',
        description:
          'Implementing the application and connecting the necessary backend services. Building modular React components with Next.js 15, Firestore real-time listeners, and Recharts.',
        deliverables: ['Next.js 15 Architecture', 'Firestore Data Schema', 'Client-side Math Engine'],
      },
      {
        step: '04',
        title: 'Testing & Deployment',
        description:
          'Testing the interface across mobile and desktop viewports, validating edge-case attendance mathematical computations, and deploying to high-availability production infrastructure.',
        deliverables: ['Multi-Device Verification', 'Mathematical Test Coverage', 'Netlify Production Pipeline'],
      },
    ],
  },

  details: {
    projectName: 'AttendX Dashboard',
    projectType: 'Web Application',
    category: 'Engineering',
    status: 'Live V2.4',
    role: 'Full Stack Developer & UI Designer',
    technologies: ['Next.js 15', 'React 18', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Recharts'],
    liveUrl: 'https://attendx9.netlify.app',
  },

  cta: {
    heading: 'Want to experience AttendX?',
    description: 'Explore the live application and see how attendance intelligence works in practice.',
    primaryButtonText: 'OPEN LIVE APPLICATION',
    secondaryButtonText: 'BACK TO ALL PROJECTS',
  },
}
