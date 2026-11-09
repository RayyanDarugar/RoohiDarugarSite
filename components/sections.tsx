import Image from "next/image";
import Link from "next/link";
import { faqs, orgs, site, stories, storiesDisclosure, timeline } from "@/content/site";
import StoriesTrack from "./StoriesTrack";

/** Full-bleed or contained photo that fills its positioned parent. */
export function Fill({ src, alt = "", sizes = "100vw", priority = false, pos }: { src: string; alt?: string; sizes?: string; priority?: boolean; pos?: string }) {
  return <Image src={src} alt={alt} fill sizes={sizes} priority={priority} style={{ objectFit: "cover", objectPosition: pos }} />;
}

export function Check({ stroke = "#e3aaa4" }: { stroke?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke={stroke} strokeWidth="1.8" aria-hidden="true">
      <circle cx="10" cy="10" r="9" />
      <path d="M6 10l3 3 5-6" />
    </svg>
  );
}

export function PageHead({ eyebrow, title, body, img, pos }: { eyebrow: string; title: React.ReactNode; body?: string; img?: string; pos?: string }) {
  return (
    <section className={`page-head${img ? "" : " plain"}`}>
      {img && (
        <div className="bg">
          <Fill src={img} priority pos={pos} />
        </div>
      )}
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {body && <p>{body}</p>}
      </div>
    </section>
  );
}

export function Timeline() {
  return (
    <div className="tl">
      {timeline.map((t, i) => {
        const year = <div className={`tl-year ${i % 2 ? "right" : "left"}`}>{t.label}</div>;
        const text = (
          <div className={`tl-text ${i % 2 ? "left" : "right"}`}>
            <b>{t.title}</b>
            {t.body}
          </div>
        );
        return (
          <div className="tl-row" key={t.title}>
            {i % 2 ? text : year}
            <div className="tl-dot" />
            {i % 2 ? year : text}
          </div>
        );
      })}
    </div>
  );
}

export function Stories({ title = "Some clients I've helped" }: { title?: string }) {
  return (
    <section className="stories section" id="stories">
      <StoriesTrack title={title} stories={stories} />
      <p className="disclosure">{storiesDisclosure}</p>
    </section>
  );
}

export function Community() {
  return (
    <section className="community" id="community">
      <div className="grid">
        <div className="img">
          <Fill src="/img/community.jpg" sizes="(max-width: 1050px) 100vw, 50vw" />
        </div>
        <div className="txt">
          <div className="eyebrow">Giving back</div>
          <h2 style={{ marginTop: 16 }}>Rooted in the San Diego community</h2>
          <p className="lede">
            Outside the office, Roohi gives her time to organizations that support women, families, education, and culture,
            in San Diego and beyond.
          </p>
          <div className="orgs">
            {orgs.map((o) => (
              <div className="org" key={o.name}>
                <b>{o.name}</b>
                <span>{o.role}</span>
              </div>
            ))}
          </div>
          <Link className="link" href="/about#community">
            More about her community work
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="faq section" id="faq">
      <div className="wrap">
        <div>
          <h2>FAQs</h2>
          <p className="lede">The things people most often ask before our first meeting.</p>
        </div>
        <div>
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="final">
      <div className="bg">
        <Fill src="/img/balboa.jpg" />
      </div>
      <div className="wrap">
        <div className="face">
          <Fill src="/img/roohi.jpg" sizes="150px" pos="top" alt={site.name} />
        </div>
        <div>
          <h2>Meet with Roohi</h2>
          <p>Let&apos;s talk about your goals. Your first consultation is free.</p>
          <Link className="btn light" href={site.bookingUrl}>
            Schedule a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
