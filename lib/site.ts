export const SITE_NAME = 'Dado Virtual Online';
export const SITE_URL = 'https://www.dado-virtual.online';
export const SITE_DESCRIPTION =
  'Tira dados virtuales gratis desde cualquier dispositivo con resultados aleatorios instantaneos.';

export const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/2-dados', label: '2 Dados' },
  { href: '/20-caras/1-dado', label: 'Dado D20' },
  { href: '/cualquier/1-dado', label: 'Dado Personalizado' },
  { href: '/blog', label: 'Blog' },
  { href: '/#preguntas-frecuentes', label: 'FAQ' }
] as const;

export const relatedDiceLinks = [
  { href: '/1-dado', label: '1 dado' },
  { href: '/2-dados', label: '2 dados' },
  { href: '/3-dados', label: '3 dados' },
  { href: '/5-dados', label: '5 dados' },
  { href: '/4-caras/1-dado', label: 'Dado de 4 caras' },
  { href: '/8-caras/1-dado', label: 'Dado de 8 caras' },
  { href: '/20-caras/1-dado', label: 'Dado de 20 caras' },
  { href: '/cualquier/1-dado', label: 'Dados personalizados' }
] as const;

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path === '/' ? '/' : path}`;
}
