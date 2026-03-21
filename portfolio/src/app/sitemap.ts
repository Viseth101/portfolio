import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with real Vercel URL after deploy.
  const baseUrl = "https://udtarakviseth.dev";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
