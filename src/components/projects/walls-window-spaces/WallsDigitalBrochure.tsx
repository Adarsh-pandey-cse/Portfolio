import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HTMLFlipBook from 'react-pageflip'
import type { HTMLFlipBookForwardRef } from 'react-pageflip'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Minimize2,
  BookOpen,
  Sparkles,
} from 'lucide-react'
import {
  wallsWindowSpacesBrochurePages,
  type BrochurePage,
} from '../../../data/projects/wallsWindowSpaces'

// Individual flip page component forwarding ref for react-pageflip
// 100% pristine visibility - ZERO dark overlays, zero obscuring pills
const FlipPage = React.forwardRef<
  HTMLDivElement,
  { page: BrochurePage; index: number; total: number }
>((props, ref) => {
  const { page, index } = props
  const isLeft = index % 2 === 1

  return (
    <div
      ref={ref}
      className="page relative w-full h-full bg-[#070A0B] overflow-hidden select-none flex items-center justify-center p-0.5"
      style={{
        boxShadow: isLeft
          ? 'inset -8px 0 12px -6px rgba(0,0,0,0.2)'
          : 'inset 8px 0 12px -6px rgba(0,0,0,0.2)',
      }}
    >
      {/* 100% full-resolution, un-overlayed, crystal-clear brochure artwork */}
      <img
        src={page.src}
        alt={page.title}
        className="w-full h-full object-contain pointer-events-none filter drop-shadow-sm"
        loading="eager"
        onError={(e) => {
          const target = e.currentTarget
          if (page.fallback && target.src !== page.fallback) {
            target.src = page.fallback
          }
        }}
      />
    </div>
  )
})

FlipPage.displayName = 'FlipPage'

