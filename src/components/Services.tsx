import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, MessageSquare } from 'lucide-react'
import { services } from '../data/services'
import MotionReveal from './MotionReveal'

const WA_URL = 'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20am%20interested%20in%20discussing%20a%20project.'

const principles = [
  'Outcome first',
  'Systems over heroics',
  '60fps visual speed',
  'Print-accurate vectors',
  'Clean code, clean craft',
]

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section
      id="services"
      className="w-full bg-ink-black text-white border-y-2 border-border-dark py-space-xl scroll-mt-20"
    >
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <MotionReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div className="flex flex-col gap-space-xs">
              <span className="flex items-center gap-2 font-mono text-label-md text-pastel-butter uppercase tracking-wider">
                <span className="w-2 h-2 bg-pastel-butter rounded-full inline-block" />
                03 • How I Operate & Capabilities
              </span>
              <h2 className="font-display font-extrabold text-headline-lg text-white">
                My operating manual.
              </h2>
            </div>
            <p className="font-body text-body-sm text-surface-dim max-w-md">
              Engineering principles developed across commercial freelance engagements and
              rigorous computer science curriculum.
            </p>
          </div>
        </MotionReveal>

        {/* Principles pills */}
        <MotionReveal delay={0.1}>
          <div className="flex flex-wrap gap-space-xs mb-space-lg">
            {principles.map((p, i) => (
              <span
                key={i}
                className={`px-4 py-1.5 rounded-full font-mono text-label-sm uppercase font-bold border ${
                  i === 0
                    ? 'bg-pastel-butter text-ink-black border-white/20'
                    : 'bg-white/10 text-white border-white/20'
                }`}
              >
                {p}
              </span>
            ))}
          </div>
        </MotionReveal>

        {/* Accordion services */}
        <div className="flex flex-col gap-space-md">
          {services.map((service, i) => {
            const isOpen = openId === service.id

            return (
              <MotionReveal key={service.id} delay={i * 0.08}>
                <div
                  className={`p-space-md lg:p-space-lg bg-white text-ink-black rounded-xl border-2 border-border-dark cursor-pointer transition-colors duration-200 ${
                    isOpen ? '' : service.hoverBg
                  }`}
                  style={{ boxShadow: `4px 4px 0px ${service.shadowColor}` }}
                  onClick={() => toggle(service.id)}
                  role="button"
                  aria-expanded={isOpen}
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(service.id) } }}
                >
                  {/* Accordion header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-md">
                      <span className="font-mono text-label-lg text-ink-muted">{service.number}</span>
                      <h3 className="font-display font-bold text-headline-sm text-ink-black">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-space-sm shrink-0">
                      <span
                        className="hidden sm:inline-block px-3 py-1 bg-ink-black text-white rounded-full font-mono text-label-sm"
                      >
                        {service.tools.slice(0, 2).join(' • ')}
                      </span>
                      <motion.div
                        className="text-ink-black flex items-center justify-center"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <ChevronDown size={22} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Expandable content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-space-md pt-space-md border-t-2 border-border-dark">
                          <p className="font-body text-body-md text-ink-black mb-space-sm leading-relaxed">
                            {service.description}
                          </p>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                            {/* Deliverables */}
                            <div>
                              <p className="font-mono text-label-sm text-ink-muted uppercase mb-2">
                                Deliverables
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {service.deliverables.map((d) => (
                                  <span
                                    key={d}
                                    className="px-2.5 py-1 bg-surface-container border border-border-dark rounded font-mono text-label-sm"
                                  >
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* CTA */}
                            <div className="flex items-end">
                              <a
                                href={WA_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-full justify-center flex items-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <MessageSquare size={16} />
                                <span>Discuss This Service</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </MotionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
