import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { POSTS } from "@/content/insights";

// 정적 라우트 + 인사이트 상세. 8주차 CMS 교체 시 POSTS 소스만 바뀜.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const routes = ["", "/about", "/services", "/insights", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const posts = POSTS.map((post) => ({
    url: `${base}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
