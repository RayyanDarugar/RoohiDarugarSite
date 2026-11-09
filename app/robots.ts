import type { MetadataRoute } from "next";

// Proof-of-concept: block all crawlers until LPL has approved the site.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
