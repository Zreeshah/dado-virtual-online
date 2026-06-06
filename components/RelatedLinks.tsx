import Link from 'next/link';
import { relatedDiceLinks } from '@/lib/site';

type RelatedLinksProps = {
  currentPath?: string;
};

export function RelatedLinks({ currentPath }: RelatedLinksProps) {
  return (
    <section className="section related-section" aria-labelledby="otros-dados">
      <div className="section-inner">
        <h2 id="otros-dados">Otros dados online</h2>
        <div className="related-grid">
          {relatedDiceLinks
            .filter((link) => link.href !== currentPath)
            .map((link) => (
              <Link key={link.href} href={link.href} className="related-card">
                {link.label}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
