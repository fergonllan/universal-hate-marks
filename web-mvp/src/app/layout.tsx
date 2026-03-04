import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/main-nav";
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
  title: siteMeta.title,
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
          <div className="content-wrap">
            <p className="eyebrow">Tesis Maestria</p>
            <h1 className="site-title">{siteMeta.title}</h1>
            <p className="site-subtitle">{siteMeta.subtitle}</p>
            <MainNav />
          </div>
        </header>
        <main className="content-wrap page-content">{children}</main>
        <footer className="site-footer content-wrap">
          <p>
            {siteMeta.author} · {siteMeta.year}
          </p>
          <p>{siteMeta.faculty}</p>
        </footer>
      </body>
    </html>
  );
}
