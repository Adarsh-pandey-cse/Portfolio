import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  Layers,
  Monitor,
  Smartphone,
  ExternalLink,
} from 'lucide-react'
import type { ProjectGalleryItem } from '../../types/projectDetail'
import ImageLightbox from './ImageLightbox'

interface ProjectGalleryProps {
  heading: string
  subheading: string
  items: ProjectGalleryItem[]
}

export default function ProjectGallery({
  heading,
  subheading,
  items,
}: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const currentItem = items[currentIndex]

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }, [items.length])

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }, [items.length])

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (Math.abs(diff) > 45) {
      if (diff > 0) handleNext()
      else handlePrev()
    }
    setTouchStartX(null)
  }

  return (
    <>
      <section
        id="gallery"
        className="w-full py-12 sm:py-16 lg:py-20 bg-surface border-t-2 border-border-dark scroll-mt-20 overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 bg-[#BAE6FD] border border-border-dark rounded-full inline-block shadow-[1px_1px_0px_#111111]" />
                <span className="font-mono text-xs font-black text-ink-black uppercase tracking-wider">
                  03 • Visual Product Walkthrough
                </span>
              </div>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink-black tracking-tight leading-tight">
                {heading}
              </h2>
              <p className="font-body text-xs sm:text-sm lg:text-base text-ink-muted mt-1 leading-relaxed">
                {subheading}
              </p>
            </div>

            {/* Carousel Controls & Counter (Desktop) */}
            <div className="flex items-center gap-3 self-start md:self-end">
              {/* Active Image Counter */}
              <span className="px-3.5 py-1.5 bg-white border-2 border-border-dark rounded-full font-mono text-xs font-black text-ink-black shadow-[2px_2px_0px_#111111]">
                {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="w-10 h-10 bg-white hover:bg-pastel-butter border-2 border-border-dark rounded-full flex items-center justify-center shadow-[2px_2px_0px_#111111] active:scale-95 transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="stroke-[2.5]" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="w-10 h-10 bg-white hover:bg-pastel-butter border-2 border-border-dark rounded-full flex items-center justify-center shadow-[2px_2px_0px_#111111] active:scale-95 transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight size={20} className="stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Main Gallery Display Frame */}
          <div
            className="relative w-full rounded-3xl bg-[#0B0F19] border-2 border-border-dark shadow-[8px_8px_0px_#111111] overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Frame Status Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0F172A] border-b-2 border-border-dark">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-black/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-black/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black/30" />
                <span className="font-mono text-[10px] text-slate-400 ml-2 hidden sm:inline">
                  AttendX Product View
                </span>
              </div>

              {/* Expand Lightbox Button */}
              <motion.button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-pastel-butter text-ink-black border border-border-dark rounded-full font-mono text-[11px] font-bold uppercase shadow-[1.5px_1.5px_0px_#111111] transition-all cursor-pointer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Maximize2 size={12} className="stroke-[2.5]" />
                <span>EXPAND FULLSCREEN</span>
              </motion.button>
            </div>

            {/* Active Screenshot Display Area */}
            <div className="relative w-full min-h-[320px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center p-3 sm:p-6 bg-[#0B0F19]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full flex flex-col items-center justify-center"
                >
                  {/* Image element with object-contain */}
                  <img
                    src={currentItem.src}
                    alt={currentItem.alt}
                    loading="lazy"
                    className="max-h-[500px] w-full object-contain rounded-xl select-none"
                    onError={(e) => {
                      const target = e.currentTarget
                      target.style.display = 'none'
                      const fallback = document.getElementById(`gallery-fallback-${currentItem.id}`)
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />

                  {/* Fallback Representation when image file is pending upload */}
                  <div
                    id={`gallery-fallback-${currentItem.id}`}
                    className="hidden w-full max-w-2xl py-12 px-6 flex-col items-center justify-center text-center gap-4 bg-[#0F172A] border-2 border-slate-800 rounded-2xl"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#FEF08A] border-2 border-border-dark flex items-center justify-center text-ink-black shadow-[3px_3px_0px_#1833FF]">
                      {currentItem.type === 'mobile' ? (
                        <Smartphone size={28} className="stroke-[2]" />
                      ) : (
                        <Monitor size={28} className="stroke-[2]" />
                      )}
                    </div>
                    <div>
                      <span className="px-2.5 py-0.5 bg-[#1833FF] text-white font-mono text-[10px] font-bold uppercase rounded border border-border-dark">
                        {currentItem.type.toUpperCase()} PREVIEW
                      </span>
                      <h3 className="font-display font-extrabold text-xl text-white mt-2">
                        {currentItem.title}
                      </h3>
                      <p className="font-body text-xs sm:text-sm text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
                        {currentItem.caption}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-col items-center gap-1">
                      <span className="font-mono text-[10px] text-pastel-butter bg-white/10 px-3 py-1 rounded-full border border-white/20">
                        Drop screenshot to: {currentItem.src}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Caption & Thumbnails Strip */}
            <div className="p-4 sm:p-5 bg-[#0F172A] border-t-2 border-border-dark flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#FEF08A] text-ink-black font-mono text-[9px] font-black uppercase rounded shadow-[1px_1px_0px_#111111]">
                    FEATURED SCREEN
                  </span>
                  <h4 className="font-display font-bold text-white text-sm sm:text-base truncate">
                    {currentItem.title}
                  </h4>
                </div>
                <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                  {currentItem.caption}
                </p>
              </div>

              {/* Thumbnail Selector Dots */}
              <div className="flex items-center gap-2 flex-wrap">
                {items.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] font-bold transition-all cursor-pointer ${
                      currentIndex === idx
                        ? 'bg-pastel-butter text-ink-black border-border-dark shadow-[2px_2px_0px_#1833FF] scale-105'
                        : 'bg-[#1E293B] text-slate-300 border-slate-700 hover:bg-slate-800'
                    }`}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        items={items}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onNext={handleNext}
        onPrev={handlePrev}
        onSelectIndex={(idx) => setCurrentIndex(idx)}
      />
    </>
  )
}
