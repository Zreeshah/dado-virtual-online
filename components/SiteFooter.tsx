import Link from 'next/link';
import { relatedDiceLinks, SITE_NAME } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p className="footer-brand">{SITE_NAME}</p>
          <p className="footer-note">
            Esta herramienta genera resultados aleatorios para juegos, actividades y uso general.
          </p>
        </div>
        <nav aria-label="Enlaces de dados" className="footer-links">
          {relatedDiceLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="copyright">© {new Date().getFullYear()} {SITE_NAME}</p>
      </div>
    </footer>
  );
}
