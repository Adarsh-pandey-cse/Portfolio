import { useState } from 'react'
import { Palette, Type, Copy, Check, Sparkles } from 'lucide-react'
import {
  wallsWindowSpacesColorTokens,
  type ColorToken,
} from '../../../data/projects/wallsWindowSpaces'

export default function WallsColorTypography() {
  const tokens = wallsWindowSpacesColorTokens
  const [copiedHex, setCopiedHex] = useState<string | null>(null)

  const handleCopy = (hex: string) => {
    navigator.clipboard?.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 2000)
  }

  return (
    <section className="relative w-full py-20 px-4 md:px-8 bg-[#FAF7EF] text-ink-black border-b-4 border-ink-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-black/5 border border-black/20 text-ink-black text-xs font-mono uppercase tracking-[0.2em] mb-3">
              <Palette className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Section 08 • Visual Design System</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-ink-black tracking-tight">
              Color Palette &amp; Typography
            </h2>
            <p className="mt-2 text-ink-light max-w-2xl font-light">
              Design tokens extracted directly from the master emblem and brand materials. A disciplined
              interplay of Obsidian Black and Imperial Metallic Gold grounded by Ivory Linen and Architectural Stone.
            </p>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-ink-light block">DESIGN TOKENS</span>
            <span className="text-sm font-mono font-semibold text-[#8C6D28] tracking-wider">
              5 EXTRACTED CHROMAS
            </span>
          </div>
        </div>

        {/* ── COLOR TOKENS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {tokens.map((token) => (
            <div
              key={token.hex}
              className="group rounded-2xl overflow-hidden border-3 border-ink-black shadow-[4px_4px_0_0_#111111] bg-white flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              {/* Swatch */}
              <div
                className={`w-full h-32 p-3 flex flex-col justify-between ${token.border || ''}`}
                style={{ backgroundColor: token.hex }}
              >
                <span
                  className={`text-[10px] font-mono tracking-widest uppercase font-semibold px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm self-start text-white`}
                >
                  {token.role.split(' ')[0]}
                </span>
                <button
                  onClick={() => handleCopy(token.hex)}
                  className="self-end px-2.5 py-1 rounded bg-black/60 hover:bg-black text-white text-xs font-mono flex items-center gap-1.5 transition-colors shadow-sm"
                  title="Copy Hex"
                >
                  {copiedHex === token.hex ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>{token.hex}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Token Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-ink-black">
                    {token.name}
                  </h4>
                  <p className="text-xs font-mono text-[#8C6D28] mt-0.5 font-semibold">
                    {token.role}
                  </p>
                  <p className="text-xs text-ink-light font-light mt-2 leading-relaxed">
                    {token.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── TYPOGRAPHY SPECIMEN HIERARCHY ── */}
        <div className="rounded-2xl border-4 border-ink-black bg-white p-6 md:p-10 shadow-[8px_8px_0_0_#111111]">
          <div className="flex items-center gap-2 mb-6">
            <Type className="w-5 h-5 text-[#8C6D28]" />
            <h3 className="text-xl md:text-2xl font-serif font-bold text-ink-black">
              Typographic System &amp; Hierarchy
            </h3>
          </div>

          <div className="space-y-8 divide-y-2 divide-ink-black/10">
            {/* Display Serif */}
            <div className="pt-6 first:pt-0 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#8C6D28] uppercase font-bold tracking-widest block">
                  DISPLAY &amp; HEADINGS
                </span>
                <span className="text-sm font-serif text-ink-black font-semibold">
                  Classical High-Contrast Serif
                </span>
                <span className="text-xs font-mono text-ink-light block mt-1">
                  Styles: Bold, Medium, Italic
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="text-3xl md:text-4xl font-serif font-bold text-ink-black tracking-tight leading-tight">
                  Interiors That Inspire Architectural Purity.
                </p>
                <p className="text-lg font-serif italic text-[#8C6D28] mt-1">
                  Curtains, Blinds, Wallpapers &amp; Bespoke Luxury Solutions.
                </p>
              </div>
            </div>

            {/* Editorial Body Text */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#8C6D28] uppercase font-bold tracking-widest block">
                  EDITORIAL BODY &amp; DESCRIPTIONS
                </span>
                <span className="text-sm font-sans text-ink-black font-semibold">
                  Modern Clean Geometric Sans
                </span>
                <span className="text-xs font-mono text-ink-light block mt-1">
                  Styles: Regular, Light (Leading 1.6)
                </span>
              </div>
              <div className="md:col-span-8">
                <p className="text-sm md:text-base text-ink-light font-light leading-relaxed">
                  Walls &amp; Window Spaces bridges the gap between architectural precision and artisanal
                  interior finishes. Every fabric weight, blind motor, and acoustic timber panel is selected
                  to elevate contemporary living standards with timeless distinction.
                </p>
              </div>
            </div>

            {/* Micro Metadata & Badges */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
              <div className="md:col-span-4">
                <span className="text-xs font-mono text-[#8C6D28] uppercase font-bold tracking-widest block">
                  METADATA, LABELS &amp; DIELINES
                </span>
                <span className="text-sm font-mono text-ink-black font-semibold">
                  Spaced Monospace / All-Caps
                </span>
                <span className="text-xs font-mono text-ink-light block mt-1">
                  Tracking: +0.2em • Upper-Case
                </span>
              </div>
              <div className="md:col-span-8 flex flex-wrap gap-3">
                <span className="px-3 py-1 rounded bg-[#0B0F10] text-[#E5C07B] font-mono text-xs tracking-[0.2em] uppercase">
                  450 GSM DUPLEX
                </span>
                <span className="px-3 py-1 rounded bg-[#FAF7EF] border border-ink-black text-ink-black font-mono text-xs tracking-[0.2em] uppercase">
                  3MM BLEED MARGIN
                </span>
                <span className="px-3 py-1 rounded bg-[#FED7AA] border border-ink-black text-ink-black font-mono text-xs tracking-[0.2em] uppercase">
                  SPOT UV • 24K FOIL
                </span>
                <span className="px-3 py-1 rounded bg-[#C5A059] text-black font-mono text-xs tracking-[0.2em] uppercase font-bold">
                  CMYK ISO 12647-2
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
