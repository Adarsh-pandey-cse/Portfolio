import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react'
import { wallsWindowSpacesProjectData } from '../../../data/projects/wallsWindowSpaces'

export default function WallsFinalShowcase() {
  const data = wallsWindowSpacesProjectData

  return (
    <section className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-[#0B0F10] via-[#070A0B] to-black text-white border-t-4 border-ink-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#C5A059]/20 via-[#C5A059]/5 to-transparent rounded-full blur-[150px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Large Original Logo Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-36 h-36 md:w-48 md:h-48 rounded-3xl bg-[#121618] border-3 border-[#C5A059]/60 p-4 shadow-[0_20px_50px_rgba(197,160,89,0.25)] flex items-center justify-center mb-8 group"
        >
          <img
            src="/images/projects/walls-window-spaces/logo/original-logo.png"
            alt="Walls & Window Spaces Master Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_8px_20px_rgba(197,160,89,0.35)] transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              const target = e.currentTarget
              target.src =
                'https://res.cloudinary.com/dkgb78kb/image/upload/v1793444997/Walls_and_window_spaces_logo_13.png'
            }}
          />
          <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
        </motion.div>

        {/* Brand Name */}
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
          Walls &amp; Window Spaces
        </h2>

        {/* Final Tagline */}
        <div className="mt-3 text-2xl md:text-3xl font-serif italic text-[#C5A059] flex items-center justify-center gap-4">
          <span className="w-12 h-[1px] bg-[#C5A059]/50 hidden sm:inline-block" />
          <span>Interiors That Inspire</span>
          <span className="w-12 h-[1px] bg-[#C5A059]/50 hidden sm:inline-block" />
        </div>

        <p className="mt-4 text-base md:text-lg text-[#FAF7EF]/75 max-w-xl font-light leading-relaxed">
          Complete Brand Identity, Logo Design, Executive Visiting Cards, Promotional Collateral,
          Showroom Signage &amp; Interactive 8-Page Brand Brochure.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-ink-black hover:bg-[#C5A059] font-mono text-xs uppercase font-bold tracking-wider transition-all shadow-[4px_4px_0_0_#C5A059] hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Project Gallery</span>
          </Link>

          {data.inquireUrl && (
            <a
              href={data.inquireUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E5C07B] text-black font-mono text-xs uppercase font-bold tracking-wider hover:opacity-95 transition-all shadow-lg hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Commission a Brand Suite</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Attribution Footnote */}
        <div className="mt-14 pt-8 border-t border-white/10 text-xs font-mono text-[#FAF7EF]/40">
          DESIGNED &amp; ART-DIRECTED BY ADARSH PANDEY • LUXURY BRANDING &amp; GRAPHIC DESIGN
        </div>
      </div>
    </section>
  )
}
