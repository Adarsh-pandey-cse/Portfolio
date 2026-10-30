import { motion } from 'framer-motion'
import MotionReveal from './MotionReveal'
import {
  Code2,
  Cpu,
  Palette,
  Film,
  CheckCircle2,
  Trophy,
  ArrowRight,
  Briefcase,
  Sparkles,
} from 'lucide-react'

const WA_RECRUITER =
  'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20role%20or%20project%20collaboration.'

const competencies = [
  {
    num: '01',
    category: 'Full-Stack Software Engineering',
    icon: Code2,
    headline: 'High-Performance Web Systems & Cloud Architecture',
    desc: 'Engineering scalable, type-safe web applications with modern component architectures, real-time databases, and clean RESTful APIs.',
    highlights: [
      'Next.js 15 App Router, React 18, and modular TypeScript architectures',
      'Real-time cloud database synchronization & authentication with Firebase',
      'Production SSR/SSG rendering, responsive Tailwind CSS layouts, and SEO',
    ],
    proof: 'Shipped AttendX: Real-time academic tracking system with sub-second sync',
    proofBadge: 'Production App',
    tools: ['Next.js 15', 'TypeScript', 'React 18', 'Firebase', 'Node.js', 'Tailwind CSS', 'REST APIs'],
    bg: 'bg-pastel-butter',
    accentColor: '#FACC15',
  },
  {
    num: '02',
    category: 'Applied AI, Machine Learning & Vision',
    icon: Cpu,
    headline: 'Computer Vision, NLP & Applied Generative AI',
    desc: 'Developing practical AI/ML solutions by integrating computer vision models, natural language processing, and modern GenAI/LLM pipelines into web systems.',
    highlights: [
      'OpenCV pipelines for face recognition, feature embedding & contour analysis',
      'NLP workflows, sentiment classification, and LLM prompt engineering',
      'Data preprocessing, statistical modeling, and Scikit-Learn predictive pipelines',
    ],
    proof: '1st Runner Up: AKTU Inter-College Neural Hack \'25 (Jury Rating 9.6/10)',
    proofBadge: 'Hackathon Podium',
    tools: ['Python', 'OpenCV', 'NLP', 'GenAI / LLMs', 'Scikit-Learn', 'FastAPI'],
    bg: 'bg-pastel-mint',
    accentColor: '#74DEB6',
  },
  {
    num: '03',
    category: 'UI/UX Architecture & Product Design',
    icon: Palette,
    headline: 'Tactile Interfaces, Design Systems & Interaction Flows',
    desc: 'Bridging design thinking with frontend execution. Crafting accessible design systems, interactive prototypes, and micro-interactions in Figma.',
    highlights: [
      'Comprehensive Figma component libraries, tokens, and auto-layout systems',
      'User journey mapping, wireframing, and interactive hi-fi prototypes',
      'Frictionless handoff to React/HTML with precise CSS layout parity',
    ],
    proof: '98/100 Usability Score: Voyager Club 36-Hour Campus TechSprint',
    proofBadge: 'Jury Usability Score',
    tools: ['Figma', 'UI/UX Design', 'Design Tokens', 'Wireframing', 'Prototyping', 'Accessibility'],
    bg: 'bg-pastel-sky',
    accentColor: '#BAE6FD',
  },
  {
    num: '04',
    category: 'Graphic Design, Packaging & Video Editing',
    icon: Film,
    headline: 'Millimeter Vector Dielines & Cinematic Video Production',
    desc: 'Mastery over physical print manufacturing specifications, brand identities, and cinematic timeline editing with precise pacing and color grading.',
    highlights: [
      'CorelDRAW precision vector dielines for luxury packaging & print production',
      'Large-format stage flex backdrops (15×8ft) and event identity suites',
      'Adobe Premiere Pro editing, Lumetri color grading, and After Effects motion',
    ],
    proof: '45+ Large-Format Print Assets & Motion reels shipped for 1,200+ attendees',
    proofBadge: 'Voyager Club Core',
    tools: ['CorelDRAW 2024', 'Premiere Pro', 'After Effects', 'Photoshop', 'Illustrator', 'Color Grading'],
    bg: 'bg-pastel-peach',
    accentColor: '#FED7AA',
  },
]

