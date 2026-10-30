export interface Project {
  id: string
  title: string
  subtitle: string
  category: 'engineering' | 'branding' | 'motion' | 'campus'
  categoryLabel: string
  description: string
  longDescription: string
  tools: string[]
  role: string
  status: 'live' | 'in-progress' | 'delivered' | 'concept'
  statusLabel: string
  liveUrl?: string
  waMessage?: string
  bgColor: string
  accentColor: string
  featured?: boolean
}

export interface Service {
  id: string
  number: string
  title: string
  description: string
  deliverables: string[]
  tools: string[]
  accentColor: string
  shadowColor: string
  hoverBg: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  project: string
  bgColor: string
}

export interface Skill {
  name: string
  icon: string
  group: 'engineering' | 'design' | 'motion' | 'tools'
}

export interface TimelineItem {
  period: string
  title: string
  organization: string
  description: string
  tags: string[]
  color: string
}
