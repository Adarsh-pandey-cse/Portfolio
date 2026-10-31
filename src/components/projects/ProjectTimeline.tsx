import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import type { ProjectTimelineStage } from '../../types/projectDetail'

interface ProjectTimelineProps {
  heading: string
  subheading?: string
  stages: ProjectTimelineStage[]
}

export default function ProjectTimeline({
  heading,
  subheading,
  stages,
}: ProjectTimelineProps) {
  return (
    <section id="process" className="w-full py-12 sm:py-16 lg:py-20 bg-[#F4EFEA] border-t-2 border-border-dark scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#DDD6FE] border border-border-dark rounded-full inline-block shadow-[1px_1px_0px_#111111]" />
            <span className="font-mono text-xs font-black text-ink-black uppercase tracking-wider">
              05 • Engineering Methodology
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

        {/* 4 Stages Horizontal/Vertical Grid with Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, boxShadow: '5px 5px 0px #1833FF' }}
              className="p-5 sm:p-6 bg-white border-2 border-border-dark rounded-2xl sm:rounded-3xl shadow-[3.5px_3.5px_0px_#111111] flex flex-col justify-between transition-all"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="px-3 py-1 bg-pastel-butter border-2 border-border-dark rounded-full font-mono text-xs font-black text-ink-black shadow-[1.5px_1.5px_0px_#111111]">
                    STAGE {stage.step}
                  </span>
                  {i < stages.length - 1 && (
                    <ArrowRight size={16} className="text-ink-muted hidden lg:block" />
                  )}
                </div>

                {/* Stage Title */}
                <h3 className="font-display font-extrabold text-base sm:text-lg text-ink-black mb-2 leading-snug">
                  {stage.title}
                </h3>

                {/* Description */}
                <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                  {stage.description}
                </p>
              </div>

              {/* Deliverables Chips */}
              {stage.deliverables && stage.deliverables.length > 0 && (
                <div className="pt-3 border-t border-border-dark/15 flex flex-col gap-1.5 mt-auto">
                  <span className="font-mono text-[9px] uppercase font-bold text-ink-muted">
                    Key Deliverables:
                  </span>
                  <div className="flex flex-col gap-1">
                    {stage.deliverables.map((d) => (
                      <div key={d} className="flex items-center gap-1.5 text-xs text-ink-black font-medium">
                        <CheckCircle2 size={12} className="text-emerald-700 shrink-0 stroke-[2.5]" />
                        <span className="text-[11px] sm:text-xs">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
