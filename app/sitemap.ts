import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { SERVICE_SLUGS } from "@/lib/content/services";
import { PROJECT_SLUGS } from "@/lib/content/projects";
import { POST_SLUGS } from "@/lib/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/servicos",
    "/trabalhos",
    "/estudio",
    "/processo",
    "/contato",
    "/blog",
    "/privacidade",
  ];

  const dynamicRoutes = [
    ...SERVICE_SLUGS.map((s) => `/servicos/${s}`),
    ...PROJECT_SLUGS.map((s) => `/trabalhos/${s}`),
    ...POST_SLUGS.map((s) => `/blog/${s}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
