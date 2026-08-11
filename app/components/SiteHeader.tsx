import Link from "next/link";
import { navigation, site } from "../chaarisma-website-2026-data";

type SiteHeaderProps = { inner?: boolean };

export default function SiteHeader({ inner = false }: SiteHeaderProps) {
  return (
    <header className={"site-header" + (inner ? " site-header-inner" : "")} aria-label="Hauptnavigation">
      <Link className="wordmark" href="/" aria-label="Salon Chaarisma – Startseite"><span>Chaarisma</span><small>{site.descriptor}</small></Link>
      <nav className="desktop-nav" aria-label="Seitennavigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav>
      <div className="header-contact"><a className="header-phone" href={site.phoneHref}><span aria-hidden="true">☎</span>{site.phoneDisplay}</a><a className="header-location" href={site.directionsUrl} target="_blank" rel="noreferrer">Daaden</a></div>
      <details className="mobile-menu">
        <summary aria-label="Menü öffnen">Menü</summary>
        <nav aria-label="Mobile Seitennavigation">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<a href={site.bookingUrl}>Termin buchen</a></nav>
      </details>
    </header>
  );
}
