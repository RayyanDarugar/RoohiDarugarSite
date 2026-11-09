import Link from "next/link";
import { site } from "@/content/site";

export default function ToolShell({ eyebrow, title, body, children, disclaimer }: { eyebrow: string; title: string; body: string; children: React.ReactNode; disclaimer: string }) {
  return (
    <>
      <section className="page-head plain tool-head">
        <div className="wrap">
          <Link className="back" href="/tools">← All tools</Link>
          <div className="eyebrow">{eyebrow}</div>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
      </section>
      <section className="section tool-body">
        <div className="wrap">
          {children}
          <p className="disclosure">{disclaimer}</p>
        </div>
      </section>
      <section className="tool-cta">
        <div className="wrap">
          <div>
            <h2>Want a second set of eyes on the numbers?</h2>
            <p>A calculator is a starting point. A plan accounts for your whole picture: taxes, income, family, and timing.</p>
          </div>
          <Link className="btn light" href={site.bookingUrl}>Schedule a free consultation</Link>
        </div>
      </section>
    </>
  );
}
