import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Eğer admin paneli vs. varsa buraya ekle
    },
    sitemap: 'https://blog.bulutaltundis.cloud/sitemap.xml', // Kendi domainini yaz
  };
}