import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  Maximize2,
  ZoomIn,
  Shield,
  Palette,
  Building,
  CheckCircle2,
  Layers,
} from 'lucide-react'
import {
  wallsWindowSpacesLogoShowcase,
  type LogoShowcaseItem,
} from '../../../data/projects/wallsWindowSpaces'
import ImageLightbox from '../ImageLightbox'

export default function WallsLogoShowcase() {
  const items = wallsWindowSpacesLogoShowcase
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImg, setLightboxImg] = useState({ src: '', title: '', caption: '' })

  // Auto-slide logo applications smoothly every 3 seconds
  useEffect(() => {
    if (lightboxOpen) return
    const timer = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % items.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [items.length, lightboxOpen])

  const currentItem = items[selectedIdx]

  const openLightbox = (item: LogoShowcaseItem) => {
    setLightboxImg({
      src: item.src,
      title: item.title,
      caption: item.caption,
    })
    setLightboxOpen(true)
  }

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#FAF7EF] text-ink-black border-b-4 border-ink-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/5 border border-black/20 text-ink-black text-xs font-mono uppercase tracking-[0.2em] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 03 • Brand Mark &amp; Vector System</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink-black tracking-tight">
              Logo Design &amp; Brand Identity
            </h2>
            <p className="mt-2 text-ink-light max-w-2xl font-light">
              The signature architectural window arch emblem combined with cascading drapery curves.
              Auto-cycling through master dark, ivory letterhead, metallic gold foil, feature wall, and illuminated storefront signage.
            </p>
          </div>

          <div className="text-right flex flex-col items-end">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] text-[#E5C07B] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span>AUTO-CHANGING • 3 SECONDS</span>
            </span>
            <span className="text-xs font-mono text-ink-light mt-1">
              Application {selectedIdx + 1} of {items.length}
            </span>
          </div>
        </div>

        {/* Master Showcase: Left Featured Large Canvas, Right Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured View (Large & High Fidelity, Auto-Changes Every 3s) */}
          <div className="lg:col-span-7 flex flex-col">
            <div
              className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border-4 border-ink-black shadow-[8px_8px_0_0_#111111] transition-colors duration-500 flex items-center justify-center p-6 ${
                currentItem.theme === 'light' ? 'bg-[#FAF7EF]' : 'bg-[#0B0F10]'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, scale: 0.94, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.04, y: -10 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="max-w-full max-h-full object-contain filter drop-shadow-xl"
                    onError={(e) => {
                      const target = e.currentTarget
                      if (currentItem.fallback && target.src !== currentItem.fallback) {
                        target.src = currentItem.fallback
                      }
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Expand Lightbox Button */}
              <button
                onClick={() => openLightbox(currentItem)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/75 hover:bg-[#C5A059] text-white hover:text-black border border-white/20 transition-all shadow-md group cursor-pointer"
                title="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>

              {/* Category Pill on Image */}
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#C5A059]/40 text-[#E5C07B] text-[11px] font-mono tracking-widest uppercase">
                {currentItem.category}
              </div>
            </div>

            {/* Featured Caption */}
            <div className="mt-4 p-4 rounded-xl bg-white border-2 border-ink-black shadow-[4px_4px_0_0_#111111]">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-serif font-bold text-ink-black">
                  {currentItem.title}
                </h3>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-ink-black/20 text-ink-light font-semibold">
                  {selectedIdx + 1} / {items.length}
                </span>
              </div>
              <p className="mt-1 text-sm text-ink-light leading-relaxed">
                {currentItem.caption}
              </p>
            </div>
          </div>

          {/* Right Column: 6 Logo Applications Grid with synchronized active state */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {items.map((item, idx) => {
              const isActive = selectedIdx === idx
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group relative text-left rounded-xl p-3 border-3 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isActive
                      ? 'border-[#C5A059] bg-[#121618] text-white shadow-[6px_6px_0_0_#C5A059] scale-[1.03]'
                      : 'border-ink-black bg-white text-ink-black shadow-[4px_4px_0_0_#111111] hover:-translate-y-0.5 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Thumbnail Image Box */}
                  <div
                    className={`relative w-full aspect-video rounded-lg overflow-hidden border border-black/10 mb-2.5 flex items-center justify-center p-1.5 ${
                      item.theme === 'light' ? 'bg-[#FAF7EF]' : 'bg-[#070A0B]'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <span
                      className={`text-[9px] font-mono uppercase tracking-wider block ${
                        isActive ? 'text-[#E5C07B]' : 'text-[#8C6D28]'
                      }`}
                    >
                      {item.category}
                    </span>
                    <h4
                      className={`text-xs md:text-sm font-serif font-bold mt-0.5 line-clamp-1 ${
                        isActive ? 'text-white' : 'text-ink-black'
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxImg.src}
        title={lightboxImg.title}
        caption={lightboxImg.caption}
      />
    </section>
  )
}
