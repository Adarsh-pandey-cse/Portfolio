import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const WA_BASE = 'https://wa.me/918800795476?text='

export function AttendanceAppThumbnail() {
  return (
    <div className="relative w-full h-full min-h-[140px] sm:min-h-[155px] bg-[#0B0F19] rounded-xl overflow-hidden p-2.5 flex flex-col justify-between border-2 border-border-dark select-none">
      {/* Top bar with dots and title */}
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
        <div className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </div>
        <span className="font-mono text-[8px] text-slate-400">AttendX v2.4</span>
      </div>

      {/* Main mockup body */}
      <div className="grid grid-cols-12 gap-1.5 my-auto">
        {/* Left mini sidebar */}
        <div className="col-span-3 flex flex-col gap-1 py-1">
          <div className="w-full h-2 rounded bg-indigo-500/40" />
          <div className="w-3/4 h-1.5 rounded bg-slate-700" />
          <div className="w-4/5 h-1.5 rounded bg-slate-700" />
          <div className="w-2/3 h-1.5 rounded bg-slate-700" />
        </div>

        {/* Center / Right dashboard charts */}
        <div className="col-span-9 flex flex-col gap-1.5">
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-slate-900/90 border border-slate-800 rounded p-1 flex items-center justify-between">
              <span className="font-mono text-[7px] text-slate-400">STREAK</span>
              <span className="font-mono text-[8px] font-bold text-amber-400">18d 🔥</span>
            </div>
            <div className="bg-slate-900/90 border border-slate-800 rounded p-1 flex items-center justify-between">
              <span className="font-mono text-[7px] text-slate-400">RATE</span>
              <span className="font-mono text-[8px] font-bold text-emerald-400">96.4%</span>
            </div>
          </div>

          {/* Bar Chart Bars */}
          <div className="bg-slate-900/90 border border-slate-800 rounded p-1.5 flex items-end justify-between gap-1 h-12">
            {[35, 65, 45, 80, 60, 95, 75, 90].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i % 2 === 0
                        ? 'linear-gradient(to top, #6366F1, #818CF8)'
                        : 'linear-gradient(to top, #06B6D4, #22D3EE)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating circular arrow button in top right */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-border-dark flex items-center justify-center shadow-[1px_1px_0px_#111111] group-hover:scale-110 group-hover:bg-[#FACC15] transition-all">
        <ArrowUpRight size={13} className="text-ink-black stroke-[2.5]" />
      </div>
    </div>
  )
}

export function TouristHelpThumbnail() {
  return (
    <div className="relative w-full h-full min-h-[140px] sm:min-h-[155px] bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#0284C7] rounded-xl overflow-hidden p-2.5 flex flex-col justify-between border-2 border-border-dark select-none">
      {/* Scenic background illustration */}
      <div className="absolute inset-0 opacity-40">
        <svg viewBox="0 0 200 120" className="w-full h-full object-cover" preserveAspectRatio="none">
          <polygon points="0,120 40,60 80,95 130,45 180,90 200,65 200,120" fill="#38BDF8" />
          <polygon points="0,120 60,80 100,110 150,70 200,105 200,120" fill="#0EA5E9" />
        </svg>
      </div>

      {/* Hero text overlay */}
      <div className="relative z-10">
        <span className="font-mono text-[8px] text-sky-300 font-bold uppercase tracking-wider block">
          TourGuide AI
        </span>
        <h4 className="font-display font-extrabold text-[11px] sm:text-xs text-white leading-tight mt-0.5">
          Explore the Unexplored
        </h4>
      </div>

      {/* Floating mobile phone screen preview */}
      <div className="relative z-10 flex items-end justify-between mt-1">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded px-1.5 py-0.5">
          <span className="font-mono text-[7px] text-white">📍 120+ Curated Trails</span>
        </div>

        {/* Mini phone frame */}
        <div className="w-16 h-14 bg-slate-900 border border-slate-700 rounded-lg p-1 shadow-lg flex flex-col justify-between">
          <div className="w-full h-1 bg-slate-700 rounded-full" />
          <div className="space-y-0.5">
            <div className="w-full h-2 bg-sky-500/50 rounded" />
            <div className="w-3/4 h-1.5 bg-slate-600 rounded" />
          </div>
          <div className="w-full h-2 bg-emerald-500/70 rounded flex items-center justify-center">
            <span className="text-[6px] text-white font-mono">Book Guide</span>
          </div>
        </div>
      </div>

      {/* Floating circular arrow button in top right */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-border-dark flex items-center justify-center shadow-[1px_1px_0px_#111111] group-hover:scale-110 group-hover:bg-[#FACC15] transition-all z-20">
        <ArrowUpRight size={13} className="text-ink-black stroke-[2.5]" />
      </div>
    </div>
  )
}

export function KavachAiThumbnail() {
  return (
    <div className="relative w-full h-full min-h-[140px] sm:min-h-[155px] bg-[#0A0E17] rounded-xl overflow-hidden p-2.5 flex flex-col justify-between border-2 border-border-dark select-none">
      {/* CCTV HUD top bar */}
      <div className="flex items-center justify-between pb-1 border-b border-slate-800">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          <span className="font-mono text-[8px] font-bold text-rose-400">REC [LIVE]</span>
        </div>
        <span className="font-mono text-[7.5px] text-slate-400">CAM-02 • 1080P</span>
      </div>

      {/* Central CCTV detection feed with bounding boxes */}
      <div className="relative my-auto h-16 bg-slate-900/80 border border-slate-800 rounded flex items-center justify-center overflow-hidden">
        {/* Surveillance Grid Lines */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)',
            backgroundSize: '12px 12px',
          }}
        />

        {/* Bounding box 1: Person Detected */}
        <div className="absolute left-3 top-2 w-8 h-12 border-2 border-emerald-400 rounded-sm flex flex-col justify-between p-0.5">
          <span className="font-mono text-[5.5px] bg-emerald-500 text-black font-bold px-0.5 rounded leading-none w-max">
            Person 98%
          </span>
          <span className="w-1 h-1 rounded-full bg-emerald-400 self-center" />
        </div>

        {/* Bounding box 2: Movement alert */}
        <div className="absolute right-4 top-3 w-9 h-11 border-2 border-amber-400 rounded-sm flex flex-col justify-between p-0.5">
          <span className="font-mono text-[5.5px] bg-amber-400 text-black font-bold px-0.5 rounded leading-none w-max">
            Motion
          </span>
          <span className="w-1 h-1 rounded-full bg-amber-400 self-center" />
        </div>

        {/* Center Target Reticle */}
        <div className="w-4 h-4 border border-rose-500/60 rounded-full flex items-center justify-center">
          <span className="w-1 h-1 bg-rose-500 rounded-full" />
        </div>
      </div>

      {/* HUD footer */}
      <div className="flex items-center justify-between text-[7px] font-mono text-slate-400">
        <span>FPS: 30.2</span>
        <span className="text-emerald-400 font-bold">STATUS: PROTECTED</span>
      </div>

      {/* Floating circular arrow button in top right */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white border-2 border-border-dark flex items-center justify-center shadow-[1px_1px_0px_#111111] group-hover:scale-110 group-hover:bg-[#FACC15] transition-all z-20">
        <ArrowUpRight size={13} className="text-ink-black stroke-[2.5]" />
      </div>
    </div>
  )
}

interface FeaturedCardProps {
  title: string
  desc: string
  tags: { label: string; bg: string }[]
  href: string
  thumbnail: React.ReactNode
}

export function FeaturedProjectCard({ title, desc, tags, href, thumbnail }: FeaturedCardProps) {
  const isExternal = href.startsWith('http')

  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={(e) => {
        if (!isExternal) {
          e.preventDefault()
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }
      }}
      className="bg-white border-2 border-border-dark rounded-2xl p-3 sm:p-3.5 shadow-[3px_3px_0px_#111111] flex flex-col sm:flex-row gap-3 group cursor-pointer hover:border-black transition-all"
      whileHover={{ y: -3, boxShadow: '5px 5px 0px #111111' }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Left Column: UI Mockup Preview */}
      <div className="w-full sm:w-[45%] shrink-0">
        {thumbnail}
      </div>

      {/* Right Column: Title, Description, Tags */}
      <div className="w-full sm:w-[55%] flex flex-col justify-between py-0.5">
        <div>
          <h3 className="font-display font-extrabold text-sm sm:text-base text-ink-black leading-snug group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="font-body text-xs text-ink-muted leading-relaxed mt-1 line-clamp-3">
            {desc}
          </p>
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5 pt-2 mt-auto">
          {tags.map((t) => (
            <span
              key={t.label}
              className={`px-2 py-0.5 ${t.bg} border border-border-dark rounded-md font-mono text-[9.5px] font-bold text-ink-black shadow-[1px_1px_0px_#111111]`}
            >
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export const featuredProjects = [
  {
    title: 'Attendance App',
    desc: 'Track attendance with streaks, weekly badges, export PDF and insightful analytics.',
    tags: [
      { label: 'Web App', bg: 'bg-[#FEF08A]' },
      { label: 'Analytics', bg: 'bg-[#BAE6FD]' },
      { label: 'Next.js', bg: 'bg-[#F1EDE6]' },
    ],
    href: 'https://attendx9.netlify.app',
    thumbnail: <AttendanceAppThumbnail />,
  },
  {
    title: 'Tourist Help App',
    desc: 'Full stack platform to help travelers with real-time info, places and support.',
    tags: [
      { label: 'Full Stack', bg: 'bg-[#FEF08A]' },
      { label: 'Maps', bg: 'bg-[#BAE6FD]' },
      { label: 'Travel', bg: 'bg-[#F1EDE6]' },
    ],
    href: `${WA_BASE}${encodeURIComponent('Hello Adarsh, tell me more about your Tourist Help App!')}`,
    thumbnail: <TouristHelpThumbnail />,
  },
  {
    title: 'KAVACH AI',
    desc: 'AI based CCTV surveillance with real-time alerts, crowd detection and panic response.',
    tags: [
      { label: 'AI/ML', bg: 'bg-[#FEF08A]' },
      { label: 'OpenCV', bg: 'bg-[#BAE6FD]' },
      { label: 'Computer Vision', bg: 'bg-[#F1EDE6]' },
    ],
    href: `${WA_BASE}${encodeURIComponent('Hello Adarsh, I am interested in KAVACH AI / Computer Vision.')}`,
    thumbnail: <KavachAiThumbnail />,
  },
]
