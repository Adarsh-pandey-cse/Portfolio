import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CreditCard,
  Maximize2,
  Sparkles,
  Layers,
  Printer,
  ShieldCheck,
  CheckCircle2,
  RotateCw,
} from 'lucide-react'
import {
  wallsWindowSpacesVisitingCards,
  type VisitingCardItem,
} from '../../../data/projects/wallsWindowSpaces'
import ImageLightbox from '../ImageLightbox'

export default function WallsVisitingCards() {
  const cards = wallsWindowSpacesVisitingCards
  const [activeIdx, setActiveIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImg, setLightboxImg] = useState({ src: '', title: '', caption: '' })

  // Auto-cycle visiting cards every 3 seconds with smooth animation
  useEffect(() => {
    if (lightboxOpen) return
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % cards.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [cards.length, lightboxOpen])

  const currentCard = cards[activeIdx]

  const openLightbox = (card: VisitingCardItem) => {
    setLightboxImg({
      src: card.src,
      title: card.title,
      caption: card.caption,
    })
    setLightboxOpen(true)
  }

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#101416] text-white border-b-4 border-ink-black overflow-hidden">
      {/* Background Gold Shimmer */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-t from-[#C5A059]/20 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#E5C07B] text-xs font-mono uppercase tracking-[0.2em] mb-3">
              <CreditCard className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 05 • Executive Stationery Architecture</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Visiting Card &amp; Stationery Design
            </h2>
            <p className="mt-2 text-[#FAF7EF]/75 max-w-2xl font-light">
              Crafted as an executive tangible handshake: 450 GSM obsidian duplex stock featuring
              precision hot-stamped gold foil, exact bleed margins, and verified client contact details.
            </p>
          </div>

          {/* Auto-Slide Indicator & Print Specs */}
          <div className="flex flex-col items-end gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#181D20] border border-[#C5A059]/50 text-[#E5C07B] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
              <span>AUTO-CHANGING • 3 SECONDS</span>
            </span>
            <div className="text-xs font-mono text-[#FAF7EF]/60">
              Card Perspective {activeIdx + 1} of {cards.length}
            </div>
          </div>
        </div>

        {/* ── MAIN FEATURED AUTO-CHANGING SHOWCASE (CHANGES EVERY 3S) ── */}
        <div className="mb-12 relative w-full rounded-3xl overflow-hidden border-4 border-[#C5A059]/50 bg-[#0B0F10] shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_rgba(197,160,89,0.15)] p-4 sm:p-8 flex flex-col items-center">
          {/* Top Label Bar */}
          <div className="w-full flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#E5C07B] tracking-widest uppercase">
                {currentCard.subtitle}
              </span>
              <span className="text-xs text-white/40">•</span>
              <span className="text-xs font-serif text-white/80 hidden sm:inline">
                {currentCard.title}
              </span>
            </div>

            <button
              onClick={() => openLightbox(currentCard)}
              className="text-xs font-mono text-[#FAF7EF]/70 hover:text-[#C5A059] flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-[#C5A059] transition-all cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Fullscreen</span>
            </button>
          </div>

          {/* Animated Card Presentation Stage */}
          <div className="relative w-full max-w-4xl aspect-[16/9] flex items-center justify-center overflow-hidden rounded-2xl bg-[#070A0B] border border-white/10 p-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCard.id}
                initial={{ opacity: 0, scale: 0.94, rotateY: 15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.04, rotateY: -15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full flex items-center justify-center relative"
              >
                <img
                  src={currentCard.src}
                  alt={currentCard.title}
                  className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
                  onError={(e) => {
                    const target = e.currentTarget
                    if (currentCard.fallback && target.src !== currentCard.fallback) {
                      target.src = currentCard.fallback
                    }
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Lighting Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Caption & Metadata Pill */}
          <div className="w-full max-w-4xl mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF7EF]/80 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10">
            <span className="font-serif text-[#E5C07B] font-bold text-sm">
              {currentCard.title}
            </span>
            <span className="text-xs text-[#FAF7EF]/70 font-light truncate max-w-md">
              {currentCard.caption}
            </span>
          </div>
        </div>

        {/* ── 5 INTERACTIVE CARDS SELECTOR STRIP WITH SYNCHRONIZED HIGHLIGHT ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cards.map((item, idx) => {
            const isActive = activeIdx === idx
            return (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`group relative rounded-xl overflow-hidden text-left p-2.5 border-2 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? 'border-[#C5A059] bg-[#161B1E] shadow-[0_0_20px_rgba(197,160,89,0.5)] scale-[1.04]'
                    : 'border-white/15 bg-[#121618] hover:border-white/40 opacity-70 hover:opacity-100'
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#070A0B] mb-2 flex items-center justify-center p-1">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-contain filter transition-transform duration-300 group-hover:scale-105"
                  />
                  {isActive && (
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_6px_#C5A059]" />
                  )}
                </div>

                <div>
                  <span className="text-[9px] font-mono uppercase tracking-wider text-[#C5A059] block">
                    {item.subtitle.split(' ')[0]}
                  </span>
                  <h4 className="text-xs font-serif font-bold text-white line-clamp-1 mt-0.5">
                    {item.title.replace('Visiting Card — ', '')}
                  </h4>
                </div>
              </button>
            )
          })}
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
