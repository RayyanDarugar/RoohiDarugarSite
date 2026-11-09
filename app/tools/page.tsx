import type { Metadata } from "next";
import Link from "next/link";
import { site, tools } from "@/content/site";
import { FinalCta, PageHead } from "@/components/sections";

export const metadata: Metadata = {
  title: "Tools",
  description: "Free retirement and Social Security calculators, plus a quick quiz to see if you're ready for a financial planner.",
};

const icons = [
  <svg key="a" viewBox="0 0 26 26" fill="none" strokeWidth="1.6" strokeLinecap="round"><rect x="4" y="2" width="18" height="22" rx="2" /><path d="M8 7h10M8 12h2M12 12h2M16 12h2M8 16h2M12 16h2M16 16h2M8 20h2M12 20h6" /></svg>,
  <svg key="b" viewBox="0 0 26 26" fill="none" strokeWidth="1.6" strokeLinecap="round"><path d="M3 22h20M6 22V12M11 22V8M16 22V14M21 22V5" /></svg>,
  <svg key="c" viewBox="0 0 26 26" fill="none" strokeWidth="1.6" strokeLinecap="round"><circle cx="13" cy="13" r="10" /><path d="M10 10a3 3 0 1 1 4 3c-.7.4-1 1-1 1.7V16" /><circle cx="13" cy="19.5" r=".6" /></svg>,
];

export default function Tools() {
  return (
    <>
      <PageHead
        eyebrow="Tools"
        title="Calculators and checkups for your next step"
        body="Simple tools to help you see where you stand before we talk."
        img="/img/head-tools.jpg"
        pos="right center"
      />

      <section className="section">
        <div className="wrap">
          <div className="toolgrid">
            {tools.map((t, i) => (
              <Link className="tool" href={`/tools/${t.slug}`} key={t.title}>
                <div className="ico">{icons[i]}</div>
                <div className="eyebrow" style={{ fontSize: 12, color: "var(--ink-soft)" }}>{t.tag}</div>
                <h2>{t.title}</h2>
                <p>{t.body}</p>
                <span className="link" style={{ alignSelf: "flex-start" }}>{t.cta} →</span>
              </Link>
            ))}
          </div>
          <p className="disclosure">
            Calculators provide hypothetical illustrations for educational purposes only. They are not a guarantee of future
            results and do not represent any specific investment. Your results will vary.
          </p>
          <p className="center" style={{ marginTop: 40 }}>
            <Link className="btn" href={site.bookingUrl}>Prefer to talk it through? Schedule a consultation</Link>
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
