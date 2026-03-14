import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
import { SiteHeaderCopy } from "@/components/site-header-copy";
import { siteMeta } from "@/content/site-content";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteMeta.projectShortName,
  description: siteMeta.subtitle,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="background-layer" aria-hidden />
        <header className="site-header">
          <div className="content-wrap site-header-inner">
            <SiteHeaderCopy />
            <MainNav />
          </div>
        </header>
        <main className="content-wrap page-content">{children}</main>
        <footer className="site-footer content-wrap">
          <div>
            <p className="footer-title">{siteMeta.projectShortName}</p>
            <p className="footer-copy">{siteMeta.subtitle}</p>
          </div>
          <div className="footer-meta">
            <p>
              {siteMeta.author} · {siteMeta.year}
            </p>
            <p>{siteMeta.faculty}</p>
            <p>Dirección: {siteMeta.director}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
