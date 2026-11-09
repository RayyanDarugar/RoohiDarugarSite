"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Area = "Retirement" | "Income" | "Safety net" | "Protection" | "Estate" | "Investments" | "Taxes";

const QUESTIONS: { q: string; area: Area }[] = [
  { q: "Do you know how much you'll need to retire comfortably?", area: "Retirement" },
  { q: "Do you know the earliest age you could afford to retire?", area: "Retirement" },
  { q: "Do you have a plan for turning your savings into a paycheck?", area: "Income" },
  { q: "Have you decided when you'll claim Social Security?", area: "Income" },
  { q: "Do you have three to six months of expenses set aside for emergencies?", area: "Safety net" },
  { q: "Would your family be financially okay if something happened to you?", area: "Protection" },
  { q: "Have you reviewed your insurance coverage in the last two years?", area: "Protection" },
  { q: "Are your will, any trusts, and your beneficiaries up to date?", area: "Estate" },
  { q: "Are your investments matched to your goals and timeline?", area: "Investments" },
  { q: "Do you think about taxes when you save, invest, and withdraw?", area: "Taxes" },
];

const OPTIONS = [
  { label: "Yes", score: 2 },
  { label: "Somewhat", score: 1 },
  { label: "No / not sure", score: 0 },
];

const AREA_NOTES: Record<Area, string> = {
  Retirement: "Put a number and a date on retirement, so every other decision has something to aim at.",
  Income: "Plan the order you'll draw from savings, pensions, and Social Security so the money lasts.",
  "Safety net": "Build a cash cushion so a surprise expense doesn't derail your long-term plan.",
  Protection: "Make sure insurance would cover your family if your income stopped.",
  Estate: "Keep your will, trusts, and beneficiary forms current, so your wishes are followed.",
  Investments: "Check that how you invest still matches when you'll need the money.",
  Taxes: "Look at which accounts you save into and withdraw from, and when, since that affects what you keep.",
};

export default function ReadinessQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [done, setDone] = useState(false);
  const top = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [done]);
  const answered = answers.filter((a) => a !== null).length;
  const score = answers.reduce<number>((s, a) => s + (a ?? 0), 0);
  const pct = Math.round((score / (QUESTIONS.length * 2)) * 100);
  const focus = Array.from(new Set(QUESTIONS.filter((_, i) => (answers[i] ?? 0) < 2).map((q) => q.area)));

  const verdict =
    pct >= 80
      ? { h: "You're in good shape.", p: "You've covered most of the basics. A second opinion can still catch blind spots and keep your plan current as life changes." }
      : pct >= 50
        ? { h: "A plan could help you fill a few gaps.", p: "You've done some of the work. A financial plan would tie the pieces together and show what to tackle first." }
        : { h: "You'd likely benefit most from a plan.", p: "Many people are in the same spot. A first conversation can turn these open questions into a clear set of next steps." };

  if (done) {
    return (
      <div className="quiz-result" role="status" aria-live="polite" ref={top} style={{ scrollMarginTop: 140 }}>
        <div className="score-ring" style={{ ["--p" as string]: pct }}>
          <b>{pct}</b><span>out of 100</span>
        </div>
        <div>
          <div className="eyebrow">Your result</div>
          <h2>{verdict.h}</h2>
          <p className="muted" style={{ marginTop: 14, maxWidth: "52ch" }}>{verdict.p}</p>
          {focus.length > 0 && (
            <>
              <h3 className="focus-h">Where to focus</h3>
              <ul className="focus">
                {focus.map((a) => (
                  <li key={a}><b>{a}</b><span>{AREA_NOTES[a]}</span></li>
                ))}
              </ul>
            </>
          )}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34 }}>
            <Link className="btn" href="/contact">Talk it through with Roohi</Link>
            <button className="btn ghost" type="button" onClick={() => { setDone(false); setAnswers(Array(QUESTIONS.length).fill(null)); }}>Start over</button>
          </div>
          <p className="hint" style={{ marginTop: 18 }}>Your answers stay in your browser. Nothing is saved or sent.</p>
        </div>
      </div>
    );
  }

  return (
    <>
    <div ref={top} style={{ scrollMarginTop: 140 }} />
    <form className="quiz" onSubmit={(e) => { e.preventDefault(); if (answered === QUESTIONS.length) setDone(true); }}>
      <div className="quiz-progress" aria-hidden="true"><i style={{ width: `${(answered / QUESTIONS.length) * 100}%` }} /></div>
      <p className="hint">{answered} of {QUESTIONS.length} answered</p>
      <ol>
        {QUESTIONS.map((item, i) => (
          <li key={item.q}>
            <fieldset>
              <legend><span className="qn">{String(i + 1).padStart(2, "0")}</span>{item.q}</legend>
              <div className="opts">
                {OPTIONS.map((o) => (
                  <label key={o.label} className={answers[i] === o.score ? "on" : ""}>
                    <input
                      type="radio"
                      name={`q${i}`}
                      value={o.score}
                      checked={answers[i] === o.score}
                      onChange={() => setAnswers((prev) => prev.map((a, j) => (j === i ? o.score : a)))}
                    />
                    {o.label}
                  </label>
                ))}
              </div>
            </fieldset>
          </li>
        ))}
      </ol>
      <button className="btn" type="submit" disabled={answered < QUESTIONS.length}>
        {answered < QUESTIONS.length ? `Answer ${QUESTIONS.length - answered} more to see your result` : "See my result"}
      </button>
    </form>
    </>
  );
}
