import type { MetadataRoute } from 'next';
import { blogArticles, blogPath } from '@/lib/blog';
import { allDicePages } from '@/lib/dice-pages';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85
    },
    ...allDicePages.map((page) => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: page.path === '/2-dados' || page.path === '/20-caras/1-dado' ? 0.9 : 0.7
    })),
    ...blogArticles.map((article) => ({
      url: `${SITE_URL}${blogPath(article.slug)}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.75
    }))
  ];
}
