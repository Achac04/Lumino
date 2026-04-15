import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const paths = ["", "/catalog", "/checkout", "/restoration", "/case-study"];
  return paths.map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path === "/case-study" ? "monthly" : "weekly",
    priority: path === "" ? 1 : path === "/case-study" ? 0.9 : 0.7,
  }));
}
