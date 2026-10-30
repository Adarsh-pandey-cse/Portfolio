import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, MessageSquare } from 'lucide-react'
import MotionReveal from './MotionReveal'

interface GalleryItem {
  id: string
  title: string
  subtitle: string
  category: 'packaging' | 'vector' | 'print' | 'event'
  categoryLabel: string
  description: string
  bg: string
  spec: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 'royal-spice',
    title: 'The Royal Spice Kitchen',
    subtitle: 'Menu Grid & Typography',
    category: 'print',
    categoryLabel: 'Hospitality Print',
    description: 'Structured restaurant menu architecture with dual-column grid alignment, clean divider rules, and classical typography hierarchy.',
    bg: 'bg-pastel-butter',
    spec: 'Dual-Column • 300 DPI CMYK',
  },
  {
    id: 'hk-oswal-seal',
    title: 'H.K. Oswal Heritage Seal',
    subtitle: 'Vector Emblem Since 1957',
    category: 'vector',
    categoryLabel: 'Vector Craftsmanship',
    description: 'Crisp circular vector seal emblem featuring micro-filigree borders, heritage typography, and print-accurate debossing clearances.',
    bg: 'bg-pastel-mint',
    spec: 'Vector EPS • Zero Loss Scalability',
  },
  {
    id: 'noir-essence-box',
    title: 'Noir Essence Packaging',
    subtitle: 'Dieline & Foil Specs',
    category: 'packaging',
    categoryLabel: 'Industrial Dieline',
    description: '100ml Eau De Parfum folding carton layout with millimeter-accurate die-lines, glue-flap tolerances, and foil stamp registration masks.',
    bg: 'bg-pastel-peach',
    spec: 'Dieline Master • Spot UV Layer',
  },
  {
    id: 'voyage-black-poster',
    title: 'Voyage-Black \'26 Fest',
    subtitle: 'Campus Festival Poster',
    category: 'event',
    categoryLabel: 'Event Collateral',
    description: 'High-contrast neo-grotesque festival typography system engineered for large format campus banners and social media countdown rollouts.',
    bg: 'bg-pastel-sky',
    spec: 'A3 Master • 300 DPI CMYK',
  },
  {
    id: 'raghav-hangtag',
    title: 'Raghav Heritage Tag',
    subtitle: 'Artisan Textile Tag',
    category: 'packaging',
    categoryLabel: 'Textile Identity',
    description: 'Dual-sided luxury garment tag featuring artisanal filigree borders and precise die-cut eyelet clearances for cotton twine mounting.',
    bg: 'bg-pastel-lavender',
    spec: '350 GSM Matte • Die-Cut Eyelet',
  },
  {
    id: 'neural-ai-stage',
    title: 'Neural AI Stage Flex',
    subtitle: '15ft × 8ft Stage Backdrop',
    category: 'event',
    categoryLabel: 'Large Format Print',
    description: 'Auditorium main stage banner engineered with precise bleed offsets and high-contrast typography legible from row 40.',
    bg: 'bg-pastel-mint',
    spec: '180" × 96" • Large Format Flex',
  },
  {
    id: 'blk-eyewear-box',
    title: 'BLK Opticals Identity',
    subtitle: 'Industrial Geometry Case',
    category: 'vector',
    categoryLabel: 'Minimalist Vector',
    description: 'Monochrome luxury eyewear brand system with geometric sans-serif logo stamped on sleek titanium optical cases and lens cloth packaging.',
    bg: 'bg-pastel-peach',
    spec: 'Geometric Monogram • Pure Vector',
  },
  {
    id: 'typographic-poster',
    title: 'Typographic Kinetic Print',
    subtitle: 'Aesthetic 01 Specimen',
    category: 'print',
    categoryLabel: 'Poster Study',
    description: 'Experimental graphic design poster study with bold oversized grotesque numerals, chromatic ink traps, and tactile paper texture simulation.',
    bg: 'bg-pastel-butter',
    spec: 'Editorial Print • Type Specimen',
  },
]

