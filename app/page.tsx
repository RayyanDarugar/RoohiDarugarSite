import Image from "next/image";
import Link from "next/link";
import { questions, segments, site, steps } from "@/content/site";
import { Check, Community, Faq, FinalCta, Fill, Stories, Timeline } from "@/components/sections";

const icons: Record<string, React.ReactNode> = {
  question: (<><path d="M24 44c11 0 20-9 20-20S35 4 24 4 4 13 4 24c0 4 1 7 3 10l-3 10 10-3c3 2 6 3 10 3z" /><path d="M18 18a6 6 0 1 1 8 6c-1.5.8-2 2-2 3.5V29" /><circle cx="24" cy="35" r=".8" /></>),
  card: (<><rect x="6" y="12" width="36" height="26" rx="3" /><path d="M6 20h36M14 30h8" /></>),
  shield: (<><path d="M24 4l16 6v12c0 10-7 18-16 22C15 40 8 32 8 22V10z" /><path d="M17 24l5 5 9-10" /></>),
  clock: (<><circle cx="24" cy="24" r="19" /><path d="M24 13v11l7 5" /></>),
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">{site.name}, {site.credential} · {site.city}</div>
            <h1>Wealth planning built around <em>your</em> life</h1>
            <p className="sub">
              Personal financial guidance for women, professionals, and families, from an advisor who has been part of this
              community for over 25 years.
            </p>
            <div className="hero-ctas">
              <Link className="btn" href={site.bookingUrl}>Schedule a Consultation</Link>
              <Link className="btn ghost" href="/about">Meet Roohi</Link>
            </div>
          </div>
          <div className="portrait">
            <div className="disc two" />
            <div className="disc" />
            <Image className="her" src="/img/roohi-cutout.png" alt={`${site.name}, ${site.credential}`} width={1024} height={1024} priority sizes="(max-width: 1050px) 520px, 680px" />
            <div className="float a">
              <b>{site.years}</b>
              <div>
                <div className="eyebrow">Years advising</div>
                San Diego families
              </div>
            </div>
            <div className="float b">
              <div className="eyebrow">Your plan covers</div>
              <ul>
                <li><i>✓</i>Retirement income</li>
                <li><i>✓</i>Social Security timing</li>
                <li><i>✓</i>Family &amp; legacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <div className="cred">
        <div className="wrap">
          <div className="row">
            <div className="item"><b>{site.years} years</b><span>advising clients in San Diego</span></div>
            <div className="item"><b>{site.credential}</b><span>Chartered Retirement Planning Counselor</span></div>
            <div className="item"><b>Independent</b><span>Securities offered through LPL Financial, Member FINRA/SIPC</span></div>
            <div className="item">
              <b>Verified</b>
              <span>Check her background on FINRA BrokerCheck</span>
              <a href={site.brokerCheckUrl} target="_blank" rel="noopener noreferrer">View BrokerCheck →</a>
            </div>
          </div>
        </div>
      </div>

      {/* QUESTIONS */}
      <section className="questions section">
        <div className="wrap">
          <h2 className="center">Do you have more questions about your money than answers?</h2>
          <div className="rule" />
          <div className="qgrid">
            {questions.map((q) => (
              <div className="qcard" key={q.text}>
                <svg viewBox="0 0 48 48" fill="none" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">{icons[q.icon]}</svg>
                <p>{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ANSWER */}
      <section className="answer section">
        <svg className="lines" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none" stroke="#becfbe" strokeWidth="1" aria-hidden="true">
          <path d="M0 520 C 360 500, 700 160, 1440 80" /><path d="M0 545 C 360 525, 720 190, 1440 110" /><path d="M0 570 C 360 550, 740 220, 1440 140" /><path d="M0 595 C 360 575, 760 250, 1440 170" /><path d="M0 620 C 360 600, 780 280, 1440 200" /><path d="M0 645 C 360 625, 800 310, 1440 230" />
        </svg>
        <div className="wrap" style={{ position: "relative" }}>
          <div className="eyebrow">A personal approach</div>
          <h2>You deserve an advisor who knows <em>your name</em>, not just your account number.</h2>
          <p>
            I work directly with every client. No call centers, no hand-offs. Together we build a plan around what matters to
            you: your family, your career, your retirement, and the causes you care about.
          </p>
          <p>For more than 25 years, I&apos;ve helped San Diegans make confident decisions about their money, one relationship at a time.</p>
          <Link className="btn light" href="/about">Learn about my approach</Link>
        </div>
      </section>

      {/* WHO I SERVE */}
      <section className="section" id="serve">
        <div className="wrap">
          <div className="serve-head">
            <h2>Guidance for where you are in life</h2>
            <p>Every plan starts with a conversation about you. These are the people I&apos;ve spent my career helping.</p>
          </div>
          <div className="sgrid">
            {segments.slice(0, 3).map((s) => (
              <div className="scard" key={s.slug}>
                <div className="img"><Fill src={s.img} sizes="(max-width: 1050px) 100vw, 33vw" /></div>
                <div className="eyebrow">{s.eyebrow}</div>
                <h3>{s.title}</h3>
                <ul className="checks">{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Link className="link" href={`/who-i-serve#${s.slug}`}>{s.link}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how section">
        <div className="wrap center">
          <div className="eyebrow">How it works</div>
          <h2>Comprehensive planning, one conversation at a time</h2>
          <div className="hgrid">
            {steps.map((st, i) => (
              <div className="hcard" key={st.title}>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
                <div className="vig">
                  <div className="bg"><Fill src={st.img} sizes="(max-width: 1050px) 100vw, 33vw" /></div>
                  {i === 0 && (
                    <div className="paper note-card">
                      <div className="eyebrow">What matters most</div>
                      <ol><li>Retire by 65</li><li>Help the kids with college</li><li>Stay in our home</li><li>Give back</li></ol>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="paper tabs-card">
                      <div className="eyebrow">Your financial plan</div>
                      <div className="tab"><i style={{ background: "var(--green-700)" }} />Retirement income</div>
                      <div className="tab"><i style={{ background: "var(--rose-300)" }} />Taxes</div>
                      <div className="tab"><i style={{ background: "#82abe4" }} />Insurance &amp; protection</div>
                      <div className="tab"><i style={{ background: "#c5d8be" }} />Estate &amp; legacy</div>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="paper cal-card">
                      <div className="date"><small>MAR</small><b>14</b></div>
                      <div>
                        <div className="eyebrow">Annual review</div>
                        <strong>Thursday · 10:00 AM</strong>
                        <span><Image src="/img/roohi.jpg" alt="" width={24} height={24} />with Roohi</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="cta"><Link className="btn" href={site.bookingUrl}>Get in touch</Link></div>
        </div>
      </section>

      {/* WOMEN */}
      <section className="women section">
        <div className="wrap">
          <div>
            <div className="eyebrow">Retirement planning for women</div>
            <h2 style={{ marginTop: 16 }}>Women live longer, earn differently, and <em>plan differently.</em></h2>
            <p className="lede">
              Your plan should reflect that. I help women build retirement plans that account for longer lifespans, career
              breaks, and the life changes no one plans for.
            </p>
            <ol className="promises"><li>Protect what you&apos;ve built</li><li>Maintain the life you love</li><li>Retire with confidence</li></ol>
          </div>
          <div className="women-media">
            <div className="img"><Fill src="/img/friends.jpg" sizes="(max-width: 1050px) 100vw, 50vw" /></div>
            <div className="fit">
              <div className="eyebrow">This is for you if</div>
              <h3>We may be a great fit if…</h3>
              <ul>
                <li><Check />You&apos;re within 10–15 years of retirement</li>
                <li><Check />You&apos;re navigating a change: divorce, loss, or a new chapter</li>
                <li><Check />You want a plan, and someone you can call</li>
              </ul>
              <Link className="link" href="/who-i-serve#women">Start the conversation →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <div className="band">
        <div className="bg"><Fill src="/img/lajolla.jpg" /></div>
        <div className="wrap">
          <div className="eyebrow">{site.years} years in San Diego</div>
          <h2>A career built on relationships</h2>
        </div>
      </div>
      <section className="section" style={{ paddingTop: 90 }}>
        <div className="wrap"><Timeline /></div>
      </section>

      <Stories />
      <Community />
      <Faq />
      <FinalCta />
    </>
  );
}
