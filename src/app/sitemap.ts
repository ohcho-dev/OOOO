import { MetadataRoute } from "next";

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_HOST}`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}/promotion/pledge`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_HOST}/promotion/pledge/info`,
    },
  ];
}
