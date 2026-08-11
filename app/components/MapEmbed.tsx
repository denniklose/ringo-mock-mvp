"use client";
import { useState } from "react";

type MapEmbedProps = { directionsUrl: string; embedUrl: string; title: string };

export default function MapEmbed({ directionsUrl, embedUrl, title }: MapEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  if (isLoaded) return <div className="map-embed map-embed-loaded"><iframe title={title} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a href={directionsUrl} target="_blank" rel="noreferrer">Route in Google Maps öffnen <span aria-hidden="true">↗</span></a></div>;
  return <div className="map-consent-card"><div><span className="map-pin" aria-hidden="true">⌖</span><p className="section-kicker">Saynische Str. 67 · Daaden</p><strong>Den Salon auf der Karte ansehen.</strong><p>Mit einem Klick wird Google Maps geladen. Dabei können Daten an Google übertragen werden.</p></div><button className="button button-light" type="button" onClick={() => setIsLoaded(true)}>Karte laden</button></div>;
}
