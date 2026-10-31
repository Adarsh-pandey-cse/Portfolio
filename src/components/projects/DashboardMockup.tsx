import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

import type { FloatingCardConfig, TopBadgeConfig } from '../../types/projectDetail'

export interface MockupSlide {
  id: string
  title: string
  url: string
  src: string
  fallback: string
  tag: string
  accentColor: string
}

export const DEFAULT_HERO_SCREENS: MockupSlide[] = [
  {
    id: 'dashboard',
    title: 'Command Center',
    url: 'attendx9.netlify.app/dashboard',
    src: '/projects/attendx/dashboard_dark.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433843/AttendX_Dark_Mode_Dashboard.png',
    tag: 'EXECUTIVE OVERVIEW',
    accentColor: '#1833FF',
  },
  {
    id: 'analytics',
    title: 'Predictive Analytics',
    url: 'attendx9.netlify.app/analytics',
    src: '/projects/attendx/analytics_dashboard.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/AttendX_Dark_Mode_Analytics_Dashboard.png',
    tag: 'SMART VELOCITY',
    accentColor: '#10B981',
  },
  {
    id: 'subjects',
    title: 'Subject Matrix',
    url: 'attendx9.netlify.app/subjects',
    src: '/projects/attendx/subject_attendance.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433837/AttendX_Subject_Attendance_Dashboard.png',
    tag: 'TARGET RATIOS',
    accentColor: '#F59E0B',
  },
  {
    id: 'impact',
    title: 'Margin Simulator',
    url: 'attendx9.netlify.app/impact',
    src: '/projects/attendx/attendance_impact.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/AttendX_Attendance_Impact_Dashboard.png',
    tag: 'SAFE CUT BUFFER',
    accentColor: '#0284C7',
  },
  {
    id: 'students',
    title: 'Student Roster',
    url: 'attendx9.netlify.app/students',
    src: '/projects/attendx/student_management.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/AttendX_Student_Management_Dashboard.png',
    tag: 'LIVE DIRECTORY',
    accentColor: '#8B5CF6',
  },
  {
    id: 'pastel',
    title: 'Pastel Aesthetic Edition',
    url: 'attendx9.netlify.app/pastel',
    src: '/projects/attendx/pastel_dashboard.png',
    fallback:
      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793433836/Radha-Rani_Pastel_Attendance_Dashboard.png',
    tag: 'EDITORIAL THEME',
    accentColor: '#EC4899',
  },
]

interface DashboardMockupProps {
  className?: string
  interactive?: boolean
  showFloatingPreview?: boolean
  screens?: MockupSlide[]
  imageSrc?: string
  cloudinaryFallback?: string
  floatingCard?: FloatingCardConfig
  topBadge?: TopBadgeConfig
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.985,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.985,
  }),
}

