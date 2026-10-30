import { motion } from 'framer-motion'
import MotionReveal from './MotionReveal'
import {
  GraduationCap,
  MapPin,
  Mail,
  Phone,
  Award,
  CheckCircle2,
  Check,
  Terminal,
  Cpu,
  Palette,
  Film,
  Sparkles,
  BookOpen,
} from 'lucide-react'
import {
  GoogleLogo,
  LinkedInLogo,
  InstagramLogo,
  FigmaLogo,
  JavaLogo,
  AktuLogo,
  CorelLogo,
  FullStackLogo,
} from './icons/BrandLogos'

const educationTimeline = [
  {
    period: '2024 — 2028',
    title: 'B.Tech in Computer Science & Engineering',
    org: 'Dr. APJ Abdul Kalam Technical University (AKTU)',
    status: 'Degree in Progress · AKTU \'28',
    desc: 'Rigorous computer science curriculum combining theoretical foundations with production system implementation. Core focus on algorithms, computer vision pipelines, real-time web architectures, and applied machine learning.',
    coursework: [
      'Data Structures & Algorithms',
      'Computer Vision & Image Processing',
      'Database Management Systems (DBMS)',
      'Operating Systems & System Architecture',
      'Object-Oriented Programming (Java & C++)',
      'Neural Networks & Machine Learning Foundations',
    ],
    achievements: [
      'Organised 5+ Hackathons & Tech Events across KCCITM, Voyager Club & IEEE',
      '1st Runner Up — AKTU Inter-College Neural Hack \'25 (Jury Rating 9.6/10)',
      'Shipped AttendX: Real-time academic tracking platform for students',
    ],
    color: 'bg-pastel-butter',
    shadow: '#FACC15',
    logo: AktuLogo,
  },
  {
    period: '2023 — Present',
    title: 'Freelance Creative Developer & UI/UX Designer',
    org: 'Independent Practice • Global Startups & Clients',
    status: 'Active Client Practice',
    desc: 'Architecting high-performance web applications, tactile Figma design systems, and cinematic brand packages for founders, agencies, and high-growth businesses worldwide.',
    coursework: [
      'Next.js 15 App Router & React 18',
      'TypeScript Architecture & Clean Code',
      'Firebase Cloud Database & Authentication',
      'Tailwind CSS & Neo-Brutalist Design Tokens',
      'Applied Generative AI & OpenCV Integration',
    ],
    achievements: [
      'Shipped 8+ production web applications, full-stack tools, and client platforms',
      'Maintained 100% on-time milestone delivery record across all client contracts',
      'Sub-12 hour communication turnaround SLA',
    ],
    color: 'bg-pastel-mint',
    shadow: '#74DEB6',
    logo: FullStackLogo,
  },
  {
    period: '2021 — 2023',
    title: 'Visual Design Specialist & Packaging Art Director',
    org: 'Creative Industries • Vector & Commercial Print',
    status: 'Production Mastered',
    desc: 'Mastered industrial vector geometry using CorelDRAW with millimeter-accurate die-lines, large-format stage flex backdrops, and luxury retail packaging production.',
    coursework: [
      'CorelDRAW Precision Vector Dielines',
      'CMYK Print Production & Prepress Workflows',
      'Packaging Architecture & Emboss / Spot UV Specs',
      'Brand Identity Systems & Typography Grids',
    ],
    achievements: [
      'Created 200+ commercial designs across UI/UX, brand identity, vector dielines & packaging',
      'Engineered large-format print assets & stage backdrops for 1,200+ campus audiences',
    ],
    color: 'bg-pastel-peach',
    shadow: '#FED7AA',
    logo: CorelLogo,
  },
]

