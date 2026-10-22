import { Header } from "@/components/layout/header"
import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Skills } from "@/components/sections/skills"
import { Work } from "@/components/sections/work"

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Skills />
        <Services />
      </main>
      <Contact />
    </>
  )
}