export default function DashboardMockup({
  className = '',
  interactive = true,
  showFloatingPreview = true,
  screens = DEFAULT_HERO_SCREENS,
  imageSrc,
  cloudinaryFallback,
  floatingCard,
  topBadge,
}: DashboardMockupProps) {
  // If a single imageSrc is provided and screens not overridden, use screens with imageSrc as primary
  const slides = screens && screens.length > 0 ? screens : DEFAULT_HERO_SCREENS

  const [[page, direction], setPage] = useState<[number, number]>([0, 0])
  const [isHovered, setIsHovered] = useState(false)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const currentIndex = ((page % slides.length) + slides.length) % slides.length
  const currentSlide = slides[currentIndex]

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => [prevPage + newDirection, newDirection])
    },
    []
  )

  const jumpTo = (index: number) => {
    if (index === currentIndex) return
    const dir = index > currentIndex ? 1 : -1
    setPage([index, dir])
  }

  // Soft auto-play interval: cycles every 4.6 seconds, pauses on hover
  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(() => {
      paginate(1)
    }, 4600)
    return () => clearInterval(timer)
  }, [isHovered, paginate])

  const getSource = (slide: MockupSlide) => {
    if (imageErrors[slide.id]) {
      return slide.fallback
    }
    return slide.src
  }

  return (
    <div
      className={`relative w-full select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Desktop Browser Window Frame ── */}
      <motion.div
        className="relative w-full bg-[#0B0F19] border-2 border-border-dark rounded-2xl sm:rounded-3xl shadow-[8px_8px_0px_#111111] overflow-hidden text-slate-100 group/mockup"
        whileHover={interactive ? { y: -5, boxShadow: '10px 10px 0px #1833FF' } : undefined}
        transition={{ type: 'spring', stiffness: 450, damping: 24 }}
      >
        {/* Browser Top Chrome Header */}
        <div className="flex items-center justify-between px-3.5 sm:px-4 py-2.5 bg-[#0F172A] border-b-2 border-border-dark relative z-10">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] border border-black/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] border border-black/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] border border-black/40" />
          </div>

          {/* Dynamic URL Bar with synchronized path */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[#1E293B] rounded-full border border-slate-700/60 max-w-[260px] sm:max-w-[320px] w-full mx-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSlide.url}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="font-mono text-[10px] sm:text-[11px] text-slate-300 truncate font-medium"
              >
                {currentSlide.url}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Dynamic Version / Screen Tag badge */}
          <div className="shrink-0 flex items-center gap-1.5">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSlide.tag}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.2 }}
                className="hidden sm:inline-flex px-2 py-0.5 text-white font-mono text-[9px] font-bold uppercase rounded border border-border-dark shadow-[1px_1px_0px_#111111]"
                style={{ backgroundColor: currentSlide.accentColor }}
              >
                {currentSlide.tag}
              </motion.span>
            </AnimatePresence>
            <span className="px-1.5 py-0.5 bg-black/60 text-slate-300 font-mono text-[9px] font-bold rounded border border-slate-700">
              {String(currentIndex + 1).padStart(2, '0')}/{String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Sliding Image Viewport */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0B0F19] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 320, damping: 32 },
                opacity: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                scale: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
              className="absolute inset-0 w-full h-full flex items-center justify-center"
            >
              <img
                src={getSource(currentSlide)}
                alt={currentSlide.title}
                className="w-full h-full object-cover object-top select-none group-hover/mockup:scale-[1.02] transition-transform duration-500 ease-out"
                onError={() => {
                  setImageErrors((prev) => ({ ...prev, [currentSlide.id]: true }))
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Gentle vignette at bottom for seamless depth */}
          <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#0B0F19]/85 via-[#0B0F19]/40 to-transparent pointer-events-none z-10" />

          {/* Left Arrow Button (Appears on hover) */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              paginate(-1)
            }}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 hover:bg-[#1833FF] text-white border border-white/20 flex items-center justify-center z-20 cursor-pointer shadow-md backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} className="stroke-[2.5]" />
          </motion.button>

          {/* Right Arrow Button (Appears on hover) */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              paginate(1)
            }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/75 hover:bg-[#1833FF] text-white border border-white/20 flex items-center justify-center z-20 cursor-pointer shadow-md backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={18} className="stroke-[2.5]" />
          </motion.button>

          {/* Bottom Interactive Slide Indicator Dots */}
          <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 z-20 pointer-events-auto">
            <div className="flex items-center gap-1 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/15 shadow-sm">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={(e) => {
                    e.stopPropagation()
                    jumpTo(idx)
                  }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2 bg-[#FEF08A] shadow-[0_0_8px_#FEF08A]'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${s.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Secondary Floating Analytics Badge (Bottom-Right) ── */}
      {showFloatingPreview && (
        <motion.div
          className="absolute -bottom-5 -right-3 sm:-right-5 bg-white text-ink-black border-2 border-border-dark rounded-2xl p-3 shadow-[5px_5px_0px_#1833FF] max-w-[215px] hidden sm:flex flex-col gap-1.5 z-20 pointer-events-none"
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
        >
          <div className="flex items-center justify-between">
            <span
              className="px-1.5 py-0.5 text-ink-black font-mono text-[8.5px] font-black uppercase rounded border border-border-dark"
              style={{ backgroundColor: floatingCard?.tagBg || '#FEF08A' }}
            >
              {floatingCard?.tag || 'LIVE BUFFER'}
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          </div>
          <div className="font-display font-extrabold text-sm text-ink-black leading-tight">
            {floatingCard?.title || '14 Safe Cuts Left'}
          </div>
          <div className="font-mono text-[9px] text-ink-muted leading-tight">
            {floatingCard?.subtitle || 'Attendance rate 96.4% stays safely above academic threshold.'}
          </div>
        </motion.div>
      )}

      {/* ── Floating Badge Top Left ── */}
      {showFloatingPreview && (
        <motion.div
          className="absolute -top-3 -left-3 sm:-left-4 bg-[#74DEB6] text-ink-black border-2 border-border-dark rounded-xl px-2.5 py-1 shadow-[3px_3px_0px_#111111] hidden sm:flex items-center gap-1.5 z-20 pointer-events-none"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }}
        >
          <Sparkles size={11} className="stroke-[2.5]" />
          <span className="font-mono text-[9px] font-black uppercase tracking-wider">
            {topBadge?.label || 'SUB-SECOND SYNC'}
          </span>
        </motion.div>
      )}
    </div>
  )
}
