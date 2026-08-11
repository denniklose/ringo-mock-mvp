import Image from "next/image";
import Link from "next/link";
import InnerPageHero from "../components/InnerPageHero";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { site } from "../chaarisma-website-2026-data";

export default function TeamPage() {
  return <main className="inner-page"><SiteHeader inner /><InnerPageHero eyebrow="Friseursalon Chaarisma · Daaden" title="Ihr Kreativ-Team." intro="Auf der offiziellen Teamseite zeigt sich das Kreativ-Team von Chaarisma in Daaden." ctaLabel="Termin buchen" ctaHref={site.bookingUrl} /><section className="inner-feature-section"><div className="inner-feature-copy"><p className="section-kicker">Chaarisma</p><h2>Persönlich beraten. Kreativ umgesetzt.</h2><p>Chaarisma bietet kreative Dienstleistungen rund um das Thema Haar und Schönheit. Komm vorbei und fühl dich wohl.</p><p>Die aktuellen Leistungsbereiche findest du vollständig in der bestehenden Online-Buchung – von Damen und Herren bis Kids &amp; Teens.</p><a className="text-link" href={site.phoneHref}>{site.phoneDisplay} anrufen <span aria-hidden="true">↗</span></a></div><figure className="inner-feature-media inner-feature-media-team"><Image src="/images/team-collage.jpg" alt="Offizielle Team-Collage von Salon Chaarisma" fill sizes="(max-width: 760px) 94vw, 58vw" /></figure></section><section className="inner-note-section inner-note-section-dark"><p className="section-kicker">Dein Besuch</p><h2>Ein Salon für Haar und Schönheit.</h2><p>Vereinbare deinen Termin online oder ruf direkt im Salon in der Saynischen Str. 67 in Daaden an.</p><div className="final-cta-actions"><a className="button button-light" href={site.bookingUrl}>Termin buchen</a><Link className="text-link text-link-light" href="/oeffnungszeiten/">Kontakt ansehen <span aria-hidden="true">↗</span></Link></div></section><SiteFooter /><a className="mobile-call-bar" href={site.bookingUrl}><span aria-hidden="true">↗</span>Termin buchen</a></main>;
}
