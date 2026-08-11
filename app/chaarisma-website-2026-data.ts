export const site = {
  name: "Salon Chaarisma",
  owner: "Steffi Groß",
  descriptor: "Friseursalon · Daaden",
  address: ["Saynische Str. 67", "57567 Daaden"],
  phoneDisplay: "02743 / 934 988",
  phoneHref: "tel:+492743934988",
  sourceUrl: "https://www.chaarisma-daaden.de/",
  bookingUrl: "https://dnfk.mitdenkt.io/",
  instagramUrl: "https://www.instagram.com/chaarisma_daaden/",
  facebookUrl: "https://www.facebook.com/p/Salon-Chaarisma-100054490027937/",
  reviewsUrl: "https://share.google/KwTA98YHNdTmOzj9a",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=Saynische+Stra%C3%9Fe+67%2C+57567+Daaden",
  mapEmbedUrl: "https://www.google.com/maps?q=Friseursalon%20Chaarisma%2C%20Saynische%20Stra%C3%9Fe%2067%2C%2057567%20Daaden&z=16&output=embed",
} as const;

export const navigation = [
  { label: "Start", href: "/" },
  { label: "Team", href: "/team/" },
  { label: "Salon", href: "/salon/" },
  { label: "Haarverlängerung / Extension", href: "/haarverlaengerung-extension/" },
  { label: "Über Uns", href: "/ueber-uns/" },
  { label: "Öffnungszeiten/Kontakt", href: "/oeffnungszeiten/" },
] as const;

export const services = [
  { number: "01", title: "Damen – Haarschnitte & Föhnen", copy: "Direkt in der bestehenden Online-Buchung auswählbar." },
  { number: "02", title: "Damen – Colorationen", copy: "Die Buchung unterscheidet zwischen Colorationen mit und ohne Schnitt." },
  { number: "03", title: "Damen – Dauerwelle", copy: "Dauerwelle ist als eigener Bereich in der Terminbuchung hinterlegt." },
  { number: "04", title: "Damen – Extensions", copy: "Haarverlängerung ist in der Buchungsstrecke als Leistung aufgeführt." },
  { number: "05", title: "Damen – Hochzeits- & Eventfrisuren", copy: "Für Hochzeiten und Events gibt es einen eigenen Auswahlbereich." },
  { number: "06", title: "Damen – Kosmetik", copy: "Kosmetik kannst du direkt über die bestehende Buchungsseite auswählen." },
  { number: "07", title: "Herren", copy: "Die Online-Buchung führt Herren als eigenen Leistungsbereich." },
  { number: "08", title: "Kids & Teens", copy: "Für Kinder und Jugendliche bis 17 Jahre ist ein eigener Bereich vorhanden." },
] as const;

export const hours = [
  ["Mo.–Fr.", "07:30–18:00 (Di bis 19:00)"],
  ["Samstag", "07:00–13:00"],
] as const;

export const faqs = [
  { question: "Wie buche ich einen Termin?", answer: "Über „Termin buchen“ gelangst du direkt zur bestehenden Chaarisma-Buchungsseite. Dort wählst du zuerst die Dienstleistung und anschließend einen passenden Termin aus." },
  { question: "Welche Leistungen finde ich in der Buchung?", answer: "Die Online-Buchung nennt Bereiche für Damen, Herren sowie Kids & Teens. Dazu gehören Haarschnitte, Colorationen, Dauerwelle, Extensions, Hochzeits- und Eventfrisuren sowie Kosmetik." },
  { question: "Wo finde ich Chaarisma?", answer: "Der Friseursalon Chaarisma von Steffi Groß befindet sich in der Saynischen Str. 67, 57567 Daaden." },
  { question: "Wann ist der Salon geöffnet?", answer: "Montag bis Freitag ist der Salon von 07:30 bis 18:00 Uhr geöffnet, dienstags bis 19:00 Uhr. Samstags ist von 07:00 bis 13:00 Uhr geöffnet." },
  { question: "Wo finde ich weitere Eindrücke?", answer: "Auf Instagram und Facebook veröffentlicht Chaarisma weitere Eindrücke. Die Google-Bewertungen sind ebenfalls direkt verlinkt." },
] as const;

export const legalDisclaimer = [
  { title: "Haftung für Inhalte", copy: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen." },
  { title: "Haftung für Links", copy: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen." },
  { title: "Urheberrecht", copy: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors beziehungsweise Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen." },
] as const;
