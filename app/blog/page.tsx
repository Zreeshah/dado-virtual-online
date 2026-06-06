import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { blogArticles, blogCollectionSchema, blogPath } from '@/lib/blog';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Blog de Dados Online | Guías y Consejos',
  description:
    'Guías en español sobre dado online, dado virtual, D20, D8, D4, dados aleatorios y cómo tirar dados desde móvil u ordenador.',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Blog de Dados Online | Guías y Consejos',
    description:
      'Aprende a usar dados online y dados virtuales con guías claras, ejemplos prácticos y consejos para juegos y clases.',
    url: '/blog',
    siteName: SITE_NAME,
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Blog de Dado Virtual Online'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog de Dados Online | Guías y Consejos',
    description:
      'Guías prácticas sobre dado online, dado virtual y tiradas de dados para juegos, clases y decisiones.',
    images: ['/images/og-image.svg']
  }
};

export default function BlogPage() {
  return (
    <main>
      <JsonLd data={blogCollectionSchema()} />
      <section className="blog-index-hero">
        <div className="section-inner">
          <p className="blog-kicker">Guías de dados virtuales</p>
          <h1>Blog sobre dados online</h1>
          <p>
            Artículos prácticos para entender cómo funciona un dado online, cuándo usar cada tipo de
            dado y cómo lanzar resultados aleatorios desde móvil, tablet u ordenador.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="blog-list">
        <div className="section-inner">
          <div className="section-title-block">
            <h2 id="blog-list">Todos los artículos</h2>
            <p>
              Cada guía incluye ejemplos, consejos de uso, preguntas frecuentes y enlaces para probar
              la tirada adecuada en la herramienta.
            </p>
          </div>
          <div className="blog-card-grid">
            {blogArticles.map((article) => (
              <article className="blog-card" key={article.slug}>
                <Link href={blogPath(article.slug)} aria-label={article.title}>
                  <img src={article.image} alt={article.imageAlt} width="960" height="540" />
                </Link>
                <div className="blog-card-body">
                  <p className="blog-card-keyword">{article.keyword}</p>
                  <h3>
                    <Link href={blogPath(article.slug)}>{article.title}</Link>
                  </h3>
                  <p>{article.directAnswer}</p>
                  <Link className="text-link" href={blogPath(article.slug)}>
                    Leer guía
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
