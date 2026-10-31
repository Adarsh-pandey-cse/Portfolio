import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Sparkles,
  BookOpen,
  MessageSquare,
  Layers,
  ChevronRight,
  Maximize2,
} from 'lucide-react'
import { wallsWindowSpacesProjectData } from '../../../data/projects/wallsWindowSpaces'

export default function WallsHero() {
  const data = wallsWindowSpacesProjectData
  const screens = data.mockupScreens || []
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)

  // Auto-slide hero screens on the right every 3 seconds with smooth animation
  useEffect(() => {
    if (screens.length <= 1) return
    const timer = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % screens.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [screens.length])

  return (
    <section className="relative w-full pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8 bg-gradient-to-b from-[#070A0B] via-[#0B0F10] to-[#121618] text-white border-b-4 border-ink-black overflow-hidden">
      {/* Background Architectural Luxury Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-b from-[#C5A059]/15 via-[#C5A059]/5 to-transparent rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-gradient-to-t from-[#C5A059]/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.8px,transparent_0.8px)] [background-size:28px_28px] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181D1F] border border-white/20 text-[#FAF7EF] hover:border-[#C5A059] hover:text-[#C5A059] transition-all text-xs font-mono tracking-wider shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO PORTFOLIO</span>
          </Link>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181D1F] border border-[#C5A059]/40 text-[#E5C07B] text-xs font-mono tracking-wider shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span>SIGNATURE BRANDING CASE STUDY</span>
          </div>
        </div>

        {/* Hero Grid: Left Content, Right Master Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Brand Identity, FIXED Master Logo, Titles, Description */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* FIXED Master Logo Display (DOES NOT CHANGE) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-6 group"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-[#14181A] border-2 border-[#C5A059]/60 p-2.5 shadow-[0_12px_40px_rgba(197,160,89,0.3)] flex items-center justify-center overflow-hidden">
                <img
                  src="/images/projects/walls-window-spaces/logo/original-logo.png"
                  alt="Walls & Window Spaces Master Logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_4px_16px_rgba(197,160,89,0.35)] transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.src =
                      'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444997/Walls_and_window_spaces_logo_13.png'
                  }}
                />

                {/* Gold specular shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Category Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#E5C07B] text-xs font-mono uppercase tracking-[0.2em] mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Branding / Graphic Design / Visual Identity</span>
            </motion.div>

            {/* Project Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08]"
            >
              Walls &amp; Window Spaces
            </motion.h1>

            {/* Subtitle / Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-2 text-xl md:text-2xl font-serif text-[#C5A059] italic flex items-center gap-3"
            >
              <span>Interiors That Inspire</span>
              <span className="w-12 h-[1px] bg-[#C5A059]/60 inline-block" />
            </motion.div>

            {/* Sub-heading */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-base md:text-lg text-[#FAF7EF]/80 font-light leading-relaxed max-w-xl"
            >
              Complete Brand Identity, Logo Design &amp; Marketing Collateral. A luxury visual identity
              developed for a premier interior solutions brand, combining architectural elegance,
              refined typography, and a timeless black-and-gold aesthetic.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {data.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-[11px] font-mono tracking-wider bg-[#14181A] border border-white/15 rounded text-[#FAF7EF]/90 uppercase"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#brochure-reader"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E5C07B] text-black font-semibold text-sm font-mono uppercase tracking-wider hover:shadow-[0_10px_25px_rgba(197,160,89,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <BookOpen className="w-4 h-4 fill-current" />
                <span>Open 3D Brochure</span>
              </a>

              {data.inquireUrl && (
                <a
                  href={data.inquireUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#1A1F21] border-2 border-[#C5A059]/60 text-[#E5C07B] hover:bg-[#C5A059] hover:text-black font-semibold text-sm font-mono uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss Branding</span>
                </a>
              )}
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Showcase (Auto-Sliding Every 3 Seconds) */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full rounded-2xl overflow-hidden border-3 border-[#C5A059]/40 bg-[#0B0F10] shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(197,160,89,0.15)] group"
            >
              {/* Browser / Frame Top Bar */}
              <div className="px-4 py-3 bg-[#131719] border-b border-[#C5A059]/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E5C07B] animate-pulse" />
                  <span className="w-3 h-3 rounded-full bg-white/30" />
                  <span className="w-3 h-3 rounded-full bg-white/20" />
                  <span className="ml-3 text-[11px] font-mono text-[#FAF7EF]/60 tracking-wider">
                    walls-window-spaces.design / identity
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#C5A059]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>AUTO-SLIDING • 3S</span>
                </div>
              </div>

              {/* Main Image Slider with smooth 3-second auto-transition */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A0B]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeScreenIndex}
                    src={screens[activeScreenIndex]?.src || data.heroImage.src}
                    alt={screens[activeScreenIndex]?.label || data.heroImage.alt}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget
                      const fallback = screens[activeScreenIndex]?.fallback
                      if (fallback && target.src !== fallback) {
                        target.src = fallback
                      }
                    }}
                  />
                </AnimatePresence>

                {/* Subtle dark vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Caption Bar */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white bg-black/75 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#C5A059]/30">
                  <span className="font-mono text-[#E5C07B] font-semibold">
                    {screens[activeScreenIndex]?.label}
                  </span>
                  <span className="text-[11px] text-[#FAF7EF]/70 font-light truncate max-w-[260px]">
                    {screens[activeScreenIndex]?.caption}
                  </span>
                </div>
              </div>

              {/* Bottom Thumbnail Strip with active gold highlight */}
              <div className="p-3 bg-[#0F1315] border-t border-white/10 grid grid-cols-4 gap-2">
                {screens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`relative rounded-md overflow-hidden aspect-[16/10] border-2 transition-all duration-300 ${
                      activeScreenIndex === idx
                        ? 'border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.6)] scale-[1.03]'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={screen.src}
                      alt={screen.label}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
