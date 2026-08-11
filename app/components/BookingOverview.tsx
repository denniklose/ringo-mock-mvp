import { site } from "../chaarisma-website-2026-data";

const bookingSteps = ["1. Dienstleistung auswählen", "2. Termin aussuchen", "3. Buchung abschließen"];

export default function BookingOverview() {
  return <div className="booking-overview"><p className="planner-kicker">Termin buchen</p><h3>Direkt zur Chaarisma-Buchung.</h3><p>Die bestehende Landingpage führt dich durch den vollständigen Buchungsablauf.</p><ol>{bookingSteps.map((step) => <li key={step}>{step}</li>)}</ol><a className="button button-primary planner-submit" href={site.bookingUrl}>Online-Termin buchen</a><p className="form-privacy">Alle veröffentlichten Leistungen und Buchungsschritte bleiben auf der Originalseite erhalten.</p></div>;
}
