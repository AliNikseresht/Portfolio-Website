import { ImageResponse } from "next/og"

export const alt = "Ali Nikseresht — Independent Frontend Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#11130f",
        color: "#f1f0e8",
        display: "flex",
        flexDirection: "column",
        fontFamily: "sans-serif",
        height: "100%",
        justifyContent: "space-between",
        padding: "52px",
        position: "relative",
        width: "100%",
      }}
    >
      <div
        style={{
          color: "#c9ff36",
          display: "flex",
          fontSize: 22,
          justifyContent: "space-between",
          letterSpacing: 2,
          textTransform: "uppercase",
        }}
      >
        <span>[AN]</span>
        <span>Frontend developer · Portfolio</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 104,
          fontWeight: 700,
          letterSpacing: -8,
          lineHeight: 0.86,
          textTransform: "uppercase",
        }}
      >
        <span>I turn ideas into</span>
        <span style={{ color: "#c9ff36" }}>digital experiences.</span>
      </div>
      <div
        style={{
          alignItems: "center",
          borderTop: "1px solid #66685f",
          display: "flex",
          fontSize: 22,
          justifyContent: "space-between",
          paddingTop: 24,
        }}
      >
        <span>Ali Nikseresht</span>
        <span style={{ color: "#ff5c35" }}>React · Next.js · TypeScript</span>
      </div>
    </div>,
    size,
  )
}
