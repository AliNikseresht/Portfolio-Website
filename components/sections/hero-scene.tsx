"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react"
import type { PointerEvent } from "react"

export function HeroScene() {
  const reduceMotion = useReducedMotion()
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 90, damping: 18, mass: 0.6 })
  const y = useSpring(rawY, { stiffness: 90, damping: 18, mass: 0.6 })

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== "mouse") return
    const bounds = event.currentTarget.getBoundingClientRect()
    rawX.set((event.clientX - bounds.left - bounds.width / 2) * -0.025)
    rawY.set((event.clientY - bounds.top - bounds.height / 2) * -0.025)
  }

  function resetPosition() {
    rawX.set(0)
    rawY.set(0)
  }

  return (
    <motion.div
      className="construction"
      initial={reduceMotion ? false : { opacity: 0, y: 40, rotate: 1.5 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
      transition={{ delay: 0.72, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      style={{ x, y }}
      aria-label="Interactive interface blueprint"
    >
      <div className="construction-head">
        <span>live / workspace</span>
        <span>1440 × fluid</span>
      </div>
      <div className="construction-canvas">
        <div className="node node-one">COMPONENT</div>
        <div className="node node-two">INTERACTION</div>
        <div className="node node-three">SYSTEM</div>
        <span className="measure measure-x">12 COL</span>
        <span className="measure measure-y">100 VH</span>
        <svg aria-hidden="true" viewBox="0 0 400 210">
          <path d="M32 54H188V112H335M188 112V172H294" />
          <circle cx="32" cy="54" r="5" />
          <circle cx="188" cy="112" r="5" />
          <circle cx="335" cy="112" r="5" />
          <circle cx="294" cy="172" r="5" />
        </svg>
      </div>
      <div className="construction-foot">
        <span className="pulse" />
        system rendering
        <span>60fps</span>
      </div>
    </motion.div>
  )
}
