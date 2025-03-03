import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/*.html/",
    },
    host: "https://nante-it.vercel.app",
    sitemap: "https://nante-it.vercel.app/sitemap.xml",
  };
}
