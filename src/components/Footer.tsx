import { ArrowUp, MessageSquare, Mail } from 'lucide-react'
import { InstagramIcon, LinkedinIcon } from './icons/SocialIcons'

const WA_URL = 'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20saw%20your%20portfolio.'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Capabilities', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: MessageSquare, label: 'WhatsApp', href: WA_URL },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/adarsh_.pandey__' },
  { icon: Mail, label: 'Email', href: 'mailto:adarshpandey.cse@gmail.com' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com/in/adarsh-pandey-cse' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="w-full bg-surface-container border-t-2 border-border-dark py-space-xl">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg mb-space-xl pb-space-xl border-b-2 border-border-dark">
          {/* Wordmark + tagline */}
          <div>
            <div className="flex items-center gap-space-sm mb-2">
              <div className="w-10 h-10 bg-tertiary-container border-2 border-border-dark rounded-lg flex items-center justify-center shadow-[2px_2px_0px_#111111]">
                <span className="font-mono text-label-md text-on-tertiary uppercase font-bold">AP</span>
              </div>
              <h2 className="font-display font-extrabold text-headline-sm text-ink-black">Adarsh Pandey.</h2>
            </div>
            <p className="font-body text-body-sm text-ink-muted max-w-xs leading-relaxed">
              Architecting high-end digital experiences through the lens of Computer Science and Creative Vision.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-space-xs" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-3 py-1.5 font-mono text-label-sm text-ink-muted hover:text-ink-black hover:bg-white border border-border-dark rounded-full uppercase transition-all duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 px-4 py-2 bg-ink-black text-white border-2 border-border-dark rounded-full font-mono text-label-sm uppercase hover:-translate-y-1 transition-transform duration-150 shadow-[3px_3px_0px_#FACC15] shrink-0 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md">
          <p className="font-mono text-label-sm text-ink-muted uppercase">
            © 2026 Adarsh Pandey. Crafted for the Modern Web.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-space-xs">
            {socialLinks.map((s) => {
              const Icon = s.icon
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white border-2 border-border-dark rounded-lg flex items-center justify-center hover:bg-pastel-butter transition-all duration-150 shadow-[2px_2px_0px_#111111] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_#111111]"
                >
                  <Icon size={16} className="text-ink-black" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
