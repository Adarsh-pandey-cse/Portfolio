import { motion } from 'framer-motion'
import {
  ExternalLink,
  ArrowDown,
  Sparkles,
  Layers,
  Cpu,
  Check,
  Zap,
} from 'lucide-react'
import type { ProjectDetailData } from '../../types/projectDetail'
import DashboardMockup from './DashboardMockup'

interface ProjectHeroProps {
  project: ProjectDetailData
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  const handleScrollToOverview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.querySelector('#overview')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative w-full pt-[90px] sm:pt-[105px] lg:pt-[115px] pb-12 sm:pb-16 bg-surface overflow-hidden">
      {/* ── Background Doodles & Neo-Brutalist Accents ── */}
      {/* 1. Yellow circular accent in top-right */}
      <div
        className="absolute top-12 -right-16 w-64 h-64 rounded-full bg-[#FEF08A] pointer-events-none -z-10 opacity-70"
        aria-hidden="true"
      />

      {/* 2. Mint accent in bottom-left */}
      <div
        className="absolute bottom-6 -left-12 w-48 h-48 rounded-full bg-[#A7F3D0] pointer-events-none -z-10 opacity-60"
        aria-hidden="true"
      />

      {/* 3. Dot Grid Matrix background element */}
      <div
        className="absolute top-28 left-4 w-28 h-36 pointer-events-none opacity-25 select-none hidden xl:block -z-10"
        style={{
          backgroundImage: 'radial-gradient(#111111 1.5px, transparent 1.5px)',
          backgroundSize: '12px 12px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ── Left Column: Editorial Hero Meta, Heading & CTAs (6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex flex-col gap-4 sm:gap-5"
          >
            {/* Eyebrow Label */}
            <div className="flex items-center gap-2 flex-wrap">
              <motion.span
                className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-[#FEF08A] text-ink-black border-2 border-border-dark rounded-full font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_#111111]"
                whileHover={{ scale: 1.05, y: -1, boxShadow: '3px 3px 0px #1833FF' }}
              >
                <Sparkles size={13} className="text-amber-800 fill-amber-800 animate-pulse" />
                <span>{project.eyebrow}</span>
              </motion.span>

              {/* Status Pill */}
              <motion.span
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-border-dark rounded-full font-mono text-[10.5px] font-bold text-ink-black shadow-[1.5px_1.5px_0px_#111111]"
                whileHover={{ scale: 1.04 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{project.status}</span>
              </motion.span>
            </div>

            {/* Main Headings */}
            <div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-ink-black leading-[1.08] tracking-tight">
                {project.title}
              </h1>
              <p className="font-display font-bold text-lg sm:text-xl md:text-2xl text-primary mt-1.5 leading-snug">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="font-body text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Badges Strip with lively springs */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.badges.map((badge, idx) => (
                <motion.span
                  key={badge}
                  className={`px-3 py-1 border-2 border-border-dark rounded-full font-mono text-[10.5px] sm:text-[11px] font-bold uppercase shadow-[1.5px_1.5px_0px_#111111] cursor-pointer ${
                    idx === 0
                      ? 'bg-pastel-butter text-ink-black'
                      : idx === 1
                      ? 'bg-pastel-mint text-ink-black'
                      : idx === 2
                      ? 'bg-[#1833FF] text-white'
                      : 'bg-white text-ink-black'
                  }`}
                  whileHover={{ scale: 1.06, y: -2, boxShadow: '3px 3px 0px #1833FF' }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  {badge}
                </motion.span>
              ))}
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Button 1: View Live Project or Inquire */}
              {project.liveUrl ? (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-ink-black hover:bg-black text-white border-2 border-border-dark rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_#FACC15] hover:shadow-[6px_6px_0px_#FACC15] transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                >
                  <span>VIEW LIVE PROJECT</span>
                  <ExternalLink size={15} className="stroke-[2.5]" />
                </motion.a>
              ) : (
                <motion.a
                  href={
                    project.inquireUrl ||
                    `https://wa.me/918800795476?text=${encodeURIComponent(
                      `Hello Adarsh, I would like to discuss the ${project.title} branding project`
                    )}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-ink-black hover:bg-black text-white border-2 border-border-dark rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_#FACC15] hover:shadow-[6px_6px_0px_#FACC15] transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                >
                  <span>DISCUSS BRAND IDENTITY</span>
                  <ExternalLink size={15} className="stroke-[2.5]" />
                </motion.a>
              )}

              {/* Button 2: Explore Project ↓ */}
              <motion.a
                href="#overview"
                onClick={handleScrollToOverview}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-white hover:bg-pastel-butter text-ink-black border-2 border-border-dark rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_#111111] hover:shadow-[4px_4px_0px_#111111] transition-all"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              >
                <span>EXPLORE PROJECT</span>
                <ArrowDown size={15} className="stroke-[2.5]" />
              </motion.a>
            </div>
          </motion.div>

          {/* ── Right Column: Dashboard Showcase (6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            {/* Live Dashboard Mockup with real screenshot and browser window framing */}
            <DashboardMockup
              screens={project.mockupScreens}
              imageSrc={project.heroImage.src}
              cloudinaryFallback={project.heroImage.cloudinaryUrl}
              floatingCard={project.floatingCard}
              topBadge={project.topBadge}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
