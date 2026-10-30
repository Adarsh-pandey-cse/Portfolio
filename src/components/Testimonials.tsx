import MotionReveal from './MotionReveal'
import { User } from 'lucide-react'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-space-xl bg-surface-container-low border-y-2 border-border-dark">
      <div className="max-w-container mx-auto px-margin-mobile lg:px-margin">
        {/* Header */}
        <MotionReveal>
          <div className="mb-space-xl text-center">
            <span className="section-label justify-center mb-2">
              <span className="w-2 h-2 bg-secondary-container rounded-full inline-block" />
              06 • Verified Reviews
            </span>
            <h2 className="font-display font-extrabold text-headline-lg text-ink-black">
              What partners say.
            </h2>
            <p className="font-body text-body-md text-ink-muted mt-2">
              Real feedback from real projects. No fabrications.
            </p>
          </div>
        </MotionReveal>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {testimonials.map((t, i) => (
            <MotionReveal key={t.id} delay={i * 0.07}>
              <div
                className="p-space-lg border-2 border-border-dark rounded-2xl flex flex-col justify-between h-full card-hover"
                style={{ backgroundColor: t.bgColor }}
              >
                {/* Quote mark */}
                <div>
                  <span className="font-display font-extrabold text-[48px] text-ink-black/20 leading-none select-none" aria-hidden="true">
                    "
                  </span>
                  <p className="font-body text-body-md text-ink-black leading-relaxed mt-[-16px]">
                    {t.quote}
                  </p>
                </div>

                {/* Attribution */}
                <div className="mt-space-md pt-space-sm border-t-2 border-border-dark flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-ink-black border-2 border-border-dark flex items-center justify-center shrink-0 shadow-[1px_1px_0px_#111111]">
                    <User size={15} className="text-white" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-body-sm text-ink-black">{t.author}</p>
                    <p className="font-mono text-label-sm text-ink-muted">{t.role} • {t.project}</p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