export default function WallsDigitalBrochure() {
  const pages = wallsWindowSpacesBrochurePages
  const totalPages = pages.length
  const bookRef = useRef<HTMLFlipBookForwardRef>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [currentPage, setCurrentPage] = useState(0)
  // ALWAYS AUTO ON BY DEFAULT - User can toggle OFF anytime
  const [isAutoFlipOn, setIsAutoFlipOn] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileDirection, setMobileDirection] = useState<'next' | 'prev'>('next')

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-flip loop: ALWAYS AUTO-ON BY DEFAULT - continuously cycles spreads every 3.5 seconds
  useEffect(() => {
    if (!isAutoFlipOn) return

    const timer = setInterval(() => {
      if (isMobile) {
        setCurrentPage((prev) => {
          if (prev >= totalPages - 1) {
            setMobileDirection('next')
            return 0 // Loop continuously back to Cover
          }
          setMobileDirection('next')
          return prev + 1
        })
      } else {
        const currentIdx = bookRef.current?.pageFlip()?.getCurrentPageIndex() ?? 0
        if (currentIdx >= totalPages - 2) {
          // Loop seamlessly back to page 0 (Cover)
          bookRef.current?.pageFlip()?.flip(0)
        } else {
          bookRef.current?.pageFlip()?.flipNext()
        }
      }
    }, 3500)

    return () => clearInterval(timer)
  }, [isAutoFlipOn, isMobile, totalPages])

  // Pause autoplay only when browser tab is inactive to preserve performance
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsAutoFlipOn(false)
      } else {
        setIsAutoFlipOn(true)
      }
    }
    document.addEventListener('visibilitychange', handleVisibility)
    return () => document.removeEventListener('visibilitychange', handleVisibility)
  }, [])

  // Keyboard navigation: Arrow keys & Spacebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsAutoFlipOn((prev) => !prev)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, isMobile, totalPages])

  // Listen to fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const handleNext = () => {
    if (isMobile) {
      if (currentPage < totalPages - 1) {
        setMobileDirection('next')
        setCurrentPage((prev) => prev + 1)
      } else {
        setMobileDirection('next')
        setCurrentPage(0)
      }
    } else {
      const currentIdx = bookRef.current?.pageFlip()?.getCurrentPageIndex() ?? 0
      if (currentIdx >= totalPages - 2) {
        bookRef.current?.pageFlip()?.flip(0)
      } else {
        bookRef.current?.pageFlip()?.flipNext()
      }
    }
  }

  const handlePrev = () => {
    if (isMobile) {
      if (currentPage > 0) {
        setMobileDirection('prev')
        setCurrentPage((prev) => prev - 1)
      } else {
        setMobileDirection('prev')
        setCurrentPage(totalPages - 1)
      }
    } else {
      bookRef.current?.pageFlip()?.flipPrev()
    }
  }

  const handlePageSelect = (pageIndex: number) => {
    if (isMobile) {
      setMobileDirection(pageIndex > currentPage ? 'next' : 'prev')
      setCurrentPage(pageIndex)
    } else {
      bookRef.current?.pageFlip()?.flip(pageIndex)
    }
  }

  const toggleAutoFlip = () => {
    setIsAutoFlipOn((prev) => !prev)
  }

  const toggleFullscreen = async () => {
    if (!containerRef.current) return
    try {
      if (!document.fullscreenElement) {
        await containerRef.current.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch {
      // Graceful fallback
    }
  }

  const onFlipEvent = (e: { data: number }) => {
    setCurrentPage(e.data)
  }

  // Exact 1:1.413 A4 booklet page dimensions calibrated to fit standard screen heights (550px height)
  // Perfectly fits 100% zoom with ZERO cut-off and ZERO excessive closeness
  const bookWidth = isFullscreen ? 480 : 395
  const bookHeight = isFullscreen ? 678 : 558

  return (
    <section
      ref={containerRef}
      id="brochure-reader"
      className={`relative w-full py-12 md:py-16 px-3 sm:px-6 md:px-8 transition-colors duration-500 overflow-hidden ${
        isFullscreen
          ? 'bg-[#050708] min-h-screen flex flex-col justify-between p-4 sm:p-6 z-50 fixed inset-0'
          : 'bg-[#0A0D0E] border-y-4 border-ink-black text-white'
      }`}
    >
      {/* Background Architectural Luxury Ambience */}
      <div className="absolute inset-0 pointer-events-none opacity-35">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#C5A059]/15 via-[#C5A059]/5 to-transparent rounded-full blur-[160px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header Label & Title */}
        <div className="flex flex-col items-center text-center mb-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#161B1D] border border-[#C5A059]/50 text-[#E5C07B] text-xs font-mono uppercase tracking-[0.2em] mb-2.5 shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
            <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Interactive 3D Catalog Experience</span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Explore Our Brand Brochure
          </h2>
          <p className="mt-1 text-xs md:text-sm text-[#FAF7EF]/80 max-w-xl font-light">
            A photorealistic physical booklet simulation showcasing the complete 8-page collection.
            100% visible at default zoom with crystal-clear legibility and smooth auto-flipping.
          </p>
        </div>

        {/* ── 3D BOOK STAGE (CALIBRATED TO FIT FULLY IN 100% ZOOM & FULLSCREEN) ── */}
        <div className="w-full flex items-center justify-center my-3 relative">
          {isMobile ? (
            /* ── MOBILE SINGLE PAGE VIEW WITH 100% SHARPNESS & AUTO-FLIP ── */
            <div className="relative w-full max-w-[340px] aspect-[1055/1491] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_30px_rgba(197,160,89,0.2)] border-3 border-[#C5A059]/60 bg-[#070A0B]">
              <AnimatePresence mode="wait" custom={mobileDirection}>
                <motion.div
                  key={currentPage}
                  custom={mobileDirection}
                  initial={{
                    opacity: 0,
                    x: mobileDirection === 'next' ? 40 : -40,
                    scale: 0.98,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: mobileDirection === 'next' ? -40 : 40,
                    scale: 0.98,
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full relative flex items-center justify-center p-1 bg-[#070A0B]"
                >
                  <img
                    src={pages[currentPage].src}
                    alt={pages[currentPage].title}
                    className="w-full h-full object-contain filter drop-shadow-md"
                    onError={(e) => {
                      const target = e.currentTarget
                      if (pages[currentPage].fallback && target.src !== pages[currentPage].fallback) {
                        target.src = pages[currentPage].fallback
                      }
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Click zones for mobile swipe/tap */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-0 bottom-0 w-1/3 opacity-0 cursor-pointer"
                aria-label="Previous Page"
              />
              <button
                onClick={handleNext}
                className="absolute right-0 top-0 bottom-0 w-1/3 opacity-0 cursor-pointer"
                aria-label="Next Page"
              />
            </div>
          ) : (
            /* ── DESKTOP & TABLET: CALIBRATED 100% SPREAD (FIT FULLY WITHOUT VERTICAL CLIPPING) ── */
            <div className="relative p-3 sm:p-5 md:p-6 rounded-3xl bg-gradient-to-b from-[#14181A] via-[#0D1011] to-[#07090A] border-3 border-[#C5A059]/50 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(197,160,89,0.18)] max-w-[940px] w-full flex items-center justify-center">
              {/* Outer Presentation Stage with Layered Edge Gilded Thickness */}
              <div className="relative flex items-center justify-center">
                {/* Physical Left Page-Stack Gilded Thickness */}
                <div className="absolute -left-3 top-3 bottom-3 w-3 bg-gradient-to-r from-[#1c2225] via-[#C5A059]/40 to-[#0B0F10] rounded-l-md pointer-events-none border-l border-[#C5A059]/40 shadow-lg" />

                {/* Physical Right Page-Stack Gilded Thickness */}
                <div className="absolute -right-3 top-3 bottom-3 w-3 bg-gradient-to-l from-[#1c2225] via-[#C5A059]/40 to-[#0B0F10] rounded-r-md pointer-events-none border-r border-[#C5A059]/40 shadow-lg" />

                {/* Center Book Spine Hairline - Delicate & Non-Obscuring */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-[#C5A059]/70 via-[#E5C07B]/50 to-[#C5A059]/70 pointer-events-none z-20 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />

                <HTMLFlipBook
                  key={isFullscreen ? 'fullscreen-flipbook' : 'normal-flipbook'}
                  width={bookWidth}
                  height={bookHeight}
                  size="fixed"
                  minWidth={320}
                  maxWidth={520}
                  minHeight={450}
                  maxHeight={740}
                  drawShadow={true}
                  flippingTime={900}
                  usePortrait={false}
                  startZIndex={1}
                  autoSize={false}
                  maxShadowOpacity={0.25}
                  showCover={true}
                  mobileScrollSupport={true}
                  className="mx-auto rounded-lg overflow-hidden shadow-2xl"
                  ref={bookRef}
                  onFlip={onFlipEvent}
                >
                  {pages.map((page, idx) => (
                    <FlipPage
                      key={page.pageNumber}
                      page={page}
                      index={idx}
                      total={totalPages}
                    />
                  ))}
                </HTMLFlipBook>
              </div>

              {/* Large Floating Outer Chevrons */}
              <button
                onClick={handlePrev}
                className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#121618]/95 hover:bg-[#C5A059] text-[#E5C07B] hover:text-black border-2 border-[#C5A059]/60 flex items-center justify-center transition-all duration-300 z-30 shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:scale-110 active:scale-95 cursor-pointer"
                title="Previous Spread (Left Arrow)"
              >
                <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
              </button>

              <button
                onClick={handleNext}
                className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#121618]/95 hover:bg-[#C5A059] text-[#E5C07B] hover:text-black border-2 border-[#C5A059]/60 flex items-center justify-center transition-all duration-300 z-30 shadow-[0_10px_30px_rgba(0,0,0,0.85)] hover:scale-110 active:scale-95 cursor-pointer"
                title="Next Spread (Right Arrow)"
              >
                <ChevronRight className="w-7 h-7 stroke-[2.5]" />
              </button>
            </div>
          )}
        </div>

        {/* Current Spread Title & Subtitle Banner */}
        <div className="mt-3 mb-5 flex flex-col items-center text-center">
          <div className="text-base md:text-lg font-serif text-[#E5C07B] font-bold tracking-wide">
            {pages[currentPage]?.title || 'Brochure Spread'}
          </div>
          <div className="text-xs text-[#FAF7EF]/70 mt-0.5 max-w-lg font-light">
            {pages[currentPage]?.subtitle}
          </div>
        </div>

        {/* ── CENTRAL FLOATING CONTROL BAR (SINGLE LINED & COMPACT AUTO-FLIP) ── */}
        <div className="w-full flex items-center justify-center">
          <div className="inline-flex flex-nowrap items-center gap-2 sm:gap-3.5 px-4 sm:px-6 py-2 rounded-full bg-[#14181A] border-2 border-[#C5A059]/50 shadow-[0_12px_35px_rgba(0,0,0,0.7)] whitespace-nowrap">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#FAF7EF] hover:text-[#C5A059] hover:bg-white/5 transition-all cursor-pointer flex-shrink-0"
            >
              <ChevronLeft className="w-4 h-4 text-[#C5A059]" />
              <span>PREV</span>
            </button>

            {/* Compact Short Auto-Flip Button */}
            <button
              onClick={toggleAutoFlip}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-sm cursor-pointer flex-shrink-0 ${
                isAutoFlipOn
                  ? 'bg-gradient-to-r from-[#C5A059] to-[#E5C07B] text-black shadow-[0_0_12px_rgba(197,160,89,0.4)]'
                  : 'bg-[#1C2225] border border-[#C5A059]/60 text-[#E5C07B] hover:bg-white/10'
              }`}
              title={isAutoFlipOn ? 'Click to Pause Auto-Flip' : 'Click to Start Auto-Flip'}
            >
              {isAutoFlipOn ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                  <Pause className="w-3 h-3 fill-current" />
                  <span>AUTO ON</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current text-[#C5A059]" />
                  <span>AUTO OFF</span>
                </>
              )}
            </button>

            {/* Page Counter */}
            <div className="text-xs font-mono tracking-widest text-[#E5C07B] bg-black/60 px-3 py-1 rounded-full border border-[#C5A059]/30 flex-shrink-0">
              Page <span className="text-white font-bold">{currentPage + 1}</span> of {totalPages}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-[#FAF7EF] hover:text-[#C5A059] hover:bg-white/5 transition-all cursor-pointer flex-shrink-0"
            >
              <span>NEXT</span>
              <ChevronRight className="w-4 h-4 text-[#C5A059]" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 border border-white/20 text-[#FAF7EF]/80 hover:text-[#C5A059] hover:border-[#C5A059] font-mono text-xs transition-colors cursor-pointer flex-shrink-0"
              title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen View'}
            >
              {isFullscreen ? (
                <>
                  <Minimize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="hidden sm:inline">EXIT</span>
                </>
              ) : (
                <>
                  <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="hidden sm:inline">FULLSCREEN</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* ── THUMBNAIL CAROUSEL JUMP TRAY ── */}
        <div className="w-full mt-8 pt-5 border-t border-white/10 flex flex-col items-center">
          <div className="flex items-center gap-2 text-xs font-mono text-[#E5C07B] uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Select Any Page to Turn Directly</span>
          </div>

          <div className="w-full max-w-3xl flex items-center justify-center gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {pages.map((p, idx) => {
              const isActive =
                currentPage === idx || (!isMobile && Math.floor(currentPage / 2) === Math.floor(idx / 2))
              return (
                <button
                  key={p.pageNumber}
                  onClick={() => handlePageSelect(idx)}
                  className={`group relative flex-shrink-0 w-12 sm:w-14 md:w-16 aspect-[1055/1491] rounded-lg overflow-hidden transition-all duration-300 border-2 cursor-pointer ${
                    isActive
                      ? 'border-[#C5A059] shadow-[0_0_15px_rgba(197,160,89,0.6)] scale-105'
                      : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                  }`}
                  title={`${p.title} (Page ${p.pageNumber})`}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                  <span className="absolute bottom-0 inset-x-0 text-[9px] font-mono text-center bg-black/85 text-[#E5C07B] py-0.5 border-t border-white/10 font-bold">
                    {idx + 1}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
