"use client"

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import type { ReactNode } from "react"
import { useRef } from "react"

export function ProjectMedia({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-2.5%", "2.5%"])

  return (
    <div className="project-media-clip" ref={ref}>
      <motion.div
        className="project-media-motion"
        style={{ y: reduceMotion ? 0 : y }}
      >
        {children}
      </motion.div>
    </div>
  )
}
