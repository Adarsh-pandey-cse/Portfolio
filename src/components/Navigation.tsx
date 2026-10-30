import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

const WA_URL = 'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20saw%20your%20portfolio.'

const navLinks = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SERVICES', href: '#services' },
  { label: 'CAPABILITIES', href: '#process' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [progress, setProgress] = useState(0)

  // Fast, accurate tracking refs to eliminate lag & scroll-spy race conditions
  const activeRef = useRef('')
  const isClickingRef = useRef(false)
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let rafId: number | null = null

    const handleScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = null

        const scrollY = window.scrollY
        setScrolled(scrollY > 20)

        const total = document.body.scrollHeight - window.innerHeight
        setProgress(total > 0 ? (scrollY / total) * 100 : 0)

        // If user just clicked a nav link, pause scroll-spy to prevent intermediate section thrashing
        if (isClickingRef.current) return

        let current = ''

        // Hero section check: if above 120px, no section is active
        if (scrollY < 120) {
          current = ''
        } else if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 90) {
          // Reached the bottom of the page -> activate CONTACT
          current = '#contact'
        } else {
          // Check sections from bottom to top with accurate viewport detection
          const headerOffset = 180
          for (let i = navLinks.length - 1; i >= 0; i--) {
            const el = document.getElementById(navLinks[i].href.substring(1))
            if (el) {
              const rect = el.getBoundingClientRect()
              if (rect.top <= headerOffset) {
                current = navLinks[i].href
                break
              }
            }
          }
        }

        // Only trigger state update when active section actually changes (eliminates 60fps re-renders)
        if (current !== activeRef.current) {
          activeRef.current = current
          setActive(current)
        }
      })
    }

    // Cancel click-lock immediately if user manually scrolls with mouse wheel or touch
    const cancelClickLock = () => {
      if (isClickingRef.current) {
        isClickingRef.current = false
        if (clickTimerRef.current) {
          clearTimeout(clickTimerRef.current)
          clickTimerRef.current = null
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('wheel', cancelClickLock, { passive: true })
    window.addEventListener('touchmove', cancelClickLock, { passive: true })

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('wheel', cancelClickLock)
      window.removeEventListener('touchmove', cancelClickLock)
      if (rafId) cancelAnimationFrame(rafId)
      if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const handleNavClick = (href: string) => {
    // 1. Instantly update active state & ref so the pill animates directly and immediately
    activeRef.current = href
    setActive(href)
    setMenuOpen(false)

    // 2. Lock scroll-spy for the duration of smooth-scroll to prevent tab jumping / lag
    isClickingRef.current = true
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
    clickTimerRef.current = setTimeout(() => {
      isClickingRef.current = false
      clickTimerRef.current = null
    }, 850)

    // 3. Smooth-scroll with exact 74px navbar offset compensation
    const el = document.querySelector(href)
    if (el) {
      const navHeight = 74
      const targetTop = el.getBoundingClientRect().top + window.scrollY - navHeight
      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-primary via-[#FACC15] to-primary z-50 transition-all duration-75"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-[#FDF9F1]/95 backdrop-blur-md border-b-2 border-border-dark shadow-[0_2px_0px_#111111]'
            : 'bg-[#FDF9F1]/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-[70px] sm:h-[74px] flex items-center justify-between gap-3 sm:gap-4">
          {/* Left: Purple AP Circle + Adarsh Pandey & Title */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              activeRef.current = ''
              setActive('')
              isClickingRef.current = true
              if (clickTimerRef.current) clearTimeout(clickTimerRef.current)
              clickTimerRef.current = setTimeout(() => {
                isClickingRef.current = false
                clickTimerRef.current = null
              }, 850)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            aria-label="Adarsh Pandey — Back to top"
          >
            {/* Solid Purple Circle Logo with Spring Hover */}
            <motion.div
              className="w-9 h-9 sm:w-10 sm:h-10 bg-[#581C87] border-2 border-border-dark rounded-full flex items-center justify-center text-white font-mono font-black text-xs sm:text-sm shadow-[2px_2px_0px_#111111]"
              whileHover={{ scale: 1.08, rotate: -6, boxShadow: '3px 3px 0px #1833ff' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
              AP
            </motion.div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[1.1rem] sm:text-[1.25rem] text-ink-black font-extrabold tracking-tight group-hover:text-primary transition-colors">
                Adarsh Pandey
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-ink-muted uppercase font-bold tracking-wider mt-0.5">
                CREATIVE DEV &amp; DESIGNER
              </span>
            </div>
          </a>

          {/* Center: Floating Pill Navigation with Ultra-Fast, Accurate Black/Electric-Blue Selection */}
          <nav
            className="hidden lg:flex items-center gap-1 p-1.5 bg-white border-2 border-border-dark rounded-full shadow-[2.5px_2.5px_0px_#111111] relative"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = active === link.href
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`relative px-3.5 py-1.5 font-mono text-[11px] xl:text-[12px] font-black uppercase tracking-wider rounded-full select-none cursor-pointer transition-colors duration-150 active:scale-95 ${
                    isActive
                      ? 'text-white'
                      : 'text-ink-black/85 hover:text-ink-black hover:bg-black/[0.06]'
                  }`}
                >
                  {/* Ultra-Snappy, Silky-Smooth Black Pill with Electric Blue Neo-Brutalist Shadow */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-ink-black rounded-full shadow-[2.5px_2.5px_0px_#1833ff] border border-border-dark -z-0 pointer-events-none"
                      transition={{
                        type: 'spring',
                        stiffness: 550,
                        damping: 32,
                        mass: 0.45,
                      }}
                    />
                  )}
                  <span className="relative z-10 transition-colors duration-150">
                    {link.label}
                  </span>
                </a>
              )
            })}
          </nav>

          {/* Right: Availability Badge + Say Hello Button */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Live Availability Status Pill with Hover */}
            <motion.div
              className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-border-dark rounded-full shadow-[2px_2px_0px_#111111] cursor-default"
              whileHover={{ y: -1, boxShadow: '3px 3px 0px #111111' }}
              transition={{ duration: 0.15 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-black text-ink-black uppercase tracking-wider">
                AVAILABLE FOR PROJECTS
              </span>
            </motion.div>

            {/* Say Hello Button (Yellow pill with animated chat icon & hover bounce) */}
            <motion.a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#FDE047] hover:bg-[#FACC15] text-ink-black border-2 border-border-dark rounded-full font-mono text-[11px] sm:text-[12px] font-black uppercase tracking-wider shadow-[2px_2px_0px_#111111] hover:shadow-[4px_4px_0px_#111111] transition-all"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            >
              <MessageSquare size={14} className="text-ink-black stroke-[2.5] transition-transform group-hover:rotate-12 group-hover:scale-110" />
              <span>SAY HELLO</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden flex flex-col justify-center items-center w-9 h-9 border-2 border-border-dark rounded-full bg-white shadow-[2px_2px_0px_#111111] gap-1 cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              whileTap={{ scale: 0.92 }}
            >
              <span
                className={`w-4 h-0.5 bg-border-dark transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-border-dark transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-border-dark transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </motion.button>
          </div>
        </div>

        {/* Mobile Full-Screen Navigation Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden bg-[#FDF9F1] border-b-2 border-border-dark shadow-xl px-6 py-6 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = active === link.href
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className={`font-mono text-xs font-black uppercase py-2.5 px-3 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-ink-black text-white border-border-dark shadow-[2px_2px_0px_#1833ff]'
                          : 'text-ink-black border-transparent hover:bg-surface-container active:scale-98'
                      }`}
                    >
                      <span>{link.label}</span>
                      <span>{isActive ? '●' : '→'}</span>
                    </a>
                  )
                })}
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border-2 border-border-dark rounded-full font-mono text-xs font-bold text-ink-black">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>AVAILABLE FOR PROJECTS</span>
                </div>
                <motion.a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#FDE047] text-ink-black font-mono font-black text-center text-xs uppercase border-2 border-border-dark rounded-full shadow-[2px_2px_0px_#111111]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  SAY HELLO ON WHATSAPP
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