type FilterKey = 'all' | 'packaging' | 'vector' | 'print' | 'event'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all')
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const filtered =
    activeFilter === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeFilter)

  return (
    <section id="gallery" className="w-full max-w-container mx-auto px-margin-mobile lg:px-margin py-space-xl scroll-mt-20">
      {/* Header */}
      <MotionReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="section-label">
              <span className="w-2 h-2 bg-primary rounded-full inline-block" />
              06 • Design &amp; Visual Vault
            </span>
            <h2 className="font-display font-extrabold text-headline-lg text-ink-black">
              Spreadsheets &amp; sketchbooks.
            </h2>
          </div>
          <p className="font-body text-body-sm text-ink-muted max-w-md">
            Tactile print layouts, menu architectures, packaging proofs, and vector typography studies crafted with mathematical precision.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-space-xs mb-space-lg" role="group" aria-label="Filter visual vault">
          {[
            { key: 'all' as FilterKey, label: 'All Artifacts' },
            { key: 'packaging' as FilterKey, label: 'Packaging & Dielines' },
            { key: 'vector' as FilterKey, label: 'Vector Crafts' },
            { key: 'print' as FilterKey, label: 'Print Layouts' },
            { key: 'event' as FilterKey, label: 'Stage & Events' },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-3.5 py-1.5 border-2 border-border-dark rounded-full font-mono text-label-sm uppercase transition-all duration-150 ${
                activeFilter === f.key
                  ? 'bg-ink-black text-white shadow-[2px_2px_0px_#1833FF]'
                  : 'bg-surface-container text-ink-black hover:bg-pastel-butter shadow-[2px_2px_0px_#111111]'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </MotionReveal>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="p-space-sm bg-white border-2 border-border-dark rounded-xl shadow-[4px_4px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#111111] transition-all flex flex-col gap-space-xs cursor-pointer group"
              onClick={() => setSelectedItem(item)}
            >
              {/* Media preview banner */}
              <div
                className={`h-56 ${item.bg} rounded-lg border border-border-dark p-4 flex flex-col justify-between overflow-hidden relative group-hover:brightness-95 transition-all`}
              >
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 bg-ink-black text-white font-mono text-label-sm rounded uppercase">
                    {item.categoryLabel}
                  </span>
                  <span className="text-ink-black opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn size={18} />
                  </span>
                </div>

                <div className="my-auto text-center px-2">
                  <h4 className="font-display font-extrabold text-headline-sm text-ink-black leading-tight">
                    {item.title}
                  </h4>
                  <p className="font-mono text-label-sm text-ink-muted mt-1">{item.subtitle}</p>
                </div>

                <div className="pt-2 border-t border-border-dark/20 flex items-center justify-between">
                  <span className="font-mono text-label-sm text-ink-black font-bold uppercase">{item.spec}</span>
                  <span className="text-xs text-ink-muted font-mono">SPEC</span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-1 py-1 flex items-center justify-between">
                <span className="font-mono text-label-sm font-bold text-ink-black truncate">{item.title}</span>
                <span className="font-mono text-label-sm text-ink-muted uppercase shrink-0">Inspect →</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal / Spec Drawer */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-black/75 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white border-2 border-border-dark rounded-2xl max-w-lg w-full p-space-lg shadow-[8px_8px_0px_#111111]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b-2 border-border-dark mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-secondary-container border border-border-dark rounded-full font-mono text-label-sm font-bold uppercase">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="font-mono text-label-sm text-ink-muted">{selectedItem.spec}</span>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-8 h-8 rounded-full border-2 border-border-dark bg-surface-container flex items-center justify-center hover:bg-pastel-peach transition-colors font-bold"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              <div className={`p-6 ${selectedItem.bg} border-2 border-border-dark rounded-xl mb-4 text-center`}>
                <h3 className="font-display font-extrabold text-headline-md text-ink-black mb-1">
                  {selectedItem.title}
                </h3>
                <p className="font-mono text-label-sm text-ink-muted uppercase">{selectedItem.subtitle}</p>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h5 className="font-mono text-label-sm text-ink-muted uppercase mb-1">Technical Architecture</h5>
                  <p className="font-body text-body-md text-ink-black leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div className="p-3 bg-surface-container border border-border-dark rounded-lg flex items-center justify-between">
                  <span className="font-mono text-label-sm text-ink-muted uppercase">Production Standard:</span>
                  <span className="font-mono text-label-sm font-bold text-ink-black">{selectedItem.spec}</span>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={`https://wa.me/918800795476?text=${encodeURIComponent(`Hello Adarsh, I am inquiring about the ${selectedItem.title} project specifications.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>Inquire About Vector &amp; Specs</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
