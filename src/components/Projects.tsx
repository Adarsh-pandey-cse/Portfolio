import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ArrowRight } from 'lucide-react'
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

  const href = project.liveUrl
    ? project.liveUrl
    : project.waMessage
    ? `${WA_BASE}${encodeURIComponent(project.waMessage)}`
    : '#'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6, scale: 1.012, boxShadow: '7px 7px 0px #111111' }}
      transition={{ type: 'spring', stiffness: 450, damping: 22 }}
      className="flex flex-col p-space-md border-2 border-border-dark rounded-2xl shadow-[4px_4px_0px_#111111] transition-all cursor-default"
      style={{ backgroundColor: project.bgColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card header */}
      <div className="flex items-center justify-between pb-space-xs border-b-2 border-border-dark mb-space-sm">
        <span className="font-mono text-label-sm uppercase tracking-wider text-ink-black font-bold">
          {project.categoryLabel}
        </span>
        <span className="px-2 py-0.5 bg-ink-black text-white font-mono text-label-sm rounded uppercase">
          {project.statusLabel}
        </span>
      </div>

      {/* Cover image / colored placeholder */}
      <div className="relative w-full h-48 bg-surface-container-lowest border-2 border-border-dark rounded-xl overflow-hidden mb-space-md">
        {/* Styled gradient placeholder — replace with real image */}
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
              <span key={t} className="px-2 py-0.5 bg-white/70 border border-border-dark rounded font-mono text-label-sm text-ink-black">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-ink-black/85 text-white p-space-sm flex flex-col justify-between"
            >
              <p className="font-body text-body-sm leading-relaxed">{project.longDescription}</p>
              <div className="flex flex-wrap gap-1">
                {project.tools.map((t) => (
                  <span key={t} className="px-2 py-0.5 border border-white/30 rounded font-mono text-label-sm text-pastel-butter">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
