import { Reveal } from "@/components/motion/reveal"
import { ProjectMedia } from "@/components/motion/project-media"
import { SectionLabel } from "@/components/ui/section-label"
import { projects, type Project } from "@/data/portfolio"
import Image from "next/image"

function ProjectShowcase({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const projectNumber = String(index + 1).padStart(2, "0")

  return (
    <Reveal className={`project project-${index + 1} tone-${project.tone}`}>
      <span className="project-index" aria-hidden="true">
        /{projectNumber}
      </span>
      <div className="project-visual">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <em>{project.type}</em>
        </div>
        <ProjectMedia>
          <Image
  src={project.image}
  alt={`${project.name} interface preview`}
  width={project.width}
  height={project.height}
  sizes={
    index === 0
      ? "(max-width: 620px) 100vw, 94vw"
      : "(max-width: 620px) 100vw, (max-width: 900px) 70vw, 62vw"
  }
  priority={index === 0}
  quality={index === 0 ? 90 : 82}
  unoptimized
/>
        </ProjectMedia>
        <span className="image-cross cross-a" aria-hidden="true" />
        <span className="image-cross cross-b" aria-hidden="true" />
      </div>
      <div className="project-info">
        <div>
          <p>{project.type}</p>
          <h3>{project.name}</h3>
        </div>
        <p className="project-description">{project.description}</p>
        <ul aria-label={`${project.name} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export function Work() {
  return (
    <section className="work" id="work">
      <Reveal className="section-intro">
        <SectionLabel>01 — Selected work</SectionLabel>
        <h2>
          Products, not
          <br />
          just pages.
        </h2>
        <p>
          A selection of interfaces engineered around real use cases, responsive
          behavior, and the details that make digital products feel complete.
        </p>
      </Reveal>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectShowcase project={project} index={index} key={project.name} />
        ))}
      </div>
    </section>
  )
}
