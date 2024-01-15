import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/promotion/pledge/result2/",
    },
    sitemap: `${process.env.NEXT_PUBLIC_HOST}/sitemap.xml`,
  };
}
