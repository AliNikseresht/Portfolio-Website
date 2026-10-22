import { Reveal } from "@/components/motion/reveal"
import { SectionLabel } from "@/components/ui/section-label"

export function About() {
  return (
    <section className="about" id="about">
      <SectionLabel>02 — Practice</SectionLabel>
      <Reveal className="about-layout">
        <h2>
          Code is the
          <br />
          <span>material.</span>
          <br />
          Feeling is the
          <br />
          <span>outcome.</span>
        </h2>
        <div className="about-copy">
          <div className="orbit" aria-hidden="true">
            <span>CRAFT</span>
            <i />
            <em>DETAIL</em>
          </div>
          <p>
            I’m a frontend developer who enjoys turning ideas and visual
            concepts into thoughtful digital experiences. I focus on modern web
            technologies, maintainable interfaces, responsive implementation,
            and the details that make products feel complete.
          </p>
          <p className="small-copy">
            My approach sits between visual precision and technical
            reliability—curious in exploration, deliberate in execution.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
