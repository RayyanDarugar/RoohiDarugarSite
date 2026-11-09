import type { Metadata } from "next";
import Link from "next/link";
import { orgs, site } from "@/content/site";
import { FinalCta, Fill, PageHead, Timeline } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Roohi",
  description: "Meet Roohi Darugar, CRPC®: 25+ years helping San Diego families plan, an independent advisor with LPL Financial, and an active community volunteer.",
};

export default function About() {
  return (
    <>
      <PageHead
        eyebrow="About"
        title="A planner since her very first paycheck"
        body={`Roohi Darugar, ${site.credential}, has helped San Diego families plan for what matters for over 25 years.`}
        img="/img/head-about.jpg"
      />

      <section className="section">
        <div className="wrap about-intro">
          <div className="media"><Fill src="/img/roohi.jpg" sizes="(max-width: 1050px) 100vw, 45vw" pos="top" alt={site.name} /></div>
          <div className="body">
            <div className="eyebrow">Her story</div>
            <h2 style={{ marginTop: 16 }}>Learning the value of a plan, early</h2>
            <p>
              Roohi grew up in Los Angeles in a large family where her mother was the only one earning. Her first job, as a
              bank teller in high school, paid four times a month. She gave two paychecks to her family, spent one, and saved
              one. By her second year of college, she had bought her own car.
            </p>
            <p>
              After studying finance and economics, she became an underwriter at UCLA Credit Union. There she saw
              professionals and families miss their goals, not for lack of income, but for lack of a plan. She saw what
              illness, divorce, or a lost job could do to a family that wasn&apos;t prepared.
            </p>
            <p>
              She decided to become part of the solution. After moving to San Diego and helping launch a family software
              business, she became a financial advisor, and has been helping clients take the right steps toward their goals
              ever since. Today she runs her own independent practice with LPL Financial.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--linen)", textAlign: "center" }}>
        <div className="wrap">
          <p className="pull">&ldquo;Most of us think about goals, but without a plan, <em>a goal is just a wish.</em>&rdquo;</p>
          <div className="cite">Roohi Darugar, {site.credential}</div>
        </div>
      </section>

      <div className="cred">
        <div className="wrap">
          <div className="row">
            <div className="item"><b>{site.years} years</b><span>advising clients in San Diego</span></div>
            <div className="item"><b>{site.credential}</b><span>Chartered Retirement Planning Counselor</span></div>
            <div className="item"><b>LPL Financial</b><span>Independent practice since 2018</span></div>
            <div className="item">
              <b>Verified</b>
              <span>Registration and background on BrokerCheck</span>
              <a href={site.brokerCheckUrl} target="_blank" rel="noopener noreferrer">View BrokerCheck →</a>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="center" style={{ marginBottom: 70 }}>
            <div className="eyebrow">Milestones</div>
            <h2 style={{ marginTop: 14 }}>A career built on relationships</h2>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="community" id="community">
        <div className="grid">
          <div className="img"><Fill src="/img/community.jpg" sizes="(max-width: 1050px) 100vw, 50vw" /></div>
          <div className="txt">
            <div className="eyebrow">Community</div>
            <h2 style={{ marginTop: 16 }}>Giving back to San Diego and beyond</h2>
            <p className="lede">
              From education for girls in Pakistan to the cultural life of Balboa Park, Roohi gives her time to causes close
              to her heart. She&apos;s also an active member of San Diego&apos;s professional women&apos;s networks.
            </p>
            <div className="orgs">
              {orgs.map((o) => (
                <div className="org" key={o.name}>
                  <b>{o.name}</b>
                  <span>{o.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="press">
            <div>
              <div className="eyebrow">In the press</div>
              <b>&ldquo;Conversations with the Inspiring Roohi Darugar&rdquo;</b>
              <span className="muted">SD Voyager · May 2019</span>
            </div>
            <a className="btn ghost" href="https://sdvoyager.com/interview/conversations-inspiring-roohi-darugar/" target="_blank" rel="noopener noreferrer">
              Read the interview
            </a>
          </div>
          <p className="center" style={{ marginTop: 50 }}>
            <Link className="link" href="/who-i-serve">See who I work with</Link>
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
