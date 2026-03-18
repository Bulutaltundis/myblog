import { MetadataRoute } from 'next';
import { source } from '@/lib/source'; // Fumadocs source tanımının olduğu dosya yolu

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://blog.bulutaltundis.cloud'; // Kendi domaininle değiştir

  // Fumadocs üzerindeki tüm sayfaları (dokümanlar/bloglar) çekiyoruz
  const allPages = source.getPages().map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }));

  // Manuel eklemek istediğin sayfalar (Ana sayfa, iletişim vb.)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
  ];

  return [...staticPages, ...allPages];
}