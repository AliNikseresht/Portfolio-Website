import { MagneticLink } from "@/components/motion/magnetic-link"
import { Arrow } from "@/components/ui/arrow"
import { SectionLabel } from "@/components/ui/section-label"
import { socialLinks } from "@/data/portfolio"

export function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-grid" aria-hidden="true" />
      <SectionLabel>05 — Start a conversation</SectionLabel>
      <h2>
        Have an idea?
        <br />
        <span>Let’s make it real.</span>
      </h2>
      <div className="contact-bottom">
        <p>Tell me what you’re building and what you need help with.</p>
        <MagneticLink className="contact-action" href={socialLinks.email}>
          Start a conversation <Arrow diagonal />
        </MagneticLink>
      </div>
      <div className="footer-line">
        <span>Ali Nikseresht © 2026</span>
        <div>
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={socialLinks.email}>Email ↗</a>
        </div>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
