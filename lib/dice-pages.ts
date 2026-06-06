import { SITE_NAME } from './site';

export type DicePage = {
  path: string;
  dice: number;
  sides: number;
  custom: boolean;
  title: string;
  h1: string;
  description: string;
  subtitle: string;
};

export const diceCounts = Array.from({ length: 19 }, (_, index) => index + 2);
export const singleDiceCounts = [1];
export const supportedSideCounts = [3, 4, 5, 6, 8, 9, 10, 12, 20, 22];
export const sideDiceCounts = [1, 2, 3, 4, 5, 6];
export const customDiceCounts = [1, 2, 3, 4, 5, 6];

const exactMeta: Record<string, Partial<Pick<DicePage, 'title' | 'h1' | 'description'>>> = {
  '/1-dado': {
    title: '1 Dado Online | Tira Un Dado Virtual',
    h1: '1 Dado Online',
    description: 'Tira un dado online gratis con un resultado aleatorio inmediato, ideal para juegos, clases y decisiones rápidas.'
  },
  '/2-dados': {
    title: '2 Dados Online | Tira Dos Dados Virtuales',
    h1: '2 Dados Online',
    description: 'Tira dos dados virtuales gratis, suma el resultado al instante y consulta los ultimos lanzamientos.'
  },
  '/5-dados': {
    title: '5 Dados Online | Tira Cinco Dados Virtuales',
    h1: '5 Dados Online',
    description: 'Lanza cinco dados online desde móvil u ordenador y obtiene cada resultado junto con la suma total.'
  },
  '/8-caras/1-dado': {
    title: 'Dado de 8 Caras Online | Tira 1 Dado Virtual',
    h1: 'Dado de 8 Caras Online',
    description: 'Tira un dado de 8 caras online con resultado aleatorio rápido para partidas, clases y ejercicios de probabilidad.'
  },
  '/20-caras/1-dado': {
    title: 'Dado de 20 Caras Online | D20 Virtual',
    h1: 'Dado de 20 Caras Online',
    description: 'Usa este D20 virtual para tirar un dado de 20 caras online con historial, suma y controles rápidos.'
  },
  '/4-caras/1-dado': {
    title: 'Dado de 4 Caras Online | D4 Virtual',
    h1: 'Dado de 4 Caras Online',
    description: 'Tira un dado D4 online gratis y obtiene un número aleatorio del 1 al 4 sin instalar nada.'
  },
  '/3-caras/1-dado': {
    title: 'Dado de 3 Caras Online | Tira 1 Dado Virtual',
    h1: 'Dado de 3 Caras Online',
    description: 'Lanza un dado de 3 caras online para generar un resultado aleatorio entre 1 y 3 de forma sencilla.'
  },
  '/3-caras/2-dados': {
    title: '2 Dados de 3 Caras Online',
    h1: '2 Dados de 3 Caras Online',
    description: 'Tira dos dados de 3 caras online y consulta cada resultado junto con la suma total del lanzamiento.'
  },
  '/5-caras/2-dados': {
    title: '2 Dados de 5 Caras Online',
    h1: '2 Dados de 5 Caras Online',
    description: 'Genera dos resultados aleatorios del 1 al 5 con estos dados virtuales de 5 caras.'
  },
  '/9-caras/1-dado': {
    title: 'Dado de 9 Caras Online',
    h1: 'Dado de 9 Caras Online',
    description: 'Tira un dado de 9 caras online y recibe un resultado aleatorio inmediato desde cualquier dispositivo.'
  },
  '/22-caras/3-dados': {
    title: '3 Dados de 22 Caras Online',
    h1: '3 Dados de 22 Caras Online',
    description: 'Lanza tres dados de 22 caras online, revisa los resultados separados y calcula la suma total al instante.'
  },
  '/cualquier/1-dado': {
    title: 'Dado Personalizado Online | 1 Dado de Cualquier Número de Caras',
    h1: 'Dado Personalizado Online',
    description: 'Crea un dado personalizado online con el número de caras que necesites, de 2 a 100.'
  },
  '/cualquier/6-dados': {
    title: '6 Dados Personalizados Online',
    h1: '6 Dados Personalizados Online',
    description: 'Tira seis dados personalizados online y elige cualquier número de caras entre 2 y 100.'
  }
};

