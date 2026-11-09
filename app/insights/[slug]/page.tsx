import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import { site } from "@/content/site";
import { Fill, FinalCta } from "@/components/sections";


export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const a = getArticle((await params).slug);
  return a ? { title: a.title, description: a.dek } : {};
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const a = getArticle((await params).slug);
  if (!a) notFound();
  const more = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <article>
        <header className="article-head">
          <div className="wrap narrow">
            <Link className="back" href="/insights">← All insights</Link>
            <div className="eyebrow">{a.cat} · {a.read}</div>
            <h1>{a.title}</h1>
            <p className="dek">{a.dek}</p>
            <div className="byline">
              <span className="av"><Fill src="/img/roohi.jpg" sizes="44px" pos="top" alt="" /></span>
              <span><b>{site.name}, {site.credential}</b><small>{a.date}</small></span>
            </div>
          </div>
        </header>
        <div className="wrap article-hero">
          <div className="img"><Fill src={a.img} priority sizes="(max-width: 1340px) 100vw, 1260px" /></div>
        </div>
        <div className="wrap narrow prose">
          {a.body.map((b, i) => {
            if (b.h) return <h2 key={i}>{b.h}</h2>;
            if (b.list) return <ul key={i}>{b.list.map((li) => <li key={li}>{li}</li>)}</ul>;
            if (b.quote) return <blockquote key={i}>{b.quote}</blockquote>;
            return <p key={i}>{b.p}</p>;
          })}
          {a.tool && (
            <div className="article-tool">
              <span>Try it with your numbers</span>
              <Link className="btn" href={a.tool.href}>{a.tool.label}</Link>
            </div>
          )}
          <p className="article-disc">
            This material is for general information only and is not intended to provide specific advice or recommendations
            for any individual. LPL Financial
            and its representatives do not provide tax or legal advice.
          </p>
        </div>
      </article>

      <section className="section" style={{ background: "var(--linen)" }}>
        <div className="wrap">
          <h2 style={{ marginBottom: 40 }}>Keep reading</h2>
          <div className="cards two">
            {more.map((p) => (
              <Link className="post" href={`/insights/${p.slug}`} key={p.slug}>
                <div className="img"><Fill src={p.img} sizes="(max-width: 1050px) 100vw, 50vw" /></div>
                <div className="meta"><span>{p.cat}</span><span>{p.read}</span></div>
                <h3>{p.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
