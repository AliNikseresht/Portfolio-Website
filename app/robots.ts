import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://alinikseresht.vercel.app/sitemap.xml",
    host: "https://alinikseresht.vercel.app",
  }
}
