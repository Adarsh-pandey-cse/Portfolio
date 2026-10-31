import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight, Sparkles } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import type { Project } from '../types'
import MotionReveal from './MotionReveal'

const WA_BASE = 'https://wa.me/918800795476?text='

type FilterKey = 'all' | 'engineering' | 'branding' | 'motion' | 'campus'

const filters: { key: FilterKey; label: string; hoverBg: string }[] = [
  { key: 'all', label: 'All', hoverBg: '' },
  { key: 'engineering', label: 'Engineering', hoverBg: 'hover:bg-pastel-butter' },
  { key: 'branding', label: 'Branding & Vector', hoverBg: 'hover:bg-pastel-peach' },
  { key: 'motion', label: 'Motion Film', hoverBg: 'hover:bg-pastel-lavender' },
  { key: 'campus', label: 'Campus Works', hoverBg: 'hover:bg-pastel-mint' },
]

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const navigate = useNavigate()

  const isCaseStudy = Boolean(project.caseStudyUrl)

  const attendxPreviews = [
    {
      src: '/projects/attendx/dashboard_dark.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433843/AttendX_Dark_Mode_Dashboard.png',
      path: 'attendx9.netlify.app/dashboard',
    },
    {
      src: '/projects/attendx/analytics_dashboard.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/AttendX_Dark_Mode_Analytics_Dashboard.png',
      path: 'attendx9.netlify.app/analytics',
    },
    {
      src: '/projects/attendx/subject_attendance.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433837/AttendX_Subject_Attendance_Dashboard.png',
      path: 'attendx9.netlify.app/subjects',
    },
  ]

  const closetSharePreviews = [
    {
      src: '/projects/closet-share/showcase_2.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435172/Closet_Share_Fashion_Rental_App_Showcase-2.png',
      path: 'closetshare.vercel.app/wardrobe',
    },
    {
      src: '/projects/closet-share/showcase_1.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435170/Closet_Share_fashion_rental_app_showcase-1.png',
      path: 'closetshare.vercel.app/explore',
    },
    {
      src: '/projects/closet-share/showcase_3.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435168/Closet_Share_Sustainable_Fashion_UI_Showcase-3.png',
      path: 'closetshare.vercel.app/sustainability',
    },
    {
      src: '/projects/closet-share/showcase_4.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793435166/Closet_Share_Fashion_Marketplace_UI_Collage-4.png',
      path: 'closetshare.vercel.app/marketplace',
    },
  ]

  const hkOswalPreviews = [
    {
      src: '/projects/hk-oswal/slide_tag_collection.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441746/H.K._Oswal_Premium_Hosiery_Tag_Collection.png',
      path: 'brand.hkoswal.com/tags',
    },
    {
      src: '/projects/hk-oswal/slide_beige_branding.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441739/beigeee_page-0001.jpg',
      path: 'brand.hkoswal.com/identity',
    },
    {
      src: '/projects/hk-oswal/slide_logo_redesign.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441739/beigeee_page-0001.jpg',
      path: 'brand.hkoswal.com/seal',
    },
    {
      src: '/projects/hk-oswal/slide_tag_dielines.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793441746/H.K._Oswal_Premium_Hosiery_Tag_Collection.png',
      path: 'brand.hkoswal.com/dielines',
    },
  ]

  const weddingInvitationPreviews = [
    {
      src: '/projects/wedding-invitation/slide_01_main_design.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442829/Wedding_Invitation_3.png',
      path: 'invitations.adarsh.design/main-suite',
    },
    {
      src: '/projects/wedding-invitation/slide_02_hindu_collection.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442662/Elegant_Hindu_Wedding_Invitation_Collection.png',
      path: 'invitations.adarsh.design/hindu-collection',
    },
    {
      src: '/projects/wedding-invitation/slide_03_traditional_showcase.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442662/Traditional_Indian_Wedding_Invitation_Showcase.png',
      path: 'invitations.adarsh.design/traditional-craft',
    },
    {
      src: '/projects/wedding-invitation/slide_04_invitation_royal_suite.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793442884/Wedding_Invitation.png',
      path: 'invitations.adarsh.design/gatefold-card',
    },
  ]

  const eventInvitationPreviews = [
    {
      src: '/projects/event-invitation/slide_01_event_mockup.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443920/Hindu_Event_Invitation_Mockup_Showcase.png',
      path: 'events.adarsh.design/mockup',
    },
    {
      src: '/projects/event-invitation/slide_02_shivratri_full.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
      path: 'events.adarsh.design/shivratri',
    },
    {
      src: '/projects/event-invitation/slide_03_shivratri_header.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
      path: 'events.adarsh.design/calligraphy',
    },
    {
      src: '/projects/event-invitation/slide_04_shivratri_details.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793443931/Shivratri_invitation_page-0001.jpg',
      path: 'events.adarsh.design/schedule',
    },
  ]

  const wallsWindowSpacesPreviews = [
    {
      src: '/images/projects/walls-window-spaces/slides/slide_01_hero_branding.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444976/Luxurious_Gold_Interior_Branding_Collection.png',
      path: 'walls-window-spaces.design/brand-suite',
    },
    {
      src: '/images/projects/walls-window-spaces/slides/slide_02_storefront.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444991/Luxury_Gold_Interiors_Showroom_Entrance.png',
      path: 'walls-window-spaces.design/showroom',
    },
    {
      src: '/images/projects/walls-window-spaces/slides/slide_03_visiting_cards.png',
      fallback:
        'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445339/Luxury_Black-and-Gold_Business_Cards.png',
      path: 'walls-window-spaces.design/business-cards',
    },
    {
      src: '/images/projects/walls-window-spaces/slides/slide_04_brochure_cover.png',
      fallback: 'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445191/1.png',
      path: 'walls-window-spaces.design/brochure-spread',
    },
  ]

  const activePreviews =
    project.id === 'attendx'
      ? attendxPreviews
      : project.id === 'closet-share'
      ? closetSharePreviews
      : project.id === 'hk-oswal'
      ? hkOswalPreviews
      : project.id === 'wedding-invitation'
      ? weddingInvitationPreviews
      : project.id === 'event-invitation'
      ? eventInvitationPreviews
      : project.id === 'walls-window-spaces'
      ? wallsWindowSpacesPreviews
      : null

  useEffect(() => {
    if (!activePreviews || hovered) return
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % activePreviews.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [activePreviews, hovered])

  const href = project.liveUrl
    ? project.liveUrl
    : project.waMessage
    ? `${WA_BASE}${encodeURIComponent(project.waMessage)}`
    : '#'

  const handleCardClick = (e: React.MouseEvent) => {
    // If click was on an anchor or button, let native action happen
    if ((e.target as HTMLElement).closest('a, button')) return
    if (isCaseStudy && project.caseStudyUrl) {
      navigate(project.caseStudyUrl)
    }
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6, scale: 1.012, boxShadow: '7px 7px 0px #111111' }}
      transition={{ type: 'spring', stiffness: 450, damping: 22 }}
      onClick={handleCardClick}
      className={`flex flex-col p-space-md border-2 border-border-dark rounded-2xl shadow-[4px_4px_0px_#111111] transition-all ${
        isCaseStudy ? 'cursor-pointer' : 'cursor-default'
      }`}
      style={{ backgroundColor: project.bgColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card header */}
      <div className="flex items-center justify-between pb-space-xs border-b-2 border-border-dark mb-space-sm gap-2">
        <span className="font-mono text-[10px] xl:text-label-sm uppercase tracking-wider text-ink-black font-bold whitespace-nowrap truncate min-w-0">
          {project.categoryLabel}
        </span>
        <div className="flex items-center gap-1.5 shrink-0">
          {isCaseStudy && (
            <span className="px-2 py-0.5 bg-[#1833FF] text-white font-mono text-[9px] font-bold rounded uppercase flex items-center gap-1 shadow-[1px_1px_0px_#111111] whitespace-nowrap shrink-0">
              <Sparkles size={10} className="shrink-0" />
              <span>Case Study</span>
            </span>
          )}
          <span className="px-2 py-0.5 bg-ink-black text-white font-mono text-[10px] xl:text-label-sm rounded uppercase whitespace-nowrap shrink-0">
            {project.statusLabel}
          </span>
        </div>
      </div>

      {/* Cover image / Live Banner Frame */}
      <div className="relative w-full h-48 bg-[#0B0F19] border-2 border-border-dark rounded-xl overflow-hidden mb-space-md group/cover">
        {project.image ? (
          <div className="relative w-full h-full overflow-hidden bg-[#0F172A] flex items-center justify-center">
            {/* Top Browser Mini Header */}
            <div className="absolute top-0 inset-x-0 h-6 bg-[#0B0F19]/90 backdrop-blur-sm border-b border-white/10 px-2.5 flex items-center justify-between z-10">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <span className="font-mono text-[8.5px] text-slate-300 font-bold uppercase tracking-wider">
                {activePreviews ? activePreviews[slideIndex % activePreviews.length].path : 'production.app'}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Real Screenshot with live banner style & soft transition */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activePreviews ? activePreviews[slideIndex % activePreviews.length].src : project.image}
                src={activePreviews ? activePreviews[slideIndex % activePreviews.length].src : project.image}
                alt={project.title}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover object-top pt-6 group-hover/cover:scale-106 transition-transform duration-500 ease-out select-none"
                onError={(e) => {
                  if (activePreviews) {
                    e.currentTarget.src = activePreviews[slideIndex % activePreviews.length].fallback
                  }
                }}
              />
            </AnimatePresence>

            {/* Bottom floating live pill */}
            <div className="absolute bottom-2 left-2 z-10 flex items-center gap-1.5">
              <span className="px-2 py-0.5 bg-black/85 backdrop-blur-sm text-pastel-butter border border-white/20 rounded font-mono text-[9px] font-bold shadow-sm">
                Production UI
              </span>
              <span className="px-2 py-0.5 bg-[#1833FF] text-white border border-border-dark rounded font-mono text-[9px] font-bold shadow-sm">
                Dedicated Case Study ↗
              </span>
            </div>
          </div>
        ) : (
          /* Styled gradient placeholder for other projects */
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-2 p-4"
            style={{
              background: `linear-gradient(135deg, ${project.bgColor}dd 0%, ${project.bgColor}88 100%)`,
              borderBottom: '2px solid #11111122',
            }}
          >
            <span className="font-display font-extrabold text-headline-md text-ink-black text-center leading-tight">
              {project.title}
            </span>
            <div className="flex flex-wrap gap-1 justify-center">
              {project.tools.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 bg-white/70 border border-border-dark rounded font-mono text-label-sm text-ink-black"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-grow justify-between gap-space-sm">
        <div>
          <h3 className="font-display font-bold text-headline-md text-ink-black leading-tight mb-1">
            {project.title}
          </h3>
          <p className="font-body text-body-sm text-ink-muted">{project.description}</p>
        </div>

        <div className="flex items-center justify-between pt-space-xs border-t-2 border-border-dark">
          <span className="font-mono text-label-sm text-ink-black uppercase font-bold">
            {project.category === 'engineering'
              ? 'Engineering'
              : project.category === 'branding'
              ? 'Brand & Vector'
              : project.category === 'motion'
              ? 'Motion Film'
              : 'Campus'}
          </span>

          {/* Action button: routes to /projects/attendx if case study, or external URL */}
          {isCaseStudy ? (
            <Link
              to={project.caseStudyUrl!}
              className="px-3.5 py-1.5 bg-ink-black text-white hover:bg-primary border-2 border-border-dark rounded-full font-mono text-label-sm flex items-center gap-1.5 transition-colors shadow-[2px_2px_0px_#111111] cursor-pointer"
              aria-label={`View ${project.title} Case Study`}
            >
              <span>Visit</span>
              <ArrowRight size={13} />
            </Link>
          ) : (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-ink-black text-white hover:bg-primary border-2 border-border-dark rounded-full font-mono text-label-sm flex items-center gap-1.5 transition-colors shadow-[2px_2px_0px_#111111]"
              aria-label={`View ${project.title}`}
            >
              <span>{project.liveUrl ? 'Visit' : 'Inquire'}</span>
              {project.liveUrl ? <ExternalLink size={13} /> : <ArrowRight size={13} />}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="w-full max-w-container mx-auto px-margin-mobile lg:px-margin py-space-xl scroll-mt-20">
      {/* Section header */}
      <MotionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="section-label">
              <span className="w-2 h-2 bg-primary rounded-full inline-block" />
              02 • Selected Works
            </span>
            <h2 className="font-display font-extrabold text-headline-lg text-ink-black leading-none">
              Pick a card. Any project.
            </h2>
          </div>

          {/* Filter pills */}
          <div className="flex items-center flex-wrap gap-space-xs" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <motion.button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3.5 py-1.5 border-2 border-border-dark rounded-full font-mono text-label-sm uppercase transition-all duration-150 cursor-pointer ${
                  activeFilter === f.key
                    ? 'bg-ink-black text-white shadow-[2px_2px_0px_#1833FF]'
                    : `bg-surface-container text-ink-black shadow-[2px_2px_0px_#111111] ${f.hoverBg || 'hover:bg-pastel-butter'}`
                }`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
                aria-pressed={activeFilter === f.key}
              >
                {f.label}{f.key === 'all' && ` (${projects.length})`}
              </motion.button>
            ))}
          </div>
        </div>
      </MotionReveal>

      {/* Project grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg"
        layout
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 font-mono text-label-lg text-ink-muted uppercase">
          No projects in this category yet.
        </div>
      )}
    </section>
  )
}
