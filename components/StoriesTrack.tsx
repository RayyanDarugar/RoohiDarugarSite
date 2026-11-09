"use client";

import Image from "next/image";
import { useRef } from "react";

type Story = { eyebrow: string; name: string; who: string; body: string; img: string };

export default function StoriesTrack({ title, stories }: { title: string; stories: Story[] }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".story");
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 460) + 28), behavior: "smooth" });
  };

  return (
    <>
      <div className="wrap">
        <div className="stories-head">
          <div>
            <div className="eyebrow" style={{ color: "#becfbe" }}>Client stories</div>
            <h2 style={{ color: "#fff", marginTop: 14 }}>{title}</h2>
          </div>
          <div style={{ display: "flex", gap: 40, alignItems: "end", flexWrap: "wrap" }}>
            <p>Every story is different. Here are a few of the situations I see most.</p>
            <div className="arrows">
              <button aria-label="Previous story" onClick={() => scroll(-1)}>←</button>
              <button aria-label="Next story" onClick={() => scroll(1)}>→</button>
            </div>
          </div>
        </div>
      </div>
      <div className="strack" ref={track} tabIndex={0} role="region" aria-label="Client stories, scroll horizontally">
        {stories.map((s) => (
          <article className="story" key={s.name}>
            <div className="img">
              <Image src={s.img} alt="" fill sizes="(max-width: 640px) 82vw, 460px" style={{ objectFit: "cover" }} />
            </div>
            <div className="body">
              <div className="eyebrow">{s.eyebrow}</div>
              <h3>{s.name}</h3>
              <div className="who">{s.who}</div>
              <p>{s.body}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