const certifications = [
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    logo: GoogleLogo,
    credentialId: 'Verified AI Skill',
    date: '2024',
  },
  {
    name: 'Machine Learning Foundations: Statistics',
    issuer: 'LinkedIn Learning',
    logo: LinkedInLogo,
    credentialId: 'Verified ML Credential',
    date: '2024',
  },
  {
    name: 'Figma for UX Design: Interactive Systems',
    issuer: 'LinkedIn Learning • Figma',
    logo: FigmaLogo,
    credentialId: 'Verified UX Credential',
    date: '2024',
  },
  {
    name: 'Graphic Design Foundations: Layout & Composition',
    issuer: 'LinkedIn Learning',
    logo: LinkedInLogo,
    credentialId: 'Verified Design Credential',
    date: '2024',
  },
  {
    name: 'Complete Guide to Java Design Patterns',
    issuer: 'LinkedIn Learning • Oracle Standards',
    logo: JavaLogo,
    credentialId: 'Creational & Structural',
    date: '2024',
  },
  {
    name: 'Python for Applied Data Science & ML',
    issuer: 'LinkedIn Learning',
    logo: LinkedInLogo,
    credentialId: 'Verified Python',
    date: '2024',
  },
  {
    name: 'Next.js & React: Full-Stack Web Architecture',
    issuer: 'LinkedIn Learning',
    logo: FullStackLogo,
    credentialId: 'Verified Frontend',
    date: '2024',
  },
  {
    name: 'Computer Vision with OpenCV: Feature Tracking',
    issuer: 'LinkedIn Learning',
    logo: GoogleLogo,
    credentialId: 'Verified Vision',
    date: '2024',
  },
  {
    name: 'Generative AI & LLMs: Practical Engineering',
    issuer: 'Google Cloud Skills',
    logo: GoogleLogo,
    credentialId: 'Verified GenAI',
    date: '2024',
  },
  {
    name: 'Design Systems & UI Token Architecture',
    issuer: 'Figma Community Standards',
    logo: FigmaLogo,
    credentialId: 'Verified Tokens',
    date: '2024',
  },
]

const skillCategories = [
  {
    category: 'Full-Stack Web Engineering',
    icon: Terminal,
    desc: 'Scalable modern web architectures, type-safe code, and real-time cloud data.',
    skills: [
      'Next.js 15',
      'React 18',
      'TypeScript',
      'Firebase Auth & DB',
      'Tailwind CSS',
      'Node.js',
      'REST APIs',
      'Git & GitHub',
      'Postman',
      'Vite',
      'State Management',
    ],
    color: 'bg-pastel-butter',
    badge: 'Core Engineering',
  },
  {
    category: 'Applied AI, Machine Learning & Vision',
    icon: Cpu,
    desc: 'Computer vision algorithms, NLP pipelines, and applied GenAI / LLM models.',
    skills: [
      'Python',
      'OpenCV',
      'NLP Pipelines',
      'Generative AI & LLMs',
      'Scikit-Learn',
      'Computer Vision',
      'Feature Embedding',
      'Contour Tracking',
      'Prompt Engineering',
      'Model Evaluation',
    ],
    color: 'bg-pastel-mint',
    badge: 'AI & Intelligence',
  },
  {
    category: 'UI/UX Architecture & Product Design',
    icon: Palette,
    desc: 'Tactile design systems, Figma interactive prototypes, and vector packaging dielines.',
    skills: [
      'Figma UI/UX',
      'CorelDRAW 2024',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Wireframing',
      'Interactive Prototyping',
      'Design Tokens',
      'Packaging Dielines',
      'Typography Hierarchy',
    ],
    color: 'bg-pastel-sky',
    badge: 'Design Systems',
  },
  {
    category: 'Video Editing & Motion Production',
    icon: Film,
    desc: 'Cinematic storytelling, Lumetri color grading, and dynamic motion graphics.',
    skills: [
      'Adobe Premiere Pro',
      'After Effects',
      'Lumetri Color Grading',
      'Motion Graphics',
      'Narrative Pacing',
      'Audio & Sound Design',
      '4K Video Production',
      'Multi-Cam Editing',
    ],
    color: 'bg-pastel-peach',
    badge: 'Motion Film',
  },
]

