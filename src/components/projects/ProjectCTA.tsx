import { motion } from 'framer-motion'
import { ExternalLink, ArrowLeft, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProjectCTAProps {
  heading: string
  description: string
  liveUrl?: string
  inquireUrl?: string
  primaryText?: string
  secondaryText?: string
}

export default function ProjectCTA({
  heading,
  description,
  liveUrl,
  inquireUrl,
  primaryText = 'OPEN LIVE APPLICATION',
  secondaryText = 'BACK TO ALL PROJECTS',
}: ProjectCTAProps) {
  return (
    <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#FEF08A] border-t-2 border-border-dark relative overflow-hidden">
      {/* Background Decorative Sparkles */}
      <div className="absolute top-8 right-12 w-20 h-20 opacity-20 pointer-events-none hidden sm:block">
        <Sparkles size={80} className="text-ink-black" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto flex flex-col items-center gap-4 sm:gap-6"
        >
          {/* Eyebrow */}
          <span className="px-3.5 py-1 bg-white border-2 border-border-dark rounded-full font-mono text-xs font-black uppercase tracking-wider text-ink-black shadow-[2px_2px_0px_#111111]">
            TRY IT IN PRODUCTION
          </span>

          {/* Heading */}
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink-black tracking-tight leading-tight">
            {heading}
          </h2>

          {/* Description */}
          <p className="font-body text-sm sm:text-base md:text-lg text-ink-black/85 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            {/* Primary Action Button */}
            <motion.a
              href={
                liveUrl ||
                inquireUrl ||
                'https://wa.me/918800795476?text=Hello%20Adarsh,%20I%20would%20like%20to%20discuss%20a%20branding%20project'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-ink-black hover:bg-black text-white border-2 border-border-dark rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_#1833FF] hover:shadow-[6px_6px_0px_#1833FF] transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{primaryText}</span>
              <ExternalLink size={16} className="stroke-[2.5]" />
            </motion.a>

            {/* Back to All Projects */}
            <Link to="/#projects">
              <motion.button
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-white hover:bg-surface-container text-ink-black border-2 border-border-dark rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_#111111] hover:shadow-[5px_5px_0px_#111111] transition-all cursor-pointer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <ArrowLeft size={16} className="stroke-[2.5]" />
                <span>{secondaryText}</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
