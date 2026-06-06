import type { Metadata } from 'next';
import { absoluteUrl, SITE_NAME, SITE_URL } from './site';
import type { DicePage } from './dice-pages';

const ogImage = '/images/og-image.svg';

export function pageMetadata(page: DicePage): Metadata {
  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: absoluteUrl(page.path),
      siteName: SITE_NAME,
      locale: 'es_ES',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} - dados virtuales gratis`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImage]
    }
  };
}

export function webAppSchema(path: string, name = SITE_NAME) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    url: absoluteUrl(path),
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    inLanguage: 'es',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR'
    },
    description:
      'Herramienta gratuita para tirar dados virtuales y generar resultados aleatorios desde el navegador.'
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'es',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}