export default function Process() {
  return (
    <section id="process" className="w-full py-space-xl bg-surface scroll-mt-20">
      {/* Header Banner */}
      <div className="w-full bg-surface-container border-y-2 border-border-dark py-8 mb-space-xl">
        <div className="max-w-container mx-auto px-margin-mobile lg:px-margin">
          <MotionReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div>
                <span className="section-label mb-2">
                  <span className="w-2 h-2 bg-secondary-container rounded-full inline-block" />
                  04 • Recruiter Dossier &amp; Core Disciplines
                </span>
                <h2 className="font-display font-extrabold text-headline-lg text-ink-black">
                  Four disciplines. One cohesive builder.
                </h2>
              </div>
              <p className="font-body text-body-md text-ink-muted max-w-md">
                What I bring to high-velocity engineering teams and founders: from full-stack systems
                and applied AI/ML to pixel-accurate UI/UX and cinematic video edits.
              </p>
            </div>
          </MotionReveal>
        </div>
      </div>

      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin">
        {/* 2x2 Grid of Core Competency Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg mb-space-xl">
          {competencies.map((comp, i) => {
            const Icon = comp.icon
            return (
              <MotionReveal key={comp.num} delay={i * 0.1}>
                <motion.div
                  className={`p-space-lg ${comp.bg} border-2 border-border-dark rounded-2xl h-full flex flex-col justify-between transition-all duration-200`}
                  style={{ boxShadow: `5px 5px 0px ${comp.accentColor}` }}
                  whileHover={{ y: -4, x: -2, boxShadow: `7px 7px 0px #111111` }}
                >
                  <div>
                    {/* Top Row: Category tag + Icon */}
                    <div className="flex items-center justify-between pb-3 border-b-2 border-border-dark mb-space-md">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 bg-ink-black text-white font-mono text-label-sm rounded-md font-bold uppercase">
                          DISCIPLINE {comp.num}
                        </span>
                        <span className="font-mono text-label-sm text-ink-muted uppercase font-semibold">
                          {comp.category}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white border-2 border-border-dark flex items-center justify-center shadow-[2px_2px_0px_#111111]">
                        <Icon size={20} className="text-ink-black" />
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="font-display font-extrabold text-headline-sm text-ink-black mb-2 leading-tight">
                      {comp.headline}
                    </h3>
                    <p className="font-body text-body-sm text-ink-black/85 mb-space-md leading-relaxed">
                      {comp.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="flex flex-col gap-2 mb-space-md">
                      {comp.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle2 size={15} className="text-emerald-700 mt-0.5 shrink-0" />
                          <span className="font-body text-body-sm text-ink-black font-medium">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Verifiable Proof & Stack Pills */}
                  <div>
                    {/* Verifiable Proof Badge */}
                    <div className="p-3 bg-white/80 border-2 border-border-dark rounded-xl mb-3 flex items-center justify-between gap-2 shadow-[2px_2px_0px_#111111]">
                      <div className="flex items-center gap-2 min-w-0">
                        <Trophy size={16} className="text-amber-600 shrink-0" />
                        <span className="font-body text-[13px] text-ink-black font-bold truncate">
                          {comp.proof}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-ink-black text-white rounded font-mono text-[10px] uppercase font-bold shrink-0">
                        {comp.proofBadge}
                      </span>
                    </div>

                    {/* Stack Tools */}
                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border-dark/20">
                      {comp.tools.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 bg-white border border-border-dark rounded font-mono text-label-sm text-ink-black font-semibold shadow-[1px_1px_0px_#111111]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </MotionReveal>
            )
          })}
        </div>

        {/* Recruiter Callout Banner */}
        <MotionReveal>
          <div className="p-space-lg bg-ink-black text-white border-2 border-border-dark rounded-2xl shadow-[5px_5px_0px_#FACC15] flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-pastel-butter" />
                <span className="font-mono text-label-sm text-pastel-butter uppercase tracking-wider font-bold">
                  Open for Opportunities • Full-Time &amp; High-Impact Roles
                </span>
              </div>
              <h4 className="font-display font-extrabold text-headline-sm text-white">
                Hiring for Full-Stack, UI/UX, or Applied AI Engineering?
              </h4>
              <p className="font-body text-body-sm text-surface-dim max-w-xl">
                Ready to contribute to modern web architectures, machine learning integration, and high-fidelity product design with zero onboarding lag.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href={WA_RECRUITER}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto justify-center flex items-center gap-2"
              >
                <Briefcase size={16} />
                <span>Discuss Role on WhatsApp</span>
              </a>
              <a
                href="mailto:adarshpandey.cse@gmail.com"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-3 border-2 border-white text-white rounded-full font-mono text-label-md uppercase hover:bg-white hover:text-ink-black transition-colors"
              >
                <span>Email Brief</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
