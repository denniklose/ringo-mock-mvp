import Link from "next/link";

type InnerPageHeroProps = { eyebrow: string; title: string; intro: string; ctaLabel?: string; ctaHref?: string; mark?: string };

export default function InnerPageHero({ eyebrow, title, intro, ctaLabel, ctaHref, mark = "CH" }: InnerPageHeroProps) {
  return <section className="inner-hero"><div className="inner-hero-copy"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{ctaLabel && ctaHref ? ctaHref.startsWith("/") ? <Link className="button button-primary" href={ctaHref}>{ctaLabel}</Link> : <a className="button button-primary" href={ctaHref}>{ctaLabel}</a> : null}</div><div className="inner-hero-mark" aria-hidden="true"><span>{mark}</span></div></section>;
}
