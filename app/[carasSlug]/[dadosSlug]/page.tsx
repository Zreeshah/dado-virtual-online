import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DicePage } from '@/components/DicePage';
import { allDicePages, pageByPath, pageNotFoundMessage } from '@/lib/dice-pages';
import { pageMetadata } from '@/lib/seo';

type RouteParams = Promise<{ carasSlug: string; dadosSlug: string }>;

const nestedPages = allDicePages.filter((page) => page.path.split('/').filter(Boolean).length === 2);

export const dynamicParams = false;

export function generateStaticParams() {
  return nestedPages.map((page) => {
    const [carasSlug, dadosSlug] = page.path.split('/').filter(Boolean);
    return { carasSlug, dadosSlug };
  });
}

function getPage(carasSlug: string, dadosSlug: string) {
  return pageByPath(`/${carasSlug}/${dadosSlug}`) ?? null;
}

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { carasSlug, dadosSlug } = await params;
  const page = getPage(carasSlug, dadosSlug);
  if (!page) return { title: pageNotFoundMessage(`/${carasSlug}/${dadosSlug}`) };
  return pageMetadata(page);
}

export default async function Page({ params }: { params: RouteParams }) {
  const { carasSlug, dadosSlug } = await params;
  const page = getPage(carasSlug, dadosSlug);
  if (!page) notFound();
  return <DicePage page={page} />;
}
