import { motion } from 'framer-motion'
import {
  Send,
  ArrowDown,
  Sparkles,
  Check,
  Zap,
  Terminal,
  Trophy,
  Cpu,
  Palette,
  Film,
  Award,
} from 'lucide-react'

const WA_URL =
  'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project%20or%20role.'

const pillVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
}

const impactMetrics = [
  {
    icon: Terminal,
    val: '8+ Webapps',
    badge: '& Websites',
    label: 'Next.js 15, Full-Stack, Firebase & APIs',
    bg: 'bg-[#FEF08A]',
  },
  {
    icon: Trophy,
    val: '5+ Hackathons',
    badge: '& Events',
    label: 'Organised & Led Campus Tech Sprints',
    bg: 'bg-[#A7F3D0]',
  },
  {
    icon: Palette,
    val: '200+ Designs',
    badge: 'UI/UX & Branding',
    label: 'Figma Systems, Vectors & Packaging',
    bg: 'bg-[#BAE6FD]',
  },
  {
    icon: Award,
    val: '10+ Verified',
    badge: 'Certifications',
    label: 'Google, LinkedIn, Oracle & Figma Standards',
    bg: 'bg-[#FED7AA]',
  },
]

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-0px)] lg:h-[calc(100vh-0px)] max-h-[960px] flex flex-col justify-between max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[80px] sm:pt-[84px] lg:pt-[86px] pb-3 sm:pb-4 overflow-hidden select-none">
      {/* ── Background Doodles & Neo-Brutalist Accents ── */}

      {/* 1. Sunny Yellow Circle Arc in Bottom-Left Corner */}
      <div
        className="absolute -bottom-14 -left-14 w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-[#FACC15] pointer-events-none -z-10 opacity-95"
        aria-hidden="true"
      />

      {/* 2. Yellow Squiggle Loop Doodle on Left */}
      <div className="absolute top-[260px] left-2 sm:left-4 pointer-events-none select-none -z-10 hidden sm:block">
        <svg
          className="w-7 h-24 text-[#FACC15]"
          viewBox="0 0 40 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <path d="M 28 8 C 4 24, 4 48, 26 58 C 44 68, 28 92, 12 104 C 4 112, 18 116, 26 114" />
        </svg>
      </div>

      {/* 3. Dot Grid Matrix on Left */}
      <div
        className="absolute top-24 left-1 w-14 h-32 pointer-events-none opacity-25 select-none hidden xl:block -z-10"
        style={{
          backgroundImage: 'radial-gradient(#111111 1.5px, transparent 1.5px)',
          backgroundSize: '10px 10px',
        }}
        aria-hidden="true"
      />

      {/* 4. Dot Grid Matrix on Right */}
      <div
        className="absolute top-28 right-2 w-16 h-36 pointer-events-none opacity-30 select-none hidden xl:block -z-10"
        style={{
          backgroundImage: 'radial-gradient(#0284C7 1.5px, transparent 1.5px)',
          backgroundSize: '10px 10px',
        }}
        aria-hidden="true"
      />

      {/* 5. Hand-drawn Arrow + "Build Design Create Repeat" on Far Right */}
      <div className="absolute top-[340px] right-2 sm:right-5 pointer-events-none select-none hidden 2xl:flex flex-col items-center gap-1 -z-10">
        <svg
          className="w-6 h-9 text-ink-black"
          viewBox="0 0 30 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M 8 4 C 20 12, 22 24, 14 34 M 8 26 L 14 34 L 20 28" />
        </svg>
        <span className="font-display italic text-ink-muted text-[10.5px] leading-tight text-center font-bold">
          Build<br />Design<br />Create<br />Repeat
        </span>
      </div>

      {/* ── Main Hero Content Distributed Evenly Across 100vh ── */}
      <motion.div
        className="w-full flex flex-col justify-between flex-1 gap-3 sm:gap-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* ── 1. Sub-Nav Bar: Namaste Greeting (Larger & More Noticeable) + 3 Tilted Badges ── */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-2.5 pt-0.5"
          variants={itemVariants}
        >
          {/* Left: Namaste pill - Larger, bolder & noticeable */}
          <motion.div
            className="inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-1.5 sm:py-2 bg-white border-2 border-border-dark rounded-full shadow-[3px_3px_0px_#111111] hover:-translate-y-0.5 transition-all cursor-default"
            whileHover={{ y: -2, boxShadow: '4px 4px 0px #111111', scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            <motion.span
              className="text-base sm:text-lg select-none inline-block origin-bottom-right"
              aria-hidden="true"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', repeatDelay: 1 }}
            >
              👋
            </motion.span>
            <span className="font-display font-extrabold text-ink-black text-sm sm:text-[15px] tracking-tight">
              Namaste, I'm Adarsh
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-border-dark" aria-hidden="true" />
            <span className="font-mono text-[10.5px] sm:text-[11.5px] text-ink-muted uppercase tracking-wider font-black">
              AVAILABLE WORLDWIDE • REMOTE / ON-SITE
            </span>
          </motion.div>

          {/* Right: 3 Tilted Badges with snappy spring hover */}
          <div className="flex items-center gap-2 flex-wrap">
            <motion.span
              className="pill-tag bg-[#FEF08A] text-ink-black font-mono font-bold shadow-[2px_2px_0px_#111111] cursor-pointer inline-flex items-center gap-1.5 text-xs sm:text-[12px] px-3.5 py-1 sm:py-1.5"
              style={{ transform: 'rotate(-2deg)' }}
              whileHover={{ scale: 1.08, rotate: -5, y: -2, boxShadow: '3px 3px 0px #111111' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            >
              <Sparkles size={12} className="text-amber-700 shrink-0 fill-amber-700" />
              <span>B.TECH CSE @ AKTU '28</span>
            </motion.span>

            <motion.span
              className="pill-tag bg-[#A7F3D0] text-ink-black font-mono font-bold shadow-[2px_2px_0px_#111111] cursor-pointer inline-flex items-center gap-1.5 text-xs sm:text-[12px] px-3.5 py-1 sm:py-1.5"
              style={{ transform: 'rotate(2deg)' }}
              whileHover={{ scale: 1.08, rotate: 5, y: -2, boxShadow: '3px 3px 0px #111111' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            >
              <Palette size={12} className="text-emerald-800 shrink-0" />
              <span>DESIGNER + AI/ML</span>
            </motion.span>

            <motion.span
              className="hidden md:inline-flex pill-tag bg-[#7DD3FC] text-ink-black font-mono font-bold shadow-[2px_2px_0px_#111111] cursor-pointer items-center gap-1.5 text-xs sm:text-[12px] px-3.5 py-1 sm:py-1.5"
              style={{ transform: 'rotate(-1.5deg)' }}
              whileHover={{ scale: 1.08, rotate: -4, y: -2, boxShadow: '3px 3px 0px #111111' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 18 }}
            >
              <Film size={12} className="text-sky-800 shrink-0" />
              <span>CODE + VIDEO MOTION</span>
            </motion.span>
          </div>
        </motion.div>

        {/* ── 2. Main Hero Row: Headline + CTAs (Left 7) & Executive Portrait Card (Right 5) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center my-auto py-1">
          {/* Left Column: Peel Stickers, 2-Line Headline, Bio, CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col gap-3 sm:gap-3.5"
            variants={itemVariants}
          >
            {/* Peel-off Stickers Row with curved doodle arrow */}
            <div className="relative flex items-center gap-2 flex-wrap">
              {/* Curved arrow doodle pointing to stickers */}
              <div className="inline-flex items-center gap-1 text-ink-muted select-none">
                <svg
                  className="w-4 h-4 text-ink-muted"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M 4 8 C 8 16, 16 18, 20 14 M 16 12 L 20 14 L 18 18" />
                </svg>
                <span className="font-mono text-[10.5px] sm:text-[11px] italic font-semibold">
                  psst, peel these →
                </span>
              </div>

              {/* Sticker 1: 8+ Webapps & Websites */}
              <motion.span
                custom={0}
                variants={pillVariants}
                className="pill-tag bg-[#FED7AA] text-ink-black cursor-grab active:cursor-grabbing inline-flex items-center gap-1.5 shadow-[2px_2px_0px_#111111] font-mono text-[10.5px] sm:text-[11px] font-black px-2.5 py-0.5 sm:py-1"
                style={{ transform: 'rotate(-2deg)' }}
                whileHover={{ scale: 1.09, rotate: -4, y: -2, boxShadow: '3px 3px 0px #111111' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              >
                <Terminal size={12} className="text-ink-black shrink-0 stroke-[2.5]" />
                <span>8+ WEBAPPS &amp; SITES</span>
              </motion.span>

              {/* Sticker 2: Organised 5+ Hackathons */}
              <motion.span
                custom={1}
                variants={pillVariants}
                className="pill-tag bg-[#FEF08A] text-ink-black cursor-grab active:cursor-grabbing inline-flex items-center gap-1.5 shadow-[2px_2px_0px_#111111] font-mono text-[10.5px] sm:text-[11px] font-black px-2.5 py-0.5 sm:py-1"
                style={{ transform: 'rotate(2deg)' }}
                whileHover={{ scale: 1.09, rotate: 4, y: -2, boxShadow: '3px 3px 0px #111111' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              >
                <Trophy size={12} className="text-amber-700 shrink-0" />
                <span>ORGANISED 5+ HACKATHONS</span>
              </motion.span>

              {/* Sticker 3: Python • OpenCV • GenAI */}
              <motion.span
                custom={2}
                variants={pillVariants}
                className="hidden sm:inline-flex pill-tag bg-[#A7F3D0] text-ink-black cursor-grab active:cursor-grabbing items-center gap-1.5 shadow-[2px_2px_0px_#111111] font-mono text-[10.5px] sm:text-[11px] font-black px-2.5 py-0.5 sm:py-1"
                style={{ transform: 'rotate(-1deg)' }}
                whileHover={{ scale: 1.09, rotate: -3, y: -2, boxShadow: '3px 3px 0px #111111' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 500, damping: 18 }}
              >
                <Cpu size={12} className="text-emerald-800 shrink-0" />
                <span>PYTHON • OPENCV • GENAI</span>
              </motion.span>
            </div>

            {/* Exactly 2 Clean, Powerful Lines with radiating blue spark lines */}
            <h1 className="font-display font-extrabold text-[2.1rem] sm:text-[2.65rem] md:text-[3rem] lg:text-[2.75rem] xl:text-[3.25rem] text-ink-black leading-[1.08] tracking-tight">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                Designing tactile interfaces.
              </span>
              <span className="block mt-0.5 sm:mt-1 whitespace-normal sm:whitespace-nowrap">
                Engineering{' '}
                <span className="relative inline-block">
                  {/* Radiating Blue Spark Dashes Above Badge */}
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 pointer-events-none select-none">
                    <span className="w-0.5 h-2.5 bg-blue-500 -rotate-12 rounded-full" />
                    <span className="w-0.5 h-3.5 bg-blue-600 rounded-full" />
                    <span className="w-0.5 h-2.5 bg-blue-500 rotate-12 rounded-full" />
                  </span>

                  {/* The Signature Blue "intelligent" Pill Badge */}
                  <motion.span
                    className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 bg-[#2563EB] text-white border-2 border-border-dark rounded-2xl shadow-[3px_3px_0px_#111111] align-middle font-black cursor-pointer"
                    style={{ rotate: '-1.5deg' }}
                    whileHover={{ rotate: 0, scale: 1.06, y: -2, boxShadow: '4px 4px 0px #111111' }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  >
                    intelligent
                  </motion.span>

                  {/* Radiating Spark Marks at Bottom-Right */}
                  <span className="absolute -bottom-2 -right-3 flex flex-col gap-0.5 pointer-events-none select-none">
                    <span className="w-2.5 h-0.5 bg-blue-500 rotate-12 rounded-full" />
                    <span className="w-3.5 h-0.5 bg-blue-600 rounded-full" />
                  </span>
                </span>{' '}
                systems.
              </span>
            </h1>

            {/* Recruiter-Focused Bio Paragraph */}
            <p className="font-body text-xs sm:text-sm lg:text-[14.5px] text-ink-muted max-w-xl leading-relaxed select-text font-normal">
              B.Tech Computer Science student at AKTU. Full-Stack Web Developer, UI/UX Designer, Video Editor
              &amp; AI/ML Technologist. Blending aesthetic design systems and cinematic video editing with
              production code and applied machine learning (Python, OpenCV, NLP, GenAI) to build products
              that engage and perform.
            </p>

            {/* CTAs with Yellow Shadow and Response Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-0.5">
              <div className="flex flex-wrap items-center gap-2.5">
                {/* Solid Black Button with Offset Yellow Shadow */}
                <motion.a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 bg-ink-black text-white border-2 border-border-dark rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_#FACC15] hover:shadow-[5px_5px_0px_#FACC15] transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                >
                  <Send size={14} className="text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 stroke-[2.5]" />
                  <span>LET'S TALK • WHATSAPP</span>
                </motion.a>

                {/* White Button with Black Shadow */}
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group inline-flex items-center gap-1.5 px-4 py-2.5 bg-white text-ink-black border-2 border-border-dark rounded-full font-mono text-xs sm:text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_#111111] hover:shadow-[4px_4px_0px_#111111] transition-all"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                >
                  <span>SELECTED WORKS</span>
                  <ArrowDown size={14} className="transition-transform group-hover:translate-y-1 stroke-[2.5]" />
                </motion.a>
              </div>

              {/* Status Note: Response < 12 Hours */}
              <motion.div
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/90 border border-border-dark/40 rounded-full text-ink-muted font-mono text-[10.5px] uppercase tracking-wider font-bold cursor-default"
                whileHover={{ scale: 1.02 }}
              >
                <Zap size={12} className="text-amber-500 fill-amber-500" />
                <span>RESPONSE &lt; 12 HOURS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Executive Portrait Card with Radiating Action Marks */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
            variants={itemVariants}
          >
            {/* Portrait Card Container */}
            <motion.div
              className="relative w-full max-w-[300px] sm:max-w-[325px] bg-white border-2 border-border-dark rounded-3xl p-3.5 sm:p-4 shadow-[6px_6px_0px_#111111] flex flex-col gap-2.5"
              whileHover={{ y: -4, boxShadow: '8px 8px 0px #111111' }}
              transition={{ type: 'spring', stiffness: 450, damping: 22 }}
            >
              {/* Card Top Row: Live Beacon + AKTU '28 Pill */}
              <div className="flex items-center justify-between pb-2 border-b-2 border-border-dark">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-surface-container border border-border-dark rounded-full font-mono text-[10px] text-ink-black font-bold">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span>Available for Projects</span>
                </div>

                <span className="px-2.5 py-0.5 bg-[#FACC15] border border-border-dark rounded-full font-mono text-[10px] font-black text-ink-black shadow-[1px_1px_0px_#111111]">
                  AKTU '28
                </span>
              </div>

              {/* Portrait Frame with Radiating Sketch Action Marks (Clean photo frame without builder tag) */}
              <div className="relative w-full h-[190px] sm:h-[210px] rounded-2xl bg-[#FEF08A] border-2 border-border-dark overflow-hidden flex items-end justify-center group shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]">
                {/* Radiating Action Sketch Marks Left */}
                <div className="absolute left-2.5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 pointer-events-none select-none z-10 opacity-70">
                  <span className="w-3.5 h-0.5 bg-ink-black -rotate-12 rounded-full" />
                  <span className="w-4.5 h-0.5 bg-ink-black rounded-full" />
                  <span className="w-3.5 h-0.5 bg-ink-black rotate-12 rounded-full" />
                </div>

                {/* Radiating Action Sketch Marks Right */}
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 pointer-events-none select-none z-10 opacity-70 items-end">
                  <span className="w-3.5 h-0.5 bg-ink-black rotate-12 rounded-full" />
                  <span className="w-4.5 h-0.5 bg-ink-black rounded-full" />
                  <span className="w-3.5 h-0.5 bg-ink-black -rotate-12 rounded-full" />
                </div>

                {/* Portrait Photo */}
                <img
                  src="/pic.png"
                  alt="Adarsh Pandey — Creative Developer, Designer & AI/ML Technologist"
                  className="w-full h-full object-contain transform group-hover:scale-106 transition-transform duration-300 select-none relative z-0"
                  loading="eager"
                  decoding="sync"
                />
              </div>

              {/* Card Footer: Identity with Green Verified Badge & Skill Pills */}
              <div className="flex flex-col gap-1.5 pt-0.5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display font-extrabold text-base sm:text-[17px] text-ink-black leading-none">
                        Adarsh Pandey
                      </h3>
                      {/* Green Verified Badge matching website style */}
                      <span
                        className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#10B981] border-[1.5px] border-border-dark text-white shadow-[1px_1px_0px_#111111] shrink-0"
                        title="Verified Technologist & Designer"
                      >
                        <Check size={10} className="text-white stroke-[3.5]" />
                      </span>
                    </div>
                    <p className="font-mono text-[9.5px] text-ink-muted uppercase mt-0.5 font-bold tracking-wider">
                      CREATIVE DEVELOPER &amp; UI/UX DESIGNER
                    </p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="flex flex-wrap gap-1 pt-1.5 border-t border-border-dark/20">
                  {['Next.js 15', 'Figma UI/UX', 'Python / AI', 'Video Editing'].map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-0.5 bg-surface-container border border-border-dark rounded-md font-mono text-[9px] font-bold text-ink-black shadow-[0.5px_0.5px_0px_#111111] cursor-pointer"
                      whileHover={{ scale: 1.08, y: -1, backgroundColor: '#FEF08A' }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.12 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── 3. Creative Impact Metrics Strip with Lively Micro-Interactions ── */}
        <motion.div
          className="pt-1"
          variants={itemVariants}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
            {impactMetrics.map((m) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.label}
                  className={`group px-3 py-2 sm:py-2.5 ${m.bg} border-2 border-border-dark rounded-2xl shadow-[3px_3px_0px_#111111] flex items-center gap-2.5 transition-all cursor-pointer`}
                  whileHover={{ y: -3, x: -1, boxShadow: '5px 5px 0px #111111' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                >
                  <div className="w-8 h-8 rounded-xl bg-white border border-border-dark flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111111] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200">
                    <Icon size={16} className="text-ink-black" />
                  </div>
                  <div className="flex flex-col leading-tight min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-display font-black text-xs sm:text-sm text-ink-black truncate">
                        {m.val}
                      </span>
                      <span className="font-mono text-[8.5px] sm:text-[9px] font-black text-ink-black bg-white/90 px-1.5 py-0.5 rounded border border-border-dark/40 shadow-[0.5px_0.5px_0px_#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                        {m.badge}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] sm:text-[9.5px] text-ink-muted truncate font-bold mt-0.5">
                      {m.label}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── 4. Subtle Bottom Scroll Indicator to About Section ── */}
        <motion.div
          className="flex justify-center pt-0.5 pb-0.5"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1 bg-white hover:bg-surface-container border border-border-dark/40 hover:border-border-dark rounded-full shadow-[1px_1px_0px_#111111] hover:shadow-[2px_2px_0px_#111111] transition-all group cursor-pointer"
            aria-label="Scroll to about & credentials"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-mono text-label-sm uppercase tracking-widest text-[9.5px] sm:text-[10px] font-bold text-ink-muted group-hover:text-ink-black transition-colors">
              EXPLORE ABOUT &amp; CREDENTIALS
            </span>
            <motion.div
              animate={{ y: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            >
              <ArrowDown size={11} className="text-ink-black stroke-[2.5]" />
            </motion.div>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
