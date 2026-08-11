import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { legalDisclaimer, site } from "../chaarisma-website-2026-data";

export default function ImpressumPage() {
  return <main className="inner-page legal-page"><SiteHeader inner /><section className="legal-page-content"><p className="eyebrow">Rechtstexte</p><h1>Impressum</h1><h2>Angaben gemäß § 5 TMG:</h2><p>{site.owner}<br />Friseursalon Chaarisma<br />{site.address[0]}<br />{site.address[1]}</p><h2>Kontakt:</h2><p>Telefon: {site.phoneDisplay}</p><h2>Haftungsausschluss (Disclaimer)</h2>{legalDisclaimer.map((item) => <div className="legal-copy-block" key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></div>)}</section><SiteFooter /></main>;
}
