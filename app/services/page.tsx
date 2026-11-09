import type { Metadata } from "next";
import Link from "next/link";
import { alsoHelp, compare, services, site } from "@/content/site";
import { Faq, FinalCta, Fill, PageHead } from "@/components/sections";

export const metadata: Metadata = { title: "Services" };

export default function Services() {
  return (
    <>
      <PageHead
        eyebrow="Services"
        title="Planning, investing, and retirement, under one roof"
        body="Whether you need a clear plan, ongoing investment management, or help turning savings into income, we start with what matters to you."
        img="/img/head-services.jpg"
        pos="right center"
      />

      <nav className="anchors" aria-label="Services">
        <div className="wrap">
          {services.map((s) => <a key={s.slug} href={`#${s.slug}`}>{s.title}</a>)}
          <a href="#compare">Planning vs. management</a>
          <a href="#more">More ways I help</a>
        </div>
      </nav>

      <section className="section">
        <div className="wrap">
          {services.map((s, i) => (
            <div className={`feature${i % 2 ? " flip" : ""}`} id={s.slug} key={s.slug} style={{ scrollMarginTop: 180 }}>
              <div className="media"><Fill src={s.img} sizes="(max-width: 1050px) 100vw, 50vw" /></div>
              <div>
                <div className="eyebrow">{s.eyebrow}</div>
                <h2>{s.title}</h2>
                <p className="lede">{s.lede}</p>
                <ul className="checks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Link className="link" href={site.bookingUrl}>Talk to Roohi about {s.title.toLowerCase()}</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="answer section" id="compare" style={{ textAlign: "left" }}>
        <div className="wrap">
          <div className="eyebrow">Which is right for you?</div>
          <h2 style={{ margin: "18px 0 0", maxWidth: "18ch" }}>Financial planning vs. wealth management</h2>
          <p style={{ margin: "20px 0 0", maxWidth: "60ch" }}>
            Many clients start with a plan and add ongoing management later. Others want both from day one. Here&apos;s how they differ.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="compare">
              <thead>
                <tr><th scope="col"><span className="sr-only">Topic</span></th>{compare.cols.map((c) => <th scope="col" key={c}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {compare.rows.map((r) => (
                  <tr key={r.label}><th scope="row">{r.label}</th>{r.vals.map((v) => <td key={v}>{v}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="more">
        <div className="wrap">
          <div className="serve-head">
            <h2>More ways I can help</h2>
            <p>Good planning touches every part of your financial life. These are some of the areas we can work on together.</p>
          </div>
          <div className="tiles">
            {alsoHelp.map((a) => (
              <div className="tile" key={a.title}><h3>{a.title}</h3><p>{a.body}</p></div>
            ))}
          </div>
          <p className="disclosure">LPL Financial and its representatives do not provide tax or legal advice. Please consult your tax or legal professional regarding your situation.</p>
        </div>
      </section>

      <Faq />
      <FinalCta />
    </>
  );
}
