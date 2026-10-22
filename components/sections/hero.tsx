import { MagneticLink } from "@/components/motion/magnetic-link"
import { Arrow } from "@/components/ui/arrow"
import { socialLinks } from "@/data/portfolio"
import { HeroScene } from "./hero-scene"

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-meta hero-reveal hero-reveal-1">
        <span>Independent frontend developer</span>
        <span>Tehran / Remote</span>
        <span>Portfolio · 2025</span>
      </div>

      <h1
        className="hero-title"
        aria-label="I turn ideas into digital experiences"
      >
        <span className="title-line title-line-one hero-mask">
          <span>I TURN</span>
          <span className="title-note">design intent</span>
        </span>
        <span className="title-line title-line-two hero-mask">
          <span>IDEAS</span>
          <span className="title-glyph" aria-hidden="true">
            +
          </span>
          <span>INTO</span>
        </span>
        <span className="title-line title-line-three hero-mask">
          <span>DIGITAL</span>
          <span>EXPERIENCES.</span>
        </span>
      </h1>

      <div className="hero-bottom">
        <div className="hero-copy hero-reveal hero-reveal-2">
          <p>
            Building thoughtful, high-performance web interfaces with React,
            Next.js, and TypeScript.
          </p>
          <div className="hero-actions">
            <MagneticLink className="action action-primary" href="#work">
              Explore selected work <Arrow />
            </MagneticLink>
            <a className="action action-text" href={socialLinks.email}>
              Let’s build something <Arrow diagonal />
            </a>
          </div>
        </div>
        <HeroScene />
      </div>

      <div className="hero-name" aria-hidden="true">
        ALI NIKSERESHT
      </div>
    </section>
  )
}
