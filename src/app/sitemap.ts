import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { packages } from "@/data/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/packages",
    "/group-tours",
    "/gallery",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return [
    ...routes.map((r) => ({
      url: `${site.url}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...packages.map((p) => ({
      url: `${site.url}/packages/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
