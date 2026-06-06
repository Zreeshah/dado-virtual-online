import { SITE_NAME, SITE_URL } from './site';

export type BlogLink = {
  href: string;
  label: string;
};

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export type BlogArticle = {
  id: number;
  title: string;
  keyword: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  image: string;
  imageAlt: string;
  directAnswer: string;
  audience: string;
  mainBenefit: string;
  scenario: string;
  recommendedSetup: string;
  example: string;
  useCases: string[];
  mistakes: string[];
  internalLinks: BlogLink[];
  externalLinks: BlogLink[];
  faqs: Array<{ question: string; answer: string }>;
};

const sourceLinks: Record<string, BlogLink> = {
  mdnCrypto: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues',
    label: 'MDN Web Docs sobre Crypto.getRandomValues'
  },
  w3cWebCrypto: {
    href: 'https://www.w3.org/TR/WebCryptoAPI/',
    label: 'especificación W3C Web Cryptography API'
  },
  wikipediaDice: {
    href: 'https://en.wikipedia.org/wiki/Dice',
    label: 'referencia general sobre dados'
  },
  probability: {
    href: 'https://en.wikipedia.org/wiki/Probability',
    label: 'introducción a la probabilidad'
  },
  randomOrg: {
    href: 'https://www.random.org/randomness/',
    label: 'guía de RANDOM.ORG sobre aleatoriedad'
  }
};

const commonInternalLinks: BlogLink[] = [
  { href: '/', label: 'dado online principal' },
  { href: '/2-dados', label: 'tirar 2 dados online' },
  { href: '/20-caras/1-dado', label: 'dado de 20 caras online' },
  { href: '/cualquier/1-dado', label: 'dado personalizado online' }
];

