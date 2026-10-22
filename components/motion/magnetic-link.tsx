"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"
import type { PointerEvent, ReactNode } from "react"

type MagneticLinkProps = {
  children: ReactNode
  className: string
  href: string
}

export function MagneticLink({ children, className, href }: MagneticLinkProps) {
  const reduceMotion = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 180, damping: 18 })

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return
    const bounds = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.16)
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.16)
  }

  function resetPosition() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      className={className}
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      style={{ x, y }}
    >
      {children}
    </motion.a>
  )
}
