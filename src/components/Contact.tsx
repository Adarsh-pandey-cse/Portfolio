import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Edit3,
  Send,
  Lock,
  ChevronDown,
} from 'lucide-react'
import { InstagramIcon } from './icons/SocialIcons'
import MotionReveal from './MotionReveal'

const WA_GENERAL =
  'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20am%20interested%20in%20discussing%20a%20high-end%20digital%20project%20with%20you.'
const WA_DESIGN =
  'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20need%20help%20with%20graphic%20design%20or%20branding.'
const WA_WEB =
  'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20need%20a%20website%20or%20web%20application%20built.'

const contactCards = [
  {
    icon: MessageSquare,
    label: 'WhatsApp',
    value: '+91 88007 95476',
    subtext: 'Response within 12 hours',
    href: WA_GENERAL,
    bg: 'bg-pastel-mint',
    shadow: '#74DEB6',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'adarshpandey.cse@gmail.com',
    subtext: 'For briefs, RFPs & documents',
    href: 'mailto:adarshpandey.cse@gmail.com',
    bg: 'bg-pastel-sky',
    shadow: '#BAE6FD',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: '@adarsh_.pandey__',
    subtext: 'Process, design works & updates',
    href: 'https://www.instagram.com/adarsh_.pandey__',
    bg: 'bg-pastel-peach',
    shadow: '#FED7AA',
  },
]

const serviceLinks = [
  { label: 'Full-Stack Web Development', href: WA_WEB },
  { label: 'Graphic Design & Brand Systems', href: WA_DESIGN },
  { label: 'Campus Design & Event Stage Collab', href: 'https://wa.me/918800795476?text=Hello%20Adarsh%2C%20I%20would%20like%20to%20collaborate%20on%20a%20campus%20initiative.' },
  { label: 'General Project Inquiry', href: WA_GENERAL },
]

