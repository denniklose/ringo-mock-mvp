import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salon Chaarisma | Friseur in Daaden",
  description:
    "Salon Chaarisma in Daaden: kreative Dienstleistungen rund um Haar und Schönheit, mit Online-Terminbuchung.",
  applicationName: "Salon Chaarisma",
  category: "Friseursalon",
  openGraph: {
    title: "Salon Chaarisma | Friseur in Daaden",
    description:
      "Salon Chaarisma, Saynische Str. 67, 57567 Daaden.",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
