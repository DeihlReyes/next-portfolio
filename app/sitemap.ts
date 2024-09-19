import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}/#`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/#about`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/#projects`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/#contact`,
    },
  ];
}
