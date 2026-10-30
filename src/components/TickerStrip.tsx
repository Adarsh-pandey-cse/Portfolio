import {
  Code2,
  Cpu,
  Palette,
  Film,
  Sparkles,
  Trophy,
  Layers,
  GraduationCap,
} from 'lucide-react'

const items = [
  { icon: Code2, text: 'Next.js 15 & React Web Systems' },
  { icon: Cpu, text: 'Python • OpenCV • Computer Vision' },
  { icon: Sparkles, text: 'Applied GenAI & NLP Pipelines' },
  { icon: Palette, text: 'Figma UI/UX & Design Tokens' },
  { icon: Film, text: 'Premiere Pro Editing & Lumetri Grading' },
  { icon: Layers, text: 'CorelDRAW Vector Precision & Packaging' },
  { icon: Trophy, text: 'AKTU Neural Hack 1st Runner Up' },
  { icon: GraduationCap, text: 'B.Tech CSE @ AKTU \'28' },
]

export default function TickerStrip() {
  const doubled = [...items, ...items]

  return (
    <div
      className="w-full bg-secondary-container border-y-2 border-border-dark py-3 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="marquee-wrapper">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {doubled.map((item, i) => {
            const Icon = item.icon
            return (
              <span
                key={i}
                className="flex items-center gap-2 font-mono text-label-md uppercase text-ink-black font-semibold"
              >
                <Icon size={16} className="text-ink-black shrink-0" />
                <span>{item.text}</span>
                {i < doubled.length - 1 && (
                  <span className="w-2 h-2 rounded-full bg-ink-black ml-6" />
                )}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
