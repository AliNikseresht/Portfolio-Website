import { Arrow } from "@/components/ui/arrow"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="section-label">Error — 404</p>
      <h1>This route is off-grid.</h1>
      <p>The page you requested could not be found.</p>
      <Link className="action action-primary" href="/">
        Return home <Arrow />
      </Link>
    </main>
  )
}
