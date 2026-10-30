import { motion } from 'framer-motion'
import MotionReveal from './MotionReveal'
import {
  Printer,
  Users,
  Calendar,
  Trophy,
  Briefcase,
  CheckCircle,
  MessageSquare,
} from 'lucide-react'

const WA_CAMPUS =
  'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20would%20like%20to%20collaborate%20on%20a%20campus%20initiative%20or%20design%20work.'

const stats = [
  { value: '45+', label: 'Print & Vector Assets', icon: Printer },
  { value: '1,200+', label: 'Attendees Reached', icon: Users },
  { value: '8+', label: 'Technical Sessions', icon: Calendar },
  { value: '2', label: 'Hackathon Podiums', icon: Trophy },
]

const hackathons = [
  {
    org: 'AKTU Inter-College • 2025',
    title: 'AKTU Inter-College Neural Hack \'25',
    subtitle: '1st Runner Up',
    desc: 'Smart Attendance & ML Predictive Analytics Engine. Engineered a computer vision face embedding pipeline linked to a student risk classification dashboard with responsive UI architecture.',
    tools: ['Python', 'FastAPI', 'LLM', 'React'],
    score: '9.6 / 10',
    scoreLabel: 'Jury Rating',
    bg: 'bg-pastel-butter',
    shadow: '#FACC15',
  },
  {
    org: 'Voyager Club TechSprint • 2025',
    title: 'Voyager Club 36-Hour TechSprint',
    subtitle: 'Special Jury Recognition',
    desc: 'AlgoTronic Campus Task Exchange. Built an ultra-fast peer exchange platform with tactile micro-interactions, algorithmic updates, and clean modular component systems.',
    tools: ['TypeScript', 'Supabase', 'Solo', 'Next.js'],
    score: '98 / 100',
    scoreLabel: 'UX Usability Score',
    bg: 'bg-pastel-mint',
    shadow: '#74DEB6',
  },
]

const clubs = [
  {
    name: 'Voyager Club',
    subtitle: 'Creative & Tech Society — KCCITM',
    role: 'Graphic Designer Core Member',
    period: 'Feb 2026 — Present',
    status: 'Active Member',
    responsibilities: [
      'Visual Identity Direction: Developed event themes, typography hierarchies, print specs, and branding guidelines for campus festivals.',
      'Large-Format Print Design: Produced print-ready CMYK files for 15×8ft backdrops, banners, and layouts for 1,200+ attendee events.',
      'Creative Outreach: Managed 30+ visual campaigns, speaker profiles, and reels driving 2,500+ participant impressions.',
    ],
    tools: ['CorelDRAW', 'Photoshop', 'Illustrator', 'Figma'],
    bg: 'bg-pastel-butter',
    shadow: '#FACC15',
    iconBg: 'bg-secondary-container',
    icon: '✈',
  },
  {
    name: 'IEEE Student Chapter',
    subtitle: 'KCC ITM Branch — Region 10',
    role: 'Technical Member & Contributor',
    period: 'Sept 2026 — Present',
    status: 'Active Contributor',
    responsibilities: [
      'Hackathon Technical Coordination: Co-ordinated problem tracks, submission validation arenas, and real-time review portals.',
      'Live Event Portals & Digital Infrastructure: Developed high-performance Node.js portals for chapter events.',
      'Cryptographic Certificate Systems: Designed high-creation layouts with 280+ unique signed certificates.',
    ],
    tools: ['React', 'TypeScript', 'Firebase', 'Node.js', 'Python'],
    bg: 'bg-pastel-sky',
    shadow: '#BAE6FD',
    iconBg: 'bg-pastel-sky',
    icon: '⚡',
  },
]