export function diceLabel(count: number) {
  return count === 1 ? '1 dado' : `${count} dados`;
}

export function sideLabel(count: number) {
  return count === 1 ? '1 cara' : `${count} caras`;
}

export function virtualDiceLabel(count: number) {
  return count === 1 ? '1 dado virtual' : `${count} dados virtuales`;
}

export function topDicePath(count: number) {
  return count === 1 ? '/1-dado' : `/${count}-dados`;
}

export function sidedDicePath(sides: number, dice: number) {
  return `/${sides}-caras/${dice}-${dice === 1 ? 'dado' : 'dados'}`;
}

export function customDicePath(dice: number) {
  return `/cualquier/${dice}-${dice === 1 ? 'dado' : 'dados'}`;
}

function titleForTopDice(count: number) {
  if (count === 1) return '1 Dado Online | Tira Un Dado Virtual';
  return `${count} Dados Online | Tira ${count} Dados Virtuales`;
}

function titleForSidedDice(sides: number, dice: number) {
  if (dice === 1) return `Dado de ${sides} Caras Online | D${sides} Virtual`;
  return `${dice} Dados de ${sides} Caras Online | Tira Dados Virtuales`;
}

function titleForCustomDice(dice: number) {
  if (dice === 1) return 'Dado Personalizado Online | 1 Dado de Cualquier Número de Caras';
  return `${dice} Dados Personalizados Online | Dados de Cualquier Número de Caras`;
}

export function buildTopDicePage(count: number): DicePage {
  const path = topDicePath(count);
  const exact = exactMeta[path];
  const h1 = exact?.h1 ?? `${count} Dados Online`;
  return {
    path,
    dice: count,
    sides: 6,
    custom: false,
    title: exact?.title ?? titleForTopDice(count),
    h1,
    description:
      exact?.description ??
      `Tira ${diceLabel(count)} online gratis con resultados aleatorios, suma total e historial de lanzamientos.`,
    subtitle: `Lanza ${diceLabel(count)} de 6 caras desde el navegador, sin registros ni descargas.`
  };
}

export function buildSidedDicePage(sides: number, dice: number): DicePage {
  const path = sidedDicePath(sides, dice);
  const exact = exactMeta[path];
  const defaultH1 =
    dice === 1 ? `Dado de ${sides} Caras Online` : `${dice} Dados de ${sides} Caras Online`;
  return {
    path,
    dice,
    sides,
    custom: false,
    title: exact?.title ?? titleForSidedDice(sides, dice),
    h1: exact?.h1 ?? defaultH1,
    description:
      exact?.description ??
      `Tira ${diceLabel(dice)} de ${sideLabel(sides)} online con resultados separados, total y ultimos lanzamientos.`,
    subtitle: `Genera números aleatorios del 1 al ${sides} con ${virtualDiceLabel(dice)}.`
  };
}

export function buildCustomDicePage(dice: number): DicePage {
  const path = customDicePath(dice);
  const exact = exactMeta[path];
  return {
    path,
    dice,
    sides: 6,
    custom: true,
    title: exact?.title ?? titleForCustomDice(dice),
    h1: exact?.h1 ?? `${dice} Dados Personalizados Online`,
    description:
      exact?.description ??
      `Tira ${diceLabel(dice)} personalizados online y elige cualquier número de caras entre 2 y 100.`,
    subtitle: `Configura el número de caras y lanza ${diceLabel(dice)} al instante.`
  };
}

export const allDicePages: DicePage[] = [
  ...singleDiceCounts.map(buildTopDicePage),
  ...diceCounts.map(buildTopDicePage),
  ...supportedSideCounts.flatMap((sides) =>
    sideDiceCounts.map((dice) => buildSidedDicePage(sides, dice))
  ),
  ...customDiceCounts.map(buildCustomDicePage)
];

export function pageByPath(path: string) {
  return allDicePages.find((page) => page.path === path);
}

export function pageNotFoundMessage(path: string) {
  return `No se encontró una página estática para ${path} en ${SITE_NAME}.`;
}
