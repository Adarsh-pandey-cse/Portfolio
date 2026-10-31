import { motion } from 'framer-motion'
import {
  Code2,
  Atom,
  FileCode2,
  Flame,
  Palette,
  Cpu,
  Layers,
  LucideIcon,
} from 'lucide-react'
import type { ProjectTechnology } from '../../types/projectDetail'

interface ProjectTechStackProps {
  heading: string
  subheading?: string
  technologies: ProjectTechnology[]
}

const techIconMap: Record<string, LucideIcon> = {
  Code2,
  Atom,
  FileCode2,
  Flame,
  Palette,
  Cpu,
  Layers,
}

export default function ProjectTechStack({
  heading,
  subheading,
  technologies,
}: ProjectTechStackProps) {
  return (
    <section id="technology" className="w-full py-12 sm:py-16 lg:py-20 bg-[#FDF9F1] border-t-2 border-border-dark scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 bg-[#FED7AA] border border-border-dark rounded-full inline-block shadow-[1px_1px_0px_#111111]" />
            <span className="font-mono text-xs font-black text-ink-black uppercase tracking-wider">
              04 • Technology Architecture
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

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech, i) => {
            const Icon = techIconMap[tech.iconName] || Code2
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, boxShadow: '5px 5px 0px #1833FF' }}
                className="p-5 sm:p-6 bg-white border-2 border-border-dark rounded-2xl sm:rounded-3xl shadow-[3.5px_3.5px_0px_#111111] flex flex-col justify-between transition-all group"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-surface-container border-2 border-border-dark flex items-center justify-center text-ink-black shadow-[1.5px_1.5px_0px_#111111] group-hover:scale-105 group-hover:rotate-6 transition-transform">
                      <Icon size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="px-2.5 py-0.5 bg-pastel-butter text-ink-black border border-border-dark rounded-full font-mono text-[9.5px] font-bold uppercase shadow-[1px_1px_0px_#111111]">
                      {tech.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display font-extrabold text-lg text-ink-black mb-1 group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>

                  {/* Role explanation */}
                  <p className="font-body text-xs sm:text-sm text-ink-muted leading-relaxed">
                    {tech.role}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="pt-3.5 mt-3.5 border-t border-border-dark/15 flex items-center justify-between text-ink-muted font-mono text-[10px]">
                  <span>{tech.category}</span>
                  <span className="text-emerald-700 font-bold">● Active in Prod</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
