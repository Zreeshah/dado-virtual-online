import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DicePage } from '@/components/DicePage';
import { allDicePages, pageByPath, pageNotFoundMessage } from '@/lib/dice-pages';
import { pageMetadata } from '@/lib/seo';

type RouteParams = Promise<{ slug: string }>;

const topLevelPages = allDicePages.filter((page) => page.path.split('/').filter(Boolean).length === 1);

export const dynamicParams = false;

export function generateStaticParams() {
  return topLevelPages.map((page) => ({ slug: page.path.slice(1) }));
}

function getPage(slug: string) {
  return pageByPath(`/${slug}`) ?? null;
}

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return { title: pageNotFoundMessage(`/${slug}`) };
  return pageMetadata(page);
}

export default async function Page({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  return <DicePage page={page} />;
}
