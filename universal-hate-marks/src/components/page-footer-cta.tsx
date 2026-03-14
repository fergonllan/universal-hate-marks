import Link from "next/link";

interface CtaLink {
  href: string;
  label: string;
}

interface PageFooterCtaProps {
  links: CtaLink[];
}

export function PageFooterCta({ links }: PageFooterCtaProps) {
  return (
    <nav className="page-footer-cta" aria-label="Siguientes pasos">
      <p className="kicker">Seguir explorando</p>
      <div className="quick-links">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="quick-link">
            {link.label}
            <span aria-hidden>→</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
