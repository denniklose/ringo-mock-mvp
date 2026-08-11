import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { site } from "../chaarisma-website-2026-data";

export default function SalonPage() {
  return <main className="inner-page"><SiteHeader inner /><InnerPageHero eyebrow="Friseursalon Chaarisma · Daaden" title="Ein Salon zum Wohlfühlen." intro="Wir wollen, dass Sie sich bei uns wohl fühlen." ctaLabel="Termin buchen" ctaHref={site.bookingUrl} /><section className="inner-feature-section inner-feature-section-reverse"><figure className="inner-feature-media"><Image src="/images/salon-front.jpg" alt="Außenansicht des Friseursalon Chaarisma in Daaden" fill sizes="(max-width: 760px) 94vw, 58vw" /></figure><div className="inner-feature-copy"><p className="section-kicker">Der Salon</p><h2>Haar und Schönheit im Mittelpunkt.</h2><p>Natürlich liegen uns in erster Linie Ihre Haare am Herzen, aber neben Pflege und Beratung trägt der ganz persönliche Flair unseres Salons dazu bei, Ihren Besuch bei uns zu genießen.</p><p>Chaarisma bietet kreative Dienstleistungen rund um das Thema Haar und Schönheit.</p><Link className="button button-primary" href="/oeffnungszeiten/">Öffnungszeiten &amp; Kontakt</Link></div></section><section className="inner-note-section"><p className="section-kicker">Leistungen</p><h2>Von Haarschnitt bis Extensions.</h2><p>In der bestehenden Online-Buchung findest du Damen-, Herren- sowie Kids-&amp;-Teens-Leistungen, Colorationen, Dauerwelle, Extensions, Hochzeits- und Eventfrisuren sowie Kosmetik.</p><a className="button button-primary" href={site.bookingUrl}>Leistung auswählen</a></section><SiteFooter /><a className="mobile-call-bar" href={site.bookingUrl}><span aria-hidden="true">↗</span>Termin buchen</a></main>;
}