export const blogArticles: BlogArticle[] = [
  {
    id: 1,
    title: 'Qué es un dado online y cómo funciona',
    keyword: 'dado online',
    slug: 'dado-online',
    seoTitle: 'dado online: 7 claves para entenderlo',
    metaDescription: 'Descubre qué es un dado online, cómo funciona y cuándo usarlo para juegos, clases, decisiones y números aleatorios rápidos.',
    ogTitle: 'Qué es un dado online y cómo funciona',
    ogDescription: 'Guía clara para entender el dado online, su aleatoriedad, usos prácticos y ventajas frente al dado físico.',
    image: '/images/blog/dado-online.svg',
    imageAlt: 'dado online mostrado como herramienta virtual para lanzar dados gratis',
    directAnswer:
      'Un dado online es una herramienta web que simula una tirada de dados y muestra un resultado aleatorio al instante. Sirve para juegos, clases, ejercicios de probabilidad y decisiones rápidas cuando no hay un dado físico cerca.',
    audience: 'personas que necesitan tirar un dado de forma rápida desde el navegador',
    mainBenefit: 'permite obtener resultados claros sin instalar aplicaciones ni preparar material',
    scenario: 'una partida improvisada, una clase de matemáticas o una decisión sencilla entre varias opciones',
    recommendedSetup: '1 dado de 6 caras para usos generales, varios dados para sumas y dados personalizados para rangos especiales',
    example:
      'Una familia quiere elegir quién empieza un juego de mesa. Abre el dado, pulsa el botón y usa el número más alto para ordenar turnos sin discutir reglas nuevas.',
    useCases: ['juegos de mesa', 'actividades de clase', 'ejercicios de probabilidad', 'decisiones rápidas', 'dinámicas de grupo'],
    mistakes: ['usar siempre el mismo rango aunque el juego pida otro', 'no revisar el total cuando se tiran varios dados', 'confundir historial con predicción'],
    internalLinks: commonInternalLinks,
    externalLinks: [sourceLinks.wikipediaDice, sourceLinks.probability, sourceLinks.mdnCrypto],
    faqs: [
      {
        question: '¿Qué significa dado online?',
        answer: 'Un dado online es una versión digital de un dado. Genera un número aleatorio dentro del rango elegido y lo muestra en pantalla.'
      },
      {
        question: '¿Un dado online reemplaza a un dado físico?',
        answer: 'Sí, para la mayoría de usos casuales. Es práctico cuando no hay dados cerca o cuando se necesita tirar desde móvil, tablet u ordenador.'
      },
      {
        question: '¿El resultado se guarda?',
        answer: 'La herramienta puede mostrar un historial breve de tiradas recientes. Ese historial sirve para revisar resultados, no para predecir tiradas.'
      },
      {
        question: '¿Se puede usar en clase?',
        answer: 'Sí. Un dado online es útil para explicar azar, rangos, sumas, turnos y probabilidad con una pantalla visible para todo el grupo.'
      },
      {
        question: '¿Hace falta registrarse?',
        answer: 'No. La idea de una herramienta de dado online es abrir, elegir la configuración y tirar sin registro ni instalación.'
      },
      {
        question: '¿Qué dado conviene elegir primero?',
        answer: 'Para empezar, conviene usar un dado de 6 caras. Luego se pueden probar varios dados o caras especiales según la actividad.'
      }
    ]
  },
  {
    id: 2,
    title: 'Cómo tirar un dado online desde el móvil',
    keyword: 'tirar un dado online',
    slug: 'tirar-dado-online',
    seoTitle: 'tirar un dado online: 6 pasos desde móvil',
    metaDescription: 'Aprende a tirar un dado online desde el móvil, elegir caras, repetir tiradas y usar el resultado sin instalar aplicaciones.',
    ogTitle: 'Cómo tirar un dado online desde el móvil',
    ogDescription: 'Pasos sencillos para lanzar dados desde el móvil en juegos, clases y decisiones rápidas.',
    image: '/images/blog/tirar-dado-online.svg',
    imageAlt: 'tirar un dado online desde un móvil con botón grande de lanzamiento',
    directAnswer:
      'Para tirar un dado online desde el móvil, solo hay que abrir la herramienta, elegir el número de dados, seleccionar las caras y tocar “Tirar dado”. El resultado aparece en la misma pantalla sin recargar la página.',
    audience: 'usuarios de móvil que quieren lanzar un dado sin instalar una app',
    mainBenefit: 'reduce pasos y evita buscar dados físicos durante una partida o actividad',
    scenario: 'un grupo juega en una cafetería, una clase necesita sortear turnos o alguien quiere decidir algo rápido',
    recommendedSetup: 'botón de tirada visible junto al dado, dado grande y controles básicos debajo para no perder tiempo',
    example:
      'Un docente reparte ejercicios por equipos. Cada equipo tira desde un móvil, anota el número y recibe una pregunta asociada a ese resultado.',
    useCases: ['turnos rápidos', 'sorteos pequeños', 'juegos con amigos', 'actividades educativas', 'decisiones entre opciones'],
    mistakes: ['bloquear el móvil antes de ver el resultado', 'cambiar caras sin querer antes de tirar', 'usar zoom excesivo si la web ya es responsive'],
    internalLinks: [
      { href: '/', label: 'tirar dado online gratis' },
      { href: '/2-dados', label: 'tirar dos dados' },
      { href: '/blog/dado-online', label: 'qué es un dado online' },
      { href: '/cualquier/1-dado', label: 'dado personalizado' }
    ],
    externalLinks: [sourceLinks.mdnCrypto, sourceLinks.w3cWebCrypto, sourceLinks.wikipediaDice],
    faqs: [
      {
        question: '¿Cómo tirar un dado online desde el móvil?',
        answer: 'Abre la web, elige dados y caras, y toca el botón de tirada. El resultado aparece al instante sin instalar nada.'
      },
      {
        question: '¿Funciona en Android y iPhone?',
        answer: 'Sí. Una herramienta web responsive funciona desde navegadores móviles modernos, tanto en Android como en iPhone.'
      },
      {
        question: '¿Se puede usar con una sola mano?',
        answer: 'Sí, si el botón principal está cerca del dado y los controles secundarios quedan debajo. Esa disposición reduce el desplazamiento.'
      },
      {
        question: '¿Qué pasa si cambia la conexión?',
        answer: 'Una vez cargada la página, la tirada se realiza en el navegador. Aun así, conviene mantener conexión para abrir otras páginas.'
      },
      {
        question: '¿Puedo compartir el resultado?',
        answer: 'Sí. Si el navegador lo permite, se puede compartir el resultado o copiarlo para enviarlo por chat.'
      },
      {
        question: '¿Es mejor que descargar una app?',
        answer: 'Para usos rápidos, sí. Una web evita instalación, permisos y espacio ocupado en el teléfono.'
      }
    ]
  },
  {
    id: 3,
    title: 'Dado virtual: la forma más rápida de lanzar dados gratis',
    keyword: 'dado virtual',
    slug: 'dado-virtual',
    seoTitle: 'dado virtual: 8 usos rápidos y gratis',
    metaDescription: 'Conoce cómo usar un dado virtual gratis para juegos, clases, decisiones, sorteos y ejercicios sin descargar aplicaciones.',
    ogTitle: 'Dado virtual: la forma más rápida de lanzar dados gratis',
    ogDescription: 'Todo lo que necesitas saber para usar un dado virtual rápido, gratuito y fácil desde cualquier dispositivo.',
    image: '/images/blog/dado-virtual.svg',
    imageAlt: 'dado virtual gratuito con varias caras y controles simples',
    directAnswer:
      'Un dado virtual es una herramienta digital que permite lanzar dados gratis desde el navegador. Es rápido porque no requiere instalación, se adapta al dispositivo y muestra cada resultado en la misma pantalla.',
    audience: 'personas que quieren una alternativa inmediata a un dado físico',
    mainBenefit: 'convierte cualquier móvil u ordenador en un tirador de dados disponible al momento',
    scenario: 'una reunión, una clase, una partida de rol o un ejercicio donde hace falta azar controlado',
    recommendedSetup: 'usar D6 para juegos comunes, D20 para rol y dado personalizado cuando se necesitan rangos concretos',
    example:
      'Un grupo necesita elegir una actividad entre veinte opciones. Usa un D20 virtual y asigna cada número a una actividad de la lista.',
    useCases: ['rol', 'juegos familiares', 'sorteos de aula', 'probabilidad básica', 'decisiones con rangos amplios'],
    mistakes: ['pensar que “virtual” significa menos claro', 'no explicar el rango antes de tirar', 'mezclar varias reglas en una sola tirada'],
    internalLinks: [
      { href: '/', label: 'dado virtual online' },
      { href: '/20-caras/1-dado', label: 'D20 virtual' },
      { href: '/blog/dado-fisico-virtual', label: 'diferencia entre dado físico y virtual' },
      { href: '/cualquier/6-dados', label: 'dados personalizados' }
    ],
    externalLinks: [sourceLinks.wikipediaDice, sourceLinks.randomOrg, sourceLinks.mdnCrypto],
    faqs: [
      {
        question: '¿Qué es un dado virtual?',
        answer: 'Un dado virtual es una herramienta digital que simula una tirada y genera un resultado aleatorio en pantalla.'
      },
      {
        question: '¿El dado virtual es gratis?',
        answer: 'Sí. Puede usarse gratis desde el navegador sin cuenta, descarga ni instalación.'
      },
      {
        question: '¿Sirve para juegos de rol?',
        answer: 'Sí. Es útil para tirar D4, D6, D8, D10, D12, D20 y otros dados usados en juegos narrativos.'
      },
      {
        question: '¿Puede tirar varios dados?',
        answer: 'Sí. Un buen dado virtual permite lanzar varios dados a la vez y ver la suma total.'
      },
      {
        question: '¿Es cómodo para niños?',
        answer: 'Sí, siempre que la interfaz tenga botones grandes, texto claro y resultados fáciles de leer.'
      },
      {
        question: '¿Necesita internet todo el tiempo?',
        answer: 'Necesita internet para cargar la página. Después, la tirada puede ejecutarse en el navegador.'
      }
    ]
  },
  {
    id: 4,
    title: 'Cómo tirar varios dados online al mismo tiempo',
    keyword: 'tirar dados',
    slug: 'tirar-dados',
    seoTitle: 'tirar dados: 7 formas de hacerlo online',
    metaDescription: 'Guía para tirar dados online al mismo tiempo, ver resultados separados, calcular el total y evitar errores comunes.',
    ogTitle: 'Cómo tirar varios dados online al mismo tiempo',
    ogDescription: 'Aprende a lanzar varios dados online, sumar resultados y elegir la configuración adecuada para cada juego.',
    image: '/images/blog/tirar-dados.svg',
    imageAlt: 'tirar dados online al mismo tiempo con suma total visible',
    directAnswer:
      'Tirar dados online al mismo tiempo consiste en elegir cuántos dados se lanzan, seleccionar el número de caras y pulsar el botón de tirada. La herramienta muestra cada resultado y calcula el total cuando corresponde.',
    audience: 'jugadores, docentes y grupos que necesitan varias tiradas a la vez',
    mainBenefit: 'ahorra tiempo y evita sumar resultados manualmente',
    scenario: 'un juego de mesa pide 2D6, una actividad usa varios equipos o una regla necesita sumar valores',
    recommendedSetup: 'empezar con 2 dados de 6 caras y subir hasta el número necesario según la regla',
    example:
      'Un juego pide avanzar con dos dados. La herramienta muestra 4 y 5, calcula total 9 y guarda la tirada en el historial.',
    useCases: ['2D6 en juegos clásicos', 'sumas rápidas', 'equipos de clase', 'pruebas de probabilidad', 'dinámicas de puntuación'],
    mistakes: ['sumar mentalmente cuando la herramienta ya muestra total', 'olvidar que cada dado sigue teniendo su propio resultado', 'cambiar a demasiados dados sin explicar la regla'],
    internalLinks: [
      { href: '/2-dados', label: 'tirar 2 dados online' },
      { href: '/5-dados', label: 'tirar 5 dados online' },
      { href: '/', label: 'dado online' },
      { href: '/blog/dado-aleatorio', label: 'cómo se generan los resultados' }
    ],
    externalLinks: [sourceLinks.probability, sourceLinks.wikipediaDice, sourceLinks.randomOrg],
    faqs: [
      {
        question: '¿Cómo tirar varios dados online?',
        answer: 'Selecciona el número de dados, confirma las caras y pulsa Tirar dado. Verás cada resultado y la suma total.'
      },
      {
        question: '¿Se puede tirar 2D6?',
        answer: 'Sí. Elige 2 dados y 6 caras. La herramienta mostrará dos valores y el total de ambos.'
      },
      {
        question: '¿Cuántos dados conviene lanzar?',
        answer: 'Depende de la regla. Para juegos comunes suelen bastar 2 dados, pero algunas actividades usan más.'
      },
      {
        question: '¿El total siempre importa?',
        answer: 'No siempre. Algunos juegos usan cada dado por separado, mientras otros usan la suma.'
      },
      {
        question: '¿Puedo repetir la misma configuración?',
        answer: 'Sí. Después de elegir dados y caras, puedes tirar de nuevo sin configurar todo otra vez.'
      },
      {
        question: '¿Sirve para probabilidad?',
        answer: 'Sí. Varias tiradas ayudan a observar frecuencias, sumas y combinaciones posibles.'
      }
    ]
  },
  {
    id: 5,
    title: 'Dado aleatorio: cómo se generan los resultados',
    keyword: 'dado aleatorio',
    slug: 'dado-aleatorio',
    seoTitle: 'dado aleatorio: 6 claves del resultado',
    metaDescription: 'Explicación sencilla de cómo funciona un dado aleatorio online, qué significa azar y cómo interpretar los resultados.',
    ogTitle: 'Dado aleatorio: cómo se generan los resultados',
    ogDescription: 'Aprende cómo un dado aleatorio produce resultados, qué papel tiene el navegador y cómo usarlo con confianza.',
    image: '/images/blog/dado-aleatorio.svg',
    imageAlt: 'dado aleatorio con números generados en el navegador',
    directAnswer:
      'Un dado aleatorio genera un número dentro de un rango definido, por ejemplo del 1 al 6. En una herramienta online, el navegador calcula ese resultado y lo muestra como una tirada independiente.',
    audience: 'personas que quieren entender la aleatoriedad detrás de un dado virtual',
    mainBenefit: 'ayuda a confiar en la tirada y a interpretar resultados sin buscar patrones falsos',
    scenario: 'una clase de probabilidad, una partida competitiva o una decisión donde todos quieren claridad',
    recommendedSetup: 'usar rangos claros, repetir tiradas solo cuando la regla lo permite y revisar el historial como registro',
    example:
      'En diez tiradas puede salir muchas veces el mismo número. Eso no prueba un fallo; una muestra pequeña puede agruparse de forma irregular.',
    useCases: ['explicar azar', 'mostrar frecuencias', 'resolver turnos', 'crear números rápidos', 'evitar sesgos manuales'],
    mistakes: ['creer que una tirada anterior cambia la siguiente', 'esperar una distribución perfecta en pocas tiradas', 'confundir aleatorio con predecible'],
    internalLinks: [
      { href: '/', label: 'dado aleatorio online' },
      { href: '/blog/dado-online', label: 'qué es un dado online' },
      { href: '/blog/tirar-dados', label: 'tirar varios dados' },
      { href: '/cualquier/1-dado', label: 'dado de cualquier número de caras' }
    ],
    externalLinks: [sourceLinks.mdnCrypto, sourceLinks.w3cWebCrypto, sourceLinks.randomOrg, sourceLinks.probability],
    faqs: [
      {
        question: '¿Qué es un dado aleatorio?',
        answer: 'Es un dado que devuelve un resultado dentro de un rango sin seguir una secuencia predecible para el usuario.'
      },
      {
        question: '¿Cada tirada depende de la anterior?',
        answer: 'No. En una tirada normal, cada resultado se trata como un evento nuevo dentro del mismo rango.'
      },
      {
        question: '¿Por qué puede repetirse un número?',
        answer: 'Porque repetir valores es parte del azar. En pocas tiradas, los resultados no tienen que verse perfectamente equilibrados.'
      },
      {
        question: '¿Qué rango usa un dado de 6 caras?',
        answer: 'Usa números del 1 al 6. Cada cara representa uno de esos posibles resultados.'
      },
      {
        question: '¿Es lo mismo aleatorio que justo?',
        answer: 'No exactamente. Aleatorio describe el proceso; justo indica que todos los resultados tienen la misma oportunidad.'
      },
      {
        question: '¿Se puede verificar el historial?',
        answer: 'Sí. El historial permite revisar tiradas recientes, aunque no predice resultados futuros.'
      }
    ]
  },
  {
    id: 6,
    title: 'Dado de 6 caras: usos, reglas y ejemplos',
    keyword: 'dado de 6 caras',
    slug: 'dado-6-caras',
    seoTitle: 'dado de 6 caras: 9 usos y reglas',
    metaDescription: 'Guía del dado de 6 caras con usos, reglas comunes, ejemplos de tiradas, sumas y consejos para usarlo online.',
    ogTitle: 'Dado de 6 caras: usos, reglas y ejemplos',
    ogDescription: 'Descubre cómo usar un dado de 6 caras en juegos, clases, decisiones y ejercicios de probabilidad.',
    image: '/images/blog/dado-6-caras.svg',
    imageAlt: 'dado de 6 caras online con puntos clásicos',
    directAnswer:
      'Un dado de 6 caras es el dado clásico con resultados del 1 al 6. Se usa en juegos de mesa, actividades educativas, sorteos simples, ejercicios de probabilidad y reglas que requieren números pequeños.',
    audience: 'usuarios que necesitan entender o usar el dado clásico de seis caras',
    mainBenefit: 'ofrece un rango sencillo, fácil de explicar y reconocido por casi cualquier persona',
    scenario: 'un juego familiar, un ejercicio escolar o una dinámica donde seis opciones son suficientes',
    recommendedSetup: '1D6 para decisiones simples, 2D6 para sumas y varios D6 para juegos que piden tiradas múltiples',
    example:
      'Una actividad asigna seis retos. Si sale 1, el grupo responde una pregunta; si sale 6, el grupo gana un turno extra.',
    useCases: ['juegos de mesa', 'sumas básicas', 'turnos', 'retos de clase', 'probabilidad elemental'],
    mistakes: ['usar D6 cuando la regla pide D20', 'olvidar que dos dados no producen todos los totales con la misma frecuencia', 'no definir qué representa cada número'],
    internalLinks: [
      { href: '/', label: 'dado de 6 caras online' },
      { href: '/2-dados', label: '2 dados de 6 caras' },
      { href: '/blog/tirar-dados', label: 'cómo tirar varios dados' },
      { href: '/blog/dado-aleatorio', label: 'dado aleatorio' }
    ],
    externalLinks: [sourceLinks.wikipediaDice, sourceLinks.probability, sourceLinks.randomOrg],
    faqs: [
      {
        question: '¿Qué es un dado de 6 caras?',
        answer: 'Es el dado clásico con seis posibles resultados: 1, 2, 3, 4, 5 y 6.'
      },
      {
        question: '¿Para qué sirve un dado de 6 caras?',
        answer: 'Sirve para juegos, turnos, ejercicios, sorteos pequeños y reglas que necesitan un rango simple.'
      },
      {
        question: '¿Qué significa 2D6?',
        answer: 'Significa tirar dos dados de 6 caras y, según la regla, usar cada valor o sumar ambos.'
      },
      {
        question: '¿Todos los números tienen la misma oportunidad?',
        answer: 'En un dado justo de 6 caras, cada cara tiene la misma probabilidad en una tirada individual.'
      },
      {
        question: '¿Se puede usar online?',
        answer: 'Sí. Un dado online puede mostrar caras clásicas para resultados del 1 al 6.'
      },
      {
        question: '¿Cuándo conviene usar otro dado?',
        answer: 'Conviene usar otro dado cuando la regla necesita más o menos de seis resultados posibles.'
      }
    ]
  },
  {
    id: 7,
    title: 'Dado de 20 caras online: para qué sirve el D20',
    keyword: 'dado de 20 caras online',
    slug: 'dado-20-caras-online',
    seoTitle: 'dado de 20 caras online: 7 usos D20',
    metaDescription: 'Aprende para qué sirve un dado de 20 caras online, cómo tirar un D20 y cuándo usarlo en rol, juegos y decisiones.',
    ogTitle: 'Dado de 20 caras online: para qué sirve el D20',
    ogDescription: 'Guía práctica del D20 online para juegos de rol, tiradas amplias, decisiones y ejercicios de azar.',
    image: '/images/blog/dado-20-caras-online.svg',
    imageAlt: 'dado de 20 caras online con número D20 destacado',
    directAnswer:
      'Un dado de 20 caras online, o D20, sirve para generar resultados del 1 al 20 desde el navegador. Se usa sobre todo en juegos de rol, pruebas de habilidad y decisiones con veinte opciones posibles.',
    audience: 'jugadores de rol y usuarios que necesitan un rango de veinte resultados',
    mainBenefit: 'permite lanzar un D20 sin dado físico y repetir tiradas con historial visible',
    scenario: 'una partida narrativa, una tabla de eventos, una prueba de habilidad o una lista de veinte opciones',
    recommendedSetup: '1 dado de 20 caras para una prueba normal y varios D20 solo cuando la regla lo indique',
    example:
      'Un personaje intenta abrir una puerta difícil. El grupo tira un D20 online, suma el modificador de la ficha y compara el resultado con la dificultad.',
    useCases: ['juegos de rol', 'tablas de eventos', 'retos con veinte opciones', 'decisiones amplias', 'pruebas de habilidad'],
    mistakes: ['sumar modificadores antes de ver el resultado base', 'usar varios D20 si la regla pide uno', 'olvidar definir qué ocurre con 1 y 20'],
    internalLinks: [
      { href: '/20-caras/1-dado', label: 'tirar D20 online' },
      { href: '/blog/dado-virtual', label: 'qué es un dado virtual' },
      { href: '/8-caras/1-dado', label: 'dado de 8 caras online' },
      { href: '/4-caras/1-dado', label: 'dado de 4 caras online' }
    ],
    externalLinks: [sourceLinks.wikipediaDice, sourceLinks.probability, sourceLinks.mdnCrypto],
    faqs: [
      {
        question: '¿Qué es un dado de 20 caras online?',
        answer: 'Es una herramienta que genera un número aleatorio del 1 al 20 y simula una tirada de D20.'
      },
      {
        question: '¿Para qué sirve el D20?',
        answer: 'Sirve para juegos de rol, pruebas de habilidad, tablas de eventos y decisiones con veinte resultados posibles.'
      },
      {
        question: '¿Puedo tirar más de un D20?',
        answer: 'Sí, pero conviene hacerlo solo cuando la regla del juego pida varios dados de 20 caras.'
      },
      {
        question: '¿Qué significa sacar 20?',
        answer: 'Depende del juego. En muchas reglas, un 20 tiene un efecto especial, pero no siempre significa éxito automático.'
      },
      {
        question: '¿Qué significa sacar 1?',
        answer: 'También depende de la regla. Algunos juegos lo tratan como fallo especial y otros como un valor bajo normal.'
      },
      {
        question: '¿El D20 online sirve en móvil?',
        answer: 'Sí. Un D20 online responsive funciona desde móvil, tablet y ordenador.'
      }
    ]
  },
  {
    id: 8,
    title: 'Dado de 8 caras: cuándo se usa y cómo lanzarlo online',
    keyword: 'dado de 8 caras',
    slug: 'dado-8-caras',
    seoTitle: 'dado de 8 caras: 6 usos y tirada online',
    metaDescription: 'Conoce cuándo se usa un dado de 8 caras, cómo lanzarlo online y qué diferencias tiene frente a D6 y D20.',
    ogTitle: 'Dado de 8 caras: cuándo se usa y cómo lanzarlo online',
    ogDescription: 'Guía simple del D8 online para juegos, ejercicios, tablas y decisiones de ocho opciones.',
    image: '/images/blog/dado-8-caras.svg',
    imageAlt: 'dado de 8 caras online con resultado numérico',
    directAnswer:
      'Un dado de 8 caras, o D8, genera resultados del 1 al 8. Se usa cuando una regla necesita más opciones que un D6, pero menos amplitud que un D20.',
    audience: 'usuarios que quieren entender cuándo elegir un D8',
    mainBenefit: 'ofrece un rango medio fácil de manejar para juegos y ejercicios',
    scenario: 'una regla de rol, una tabla de ocho premios o una actividad con ocho equipos',
    recommendedSetup: '1D8 para decisiones de ocho opciones y varios D8 solo si la mecánica pide suma o comparación',
    example:
      'Una clase tiene ocho preguntas sorpresa. El docente lanza un D8 online y el número elegido indica qué pregunta responde el equipo.',
    useCases: ['juegos de rol', 'tablas de ocho eventos', 'actividades de aula', 'retos por categorías', 'sorteos medianos'],
    mistakes: ['usar D8 para reglas diseñadas para D6', 'no explicar el rango antes de lanzar', 'tratar el D8 como si tuviera caras con puntos clásicos'],
    internalLinks: [
      { href: '/8-caras/1-dado', label: 'tirar dado de 8 caras' },
      { href: '/20-caras/1-dado', label: 'dado de 20 caras' },
      { href: '/blog/dado-20-caras-online', label: 'guía del D20 online' },
      { href: '/blog/dado-6-caras', label: 'guía del dado de 6 caras' }
    ],
    externalLinks: [sourceLinks.wikipediaDice, sourceLinks.probability, sourceLinks.randomOrg],
    faqs: [
      {
        question: '¿Qué es un dado de 8 caras?',
        answer: 'Es un dado con ocho resultados posibles, del 1 al 8. También se conoce como D8.'
      },
      {
        question: '¿Cuándo se usa un D8?',
        answer: 'Se usa cuando una regla necesita ocho opciones, daños, eventos o resultados intermedios.'
      },
      {
        question: '¿Se puede lanzar online?',
        answer: 'Sí. Solo hay que elegir 8 caras y pulsar el botón de tirada.'
      },
      {
        question: '¿Es más justo que un D6?',
        answer: 'No es más justo por tener más caras. Simplemente ofrece más resultados posibles.'
      },
      {
        question: '¿Puedo tirar varios D8?',
        answer: 'Sí. Varias tiradas de D8 sirven para sumar resultados o comparar valores.'
      },
      {
        question: '¿Qué diferencia hay entre D8 y D20?',
        answer: 'El D8 tiene ocho posibles resultados; el D20 tiene veinte y se usa para rangos más amplios.'
      }
    ]
  },
  {
    id: 9,
    title: 'Dado de 4 caras: guía rápida para juegos y ejercicios',
    keyword: 'dado de 4 caras',
    slug: 'dado-4-caras',
    seoTitle: 'dado de 4 caras: 6 usos rápidos D4',
    metaDescription: 'Guía rápida del dado de 4 caras para juegos, clases, ejercicios y tiradas online con resultados del 1 al 4.',
    ogTitle: 'Dado de 4 caras: guía rápida para juegos y ejercicios',
    ogDescription: 'Aprende qué es un D4, cuándo usarlo y cómo lanzarlo online desde cualquier dispositivo.',
    image: '/images/blog/dado-4-caras.svg',
    imageAlt: 'dado de 4 caras online con rango del 1 al 4',
    directAnswer:
      'Un dado de 4 caras, o D4, genera resultados del 1 al 4. Es útil para reglas simples, decisiones con pocas opciones, ejercicios básicos y juegos que necesitan valores pequeños.',
    audience: 'personas que necesitan un dado pequeño y fácil de explicar',
    mainBenefit: 'reduce las opciones a cuatro resultados claros y evita rangos innecesarios',
    scenario: 'un ejercicio con cuatro respuestas, una dinámica de equipos o una regla de juego con valores bajos',
    recommendedSetup: '1D4 para decisiones simples y varios D4 solo cuando se necesite sumar valores pequeños',
    example:
      'Un profesor prepara cuatro tipos de reto: lectura, cálculo, dibujo y explicación. El D4 decide qué reto recibe cada equipo.',
    useCases: ['cuatro opciones', 'retos de aula', 'juegos de rol', 'sumas pequeñas', 'sorteos simples'],
    mistakes: ['usar D4 cuando hacen falta más opciones', 'no aclarar qué número corresponde a cada opción', 'confundir forma física del D4 con su rango online'],
    internalLinks: [
      { href: '/4-caras/1-dado', label: 'tirar dado de 4 caras' },
      { href: '/8-caras/1-dado', label: 'dado de 8 caras' },
      { href: '/blog/dado-8-caras', label: 'guía del D8' },
      { href: '/blog/dado-aleatorio', label: 'cómo funciona un dado aleatorio' }
    ],
    externalLinks: [sourceLinks.wikipediaDice, sourceLinks.probability, sourceLinks.mdnCrypto],
    faqs: [
      {
        question: '¿Qué es un dado de 4 caras?',
        answer: 'Es un dado con cuatro posibles resultados, del 1 al 4. También se llama D4.'
      },
      {
        question: '¿Para qué sirve un D4?',
        answer: 'Sirve para reglas con valores pequeños, decisiones de cuatro opciones y ejercicios simples.'
      },
      {
        question: '¿Cómo se tira online?',
        answer: 'Elige 4 caras en la herramienta y pulsa Tirar dado. El resultado será un número del 1 al 4.'
      },
      {
        question: '¿Es bueno para niños?',
        answer: 'Sí. Su rango corto facilita explicar opciones, turnos y resultados.'
      },
      {
        question: '¿Puedo tirar varios D4?',
        answer: 'Sí. Varios D4 permiten sumar valores pequeños o comparar resultados.'
      },
      {
        question: '¿Cuándo no conviene usarlo?',
        answer: 'No conviene cuando la actividad necesita más de cuatro resultados posibles.'
      }
    ]
  },
  {
    id: 10,
    title: 'Diferencia entre un dado físico y un dado virtual',
    keyword: 'dado virtual',
    slug: 'dado-fisico-virtual',
    seoTitle: 'dado virtual vs físico: 7 diferencias',
    metaDescription: 'Compara dado virtual y dado físico: rapidez, comodidad, aleatoriedad, accesibilidad, usos y límites de cada opción.',
    ogTitle: 'Diferencia entre un dado físico y un dado virtual',
    ogDescription: 'Comparativa clara para elegir entre un dado físico y un dado virtual según juego, clase o situación.',
    image: '/images/blog/dado-fisico-virtual.svg',
    imageAlt: 'dado virtual comparado con dado físico sobre una mesa',
    directAnswer:
      'La diferencia principal entre un dado físico y un dado virtual está en el formato. El dado físico se lanza con la mano; el dado virtual genera el resultado en una pantalla. Ambos pueden servir para juegos, clases y decisiones.',
    audience: 'personas que quieren elegir la mejor opción para jugar, enseñar o decidir',
    mainBenefit: 'ayuda a escoger entre comodidad digital y experiencia táctil según el contexto',
    scenario: 'una partida presencial, una clase proyectada, un viaje sin material o una reunión online',
    recommendedSetup: 'usar dado físico cuando la experiencia táctil importa y dado virtual cuando se busca rapidez, accesibilidad o configuración flexible',
    example:
      'En una mesa presencial, el dado físico aporta ritual. En una videollamada, el dado virtual evita discusiones porque todos ven el resultado compartido.',
    useCases: ['juego presencial', 'clase online', 'viajes', 'reuniones remotas', 'dados personalizados'],
    mistakes: ['pensar que una opción siempre es mejor', 'ignorar la accesibilidad del grupo', 'no usar historial cuando hace falta registro'],
    internalLinks: [
      { href: '/blog/dado-virtual', label: 'qué es un dado virtual' },
      { href: '/', label: 'usar dado online' },
      { href: '/cualquier/1-dado', label: 'dado virtual personalizado' },
      { href: '/blog/dado-online', label: 'qué es un dado online' }
    ],
    externalLinks: [sourceLinks.wikipediaDice, sourceLinks.mdnCrypto, sourceLinks.randomOrg, sourceLinks.w3cWebCrypto],
    faqs: [
      {
        question: '¿Qué diferencia hay entre dado físico y dado virtual?',
        answer: 'El dado físico se lanza con la mano. El dado virtual genera el resultado en una pantalla.'
      },
      {
        question: '¿Cuál es más rápido?',
        answer: 'El dado virtual suele ser más rápido porque se abre desde el móvil y permite repetir la tirada con un botón.'
      },
      {
        question: '¿Cuál es mejor para juegos de mesa?',
        answer: 'Depende del grupo. El físico aporta sensación de juego; el virtual ayuda si faltan dados o se juega a distancia.'
      },
      {
        question: '¿Cuál es mejor para clase?',
        answer: 'El virtual suele ser cómodo porque se puede proyectar, repetir y configurar con varios rangos.'
      },
      {
        question: '¿El dado virtual puede tener muchas caras?',
        answer: 'Sí. Puede configurarse con caras especiales o rangos que no siempre existen como dado físico.'
      },
      {
        question: '¿Conviene usar ambos?',
        answer: 'Sí. Muchos grupos usan dado físico por costumbre y dado virtual cuando necesitan rapidez o flexibilidad.'
      }
    ]
  }
];

