import { ArrowRight } from "lucide-react"

type ArrowProps = {
  diagonal?: boolean
}

export function Arrow({ diagonal = false }: ArrowProps) {
  return (
    <ArrowRight
      aria-hidden="true"
      className={diagonal ? "icon diagonal" : "icon"}
      strokeWidth={1.6}
    />
  )
}
