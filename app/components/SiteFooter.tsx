import Link from "next/link";
import { site } from "../chaarisma-website-2026-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><Link className="wordmark" href="/"><span>Chaarisma</span><small>{site.descriptor}</small></Link><p>{site.address[0]} · {site.address[1]}<br />Telefon: {site.phoneDisplay}</p></div>
      <div className="footer-links"><a href={site.bookingUrl}>Termin buchen</a><Link href="/ueber-uns/">Über Uns</Link><Link href="/oeffnungszeiten/">Öffnungszeiten/Kontakt</Link><a href={site.sourceUrl} target="_blank" rel="noreferrer">Website</a><a href={site.directionsUrl} target="_blank" rel="noreferrer">Route</a></div>
      <div className="footer-legal" aria-label="Rechtstexte"><span>Rechtstexte</span><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link></div>
    </footer>
  );
}
