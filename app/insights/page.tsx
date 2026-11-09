import type { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/content/site";
import { getArticle } from "@/content/articles";
import { FinalCta, Fill, PageHead } from "@/components/sections";

export const metadata: Metadata = {
  title: "Insights",
  description: "Plain-English articles on retirement, Social Security, taxes, and planning for women, professionals, and families.",
};

export default function Insights() {
  const [featured, ...rest] = insights;
  const fa = featured.slug ? getArticle(featured.slug) : undefined;
  return (
    <>
      <PageHead
        eyebrow="Insights"
        title="Plain-English guidance for life's money decisions"
        body="Articles and checklists on retirement, taxes, family, and planning for women and professionals."
      />

      <section className="section">
        <div className="wrap">
          <Link className="post-featured" href={featured.slug ? `/insights/${featured.slug}` : "#"}>
            <div className="img"><Fill src={featured.img} sizes="(max-width: 1050px) 100vw, 55vw" priority /></div>
            <div>
              <div className="eyebrow">Featured · {featured.cat}</div>
              <h2>{featured.title}</h2>
              <p className="muted" style={{ marginBottom: 24 }}>{fa?.dek}</p>
              <span className="link">Read the article</span>
            </div>
          </Link>

          <div className="cards">
            {rest.map((p) => {
              const inner = (
                <>
                  <div className="img"><Fill src={p.img} sizes="(max-width: 1050px) 100vw, 33vw" /></div>
                  <div className="meta"><span>{p.cat}</span><span>{p.read}</span></div>
                  <h3>{p.title}</h3>
                  {!p.slug && <div style={{ marginTop: 14 }}><span className="soon">Coming soon</span></div>}
                </>
              );
              return p.slug ? (
                <Link className="post" href={`/insights/${p.slug}`} key={p.title}>{inner}</Link>
              ) : (
                <article className="post" key={p.title}>{inner}</article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