type FormState = {
  name: string
  service: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', service: '', message: '' })

  const buildMessage = () => {
    const lines = [
      `Hello Adarsh! I saw your portfolio.`,
      form.name ? `My name is ${form.name}.` : '',
      form.service ? `I'm interested in: ${form.service}.` : '',
      form.message ? `Details: ${form.message}` : '',
    ].filter(Boolean)
    return encodeURIComponent(lines.join(' '))
  }

  return (
    <section id="contact" className="w-full py-space-xl bg-ink-black border-y-2 border-border-dark scroll-mt-20">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <MotionReveal>
          <div className="mb-space-xl">
            <span className="flex items-center gap-2 font-mono text-label-md text-pastel-butter uppercase tracking-wider mb-2">
              <span className="w-2 h-2 bg-pastel-butter rounded-full inline-block" />
              07 • Reach Out
            </span>
            <h2 className="font-display font-extrabold text-headline-lg text-white">
              Let's build something exceptional.
            </h2>
            <p className="font-body text-body-md text-surface-dim mt-3 max-w-xl">
              Available for strategic freelance collaborations and high-end digital projects.
              Global availability. Response within 12 hours.
            </p>
          </div>
        </MotionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left: contact cards + service links */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            {/* Contact method cards */}
            <MotionReveal delay={0.05}>
              <div className="flex flex-col gap-space-md">
                {contactCards.map((card) => {
                  const Icon = card.icon
                  return (
                    <motion.a
                      key={card.label}
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-space-md p-space-md ${card.bg} border-2 border-border-dark rounded-xl group transition-all duration-150`}
                      style={{ boxShadow: `4px 4px 0px ${card.shadow}` }}
                      whileHover={{ x: -3, y: -3, scale: 1.01, boxShadow: '6px 6px 0px #1833FF' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    >
                      <div className="w-10 h-10 bg-ink-black border-2 border-border-dark rounded-lg flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#111111] group-hover:scale-105 transition-transform">
                        <Icon size={18} className="text-white" />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-mono text-label-sm text-ink-muted uppercase">{card.label}</span>
                        <span className="font-display font-bold text-body-md text-ink-black truncate">{card.value}</span>
                        <span className="font-mono text-label-sm text-ink-muted">{card.subtext}</span>
                      </div>
                      <ArrowUpRight size={18} className="text-ink-black ml-auto shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  )
                })}
              </div>
            </MotionReveal>

            {/* Quick service links */}
            <MotionReveal delay={0.1}>
              <div className="p-space-md bg-white/5 border-2 border-white/20 rounded-xl">
                <p className="font-mono text-label-md text-pastel-butter uppercase mb-space-sm font-semibold">
                  Quick Inquiry Links
                </p>
                <div className="flex flex-col gap-2">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3.5 py-2.5 border border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-pastel-butter transition-all group"
                    >
                      <span className="font-body text-body-sm">{link.label}</span>
                      <ArrowRight size={16} className="text-white/40 group-hover:text-pastel-butter group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </MotionReveal>
          </div>

          {/* Right: WhatsApp message builder */}
          <MotionReveal className="lg:col-span-7" direction="right" delay={0.1}>
            <div className="p-space-lg bg-white/5 border-2 border-white/20 rounded-2xl shadow-[4px_4px_0px_#FACC15]">
              <div className="flex items-center gap-2 mb-space-md">
                <div className="w-8 h-8 rounded-lg bg-pastel-butter border border-border-dark flex items-center justify-center text-ink-black shadow-[2px_2px_0px_#111111]">
                  <Edit3 size={16} />
                </div>
                <span className="font-mono text-label-md text-pastel-butter uppercase font-bold tracking-wider">
                  Direct WhatsApp Dispatch
                </span>
              </div>

              <p className="font-body text-body-sm text-surface-dim mb-space-md leading-relaxed">
                Fill in the fields below and click the button — it will instantly open WhatsApp with your
                formatted message pre-filled. You review and send it directly.
              </p>

              <div className="flex flex-col gap-space-md">
                {/* Name */}
                <div>
                  <label className="font-mono text-label-sm text-white uppercase mb-1.5 block" htmlFor="contact-name">
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-xl text-white placeholder:text-white/40 font-body text-body-md focus:outline-none focus:border-pastel-butter focus:shadow-[3px_3px_0px_#FACC15] transition-all"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="font-mono text-label-sm text-white uppercase mb-1.5 block" htmlFor="contact-service">
                    What do you need?
                  </label>
                  <div className="relative">
                    <select
                      id="contact-service"
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-xl text-white font-body text-body-md focus:outline-none focus:border-pastel-butter appearance-none cursor-pointer pr-10"
                    >
                      <option value="" className="text-ink-black bg-white">Select a service…</option>
                      <option value="Full Stack Web Development" className="text-ink-black bg-white">Full Stack Web Development</option>
                      <option value="UI/UX Design" className="text-ink-black bg-white">UI/UX Design</option>
                      <option value="Graphic Design / Branding" className="text-ink-black bg-white">Graphic Design / Branding</option>
                      <option value="Packaging Design" className="text-ink-black bg-white">Packaging Design</option>
                      <option value="Video Editing / Motion" className="text-ink-black bg-white">Video Editing / Motion Design</option>
                      <option value="Campus Design Work" className="text-ink-black bg-white">Campus Design Work</option>
                      <option value="General Collaboration" className="text-ink-black bg-white">General Collaboration</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-label-sm text-white uppercase mb-1.5 block" htmlFor="contact-message">
                    Brief details (optional)
                  </label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Briefly describe your project, timeline, or any specific requirements…"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/30 rounded-xl text-white placeholder:text-white/40 font-body text-body-md focus:outline-none focus:border-pastel-butter resize-none transition-all"
                  />
                </div>

                <motion.a
                  href={`https://wa.me/918800795476?text=${buildMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center group py-3.5 shadow-[4px_4px_0px_#FACC15]"
                  whileHover={{ scale: 1.01, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} className="transition-transform group-hover:translate-x-1" />
                  <span>Open in WhatsApp</span>
                </motion.a>
                <div className="flex items-center justify-center gap-1.5 text-white/50">
                  <Lock size={13} />
                  <p className="font-mono text-label-sm uppercase">
                    Securely opens WhatsApp · You confirm before sending
                  </p>
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