export default function CampusLeadership() {
  return (
    <section id="campus" className="w-full bg-canvas-almond border-y-2 border-border-dark py-space-xl">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <MotionReveal>
          <div className="mb-space-xl">
            <span className="section-label mb-2">
              <span className="w-2 h-2 bg-primary rounded-full inline-block" />
              05 • Campus Leadership &amp; Achievements
            </span>
            <h2 className="font-display font-extrabold text-headline-lg text-ink-black">
              Where campus culture meets{' '}
              <span className="px-3 py-1 bg-secondary-container border-2 border-border-dark rounded-xl inline-block shadow-[3px_3px_0px_#111111]">
                production-grade
              </span>{' '}
              design.
            </h2>
            <p className="font-body text-body-md text-ink-muted mt-3 max-w-2xl">
              A curated archive of event identities, large-format print collateral, 15ft stage
              backdrops, hackathon architectures, and graphic asset systems crafted for Voyager Club
              and IEEE Student Chapter.
            </p>
          </div>
        </MotionReveal>

        {/* Stats row */}
        <MotionReveal delay={0.1}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  className="p-space-md bg-white border-2 border-border-dark rounded-xl shadow-[4px_4px_0px_#111111] text-center flex flex-col items-center cursor-pointer transition-all"
                  whileHover={{ y: -4, scale: 1.03, boxShadow: '6px 6px 0px #1833FF' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-container border border-border-dark flex items-center justify-center mb-2 shadow-[2px_2px_0px_#111111]">
                    <Icon size={20} className="text-ink-black" />
                  </div>
                  <div className="font-display font-extrabold text-headline-md text-ink-black">{stat.value}</div>
                  <div className="font-mono text-label-sm text-ink-muted uppercase mt-1">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </MotionReveal>

        {/* Club cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg mb-space-xl">
          {clubs.map((club, i) => (
            <MotionReveal key={club.name} delay={i * 0.1}>
              <motion.div
                className={`p-space-lg ${club.bg} border-2 border-border-dark rounded-2xl h-full flex flex-col justify-between transition-all cursor-default`}
                style={{ boxShadow: `4px 4px 0px ${club.shadow}` }}
                whileHover={{ y: -4, scale: 1.01, boxShadow: `6px 6px 0px #1833FF` }}
                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              >
                <div>
                  {/* Club header */}
                  <div className="flex items-start justify-between mb-space-md">
                    <div>
                      <div className={`w-10 h-10 ${club.iconBg} border-2 border-border-dark rounded-lg flex items-center justify-center text-lg mb-2 shadow-[2px_2px_0px_#111111]`}>
                        {club.icon}
                      </div>
                      <h3 className="font-display font-extrabold text-headline-sm text-ink-black">{club.name}</h3>
                      <p className="font-mono text-label-sm text-ink-muted uppercase">{club.subtitle}</p>
                    </div>
                    <span className="px-3 py-1 bg-ink-black text-white font-mono text-label-sm rounded-full border border-border-dark">
                      {club.status}
                    </span>
                  </div>

                  {/* Role + period */}
                  <div className="flex items-center gap-2 mb-space-md">
                    <Briefcase size={16} className="text-ink-black shrink-0" />
                    <span className="font-display font-bold text-body-md text-ink-black">{club.role}</span>
                    <span className="font-mono text-label-sm text-ink-muted ml-auto">{club.period}</span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="flex flex-col gap-2 mb-space-md">
                    {club.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle size={14} className="text-emerald-700 mt-1 shrink-0" />
                        <span className="font-body text-body-sm text-ink-black">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools */}
                <div className="flex flex-wrap gap-1 pt-space-xs">
                  {club.tools.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 bg-white/80 border border-border-dark rounded font-mono text-label-sm text-ink-black">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>

        {/* Hackathon records */}
        <MotionReveal>
          <h3 className="font-display font-bold text-headline-sm text-ink-black mb-space-md">
            Hackathons &amp; Competition Records
          </h3>
        </MotionReveal>

        <div className="flex flex-col gap-space-md mb-space-lg">
          {hackathons.map((h, i) => (
            <MotionReveal key={h.title} delay={i * 0.1}>
              <motion.div
                className={`p-space-md lg:p-space-lg ${h.bg} border-2 border-border-dark rounded-xl transition-all cursor-default`}
                style={{ boxShadow: `4px 4px 0px ${h.shadow}` }}
                whileHover={{ y: -3, scale: 1.008, boxShadow: `6px 6px 0px #1833FF` }}
                transition={{ type: 'spring', stiffness: 500, damping: 22 }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-ink-black text-white font-mono text-label-sm rounded uppercase">
                        {h.subtitle}
                      </span>
                      <span className="font-mono text-label-sm text-ink-muted uppercase">{h.org}</span>
                    </div>
                    <h4 className="font-display font-bold text-headline-sm text-ink-black mb-2">{h.title}</h4>
                    <p className="font-body text-body-sm text-ink-black mb-space-sm leading-relaxed">{h.desc}</p>
                    <div className="flex flex-wrap gap-1">
                      {h.tools.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white/70 border border-border-dark rounded font-mono text-label-sm text-ink-black">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-space-md border-2 border-border-dark rounded-xl bg-white/60 shadow-[2px_2px_0px_#111111] min-w-[120px]">
                    <div className="font-display font-extrabold text-headline-md text-ink-black">{h.score}</div>
                    <div className="font-mono text-label-sm text-ink-muted uppercase text-center mt-1">{h.scoreLabel}</div>
                  </div>
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>

        {/* Campus CTA */}
        <MotionReveal>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md p-space-lg border-2 border-border-dark rounded-2xl bg-ink-black text-white shadow-[4px_4px_0px_#FACC15]">
            <div>
              <p className="font-mono text-label-sm text-pastel-butter uppercase mb-1">Open for Campus Collaborations</p>
              <h3 className="font-display font-bold text-headline-sm text-white">
                Looking to collaborate on a campus initiative or design work?
              </h3>
            </div>
            <a
              href={WA_CAMPUS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 flex items-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Let's Build Together</span>
            </a>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
