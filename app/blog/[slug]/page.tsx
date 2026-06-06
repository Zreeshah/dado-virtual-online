import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/JsonLd';
import {
  articleSchema,
  blogArticles,
  blogPath,
  buildArticleSections,
  getBlogArticle,
  type BlogArticle,
  type BlogSection
} from '@/lib/blog';
import { breadcrumbSchema, faqSchema } from '@/lib/seo';
import { SITE_NAME } from '@/lib/site';

type RouteParams = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: RouteParams }): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: `Artículo no encontrado | ${SITE_NAME}`
    };
  }

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: {
      canonical: blogPath(article.slug)
    },
    openGraph: {
      title: article.ogTitle,
      description: article.ogDescription,
      url: blogPath(article.slug),
      siteName: SITE_NAME,
      locale: 'es_ES',
      type: 'article',
      images: [
        {
          url: article.image,
          width: 960,
          height: 540,
          alt: article.imageAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: article.ogTitle,
      description: article.ogDescription,
      images: [article.image]
    }
  };
}

function SectionTable({ table }: { table: NonNullable<BlogSection['table']> }) {
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        <thead>
          <tr>
            {table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row.join('-')}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleSection({ section, article }: { section: BlogSection; article: BlogArticle }) {
  const isLinkSection = section.heading === 'Enlaces útiles para seguir';

  return (
    <section className="article-section">
      <h2>{section.heading}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul>
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.table ? <SectionTable table={section.table} /> : null}
      {isLinkSection ? (
        <div className="article-link-columns">
          <div>
            <h3>Enlaces internos recomendados</h3>
            <ul>
              {article.internalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Fuentes consultadas</h3>
            <ul>
              {article.externalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function RelatedArticles({ article }: { article: BlogArticle }) {
  const related = blogArticles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <aside className="related-articles" aria-labelledby="related-articles">
      <h2 id="related-articles">Más guías</h2>
      <div className="related-article-list">
        {related.map((item) => (
          <Link key={item.slug} href={blogPath(item.slug)}>
            {item.title}
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default async function BlogArticlePage({ params }: { params: RouteParams }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) notFound();

  const sections = buildArticleSections(article);

  return (
    <main>
      <JsonLd
        data={[
          articleSchema(article),
          breadcrumbSchema([
            { name: 'Inicio', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: article.title, path: blogPath(article.slug) }
          ]),
          faqSchema(article.faqs)
        ]}
      />
      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="section-inner">
            <Link href="/blog" className="blog-back-link">
              Blog
            </Link>
            <p className="blog-kicker">{article.keyword}</p>
            <h1>{article.title}</h1>
            <p className="article-lead">{article.directAnswer}</p>
            <img src={article.image} alt={article.imageAlt} width="960" height="540" />
          </div>
        </header>

        <div className="section-inner article-layout">
          <div className="article-content">
            <section className="key-takeaways">
              <h2>Ideas clave</h2>
              <ul>
                <li>{article.mainBenefit}.</li>
                <li>La configuración sugerida es: {article.recommendedSetup}.</li>
                <li>El mejor uso aparece en {article.scenario}.</li>
                <li>El resultado debe interpretarse con una regla acordada antes de tirar.</li>
              </ul>
            </section>

            {sections.map((section) => (
              <ArticleSection key={section.heading} section={section} article={article} />
            ))}

            <section className="article-faq-section" id="preguntas-frecuentes">
              <h2>Preguntas frecuentes sobre {article.keyword}</h2>
              <div className="faq-list">
                {article.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="article-section article-conclusion">
              <h2>Conclusión</h2>
              <p>
                {article.title} se resume en una idea simple: el dado debe ofrecer un resultado
                claro, dentro de un rango definido y aceptado por todas las personas que participan.
                Cuando se usa {article.keyword} con una regla previa, la tirada resulta rápida,
                transparente y fácil de aplicar.
              </p>
              <p>
                Para empezar sin complicaciones, conviene abrir la herramienta principal de{' '}
                <Link href="/">dado online</Link>, elegir la configuración adecuada y hacer una
                tirada de prueba. Después se puede ajustar el número de dados o caras según el juego,
                la clase o la decisión que se quiera resolver.
              </p>
            </section>
          </div>

          <RelatedArticles article={article} />
        </div>
      </article>
    </main>
  );
}
