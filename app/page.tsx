import Image from "next/image";
import Link from "next/link";
import BookingOverview from "./components/BookingOverview";
import MapEmbed from "./components/MapEmbed";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { faqs, hours, services, site } from "./chaarisma-website-2026-data";

const salonSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: site.name,
  founder: site.owner,
  telephone: "+49 2743 934988",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address[0],
    postalCode: "57567",
    addressLocality: "Daaden",
    addressCountry: "DE",
  },
  url: site.sourceUrl,
};

export default function Home() {
  return (
    <main id="top">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(salonSchema) }} />
      <SiteHeader />

      <section className="hero" id="start">
        <div className="hero-copy">
          <div className="hero-ornament" aria-hidden="true"><span>CH</span></div>
          <p className="eyebrow">{site.descriptor}</p>
          <h1>Lust auf was Neues?</h1>
          <p className="hero-intro">Wir bieten kreative Dienstleistungen rund um das Thema Haar und Schönheit. Kommen Sie zu uns und fühlen Sie sich wohl!</p>
          <div className="hero-actions">
            <a className="button button-primary" href={site.bookingUrl}>Termin buchen</a>
            <Link className="text-link" href="/ueber-uns/">Über Uns entdecken <span aria-hidden="true">→</span></Link>
          </div>
          <a className="rating-link" href={site.reviewsUrl} target="_blank" rel="noreferrer" aria-label="Google-Bewertungen von Salon Chaarisma öffnen">
            <span className="rating-stars" aria-hidden="true">★★★★★</span><span>Google-Bewertungen ansehen</span>
          </a>
        </div>
        <div className="hero-visual" aria-label="Haar-Inspiration">
          <div className="hero-arch">
            <Image src="/images/chaarisma-hero.png" alt="Kreative Haar-Inspiration in warmen, glänzenden Brauntönen" fill priority sizes="(max-width: 760px) 94vw, 44vw" />
          </div>
          <span className="hero-visual-line" aria-hidden="true" />
        </div>
      </section>

      <section className="service-intro" aria-labelledby="service-intro-title">
        <p>Haar · Schönheit · Wohlfühlen</p>
        <h2 id="service-intro-title">Kreative Ideen für deinen Look.</h2>
        <a href={site.bookingUrl}>Termin buchen <span aria-hidden="true">→</span></a>
      </section>

      <section className="services-section" id="leistungen" aria-labelledby="services-title">
        <div className="section-heading section-heading-light">
          <p className="section-kicker">Leistungen</p>
          <h2 id="services-title">Alles rund um Haar und Schönheit.</h2>
          <p>Die folgenden Bereiche sind in der bestehenden Online-Buchung von Chaarisma direkt auswählbar.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span>{service.number}</span><h3>{service.title}</h3><p>{service.copy}</p>
              <a href={site.bookingUrl} aria-label={`${service.title} buchen`}>Auswählen <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="inspiration-section" id="salon" aria-labelledby="inspiration-title">
        <div className="section-heading">
          <p className="section-kicker">Salon &amp; Team</p>
          <h2 id="inspiration-title">Ein Ort zum Wohlfühlen.</h2>
          <p>Im Salon Chaarisma in Daaden stehen kreative Dienstleistungen rund um Haar und Schönheit im Mittelpunkt.</p>
        </div>
        <div className="look-grid">
          <figure className="look-card look-card-tall team-feature">
            <Image src="/images/salon-front.jpg" alt="Außenansicht des Salon Chaarisma in Daaden" fill sizes="(max-width: 760px) 94vw, 52vw" />
            <figcaption><span>01</span><strong>Salon Chaarisma</strong><small>Saynische Str. 67 · Daaden</small></figcaption>
          </figure>
          <div className="look-side">
            <figure className="look-card salon-feature">
              <Image src="/images/extension-inspiration.png" alt="Kreative Inspiration für Extensions und lange Haarlooks" fill sizes="(max-width: 760px) 94vw, 42vw" />
              <figcaption><span>02</span><strong>Haarverlängerung</strong><small>Extension-Inspiration</small></figcaption>
            </figure>
            <div className="social-proof-block">
              <p className="section-kicker">Das Kreativ-Team</p>
              <strong>Persönliche Beratung gehört dazu.</strong>
              <p>Chaarisma verbindet kreative Dienstleistungen mit einem Salon, in dem du dich wohlfühlen sollst.</p>
              <div className="inline-links"><Link className="text-link" href="/team/">Team ansehen <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/salon/">Salon entdecken <span aria-hidden="true">↗</span></Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="extension-strip" aria-labelledby="extension-strip-title">
        <div className="extension-strip-image"><Image src="/images/team-collage.jpg" alt="Das Kreativ-Team von Salon Chaarisma" fill sizes="(max-width: 760px) 94vw, 54vw" /></div>
        <div className="extension-strip-copy">
          <p className="section-kicker">Team &amp; Extensions</p>
          <h2 id="extension-strip-title">Schönheit beginnt mit Beratung.</h2>
          <p>Von Haarschnitten und Colorationen bis zu Extensions sowie Hochzeits- und Eventfrisuren findest du die veröffentlichten Bereiche direkt in der Online-Buchung.</p>
          <div className="extension-strip-actions"><Link className="button button-primary" href="/haarverlaengerung-extension/">Extensions entdecken</Link><a className="text-link" href={site.bookingUrl}>Termin buchen <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>

      <section className="process-section" aria-labelledby="process-title">
        <div className="section-heading"><p className="section-kicker">Online buchen</p><h2 id="process-title">Leistung auswählen. Termin finden. Fertig.</h2></div>
        <ol className="process-list">
          <li><span>01</span><div><h3>Leistung auswählen</h3><p>Die Buchungsseite zeigt die vollständigen Kategorien von Chaarisma.</p></div></li>
          <li><span>02</span><div><h3>Termin aussuchen</h3><p>Nach der Auswahl gelangst du zur Terminübersicht der bestehenden Landingpage.</p></div></li>
          <li><span>03</span><div><h3>Buchung abschließen</h3><p>Alle Informationen und Schritte bleiben auf der Originalseite erhalten.</p></div></li>
        </ol>
        <div className="phone-pair"><a href={site.phoneHref}><small>Salon</small><strong>{site.phoneDisplay}</strong></a><a href={site.bookingUrl}><small>Online</small><strong>Termin buchen</strong></a></div>
      </section>

      <section className="reviews-section" aria-labelledby="reviews-title">
        <div className="reviews-score"><p className="section-kicker">Google-Bewertungen</p><div className="reviews-number">★<span> direkt ansehen</span></div><div className="reviews-stars" aria-hidden="true">★★★★★</div><p>Der vollständige Bewertungsverlauf ist direkt verlinkt.</p></div>
        <div className="reviews-copy"><p className="section-kicker">Echte Stimmen</p><h2 id="reviews-title">Mach dir selbst ein Bild.</h2><p>Die Google-Bewertungen bleiben direkt verlinkt. So kannst du alle Stimmen und den vollständigen Kontext selbst ansehen.</p><a className="button button-primary" href={site.reviewsUrl} target="_blank" rel="noreferrer">Google-Bewertungen ansehen</a></div>
      </section>

      <section className="planner-section" id="terminwunsch" aria-labelledby="planner-title">
        <div className="planner-copy"><p className="section-kicker">Dein Termin</p><h2 id="planner-title">Alle Infos direkt auf der Buchungsseite.</h2><p>Über den Terminbutton öffnest du die originale Chaarisma-Landingpage mit den veröffentlichten Leistungen, der Auswahl und dem Buchungsablauf.</p></div>
        <BookingOverview />
      </section>

      <section className="visit-section" id="kontakt" aria-labelledby="visit-title">
        <div className="visit-location">
          <div className="visit-copy"><p className="section-kicker">Salonbesuch</p><h2 id="visit-title">In Daaden. Schnell gefunden.</h2><p className="visit-address">{site.address[0]}<br />{site.address[1]}</p><a className="button button-light" href={site.directionsUrl} target="_blank" rel="noreferrer">Route öffnen</a></div>
          <MapEmbed directionsUrl={site.directionsUrl} embedUrl={site.mapEmbedUrl} title="Karte zum Salon Chaarisma in Daaden" />
        </div>
        <div className="hours-panel" aria-label="Öffnungszeiten"><div className="hours-title"><span>Öffnungszeiten</span><small>Salon Chaarisma</small></div><dl>{hours.map(([day, time]) => <div key={day}><dt>{day}</dt><dd>{time}</dd></div>)}</dl><p className="hours-note">Dienstags ist der Salon bis 19:00 Uhr geöffnet.</p></div>
      </section>

      <section className="faq-section" id="faq" aria-labelledby="faq-title">
        <div className="section-heading"><p className="section-kicker">Gut zu wissen</p><h2 id="faq-title">Die wichtigsten Fragen vor deinem Termin.</h2></div>
        <div className="faq-list">{faqs.map((faq, index) => <details key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span><strong>{faq.question}</strong><i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title"><p className="section-kicker">Bereit für deinen Termin?</p><h2 id="final-cta-title">Dann komm zu Chaarisma.</h2><p>Online buchen oder direkt im Salon anrufen.</p><div className="final-cta-actions"><a className="button button-light" href={site.bookingUrl}>Termin buchen</a><a className="text-link text-link-light" href={site.phoneHref}>{site.phoneDisplay} <span aria-hidden="true">→</span></a></div></section>
      <SiteFooter />
      <a className="mobile-call-bar" href={site.bookingUrl}><span aria-hidden="true">↗</span>Termin buchen</a>
    </main>
  );
}
