import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react'
import type { ProjectProblemSolution } from '../../types/projectDetail'

interface ProjectOverviewProps {
  heading: string
  subheading?: string
  cards: ProjectProblemSolution[]
}

const cardIcons = [AlertCircle, CheckCircle2, TrendingUp]

export default function ProjectOverview({
  heading,
  subheading,
  cards,
}: ProjectOverviewProps) {
  return (
    <section id="overview" className="w-full py-12 sm:py-16 lg:py-20 bg-surface scroll-mt-20 border-t-2 border-border-dark">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#FEF08A] border border-border-dark rounded-full inline-block shadow-[1px_1px_0px_#111111]" />
            <span className="font-mono text-xs font-black text-ink-black uppercase tracking-wider">
              01 • Product Context &amp; Purpose
            </span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink-black tracking-tight leading-tight">
            {heading}
          </h2>
          {subheading && (
            <p className="font-body text-xs sm:text-sm lg:text-base text-ink-muted mt-2 leading-relaxed">
              {subheading}
            </p>
          )}
        </div>

        {/* 3 Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, i) => {
            const Icon = cardIcons[i % cardIcons.length]
            return (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: `6px 6px 0px ${card.shadow}` }}
                className={`p-6 sm:p-7 ${card.color} border-2 border-border-dark rounded-3xl flex flex-col justify-between transition-all`}
                style={{ boxShadow: `4px 4px 0px ${card.shadow}` }}
              >
                <div>
                  {/* Card Header: Step Pill + Custom Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-white border-2 border-border-dark rounded-full font-mono text-xs font-black text-ink-black shadow-[1.5px_1.5px_0px_#111111]">
                      {card.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border-2 border-border-dark flex items-center justify-center text-ink-black shadow-[1.5px_1.5px_0px_#111111]">
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-ink-black tracking-tight mb-2">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-ink-black/85 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Decorative Indicator */}
                <div className="pt-4 mt-4 border-t border-border-dark/20 flex items-center justify-between text-ink-muted font-mono text-[10px] font-bold uppercase">
                  <span>Architecture Step {card.number}</span>
                  <span className="text-ink-black font-extrabold">Verified</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
