export interface ProjectProblemSolution {
  number: string
  title: string
  description: string
  color: string
  shadow: string
}

export interface ProjectFeature {
  id: string
  title: string
  description: string
  iconName: string
  badge?: string
  accentBg?: string
  previewImage?: string
}

export interface ProjectGalleryItem {
  id: string
  title: string
  caption: string
  src: string
  cloudinaryUrl?: string
  alt: string
  type: 'desktop' | 'mobile' | 'feature'
}

export interface ProjectTechnology {
  name: string
  role: string
  iconName: string
  badge: string
  category: string
}

export interface ProjectTimelineStage {
  step: string
  title: string
  description: string
  deliverables?: string[]
}

export interface ProjectDetailInfo {
  projectName: string
  projectType: string
  category: string
  status: string
  role: string
  technologies: string[]
  liveUrl?: string
  inquireUrl?: string
}

export interface FloatingCardConfig {
  tag: string
  title: string
  subtitle: string
  tagBg?: string
  accentBorder?: string
}

export interface TopBadgeConfig {
  label: string
}

export interface ProjectDetailData {
  id: string
  title: string
  eyebrow: string
  tagline: string
  description: string
  badges: string[]
  liveUrl?: string
  inquireUrl?: string
  role: string
  category: string
  status: string
  timeline: string
  mockupScreens?: any[]
  floatingCard?: FloatingCardConfig
  topBadge?: TopBadgeConfig
  heroImage: {
    src: string
    cloudinaryUrl?: string
    alt: string
    caption: string
  }
  overview: {
    heading: string
    subheading?: string
    cards: ProjectProblemSolution[]
  }
  features: {
    heading: string
    subheading?: string
    items: ProjectFeature[]
  }
  gallery: {
    heading: string
    subheading: string
    items: ProjectGalleryItem[]
  }
  techStack: {
    heading: string
    subheading?: string
    technologies: ProjectTechnology[]
  }
  process: {
    heading: string
    subheading?: string
    stages: ProjectTimelineStage[]
  }
  details: ProjectDetailInfo
  cta: {
    heading: string
    description: string
    primaryButtonText: string
    secondaryButtonText: string
  }
}