export function blogPath(slug: string) {
  return `/blog/${slug}`;
}

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function buildArticleSections(article: BlogArticle): BlogSection[] {
  return [
    {
      heading: `${article.keyword}: respuesta rápida`,
      paragraphs: [
        `${article.directAnswer} En la práctica, ${article.audience} lo usa porque ${article.mainBenefit}. La clave está en definir el rango antes de lanzar, mirar el resultado y aplicar la regla sin cambiarla después.`,
        `Este artículo explica el concepto con ejemplos concretos, pasos sencillos y criterios para elegir la mejor configuración. También incluye errores comunes, enlaces internos para probar cada tipo de dado y referencias externas sobre dados, probabilidad y generación de números aleatorios.`
      ],
      table: {
        headers: ['Tema', 'Respuesta corta'],
        rows: [
          ['Uso principal', article.scenario],
          ['Configuración sugerida', article.recommendedSetup],
          ['Ventaja', article.mainBenefit],
          ['Resultado esperado', 'un número claro dentro del rango elegido']
        ]
      }
    },
    {
      heading: 'Ideas clave antes de tirar',
      paragraphs: [
        `Antes de lanzar, conviene separar tres decisiones: cuántos dados se usan, cuántas caras tiene cada dado y qué significa cada resultado. Esa preparación evita confusiones. Además, permite que todos entiendan si se mira cada dado por separado o si se usa la suma total.`,
        `Un dado digital no necesita una explicación larga. Sin embargo, funciona mejor cuando el grupo acuerda la regla de antemano. Por eso, una tirada útil siempre combina azar, contexto y una lectura simple del resultado.`
      ],
      bullets: [
        `Elige el rango antes de usar ${article.keyword}.`,
        'Define si importa cada resultado o la suma total.',
        'Usa el historial como registro, no como predicción.',
        'Repite la tirada solo cuando la regla lo permite.'
      ]
    },
    {
      heading: `Qué significa usar ${article.keyword}`,
      paragraphs: [
        `${article.keyword} se entiende mejor como una forma de convertir una regla en un resultado visible. El usuario no necesita conocer programación ni probabilidad avanzada. Solo debe saber qué rango se está usando y cómo se interpreta el número que aparece en pantalla.`,
        `La entidad principal es el dado: un objeto o herramienta que ofrece resultados posibles. En una versión online, la pantalla sustituye a la mesa. El botón sustituye al gesto de lanzar. El resultado cumple la misma función práctica: resolver una acción con azar.`
      ]
    },
    {
      heading: 'Cómo funciona paso a paso',
      paragraphs: [
        `El primer paso es abrir la herramienta y revisar la configuración. Luego se selecciona el número de dados y el número de caras. Después se pulsa el botón de tirada. Por último, se interpreta el resultado según la regla acordada. Ese flujo simple sirve para juegos, clases y decisiones cotidianas.`,
        `En navegadores modernos, la generación de números puede apoyarse en APIs del navegador. MDN Web Docs describe Crypto.getRandomValues como un método para obtener valores aleatorios fuertes en contextos web. Para un usuario final, lo importante es que cada tirada se calcula en el momento y no depende de la tirada anterior.`
      ],
      table: {
        headers: ['Paso', 'Qué hacer', 'Por qué importa'],
        rows: [
          ['1', 'Elegir dados y caras', 'define el rango real'],
          ['2', 'Pulsar el botón de tirada', 'genera el resultado'],
          ['3', 'Leer cada dado', 'evita sumar mal'],
          ['4', 'Aplicar la regla', 'convierte el número en acción']
        ]
      }
    },
    {
      heading: 'Cuándo conviene usarlo',
      paragraphs: [
        `Conviene usarlo en ${article.scenario}. También resulta útil cuando el grupo no tiene dados físicos, cuando juega desde ubicaciones distintas o cuando necesita configurar un rango poco común. En esos casos, la herramienta ahorra tiempo y reduce pasos.`,
        `Los usos más comunes incluyen ${article.useCases.join(', ')}. Cada uso tiene una regla distinta, pero todos comparten una idea: se necesita un resultado imparcial, visible y fácil de repetir cuando la actividad lo permite.`
      ],
      bullets: article.useCases.map((useCase) => `${useCase}: define una regla simple antes de lanzar.`)
    },
    {
      heading: 'Ejemplo práctico',
      paragraphs: [
        `${article.example} Este ejemplo muestra que una tirada no existe aislada. Primero hay una regla, luego una acción y después una consecuencia. Cuando esa cadena está clara, el dado ayuda a decidir sin fricción.`,
        `En una actividad real, también conviene nombrar a una persona responsable de leer el resultado. Así se evitan dudas si varios usuarios están mirando la pantalla. Si se tiran varios dados, esa persona debe indicar tanto los valores separados como el total.`
      ]
    },
    {
      heading: 'Errores comunes y cómo evitarlos',
      paragraphs: [
        `Los errores suelen aparecer cuando la regla no se define antes de la tirada. También aparecen cuando una persona cambia la configuración sin avisar o cuando el grupo interpreta el resultado de dos formas distintas. Por eso, la claridad vale más que lanzar rápido.`,
        `Los fallos más habituales son ${article.mistakes.join(', ')}. La solución es sencilla: confirmar el rango, revisar el estado seleccionado y usar el historial cuando haya dudas sobre una tirada reciente.`
      ],
      bullets: article.mistakes.map((mistake) => `Evita ${mistake}.`)
    },
    {
      heading: 'Comparación rápida de opciones',
      paragraphs: [
        `No todos los dados resuelven el mismo problema. Un D6 funciona bien para opciones pequeñas. Un D8 o D20 amplía el rango. Un dado personalizado ayuda cuando la actividad no encaja en formatos tradicionales. Por eso, elegir bien el dado importa tanto como tirar.`,
        `La siguiente tabla resume opciones frecuentes. No pretende imponer una regla universal, sino ofrecer una guía práctica para escoger rápido sin perder de vista el objetivo de la actividad.`
      ],
      table: {
        headers: ['Opción', 'Mejor para', 'Cuándo evitarla'],
        rows: [
          ['D4', 'cuatro opciones simples', 'cuando hacen falta más resultados'],
          ['D6', 'juegos clásicos y sumas básicas', 'cuando la regla pide otro rango'],
          ['D8', 'rangos medios y tablas cortas', 'cuando seis opciones bastan'],
          ['D20', 'rol y veinte opciones', 'cuando el rango sería demasiado amplio'],
          ['Personalizado', 'rangos especiales', 'cuando una regla estándar es suficiente']
        ]
      }
    },
    {
      heading: 'Cómo elegir la configuración correcta',
      paragraphs: [
        `La configuración correcta nace de la regla, no del impulso de probar opciones. Primero se cuenta cuántos resultados posibles necesita la actividad. Después se elige el tipo de dado que cubre ese rango. Por último, se decide si basta una sola tirada o si conviene lanzar varios dados para sumar, comparar o repartir turnos.`,
        `Cuando el objetivo es una decisión sencilla, una tirada suele bastar. Si el objetivo es simular una regla de juego, el número de dados debe coincidir con la notación de la regla. Por ejemplo, 2D6 significa dos dados de seis caras, mientras que 1D20 significa un solo dado de veinte caras. Esa lectura evita errores comunes en partidas y ejercicios.`,
        `En ${article.scenario}, la mejor configuración suele ser ${article.recommendedSetup}. Esa recomendación no sustituye la regla del grupo, pero ofrece un punto de partida claro. Si la actividad cambia, también debe cambiar la configuración antes de tirar, no después de ver el resultado.`
      ],
      bullets: [
        'Cuenta cuántas opciones reales hay antes de elegir las caras.',
        'Usa un solo dado si solo hace falta un resultado.',
        'Usa varios dados cuando la regla pida suma o comparación.',
        'Anuncia la configuración en voz alta si participan varias personas.'
      ]
    },
    {
      heading: 'Cómo leer los resultados sin confusiones',
      paragraphs: [
        `Leer el resultado parece obvio, pero en grupos grandes puede crear dudas. La forma más clara es decir primero la configuración y luego el número que salió. Si hay varios dados, conviene leer los valores separados antes del total. Así todos entienden si la regla usa cada dado por separado o la suma final.`,
        `El historial ayuda cuando alguien no vio la tirada. Sin embargo, el historial no cambia la probabilidad de la siguiente tirada. Cada lanzamiento se debe tratar como un evento nuevo. Por eso, una racha de números altos o bajos no significa que el dado vaya a compensar en la próxima ronda.`,
        `También conviene separar el resultado bruto de los modificadores. En juegos de rol, por ejemplo, primero se tira el dado y después se suman bonos o penalizaciones. En ejercicios de clase, primero se muestra el número y después se aplica la actividad asociada. Ese orden mantiene la tirada transparente.`
      ],
      table: {
        headers: ['Situación', 'Lectura recomendada', 'Error que evita'],
        rows: [
          ['Un dado', 'decir el valor y aplicar la regla', 'repetir sin motivo'],
          ['Varios dados', 'leer valores separados y total', 'sumar mal'],
          ['Con modificadores', 'tirada primero, modificador después', 'alterar el resultado base'],
          ['Con historial', 'revisar solo tiradas recientes', 'buscar patrones falsos']
        ]
      }
    },
    {
      heading: 'Mini caso práctico',
      paragraphs: [
        `Imagina una sesión donde participan seis personas y todas aceptan que el azar decide el orden de juego. La persona responsable abre la herramienta, confirma la configuración y explica qué ocurrirá con empates o repeticiones. Después cada participante tira una vez. El número más alto empieza, y el historial sirve para revisar cualquier duda.`,
        `El mismo método funciona en una clase. El docente puede asignar categorías a los resultados, proyectar la pantalla y pedir que el grupo lea el número. En pocos segundos, la tirada se convierte en una actividad concreta. Además, los estudiantes ven que el número sale de un rango definido y no de una elección manual.`,
        `En una reunión online, el proceso es parecido. Una persona comparte pantalla, tira el dado y comunica el resultado. Esta rutina sencilla reduce discusiones porque todos ven el mismo número. También permite usar dados que no están disponibles físicamente, como D8, D20 o rangos personalizados.`
      ]
    },
    {
      heading: 'Accesibilidad, privacidad y uso responsable',
      paragraphs: [
        `Una herramienta de dados online debe ser cómoda en móvil, tablet y ordenador. Los botones grandes reducen errores al tocar. El contraste suficiente facilita leer el resultado. Además, colocar el botón principal cerca del dado evita desplazamientos innecesarios, algo importante cuando se usa el sitio durante una partida o una clase.`,
        `La privacidad también importa. Para una tirada casual no debería hacer falta crear una cuenta, instalar una app ni entregar datos personales. La experiencia ideal consiste en abrir la página, usar el dado y cerrar el navegador cuando termina la actividad. Esa simplicidad hace que la herramienta sea útil para grupos con distintos niveles de experiencia digital.`,
        `El uso responsable consiste en aplicar el resultado solo cuando todos aceptaron la regla antes de tirar. Si una decisión tiene consecuencias importantes, el dado puede ayudar a ordenar opciones, pero no debe sustituir el criterio humano. En juegos y ejercicios, en cambio, el azar es parte natural de la dinámica.`
      ],
      bullets: [
        'Prioriza pantallas con buen contraste y botones visibles.',
        'Evita herramientas que pidan permisos innecesarios para una tirada simple.',
        'Acuerda la regla antes de lanzar.',
        'Usa el dado para juegos, aprendizaje y decisiones ligeras.'
      ]
    },
    {
      heading: 'Plantilla rápida para usar en grupo',
      paragraphs: [
        `La siguiente plantilla ayuda a usar ${article.keyword} sin explicar todo desde cero. Primero se define la pregunta: qué se quiere resolver con la tirada. Luego se define el rango: cuántas opciones existen. Después se asigna cada número a una acción o se confirma que solo importa el valor. Finalmente se tira y se aplica el resultado.`,
        `Esta plantilla parece simple, pero evita la mayoría de conflictos. El grupo sabe qué pasará antes de ver el número. Si alguien propone cambiar la regla después de la tirada, conviene repetir el proceso desde el principio y pedir acuerdo explícito. Así el azar se mantiene claro y aceptado por todos.`
      ],
      bullets: [
        `Pregunta: ¿qué se decide con ${article.keyword}?`,
        'Rango: ¿cuántos resultados posibles existen?',
        'Regla: ¿qué significa cada número?',
        'Tirada: ¿quién lanza y quién lee el resultado?',
        'Acción: ¿qué ocurre después de ver el número?'
      ]
    },
    {
      heading: 'Enlaces útiles para seguir',
      paragraphs: [
        `Para practicar, conviene abrir una herramienta concreta y probar varias configuraciones. Estos enlaces internos ayudan a conectar la teoría con una tirada real. Cada página mantiene el mismo enfoque: interfaz simple, resultados claros e historial breve.`,
        `También se incluyen referencias externas para quien quiera profundizar. La documentación de MDN y W3C ayuda a entender APIs web de aleatoriedad. Las páginas sobre dados y probabilidad aportan contexto general sobre resultados, rangos y eventos.`
      ]
    }
  ];
}

export function articleSchema(article: BlogArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    image: `${SITE_URL}${article.image}`,
    author: {
      '@type': 'Organization',
      name: SITE_NAME
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`
      }
    },
    datePublished: '2026-06-07',
    dateModified: '2026-06-07',
    mainEntityOfPage: `${SITE_URL}${blogPath(article.slug)}`,
    inLanguage: 'es'
  };
}

export function blogCollectionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `Blog de ${SITE_NAME}`,
    url: `${SITE_URL}/blog`,
    inLanguage: 'es',
    blogPost: blogArticles.map((article) => ({
      '@type': 'BlogPosting',
      headline: article.title,
      url: `${SITE_URL}${blogPath(article.slug)}`,
      image: `${SITE_URL}${article.image}`
    }))
  };
}
