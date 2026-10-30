import { useRef } from 'react'
import { motion, useInView, type Variants } from 'framer-motion'

interface MotionRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

const noneVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variantMap = {
    up: variants,
    left: leftVariants,
    right: rightVariants,
    none: noneVariants,
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variantMap[direction]}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
