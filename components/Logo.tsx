import Link from "next/link";
import { site } from "@/content/site";

export default function Logo() {
  return (
    <Link className="logo" href="/" aria-label={`${site.name}, home`}>
      <span className="mark">RD</span>
      <span className="name">
        <b>{site.name}</b>
        <small>
          {site.credential} · {site.title}
        </small>
      </span>
    </Link>
  );
}
