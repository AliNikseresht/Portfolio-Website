import { SectionLabel } from "@/components/ui/section-label"
import { services } from "@/data/portfolio"

export function Services() {
  return (
    <section className="services">
      <div className="services-title">
        <SectionLabel>04 — Ways to work together</SectionLabel>
        <h2>From first frame to final commit.</h2>
      </div>
      <ol>
        {services.map((service, index) => (
          <li key={service}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {service}
          </li>
        ))}
      </ol>
    </section>
  )
}
