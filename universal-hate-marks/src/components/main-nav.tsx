"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGroup, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/resumen", label: "Resumen" },
  { href: "/faq", label: "FAQ" },
  { href: "/como-funciona", label: "Cómo funciona" },
  { href: "/guia", label: "Guía" },
  { href: "/mapa", label: "Mapa" },
  { href: "/fases", label: "Fases" },
  { href: "/descargas", label: "Descargas" },
];

export function MainNav() {
  const pathname = usePathname();

  return (
    <LayoutGroup>
      <nav className="nav-scroll" aria-label="Navegación principal">
        {links.map((link) => {
          const active =
            pathname === link.href ||
            (link.href !== "/" && pathname?.startsWith(link.href));

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`nav-link ${active ? "nav-link-active" : ""}`}
            >
              {active && (
                <motion.div
                  layoutId="nav-indicator"
                  className="nav-indicator"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </LayoutGroup>
  );
}
