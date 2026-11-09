import type { Metadata } from "next";
import Link from "next/link";
import { segments, site } from "@/content/site";
import { Check, FinalCta, Fill, PageHead, Stories } from "@/components/sections";

export const metadata: Metadata = { title: "Who I Serve" };

export default function WhoIServe() {
  return (
    <>
      <PageHead
        eyebrow="Who I serve"
        title="Guidance for where you are in life"
        body="For over 25 years, I've worked with women, professionals, families, and business owners across San Diego. Here's how I help each."
        img="/img/head-serve.jpg"
        pos="right center"
      />

      <nav className="anchors" aria-label="Who I serve">
        <div className="wrap">
          {segments.map((s) => <a key={s.slug} href={`#${s.slug}`}>{s.title}</a>)}
          <a href="#stories">Client stories</a>
        </div>
      </nav>

      <section className="section">
        <div className="wrap">
          {segments.map((s, i) => (
            <div className={`feature${i % 2 ? " flip" : ""}`} id={s.slug} key={s.slug} style={{ scrollMarginTop: 180 }}>
              <div className="media"><Fill src={s.img} sizes="(max-width: 1050px) 100vw, 50vw" /></div>
              <div>
                <div className="eyebrow">{s.eyebrow}</div>
                <h2>{s.title}</h2>
                <p className="lede">{s.body}</p>
                <ul className="checks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Link className="link" href={site.bookingUrl}>Start a conversation</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="women section">
        <div className="wrap">
          <div>
            <div className="eyebrow">Is this you?</div>
            <h2 style={{ marginTop: 16 }}>We may be a great fit if you&apos;re <em>ready for a plan.</em></h2>
            <p className="lede">Most of my clients come to me at a turning point. If any of these sound familiar, let&apos;s talk.</p>
          </div>
          <div className="fit" style={{ position: "static", width: "auto" }}>
            <div className="eyebrow">Common turning points</div>
            <h3>Where clients usually start</h3>
            <ul>
              <li><Check />Retirement is 10–15 years away and you want a real plan</li>
              <li><Check />A divorce, loss, or inheritance changed everything</li>
              <li><Check />You changed jobs and have old retirement accounts</li>
              <li><Check />You&apos;re helping kids or parents while saving for yourself</li>
              <li><Check />You own a business and your finances are tangled up in it</li>
            </ul>
            <Link className="link" href={site.bookingUrl}>Schedule a free consultation →</Link>
          </div>
        </div>
      </section>

      <Stories title="Client stories" />
      <FinalCta />
    </>
  );
}
