import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Users,
  TrendingUp,
  BarChart3,
  CalendarDays,
  Flame,
  Award,
  FileDown,
  BookOpenCheck,
  LucideIcon,
  ExternalLink,
} from 'lucide-react'
import type { ProjectFeature } from '../../types/projectDetail'

interface ProjectFeatureGridProps {
  heading: string
  subheading?: string
  features: ProjectFeature[]
}

const iconMap: Record<string, LucideIcon> = {
  CheckCircle2,
  Users,
  TrendingUp,
  BarChart3,
  CalendarDays,
  Flame,
  Award,
  FileDown,
  BookOpenCheck,
}

export default function ProjectFeatureGrid({
  heading,
  subheading,
  features,
}: ProjectFeatureGridProps) {
  return (
    <section id="features" className="w-full py-12 sm:py-16 lg:py-20 bg-[#F4EFEA] border-t-2 border-border-dark scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#74DEB6] border border-border-dark rounded-full inline-block shadow-[1px_1px_0px_#111111]" />
            <span className="font-mono text-xs font-black text-ink-black uppercase tracking-wider">
              02 • Core Feature Arsenal
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

        {/* 9 Features Grid (3x3 on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.iconName] || CheckCircle2
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, boxShadow: '6px 6px 0px #1833FF' }}
                className="p-5 sm:p-6 bg-white border-2 border-border-dark rounded-2xl sm:rounded-3xl shadow-[3.5px_3.5px_0px_#111111] flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Top: Custom Icon + Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-container border-2 border-border-dark flex items-center justify-center text-ink-black shadow-[1.5px_1.5px_0px_#111111] group-hover:scale-105 group-hover:rotate-6 transition-transform">
                      <Icon size={20} className="stroke-[2.5]" />
                    </div>
                    {feature.badge && (
                      <span className="px-2.5 py-0.5 bg-[#FEF08A] text-ink-black border border-border-dark rounded-full font-mono text-[10px] font-bold uppercase shadow-[1px_1px_0px_#111111]">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-base sm:text-lg text-ink-black mb-1.5 leading-snug group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed min-h-[40px]">
                    {feature.description}
                  </p>

                  {/* Dedicated Production UI Preview Graphic */}
                  {feature.previewImage && (
                    <div className="relative w-full h-28 rounded-xl overflow-hidden border-2 border-border-dark mt-4 bg-[#0B0F19] group-hover:shadow-[3px_3px_0px_#1833FF] transition-all">
                      <img
                        src={feature.previewImage}
                        alt={`${feature.title} Production UI`}
                        loading="lazy"
                        className="w-full h-full object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 select-none"
                        onError={(e) => {
                          e.currentTarget.src = '/projects/attendx/dashboard_dark.png'
                        }}
                      />
                      <div className="absolute top-1.5 right-1.5 px-2 py-0.5 bg-black/85 backdrop-blur-sm text-white rounded font-mono text-[8.5px] font-bold border border-white/20">
                        Production UI
                      </div>
                    </div>
                  )}
                </div>

                {/* Sub-UI Indicator Pill */}
                <div className="pt-3.5 mt-4 border-t border-border-dark/15 flex items-center justify-between text-ink-black">
                  <span className="font-mono text-[10px] text-ink-muted uppercase font-semibold">
                    Feature #{String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    <span className="font-mono text-[9px] text-emerald-600 font-bold uppercase">
                      ACTIVE
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
