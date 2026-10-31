import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import type { ProjectGalleryItem } from '../../types/projectDetail'
import ImageLightbox from './ImageLightbox'

interface ProjectGalleryProps {
  heading: string
  subheading: string
  items: ProjectGalleryItem[]
  projectTitle?: string
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
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
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    scale: 0.985,
  }),
}

export default function ProjectGallery({
  heading,
  subheading,
  items,
  projectTitle,
}: ProjectGalleryProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0])
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const currentIndex = ((page % items.length) + items.length) % items.length
  const currentItem = items[currentIndex]

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevPage]) => [prevPage + newDirection, newDirection])
    },
    []
  )

  const jumpTo = (targetIndex: number) => {
    if (targetIndex === currentIndex) return
    const dir = targetIndex > currentIndex ? 1 : -1
    setPage([targetIndex, dir])
  }

  // Smooth auto-slide timer: advances every 5 seconds, pauses when hovered or lightbox open
  useEffect(() => {
    if (isHovered || lightboxOpen) return
    const timer = setInterval(() => {
      paginate(1)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovered, lightboxOpen, paginate])

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (Math.abs(diff) > 45) {
      if (diff > 0) paginate(1)
      else paginate(-1)
    }
    setTouchStartX(null)
  }

  const getImageSource = (item: ProjectGalleryItem) => {
    if (imageErrors[item.id] && item.cloudinaryUrl) {
      return item.cloudinaryUrl
    }
    return item.src
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
              <motion.button
                onClick={() => paginate(-1)}
                className="w-10 h-10 bg-white hover:bg-pastel-butter border-2 border-border-dark rounded-full flex items-center justify-center shadow-[2px_2px_0px_#111111] transition-all cursor-pointer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} className="stroke-[2.5]" />
              </motion.button>

              {/* Next Button */}
              <motion.button
                onClick={() => paginate(1)}
                className="w-10 h-10 bg-white hover:bg-pastel-butter border-2 border-border-dark rounded-full flex items-center justify-center shadow-[2px_2px_0px_#111111] transition-all cursor-pointer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                aria-label="Next image"
              >
                <ChevronRight size={20} className="stroke-[2.5]" />
              </motion.button>
            </div>
          </div>

          {/* Main Gallery Display Frame */}
          <div
            className="relative w-full rounded-3xl bg-[#0B0F19] border-2 border-border-dark shadow-[8px_8px_0px_#111111] overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Frame Status Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0F172A] border-b-2 border-border-dark relative">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-black/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 border border-black/30" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-black/30" />
                <span className="font-mono text-[10px] text-slate-300 ml-2 hidden sm:inline font-bold">
                  {projectTitle ? `${projectTitle} UI` : 'Production UI'} • {currentItem.title}
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

              {/* Subtle auto-advance progress line at bottom of header */}
              {!isHovered && !lightboxOpen && (
                <motion.div
                  key={page}
                  className="absolute bottom-0 left-0 h-[2px] bg-[#FEF08A]/80"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              )}
            </div>

            {/* Active Screenshot Display Area with Soft Sliding Transition */}
            <div
              className="relative w-full min-h-[320px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center p-3 sm:p-6 bg-[#0B0F19] cursor-pointer group overflow-hidden"
              onClick={() => setLightboxOpen(true)}
              title="Click to view in fullscreen lightbox"
            >
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentItem.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 280, damping: 28 },
                    opacity: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
                    scale: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="relative w-full h-full flex flex-col items-center justify-center"
                >
                  <img
                    src={getImageSource(currentItem)}
                    alt={currentItem.alt}
                    loading="lazy"
                    className="max-h-[540px] w-full object-contain rounded-xl select-none group-hover:scale-[1.01] transition-transform duration-300"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [currentItem.id]: true }))
                    }}
                  />

                  {/* Subtle click hint badge */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white font-mono text-[10px] px-2.5 py-1 rounded-md border border-white/20 flex items-center gap-1 shadow-md pointer-events-none">
                    <Maximize2 size={11} />
                    <span>Click to expand</span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Floating Left Arrow on Gallery Frame */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(-1)
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#1833FF] text-white border border-white/20 flex items-center justify-center z-20 cursor-pointer shadow-lg backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} className="stroke-[2.5]" />
              </motion.button>

              {/* Floating Right Arrow on Gallery Frame */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  paginate(1)
                }}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-[#1833FF] text-white border border-white/20 flex items-center justify-center z-20 cursor-pointer shadow-lg backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={22} className="stroke-[2.5]" />
              </motion.button>
            </div>

            {/* Bottom Caption & Interactive Mini-Thumbnail Strip */}
            <div className="p-4 sm:p-5 bg-[#0F172A] border-t-2 border-border-dark flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-[#FEF08A] text-ink-black font-mono text-[9px] font-black uppercase rounded shadow-[1px_1px_0px_#111111]">
                    SCREEN {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-display font-extrabold text-white text-base truncate">
                    {currentItem.title}
                  </h4>
                </div>
                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentItem.caption}
                </p>
              </div>

              {/* Visual Thumbnail Strip (All 6 images selectable) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2 border-t border-slate-800">
                {items.map((item, idx) => {
                  const isActive = currentIndex === idx
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => jumpTo(idx)}
                      className={`relative rounded-xl border-2 overflow-hidden text-left p-1.5 transition-all cursor-pointer flex flex-col justify-between h-20 ${
                        isActive
                          ? 'bg-[#1E293B] border-[#FEF08A] shadow-[3px_3px_0px_#1833FF] scale-[1.02]'
                          : 'bg-[#0B0F19] border-slate-800 hover:border-slate-700 opacity-70 hover:opacity-100'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative w-full h-11 rounded-lg overflow-hidden bg-slate-900 border border-white/10 mb-1">
                        <img
                          src={getImageSource(item)}
                          alt={item.title}
                          className="w-full h-full object-cover object-top"
                          onError={() => {
                            setImageErrors((prev) => ({ ...prev, [item.id]: true }))
                          }}
                        />
                        {isActive && (
                          <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#FEF08A] shadow-[0_0_6px_#FEF08A]" />
                        )}
                      </div>
                      <span
                        className={`font-mono text-[9px] truncate block w-full ${
                          isActive ? 'text-[#FEF08A] font-bold' : 'text-slate-300'
                        }`}
                      >
                        {item.title}
                      </span>
                    </motion.button>
                  )
                })}
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
        onNext={() => paginate(1)}
        onPrev={() => paginate(-1)}
        onSelectIndex={(idx) => jumpTo(idx)}
      />
    </>
  )
}
