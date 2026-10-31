import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FileText,
  Maximize2,
  Sparkles,
  BookOpen,
  ArrowRight,
  Layers,
  Check,
} from 'lucide-react'
import ImageLightbox from '../ImageLightbox'

export default function WallsPamphletSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImg, setLightboxImg] = useState({ src: '', title: '', caption: '' })

  const openLightbox = (src: string, title: string, caption: string) => {
    setLightboxImg({ src, title, caption })
    setLightboxOpen(true)
  }

  const services = [
    {
      title: 'Curtains & Drapery',
      desc: 'Motorized blackout tracks, imported sheer voiles, acoustic velvet drapes, and luxury brass holdbacks.',
    },
    {
      title: 'Architectural Blinds',
      desc: 'Motorized roller shades, wooden Venetian slats, honeycomb thermal cells, and dual-roller zebra blinds.',
    },
    {
      title: 'Wallpapers & 3D Panels',
      desc: 'European embossed vinyl, acoustic fluted timber cladding, metallic brass inlays, and customized murals.',
    },
    {
      title: 'Flooring & Ceilings',
      desc: 'Engineered oak planks, luxury vinyl tiles, acoustic baffle ceilings, and indirect cove illumination.',
    },
    {
      title: 'Turnkey Residential',
      desc: 'Full-home soft furnishing consultations, site measurements, custom fabrication, and expert installation.',
    },
    {
      title: 'Commercial & Hospitality',
      desc: 'Flame-retardant contract fabrics, heavy-duty commercial shading, and corporate interior finishes.',
    },
  ]

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#FAF7EF] text-ink-black border-b-4 border-ink-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/5 border border-black/20 text-ink-black text-xs font-mono uppercase tracking-[0.2em] mb-3">
              <FileText className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 06 • Promotional Marketing Collateral</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink-black tracking-tight">
              Brochure &amp; Pamphlet Design
            </h2>
            <p className="mt-2 text-ink-light max-w-2xl font-light">
              High-impact promotional collateral engineered for direct customer engagement,
              showroom distribution, and architectural partner presentations.
            </p>
          </div>

          <a
            href="#brochure-reader"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-[#FAF7EF] hover:bg-[#C5A059] hover:text-black font-mono text-xs uppercase tracking-wider transition-all shadow-[3px_3px_0_0_#C5A059]"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Launch Digital Reader</span>
          </a>
        </div>

        {/* Pamphlet Feature Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column: Authentic Pamphlet Asset */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border-4 border-ink-black shadow-[8px_8px_0_0_#111111] bg-[#0B0F10] group">
              <img
                src="/images/projects/walls-window-spaces/pamphlets/curtains-blinds.png"
                alt="Curtains and Blinds Promotional Pamphlet"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                onError={(e) => {
                  const target = e.currentTarget
                  target.src =
                    'https://res.cloudinary.com/dkgb78kb/image/upload/v1793445295/Curtains_Blinds_3.png'
                }}
              />

              <button
                onClick={() =>
                  openLightbox(
                    '/images/projects/walls-window-spaces/pamphlets/curtains-blinds.png',
                    'Curtains & Blinds Promotional Pamphlet',
                    'A4 promotional marketing collateral highlighting the premier curtains, blinds, and interior furnishing range.'
                  )
                }
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/75 hover:bg-[#C5A059] text-white hover:text-black border border-white/20 transition-all shadow-md"
                title="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              <div className="absolute bottom-3 left-4 right-4 px-3 py-1.5 rounded bg-black/80 backdrop-blur-md text-xs font-mono text-[#E5C07B] border border-[#C5A059]/30 text-center">
                Original Client Marketing Pamphlet (A4 Format)
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Analysis & Service Directory */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="p-6 md:p-8 rounded-2xl bg-white border-3 border-ink-black shadow-[6px_6px_0_0_#111111]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FED7AA] border border-ink-black text-xs font-mono font-bold uppercase mb-4">
                <span>COMMERCIAL &amp; RESIDENTIAL CATALOGING</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-ink-black mb-3">
                Promotional Structure &amp; Service Alignment
              </h3>
              <p className="text-sm md:text-base text-ink-light font-light leading-relaxed mb-6">
                The promotional pamphlet was authored with visual clarity and commercial conversion
                in mind. It provides prospective homeowners and interior contractors with a structured
                breakdown of specialized offerings, supported by high-contrast imagery and transparent
                consultation callouts.
              </p>

              {/* 6 Service Pillars Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t-2 border-ink-black/10">
                {services.map((svc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#8C6D28]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-serif font-bold text-ink-black">
                        {svc.title}
                      </h4>
                      <p className="text-xs text-ink-light font-light leading-snug mt-0.5">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
