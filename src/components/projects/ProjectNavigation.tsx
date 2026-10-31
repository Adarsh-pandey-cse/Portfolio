import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ExternalLink, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProjectNavigationProps {
  title: string
  liveUrl?: string
  inquireUrl?: string
}

export default function ProjectNavigation({ title, liveUrl, inquireUrl }: ProjectNavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['overview', 'features', 'gallery', 'technology', 'process']
      const scrollPos = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          return
        }
      }
      if (window.scrollY < 100) setActiveSection('')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Features', href: '#features' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Technology', href: '#technology' },
    { label: 'Process', href: '#process' },
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-[#FDF9F1]/95 backdrop-blur-md border-b-2 border-border-dark shadow-[0_2px_0px_#111111]'
          : 'bg-[#FDF9F1]/90 backdrop-blur-sm border-b border-border-dark/40'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[68px] sm:h-[72px] flex items-center justify-between gap-3">
        {/* Left: AP Identity + Back to Projects Button */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Back to Adarsh Pandey Portfolio"
          >
            <motion.div
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#581C87] border-2 border-border-dark rounded-full flex items-center justify-center text-white font-mono font-black text-xs sm:text-sm shadow-[2px_2px_0px_#111111]"
              whileHover={{ scale: 1.08, rotate: -6, boxShadow: '3px 3px 0px #1833FF' }}
              whileTap={{ scale: 0.95 }}
            >
              AP
            </motion.div>
          </Link>

          {/* Vertical divider */}
          <span className="w-0.5 h-6 bg-border-dark/20 hidden sm:block" />

          {/* Back to Projects link */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 bg-white hover:bg-pastel-butter border-2 border-border-dark rounded-full font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider text-ink-black shadow-[2px_2px_0px_#111111] hover:shadow-[3px_3px_0px_#111111] transition-all group"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1 stroke-[2.5]"
            />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Center: In-Page Section Anchor Navigation */}
        <nav
          className="hidden lg:flex items-center gap-1 p-1.5 bg-white border-2 border-border-dark rounded-full shadow-[2.5px_2.5px_0px_#111111]"
          aria-label="Project section navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`px-3 py-1 font-mono text-[11px] xl:text-[12px] font-black uppercase tracking-wider rounded-full transition-all duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-ink-black text-white shadow-[2px_2px_0px_#1833FF]'
                    : 'text-ink-black/80 hover:text-ink-black hover:bg-black/[0.05]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right: Live View or Inquire Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {liveUrl ? (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-4.5 py-1.5 sm:py-2 bg-[#1833FF] hover:bg-[#001DCC] text-white border-2 border-border-dark rounded-full font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-[2.5px_2.5px_0px_#111111] hover:shadow-[4px_4px_0px_#111111] transition-all"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Live</span>
              <ExternalLink size={13} className="stroke-[2.5]" />
            </motion.a>
          ) : (
            <motion.a
              href={
                inquireUrl ||
                `https://wa.me/918800795476?text=${encodeURIComponent(
                  `Hello Adarsh, I am interested in ${title}`
                )}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 sm:px-4.5 py-1.5 sm:py-2 bg-[#111111] hover:bg-black text-white border-2 border-border-dark rounded-full font-mono text-[11px] sm:text-xs font-black uppercase tracking-wider shadow-[2.5px_2.5px_0px_#FACC15] hover:shadow-[4px_4px_0px_#FACC15] transition-all"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Inquire</span>
              <ExternalLink size={13} className="stroke-[2.5]" />
            </motion.a>
          )}

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-9 h-9 border-2 border-border-dark rounded-full bg-white flex items-center justify-center shadow-[2px_2px_0px_#111111] active:scale-95"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#FDF9F1] border-b-2 border-border-dark px-4 py-4 flex flex-col gap-2 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="font-mono text-xs font-black uppercase py-2 px-3 rounded-lg border-2 border-transparent hover:border-border-dark hover:bg-white transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span>→</span>
                </a>
              ))}
            </div>

            <div className="pt-2 border-t border-border-dark/20 flex flex-col gap-2">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-[#FEF08A] text-ink-black font-mono font-black text-center text-xs uppercase border-2 border-border-dark rounded-full shadow-[2px_2px_0px_#111111] flex items-center justify-center gap-1.5"
              >
                <span>OPEN LIVE APPLICATION</span>
                <ExternalLink size={13} />
              </a>
              <Link
                to="/#projects"
                className="w-full py-2 bg-white text-ink-black font-mono font-bold text-center text-xs uppercase border border-border-dark rounded-full"
              >
                ← BACK TO PORTFOLIO
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
