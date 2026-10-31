import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2, ExternalLink } from 'lucide-react'
import type { ProjectGalleryItem } from '../../types/projectDetail'

interface ImageLightboxProps {
  isOpen: boolean
  items: ProjectGalleryItem[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onSelectIndex: (index: number) => void
}

export default function ImageLightbox({
  isOpen,
  items,
  currentIndex,
  onClose,
  onNext,
  onPrev,
  onSelectIndex,
}: ImageLightboxProps) {
  const currentItem = items[currentIndex]

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to navigate
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [isOpen, onClose, onNext, onPrev]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !currentItem) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-ink-black/95 backdrop-blur-md p-3 sm:p-6 select-none"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Screenshot lightbox preview"
      >
        {/* Top Header Bar */}
        <div
          className="flex items-center justify-between gap-4 max-w-6xl w-full mx-auto pb-3 border-b border-white/15"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Active Image Index */}
          <div className="flex items-center gap-2.5">
            <span className="px-3 py-1 bg-pastel-butter text-ink-black font-mono text-xs font-black uppercase rounded-full border border-border-dark shadow-[1px_1px_0px_#111111]">
              SCREENSHOT {String(currentIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </span>
            <span className="font-display font-bold text-white text-sm sm:text-base hidden sm:inline truncate max-w-md">
              {currentItem.title}
            </span>
          </div>

          {/* Close button with high tactile visibility */}
          <motion.button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white text-ink-black border-2 border-border-dark rounded-full font-mono text-xs font-black uppercase shadow-[2px_2px_0px_#1833FF] hover:bg-pastel-peach transition-all cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Close fullscreen preview"
          >
            <span>CLOSE</span>
            <X size={14} className="stroke-[3]" />
          </motion.button>
        </div>

        {/* Center Image Showcase Frame */}
        <div
          className="relative flex-1 flex items-center justify-center my-auto p-2 sm:p-4 max-w-6xl w-full mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Prev Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            className="absolute left-2 sm:left-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white text-ink-black border-2 border-border-dark rounded-full flex items-center justify-center shadow-[3px_3px_0px_#111111] hover:bg-pastel-butter active:scale-95 transition-all cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={22} className="stroke-[2.5]" />
          </button>

          {/* Image display container */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[75vh] w-full flex flex-col items-center justify-center"
          >
            <div className="relative max-h-[70vh] w-full rounded-2xl border-2 border-border-dark bg-[#0B0F19] overflow-hidden shadow-[8px_8px_0px_#1833FF] flex items-center justify-center">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-h-[70vh] w-full object-contain select-none"
                onError={(e) => {
                  // Fallback styling when local screenshot file is not uploaded yet
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const fallbackEl = document.getElementById(`lightbox-fallback-${currentItem.id}`)
                  if (fallbackEl) fallbackEl.style.display = 'flex'
                }}
              />

              {/* Graceful Fallback if user hasn't uploaded image yet */}
              <div
                id={`lightbox-fallback-${currentItem.id}`}
                className="hidden w-full h-[50vh] min-h-[300px] flex-col items-center justify-center gap-3 p-6 text-center bg-[#0B0F19]"
              >
                <div className="w-12 h-12 rounded-2xl bg-pastel-butter border-2 border-border-dark flex items-center justify-center text-ink-black shadow-[2px_2px_0px_#1833FF]">
                  <Maximize2 size={24} />
                </div>
                <h4 className="font-display font-extrabold text-xl text-white">
                  {currentItem.title}
                </h4>
                <p className="font-body text-sm text-slate-300 max-w-lg leading-relaxed">
                  {currentItem.caption}
                </p>
                <span className="font-mono text-xs text-pastel-butter bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Target asset path: {currentItem.src}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-2 sm:right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white text-ink-black border-2 border-border-dark rounded-full flex items-center justify-center shadow-[3px_3px_0px_#111111] hover:bg-pastel-butter active:scale-95 transition-all cursor-pointer"
            aria-label="Next screenshot"
          >
            <ChevronRight size={22} className="stroke-[2.5]" />
          </button>
        </div>

        {/* Bottom Caption Bar with Pagination Dots */}
        <div
          className="max-w-6xl w-full mx-auto pt-3 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-300"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="font-body text-xs sm:text-sm text-slate-300 text-center sm:text-left truncate max-w-xl">
            {currentItem.caption}
          </p>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => onSelectIndex(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-6 h-2.5 bg-pastel-butter border border-border-dark shadow-[1px_1px_0px_#111111]'
                    : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Jump to screenshot ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
