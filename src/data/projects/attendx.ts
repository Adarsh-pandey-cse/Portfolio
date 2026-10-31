import type { ProjectDetailData } from '../../types/projectDetail'

/**
 * AttendX Dashboard Case Study Data Configuration
 * Centralized asset and content configuration for /projects/attendx
 * Features actual screenshots from Cloudinary & local storage.
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
    src: '/projects/attendx/dashboard_dark.png',
    cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433843/AttendX_Dark_Mode_Dashboard.png',
    alt: 'AttendX Dark Mode Executive Dashboard — Real-time attendance rate, streak badges, and subject breakdowns',
    caption: 'Executive Dashboard — Real-time attendance monitoring, predictive safety buffers & subject matrix',
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
        previewImage: '/projects/attendx/features/feature_01_tracking.png',
      },
      {
        id: 'students',
        title: 'Student Management',
        description:
          'Structured directory displaying individual profiles, roll numbers, registered courses, and real-time status.',
        iconName: 'Users',
        badge: 'Directory',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/attendx/features/feature_02_students.png',
      },
      {
        id: 'analytics',
        title: 'Attendance Analytics',
        description:
          'Calculates safe-absence margins, minimum required attendance buffers, and projected trend lines.',
        iconName: 'TrendingUp',
        badge: 'Smart Math',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/attendx/features/feature_03_analytics.png',
      },
      {
        id: 'charts',
        title: 'Visual Charts and Reports',
        description:
          'High-contrast visual graphs illustrating attendance distribution across theory, practical, and elective modules.',
        iconName: 'BarChart3',
        badge: 'Visualization',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/attendx/features/feature_04_charts.png',
      },
      {
        id: 'weekly',
        title: 'Weekly Attendance Overview',
        description:
          'Calendar-style multi-day matrix mapping attendance patterns, class timings, and upcoming holiday schedules.',
        iconName: 'CalendarDays',
        badge: 'Scheduler',
        accentBg: 'bg-pastel-lavender',
        previewImage: '/projects/attendx/features/feature_05_weekly.png',
      },
      {
        id: 'streaks',
        title: 'Attendance Streaks',
        description:
          'Engaging continuity tracker tracking consecutive days attended to reinforce positive academic habits.',
        iconName: 'Flame',
        badge: 'Habit Engine',
        accentBg: 'bg-pastel-butter',
        previewImage: '/projects/attendx/features/feature_06_streaks.png',
      },
      {
        id: 'badges',
        title: 'Weekly Badges',
        description:
          'Milestone recognitions for maintaining target attendance tiers and recovering missed attendance buffers.',
        iconName: 'Award',
        badge: 'Milestones',
        accentBg: 'bg-pastel-mint',
        previewImage: '/projects/attendx/features/feature_07_badges.png',
      },
      {
        id: 'export',
        title: 'PDF Export',
        description:
          'Generates clean, formatted academic summary dossiers ready for institutional review and offline records.',
        iconName: 'FileDown',
        badge: 'Compliance',
        accentBg: 'bg-pastel-sky',
        previewImage: '/projects/attendx/features/feature_08_export.png',
      },
      {
        id: 'subjects',
        title: 'Subject-wise Insights',
        description:
          'Individual subject cards tracking attended vs. total lectures, warning alerts when falling below 75%.',
        iconName: 'BookOpenCheck',
        badge: 'Drilldown',
        accentBg: 'bg-pastel-peach',
        previewImage: '/projects/attendx/features/feature_09_subjects.png',
      },
    ],
  },

  gallery: {
    heading: 'Inside AttendX',
    subheading: 'A closer look at the product interface across core workflows.',
    items: [
      {
        id: 'gallery-dark-mode',
        title: 'Dark Mode Command Center',
        caption: 'Primary executive dashboard interface featuring real-time attendance rate, safe cuts buffer, and active streak badges.',
        src: '/projects/attendx/dashboard_dark.png',
        cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433843/AttendX_Dark_Mode_Dashboard.png',
        alt: 'AttendX Dark Mode Command Center',
        type: 'desktop',
      },
      {
        id: 'gallery-analytics',
        title: 'Dark Mode Predictive Analytics',
        caption: 'Deep trend visualization illustrating attendance trajectory, absence impact simulations, and weekly lecture performance.',
        src: '/projects/attendx/analytics_dashboard.png',
        cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/AttendX_Dark_Mode_Analytics_Dashboard.png',
        alt: 'AttendX Dark Mode Predictive Analytics Dashboard',
        type: 'desktop',
      },
      {
        id: 'gallery-subjects',
        title: 'Subject-Wise Attendance Matrix',
        caption: 'Granular course breakdown illustrating individual theory vs. lab hours attended, required buffer margins, and 75% thresholds.',
        src: '/projects/attendx/subject_attendance.png',
        cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433837/AttendX_Subject_Attendance_Dashboard.png',
        alt: 'AttendX Subject Attendance Breakdown Matrix',
        type: 'desktop',
      },
      {
        id: 'gallery-impact',
        title: 'Attendance Impact & Margin Simulator',
        caption: 'Algorithmic simulator computing the exact impact of future leaves on semester examination eligibility before absences occur.',
        src: '/projects/attendx/attendance_impact.png',
        cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/AttendX_Attendance_Impact_Dashboard.png',
        alt: 'AttendX Attendance Impact and Absence Simulation Dashboard',
        type: 'desktop',
      },
      {
        id: 'gallery-students',
        title: 'Student Management & Roster Directory',
        caption: 'High-efficiency student roster directory with roll-number indexing, live attendance status chips, and batch records.',
        src: '/projects/attendx/student_management.png',
        cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/AttendX_Student_Management_Dashboard.png',
        alt: 'AttendX Student Management and Directory Dashboard',
        type: 'desktop',
      },
      {
        id: 'gallery-pastel',
        title: 'Radha-Rani Pastel Aesthetic Edition',
        caption: 'Vibrant, high-contrast pastel theme alternative engineered with soft hues, warm cards, and accessible typography.',
        src: '/projects/attendx/pastel_dashboard.png',
        cloudinaryUrl: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/Radha-Rani_Pastel_Attendance_Dashboard.png',
        alt: 'AttendX Radha-Rani Pastel Attendance Dashboard Edition',
        type: 'desktop',
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
