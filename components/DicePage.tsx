import { DiceTool } from '@/components/DiceTool';
import { JsonLd } from '@/components/JsonLd';
import { RelatedLinks } from '@/components/RelatedLinks';
import type { DicePage as DicePageData } from '@/lib/dice-pages';
import { diceLabel, sideLabel } from '@/lib/dice-pages';
import { breadcrumbSchema, webAppSchema } from '@/lib/seo';

type DicePageProps = {
  page: DicePageData;
};

function pageIntro(page: DicePageData) {
  if (page.custom) {
    if (page.dice === 1) {
      return 'Este dado personalizado te permite elegir cualquier número de caras entre 2 y 100. Es útil cuando una actividad necesita rangos poco habituales, marcadores especiales o una forma rápida de crear resultados aleatorios sin preparar material físico.';
    }

    return `Estos ${diceLabel(page.dice)} personalizados te permiten elegir cualquier número de caras entre 2 y 100. Son útiles cuando una actividad necesita rangos poco habituales, marcadores especiales o una forma rápida de crear resultados aleatorios sin preparar material físico.`;
  }

  if (page.sides === 20) {
    return `Este D20 virtual está pensado para partidas de rol, juegos narrativos y situaciones donde necesitas un resultado del 1 al 20. Puedes lanzar ${diceLabel(page.dice)}, revisar cada valor y ver la suma total sin perder ritmo durante la partida.`;
  }

  return `Esta página está preparada para tirar ${diceLabel(page.dice)} de ${sideLabel(page.sides)}. El resultado se genera en el navegador, se muestra al instante y queda guardado en el historial para que puedas revisar las últimas tiradas.`;
}

function pageUseText(page: DicePageData) {
  if (page.custom) {
    return 'Los dados personalizados son prácticos para sorteos pequeños, tablas de clase, actividades de probabilidad y juegos inventados. Cambia el número de caras, pulsa el botón y obtendrás valores dentro del rango elegido sin hojas de cálculo ni aplicaciones pesadas.';
  }

  if (page.dice > 1) {
    return `Lanzar ${diceLabel(page.dice)} a la vez ayuda cuando necesitas sumas, combinaciones o varias decisiones en una misma ronda. La herramienta muestra cada dado separado para que el resultado sea fácil de comprobar, y también calcula el total automáticamente.`;
  }

  return `Un único dado de ${page.sides} caras es ideal para decisiones rápidas, turnos, ejercicios de azar y juegos donde solo hace falta un valor. El dado se puede tirar de nuevo tantas veces como quieras y también responde a Espacio o Enter.`;
}

function pageHeadingSubject(page: DicePageData) {
  if (page.custom && page.dice === 1) return 'un dado personalizado online';
  if (page.h1.startsWith('Dado de')) return `un ${page.h1.toLowerCase()}`;
  return page.h1.toLowerCase();
}

export function DicePage({ page }: DicePageProps) {
  const schema = [
    webAppSchema(page.path, page.h1),
    breadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: page.h1, path: page.path }
    ])
  ];

  return (
    <main>
      <JsonLd data={schema} />
      <section className="hero-section compact-hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>{page.h1}</h1>
            <p className="hero-subtitle">{page.subtitle}</p>
            <img
              className="hero-illustration small-illustration"
              src="/images/hero-dice.svg"
              alt="Ilustración de dados virtuales"
              width="360"
              height="260"
            />
          </div>
          <DiceTool
            defaultDiceCount={page.dice}
            defaultSides={page.sides}
            customModeDefault={page.custom}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="descripcion">
        <div className="section-inner prose">
          <h2 id="descripcion">Tira {pageHeadingSubject(page)} gratis</h2>
          <p>{pageIntro(page)}</p>
          <p>
            No necesitas instalar nada ni crear una cuenta. La tirada funciona directamente en móvil,
            tablet y ordenador, con controles accesibles, botones grandes y resultados fáciles de
            leer. Si estás jugando con más personas, puedes copiar o compartir el resultado para
            dejar constancia de la tirada.
          </p>
        </div>
      </section>

      <section className="section muted-section" aria-labelledby="como-funciona">
        <div className="section-inner split-section">
          <div className="prose">
            <h2 id="como-funciona">Cómo funciona</h2>
            <p>
              Selecciona el número de dados, confirma las caras y pulsa Tirar dado. Cada lanzamiento
              genera números aleatorios dentro del rango disponible. Cuando hay varios dados, verás
              los valores individuales y la suma total para usarla en reglas, puntuaciones o
              ejercicios.
            </p>
          </div>
          <div className="info-panel">
            <h3>Configuración de esta página</h3>
            <dl>
              <div>
                <dt>Dados</dt>
                <dd>{diceLabel(page.dice)}</dd>
              </div>
              <div>
                <dt>Caras</dt>
                <dd>{page.custom ? 'Personalizables' : sideLabel(page.sides)}</dd>
              </div>
              <div>
                <dt>Rango</dt>
                <dd>{page.custom ? '2 a 100 caras' : `1 a ${page.sides}`}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="ideas">
        <div className="section-inner prose">
          <h2 id="ideas">Ideas para usarlo</h2>
          <p>{pageUseText(page)}</p>
          <p>
            También puedes usarlo en el aula para explicar resultados posibles, practicar sumas,
            ordenar turnos o proponer retos breves. La página mantiene un historial corto de últimos
            resultados, de modo que es sencillo revisar una secuencia de tiradas sin apuntarlas a
            mano.
          </p>
        </div>
      </section>

      <RelatedLinks currentPath={page.path} />
    </main>
  );
}
