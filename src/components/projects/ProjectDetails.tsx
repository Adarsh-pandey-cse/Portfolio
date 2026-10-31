import { motion } from 'framer-motion'
import { ExternalLink, Check, Code, Shield, User, Tag, Calendar, Globe } from 'lucide-react'
import type { ProjectDetailInfo } from '../../types/projectDetail'

interface ProjectDetailsProps {
  details: ProjectDetailInfo
}

export default function ProjectDetails({ details }: ProjectDetailsProps) {
  const metadataItems = [
    { label: 'Project Name', value: details.projectName, icon: Tag },
    { label: 'Project Type', value: details.projectType, icon: Code },
    { label: 'Category', value: details.category, icon: Shield },
    { label: 'Deployment Status', value: details.status, icon: Globe },
    { label: 'My Role', value: details.role, icon: User },
  ]

  return (
    <section className="w-full py-12 sm:py-16 bg-[#FDF9F1] border-t-2 border-border-dark">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Panel Box */}
        <div className="p-6 sm:p-8 lg:p-10 bg-white border-2 border-border-dark rounded-3xl shadow-[6px_6px_0px_#111111]">
          {/* Top Panel Title */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b-2 border-border-dark">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 bg-[#FEF08A] border border-border-dark rounded-full inline-block shadow-[1px_1px_0px_#111111]" />
                <span className="font-mono text-xs font-black text-ink-black uppercase tracking-wider">
                  06 • Technical Dossier &amp; Metadata
                </span>
              </div>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-ink-black">
                Project Specification Index
              </h3>
            </div>

            {/* Live Link Button */}
            <motion.a
              href={details.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1833FF] text-white border-2 border-border-dark rounded-full font-mono text-xs font-black uppercase tracking-wider shadow-[2.5px_2.5px_0px_#111111] hover:bg-[#001DCC] transition-all self-start sm:self-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>{details.liveUrl}</span>
              <ExternalLink size={13} className="stroke-[2.5]" />
            </motion.a>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {metadataItems.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="font-mono text-[10.5px] text-ink-muted uppercase font-bold tracking-wider flex items-center gap-1.5">
                    <Icon size={13} className="text-ink-black" />
                    <span>{item.label}</span>
                  </span>
                  <span className="font-display font-extrabold text-base text-ink-black">
                    {item.value}
                  </span>
                </div>
              )
            })}

            {/* Technologies list */}
            <div className="flex flex-col gap-1 sm:col-span-2 lg:col-span-3">
              <span className="font-mono text-[10.5px] text-ink-muted uppercase font-bold tracking-wider mb-1 flex items-center gap-1.5">
                <Code size={13} className="text-ink-black" />
                <span>Verified Stack</span>
              </span>
              <div className="flex flex-wrap gap-2">
                {details.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-surface-container border border-border-dark rounded-md font-mono text-xs font-bold text-ink-black shadow-[1px_1px_0px_#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