export default function About() {
  return (
    <section id="about" className="w-full py-12 sm:py-16 lg:py-20 bg-surface scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal>
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FACC15] border border-border-dark rounded-full inline-block shadow-[1px_1px_0px_#111111]" />
              <span className="font-mono text-xs sm:text-sm font-black text-ink-black uppercase tracking-wider">
                01 • Academic Background, Certifications &amp; Skills
              </span>
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-ink-black tracking-tight">
              Educational foundation meets production craft.
            </h2>
            <p className="font-body text-xs sm:text-sm lg:text-base text-ink-muted mt-2 max-w-2xl leading-relaxed">
              B.Tech Computer Science student at AKTU (2024–2028), verified industry certifications from Google &amp; LinkedIn,
              paired with hands-on commercial experience across Full-Stack Web Development, Applied AI/ML, UI/UX Design, and Video Editing.
            </p>
          </div>
        </MotionReveal>

        {/* ── Top Section: 2 Perfectly Balanced Columns ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-12 sm:mb-16">
          {/* Left Column (5 cols): Profile Card + Verified Certifications */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Executive Profile Card */}
            <MotionReveal direction="left">
              <div className="p-5 sm:p-6 bg-white border-2 border-border-dark rounded-3xl shadow-[5px_5px_0px_#111111] flex flex-col gap-4">
                {/* Avatar with Status */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl border-2 border-border-dark overflow-hidden bg-[#FEF08A] shrink-0 shadow-[3px_3px_0px_#111111] flex items-end justify-center group">
                    <img
                      src="/pic.png"
                      alt="Adarsh Pandey"
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 select-none"
                      loading="lazy"
                    />
                    <span
                      className="absolute top-1.5 right-1.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white shadow-sm"
                      title="Available for Projects"
                    />
                  </div>

                  <div>
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-pastel-butter border border-border-dark rounded-full font-mono text-[9.5px] font-bold text-ink-black uppercase mb-1">
                      <Sparkles size={10} className="text-amber-700" />
                      <span>AKTU '28 Candidate</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-ink-black leading-tight">
                        Adarsh Pandey
                      </h3>
                      <span
                        className="inline-flex items-center justify-center w-4.5 h-4.5 rounded-full bg-[#10B981] border-[1.5px] border-border-dark text-white shadow-[1px_1px_0px_#111111] shrink-0"
                        title="Verified Technologist & Designer"
                      >
                        <Check size={11} className="text-white stroke-[3.5]" />
                      </span>
                    </div>
                    <p className="font-mono text-[10px] text-ink-muted uppercase font-bold tracking-wider mt-0.5">
                      Creative Dev, UI/UX &amp; AI/ML
                    </p>
                  </div>
                </div>

                {/* Quick Info Items */}
                <div className="flex flex-col gap-2.5 pt-3 border-t-2 border-border-dark/15">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-surface-container border border-border-dark flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111111]">
                      <GraduationCap size={15} className="text-ink-black" />
                    </div>
                    <span className="font-body text-xs sm:text-sm font-semibold text-ink-black">
                      B.Tech CSE, AKTU (2024–2028)
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-surface-container border border-border-dark flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111111]">
                      <MapPin size={15} className="text-ink-black" />
                    </div>
                    <span className="font-body text-xs sm:text-sm font-semibold text-ink-black">
                      Greater Noida, UP • Worldwide Remote
                    </span>
                  </div>

                  <a
                    href="mailto:adarshpandey.cse@gmail.com"
                    className="flex items-center gap-2.5 hover:text-primary transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-surface-container border border-border-dark flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111111] group-hover:bg-pastel-butter transition-colors">
                      <Mail size={15} className="text-ink-black" />
                    </div>
                    <span className="font-mono text-xs truncate font-medium">adarshpandey.cse@gmail.com</span>
                  </a>

                  <a
                    href="https://wa.me/918800795476"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-primary transition-colors group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-surface-container border border-border-dark flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111111] group-hover:bg-pastel-mint transition-colors">
                      <Phone size={15} className="text-ink-black" />
                    </div>
                    <span className="font-mono text-xs font-semibold">+91 88007 95476</span>
                  </a>
                </div>

                {/* Social Channels */}
                <div className="grid grid-cols-2 gap-2.5 pt-2">
                  <motion.a
                    href="https://linkedin.com/in/adarsh-pandey-cse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-white border-2 border-border-dark rounded-xl font-mono text-xs font-bold text-ink-black shadow-[2px_2px_0px_#111111] hover:bg-pastel-sky transition-all"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LinkedInLogo size={16} />
                    <span>LinkedIn</span>
                  </motion.a>

                  <motion.a
                    href="https://www.instagram.com/adarsh_.pandey__"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-white border-2 border-border-dark rounded-xl font-mono text-xs font-bold text-ink-black shadow-[2px_2px_0px_#111111] hover:bg-pastel-peach transition-all"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <InstagramLogo size={16} />
                    <span>Instagram</span>
                  </motion.a>
                </div>
              </div>
            </MotionReveal>

            {/* Verified Certifications Card */}
            <MotionReveal direction="left" delay={0.1}>
              <div className="p-5 sm:p-6 border-2 border-border-dark rounded-3xl bg-white shadow-[5px_5px_0px_#111111] flex flex-col gap-4">
                <div className="flex items-center justify-between pb-3 border-b-2 border-border-dark">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-secondary-container border border-border-dark flex items-center justify-center shadow-[1px_1px_0px_#111111]">
                      <Award size={18} className="text-ink-black" />
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-sm sm:text-base text-ink-black leading-tight">
                        Verified Certifications
                      </h4>
                      <p className="font-mono text-[9.5px] text-ink-muted uppercase font-semibold">
                        Google, LinkedIn &amp; Oracle Accredited
                      </p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-pastel-mint border border-border-dark rounded-full font-mono text-[10px] font-bold text-ink-black uppercase shadow-[1px_1px_0px_#111111]">
                    10+ Verified
                  </span>
                </div>

                {/* Certifications List (All 10 fully visible without any scrolling) */}
                <div className="flex flex-col gap-2 sm:gap-2.5">
                  {certifications.map((cert) => {
                    const Logo = cert.logo
                    return (
                      <motion.div
                        key={cert.name}
                        className="p-3 rounded-2xl border-2 border-border-dark/30 bg-surface-container hover:bg-white hover:border-border-dark hover:shadow-[3px_3px_0px_#111111] transition-all duration-150 flex items-center gap-3 cursor-default"
                        whileHover={{ x: 2, y: -1 }}
                      >
                        <div className="w-9 h-9 rounded-xl bg-white border border-border-dark flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111111]">
                          <Logo size={22} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-display font-bold text-xs sm:text-sm text-ink-black truncate leading-tight">
                            {cert.name}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="font-mono text-[10px] text-ink-muted font-semibold">{cert.issuer}</span>
                            <span className="w-1 h-1 rounded-full bg-border-dark/40" />
                            <span className="font-mono text-[10px] text-emerald-700 font-bold flex items-center gap-0.5">
                              <CheckCircle2 size={11} className="stroke-[2.5]" />
                              {cert.credentialId}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right Column (7 cols): Education Details & Experience Trajectory */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b-2 border-border-dark">
              <div className="flex items-center gap-2">
                <BookOpen size={18} className="text-ink-black" />
                <h3 className="font-display font-extrabold text-lg sm:text-xl text-ink-black">
                  Education &amp; Experience Trajectory
                </h3>
              </div>
              <span className="font-mono text-xs text-ink-muted font-bold uppercase">
                Academic &amp; Commercial
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {educationTimeline.map((item, i) => {
                const Emblem = item.logo
                return (
                  <MotionReveal key={item.title} delay={i * 0.08} direction="right">
                    <motion.div
                      className={`p-5 sm:p-6 ${item.color} border-2 border-border-dark rounded-3xl relative transition-all duration-200 shadow-[5px_5px_0px_#111111]`}
                      whileHover={{ y: -3, x: -1, boxShadow: '7px 7px 0px #111111' }}
                    >
                      {/* Header: Logo, Time, Title, Badge */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                        <div className="flex items-start gap-3.5">
                          <div className="w-11 h-11 rounded-2xl bg-white border-2 border-border-dark flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#111111]">
                            <Emblem size={28} />
                          </div>
                          <div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span className="font-mono text-[11px] font-black text-ink-black bg-white px-2 py-0.5 rounded-md border border-border-dark shadow-[1px_1px_0px_#111111]">
                                {item.period}
                              </span>
                              <span className="font-mono text-[10.5px] text-ink-muted uppercase font-bold">
                                {item.org}
                              </span>
                            </div>
                            <h4 className="font-display font-extrabold text-base sm:text-lg text-ink-black leading-tight">
                              {item.title}
                            </h4>
                          </div>
                        </div>

                        <span className="px-3 py-1 bg-ink-black text-white font-mono text-[10px] font-bold rounded-full shrink-0 self-start border border-border-dark shadow-[1px_1px_0px_#111111]">
                          {item.status}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="font-body text-xs sm:text-sm text-ink-black/90 leading-relaxed mb-3.5 pl-0 sm:pl-[58px]">
                        {item.desc}
                      </p>

                      {/* Key Subjects / Focus Area Tags */}
                      <div className="pl-0 sm:pl-[58px] pt-3 border-t border-border-dark/20 flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase font-bold text-ink-muted">
                          Key Focus &amp; Core Subjects:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {item.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-2.5 py-0.5 bg-white/90 border border-border-dark rounded-md font-mono text-[10px] sm:text-[10.5px] text-ink-black font-semibold shadow-[1px_1px_0px_#111111]"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Verified Achievements */}
                      <div className="pl-0 sm:pl-[58px] pt-2.5 mt-2.5 border-t border-border-dark/15 flex flex-col gap-1.5">
                        <span className="font-mono text-[10px] uppercase font-bold text-ink-muted">
                          Verified Academic &amp; Project Proofs:
                        </span>
                        {item.achievements.map((ach) => (
                          <div key={ach} className="flex items-center gap-1.5 text-xs text-ink-black font-medium">
                            <CheckCircle2 size={13} className="text-emerald-700 shrink-0 stroke-[2.5]" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </MotionReveal>
                )
              })}
            </div>
          </div>
        </div>

        {/* ── Bottom Section: Full-Width Technical & Creative Skills Arsenal (4 Columns) ── */}
        <MotionReveal>
          <div className="flex flex-col gap-5 pt-4 border-t-2 border-border-dark/20">
            {/* Header Divider Line */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 bg-[#FACC15] border-2 border-border-dark rounded-sm inline-block shadow-[1px_1px_0px_#111111]" />
                <h3 className="font-mono text-xs sm:text-sm font-black text-ink-black uppercase tracking-wider">
                  TECHNICAL &amp; CREATIVE SKILLS ARSENAL
                </h3>
              </div>

              <div className="flex-1 h-[1.5px] bg-border-dark/25 hidden sm:block mx-4" />

              <span className="font-mono text-[11px] sm:text-xs font-bold text-ink-muted uppercase tracking-wider">
                4 DISCIPLINES • 35+ PRODUCTION TOOLS
              </span>
            </div>

            {/* 4 Skill Cards Grid spanning full width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {skillCategories.map((cat, i) => {
                const Icon = cat.icon
                return (
                  <motion.div
                    key={cat.category}
                    className={`p-4 sm:p-5 ${cat.color} border-2 border-border-dark rounded-2xl flex flex-col justify-between shadow-[4px_4px_0px_#111111]`}
                    whileHover={{ y: -3, boxShadow: '6px 6px 0px #111111' }}
                    transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                  >
                    <div>
                      {/* Card Header: Icon + Badge */}
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-white border border-border-dark flex items-center justify-center shadow-[1px_1px_0px_#111111]">
                          <Icon size={16} className="text-ink-black" />
                        </div>
                        <span className="px-2 py-0.5 bg-ink-black text-white font-mono text-[9px] font-bold uppercase rounded">
                          {cat.badge}
                        </span>
                      </div>

                      <h4 className="font-display font-extrabold text-sm sm:text-base text-ink-black leading-snug mb-1">
                        {cat.category}
                      </h4>
                      <p className="font-body text-xs text-ink-black/80 leading-relaxed mb-3">
                        {cat.desc}
                      </p>
                    </div>

                    {/* Skill Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-border-dark/20 mt-auto">
                      {cat.skills.map((skill) => (
                        <motion.span
                          key={skill}
                          className="px-2 py-1 bg-white border border-border-dark rounded-md font-mono text-[10px] font-bold text-ink-black shadow-[1px_1px_0px_#111111] cursor-default"
                          whileHover={{ scale: 1.05, y: -1, backgroundColor: '#FDE047' }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  )
}
