"use client";

import { useState } from "react";
import ColumnChart from "./ColumnChart";
import { money, moneyCompact } from "./format";

/** Full retirement age in months, per SSA's schedule. */
function fraMonths(birthYear: number) {
  if (birthYear <= 1954) return 66 * 12;
  if (birthYear >= 1960) return 67 * 12;
  return 66 * 12 + (birthYear - 1954) * 2;
}

/** Monthly benefit when claiming at `claimMonths` of age, given the full-retirement-age benefit. */
export function benefitAt(pia: number, fra: number, claimMonths: number) {
  const diff = claimMonths - fra;
  if (diff < 0) {
    const early = -diff;
    const reduction = Math.min(early, 36) * (5 / 9 / 100) + Math.max(early - 36, 0) * (5 / 12 / 100);
    return pia * (1 - reduction);
  }
  const delayed = Math.min(diff, 70 * 12 - fra);
  return pia * (1 + delayed * (2 / 3 / 100));
}

const fmtAge = (m: number) => (m % 12 ? `${Math.floor(m / 12)} and ${m % 12} mo` : `${m / 12}`);

export default function SocialSecurity() {
  const [birthYear, setBirthYear] = useState(1962);
  const [pia, setPia] = useState(2400);
  const [lifeAge, setLifeAge] = useState(87);

  const fra = fraMonths(birthYear);
  const ages = [62, 63, 64, 65, 66, 67, 68, 69, 70];
  const at = (a: number) => benefitAt(pia, fra, a * 12);
  const b62 = at(62);
  const bFra = benefitAt(pia, fra, fra);
  const b70 = at(70);
  const lifetime = (monthlyAmt: number, claimMonths: number) => Math.max(0, lifeAge * 12 - claimMonths) * monthlyAmt;
  const totals = [
    { label: "Claim at 62", amt: lifetime(b62, 62 * 12) },
    { label: `Claim at ${fmtAge(fra)}`, amt: lifetime(bFra, fra) },
    { label: "Claim at 70", amt: lifetime(b70, 70 * 12) },
  ];
  const best = totals.reduce((a, b) => (b.amt > a.amt ? b : a));
  const breakEven = (bA: number, mA: number, bB: number, mB: number) => (bB * mB - bA * mA) / (bB - bA) / 12;
  const be62v70 = breakEven(b62, 62 * 12, b70, 70 * 12);
  const be62vFra = breakEven(b62, 62 * 12, bFra, fra);
  const fraWhole = Math.floor(fra / 12);

  return (
    <div className="calc">
      <div className="calc-inputs">
        <div className="field">
          <label htmlFor="by"><span>Birth year</span></label>
          <select id="by" value={birthYear} onChange={(e) => setBirthYear(Number(e.target.value))}>
            {Array.from({ length: 31 }, (_, i) => 1950 + i).map((y) => <option key={y}>{y}</option>)}
          </select>
          <p className="hint">Your full retirement age: <strong>{fmtAge(fra)}</strong></p>
        </div>
        <div className="field">
          <label htmlFor="pia"><span>Monthly benefit at full retirement age</span></label>
          <div className="money-input">
            <span>$</span>
            <input id="pia" type="number" inputMode="numeric" min={0} max={6000} step={50} value={pia} onChange={(e) => setPia(Math.max(0, Math.min(6000, Number(e.target.value) || 0)))} />
          </div>
          <p className="hint">Find yours on your statement at <a href="https://www.ssa.gov/myaccount/" target="_blank" rel="noopener noreferrer">ssa.gov/myaccount</a>.</p>
        </div>
        <div className="field">
          <label htmlFor="life"><span>Plan to age</span><output htmlFor="life">{lifeAge}</output></label>
          <input id="life" type="range" min={72} max={100} step={1} value={lifeAge} onChange={(e) => setLifeAge(Number(e.target.value))} />
        </div>
      </div>

      <div className="calc-out">
        <div className="stat-row three">
          <div><span>At 62</span><b>{money(b62)}/mo</b></div>
          <div><span>At {fmtAge(fra)}</span><b>{money(bFra)}/mo</b></div>
          <div><span>At 70</span><b>{money(b70)}/mo</b></div>
        </div>
        <ColumnChart
          title="Estimated monthly benefit by claiming age"
          series={[{ key: "b", label: "Monthly benefit", color: "#1f7a52" }]}
          data={ages.map((a) => ({ x: a, values: { b: at(a) }, note: a === fraWhole && fra % 12 === 0 ? "full retirement age" : undefined }))}
          format={money}
          formatAxis={moneyCompact}
          labelXs={[62, 70]}
          highlightX={fra % 12 === 0 ? fraWhole : undefined}
          highlightLabel="Full retirement age"
          height={300}
        />
        <div className="hero-num compact">
          <div className="eyebrow">If you live to {lifeAge}</div>
          <p>
            Claiming <strong>{best.label.replace("Claim ", "")}</strong> would pay the most over your lifetime, about{" "}
            <strong>{money(best.amt)}</strong> in today&apos;s dollars.
          </p>
          <ul className="totals">
            {totals.map((t) => (
              <li key={t.label}><span>{t.label}</span><b>{moneyCompact(t.amt)}</b></li>
            ))}
          </ul>
          <p className="hint">
            Waiting until 70 instead of claiming at 62 pays off if you live past about <strong>{be62v70.toFixed(0)}</strong>.
            Waiting until full retirement age instead of 62 pays off past about <strong>{be62vFra.toFixed(0)}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
