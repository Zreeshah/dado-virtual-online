import type { Metadata } from 'next';
import Link from 'next/link';
import { DiceTool } from '@/components/DiceTool';
import { JsonLd } from '@/components/JsonLd';
import { homepageFaqs } from '@/lib/faqs';
import { breadcrumbSchema, faqSchema, webAppSchema, websiteSchema } from '@/lib/seo';
import { relatedDiceLinks } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Dado Online | Tira Dados Virtuales Gratis',
  description:
    'Tira un dado online gratis con nuestro dado virtual. Lanza uno o varios dados aleatorios desde tu móvil, tablet o ordenador de forma rápida y sencilla.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Dado Online | Tira Dados Virtuales Gratis',
    description:
      'Tira un dado online gratis con nuestro dado virtual. Lanza uno o varios dados aleatorios desde tu móvil, tablet o ordenador de forma rápida y sencilla.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dado Online - Tira Dados Virtuales Gratis'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dado Online | Tira Dados Virtuales Gratis',
    description:
      'Tira un dado online gratis con nuestro dado virtual. Lanza uno o varios dados aleatorios desde tu móvil, tablet o ordenador de forma rápida y sencilla.',
    images: ['/images/og-image.svg']
  }
};

const useCases = [
  {
    icon: '/icons/dado-online.svg',
    title: 'Dado online',
    text: 'Abre la herramienta y tira un dado sin instalar aplicaciones ni crear cuentas.'
  },
  {
    icon: '/icons/dados-virtuales.svg',
    title: 'Dados virtuales',
    text: 'Lanza uno o varios dados con resultados separados y suma total automática.'
  },
  {
    icon: '/icons/aleatorio.svg',
    title: 'Aleatorio',
    text: 'Genera valores dentro del rango elegido para juegos, sorteos y ejercicios.'
  },
  {
    icon: '/icons/juegos.svg',
    title: 'Juegos de mesa',
    text: 'Sustituye dados físicos cuando faltan piezas o quieres lanzar desde el móvil.'
  },
  {
    icon: '/icons/probabilidad.svg',
    title: 'Probabilidad',
    text: 'Practica sumas, rangos y ejercicios de azar con resultados claros.'
  },
  {
    icon: '/icons/movil.svg',
    title: 'Móvil y ordenador',
    text: 'Úsalo en clase, en casa o durante una partida sin instalar nada.'
  }
];

export default function Home() {
  return (
    <main>
      <JsonLd
        data={[
          websiteSchema(),
          webAppSchema('/'),
          breadcrumbSchema([{ name: 'Inicio', path: '/' }]),
          faqSchema([...homepageFaqs])
        ]}
      />
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Dado Online</h1>
            <p className="hero-subtitle">Tira dados virtuales gratis desde cualquier dispositivo.</p>
            <img
              className="hero-illustration"
              src="/images/hero-dice.svg"
              alt="Ilustración de dados virtuales azules"
              width="420"
              height="300"
            />
          </div>
          <DiceTool defaultDiceCount={1} defaultSides={6} />
        </div>
      </section>

      <section className="section" aria-labelledby="que-es">
        <div className="section-inner prose">
          <h2 id="que-es">Qué es un dado online</h2>
          <p>
            Un dado online es una herramienta sencilla para generar tiradas aleatorias desde el
            navegador. En lugar de buscar un dado físico, solo tienes que abrir esta página, elegir
            cuántas piezas quieres lanzar y pulsar el botón. El resultado aparece de inmediato, con
            cada valor por separado y con la suma total cuando tiras varios dados.
          </p>
          <p>
            Dado Virtual Online está pensado para ser rápido, claro y cómodo. Funciona sin registro,
            sin descargas y sin recargar la página cada vez que quieres tirar. Puedes usar un dado de
            6 caras tradicional, dados de rol como D4, D8, D12 o D20, o crear un dado personalizado
            con cualquier número de caras entre 2 y 100.
          </p>
        </div>
      </section>

      <section className="section muted-section" aria-labelledby="como-usar">
        <div className="section-inner split-section">
          <div className="prose">
            <h2 id="como-usar">Cómo usar el dado virtual</h2>
            <p>
              La interfaz está hecha para que puedas tirar dados en pocos segundos, incluso desde la
              pantalla pequeña de un móvil. Los controles principales están cerca del dado, los
              botones son grandes y el historial queda visible para revisar las últimas tiradas.
            </p>
          </div>
          <ol className="steps-list">
            <li>Elige el número de dados.</li>
            <li>Elige el número de caras.</li>
            <li>Pulsa “Tirar dado”.</li>
            <li>Mira el resultado al instante.</li>
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="usos">
        <div className="section-inner">
          <div className="section-title-block">
            <h2 id="usos">Para qué puedes usar estos dados online</h2>
            <p>
              El dado virtual sirve para partidas, actividades de clase, ejercicios de probabilidad,
              decisiones rápidas, juegos con amigos y cualquier situación donde necesitas un número
              aleatorio transparente.
            </p>
          </div>
          <div className="use-grid">
            {useCases.map((item) => (
              <article key={item.title} className="use-card">
                <img src={item.icon} alt="" aria-hidden="true" width="40" height="40" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section" aria-labelledby="movil-ordenador">
        <div className="section-inner prose">
          <h2 id="movil-ordenador">Dado aleatorio para móvil y ordenador</h2>
          <p>
            La página se adapta a móviles, tablets y pantallas de escritorio. En móvil, el dado se
            mantiene grande y fácil de tocar. En ordenador, la herramienta queda centrada en una
            tarjeta limpia para que puedas concentrarte en la tirada. También puedes usar el teclado:
            pulsa Espacio o Enter para lanzar los dados rápidamente.
          </p>
          <p>
            Los resultados se calculan en tu propio navegador y se muestran sin esperas. Si estás
            jugando, puedes copiar o compartir la tirada; si estás explicando azar o probabilidad,
            puedes reiniciar el historial y repetir lanzamientos tantas veces como necesites.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="tipos">
        <div className="section-inner">
          <div className="section-title-block">
            <h2 id="tipos">Tipos de dados disponibles</h2>
            <p>
              Puedes empezar con un dado clásico o abrir una página específica según el número de
              dados y caras que necesitas.
            </p>
          </div>
          <div className="related-grid">
            {relatedDiceLinks.map((link) => (
              <Link key={link.href} href={link.href} className="related-card">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section muted-section faq-section" id="preguntas-frecuentes" aria-labelledby="faq">
        <div className="section-inner">
          <h2 id="faq">Preguntas frecuentes</h2>
          <div className="faq-list">
            {homepageFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
