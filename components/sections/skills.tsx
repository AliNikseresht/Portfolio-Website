"use client"

import { Reveal } from "@/components/motion/reveal"
import { Arrow } from "@/components/ui/arrow"
import { SectionLabel } from "@/components/ui/section-label"
import { skills } from "@/data/portfolio"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"

export function Skills() {
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const selectedSkill = skills[active] ?? skills[0]

  return (
    <section className="skills" id="skills">
      <div className="skills-head">
        <SectionLabel>03 — Technical index</SectionLabel>
        <p>Tools change. The standard of care doesn’t.</p>
      </div>
      <Reveal className="skill-layout">
        <div className="skill-readout" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              className="skill-readout-copy"
              key={selectedSkill[1]}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -18 }}
              transition={{ duration: 0.28 }}
            >
              <span>{selectedSkill[0]}</span>
              <strong>{selectedSkill[1]}</strong>
              <p>{selectedSkill[2]}</p>
            </motion.div>
          </AnimatePresence>
          <div className="readout-grid" aria-hidden="true" />
        </div>
        <div className="skill-list">
          {skills.map((skill, index) => (
            <button
              className={active === index ? "active" : ""}
              key={skill[1]}
              onClick={() => setActive(index)}
              onFocus={() => setActive(index)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setActive(index)
              }}
              type="button"
              aria-pressed={active === index}
            >
              <span>{skill[0]}</span>
              <strong>{skill[1]}</strong>
              <em>{skill[2]}</em>
              <Arrow diagonal />
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
