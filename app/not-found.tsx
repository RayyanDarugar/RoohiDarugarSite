import Link from "next/link";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="wrap">
        <div className="eyebrow">Page not found</div>
        <h1>This page has moved, or never existed.</h1>
        <p>Let&apos;s get you back on track. Here are a few good places to start.</p>
        <div className="row">
          <Link className="btn" href="/">Back to home</Link>
          <Link className="btn ghost" href="/services">Explore services</Link>
          <Link className="btn ghost" href={site.bookingUrl}>Schedule a consultation</Link>
        </div>
      </div>
    </section>
  );
}
