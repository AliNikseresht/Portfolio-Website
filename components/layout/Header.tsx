import { socialLinks } from "@/data/portfolio"

export function Header() {
  return (
    <header className="site-header">
      <a
        className="brand"
        href="#top"
        aria-label="Ali Nikseresht — back to top"
      >
        <span className="brand-bracket">[</span>
        AN
        <span className="brand-bracket">]</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="availability" href={socialLinks.email}>
        <span aria-hidden="true" />
        Available for work
      </a>
    </header>
  )
}
