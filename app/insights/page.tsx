import type { Metadata } from "next";
import { insights } from "@/content/site";
import { FinalCta, Fill, PageHead } from "@/components/sections";

export const metadata: Metadata = { title: "Insights" };

export default function Insights() {
  const [featured, ...rest] = insights;
  return (
    <>
      <PageHead
        eyebrow="Insights"
        title="Plain-English guidance for life's money decisions"
        body="Articles and checklists on retirement, taxes, family, and planning for women and professionals."
      />

      <section className="section">
        <div className="wrap">
          <article className="post-featured">
            <div className="img"><Fill src={featured.img} sizes="(max-width: 1050px) 100vw, 55vw" /></div>
            <div>
              <div className="eyebrow">Featured · {featured.cat}</div>
              <h2>{featured.title}</h2>
              <p className="muted" style={{ marginBottom: 24 }}>
                Claiming at 62, at full retirement age, or at 70 can change your lifetime benefit significantly. Here&apos;s how
                to think about the decision.
              </p>
              <span className="soon">Coming soon</span>
            </div>
          </article>

          <div className="cards">
            {rest.map((p) => (
              <article className="post" key={p.title}>
                <div className="img"><Fill src={p.img} sizes="(max-width: 1050px) 100vw, 33vw" /></div>
                <div className="meta"><span>{p.cat}</span><span>{p.read}</span></div>
                <h3>{p.title}</h3>
                <div style={{ marginTop: 14 }}><span className="soon">Coming soon</span></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
