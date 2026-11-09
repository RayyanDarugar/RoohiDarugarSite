"use client";

import { useMemo, useState } from "react";
import ColumnChart from "./ColumnChart";
import { money, moneyCompact } from "./format";

const SCENARIOS = [
  { label: "Conservative", rate: 0.04 },
  { label: "Moderate", rate: 0.06 },
  { label: "Growth", rate: 0.07 },
];
const INFLATION = 0.025;
const COLORS = { put: "#5b8fd6", growth: "#1f7a52" };

function project(age: number, retire: number, start: number, monthly: number, rate: number) {
  const r = rate / 12;
  let bal = start;
  let put = start;
  const rows = [{ age, put, growth: 0, bal }];
  for (let a = age; a < retire; a++) {
    for (let m = 0; m < 12; m++) {
      bal = bal * (1 + r) + monthly;
      put += monthly;
    }
    rows.push({ age: a + 1, put, growth: Math.max(0, bal - put), bal });
  }
  return rows;
}

function Field({ label, value, display, min, max, step, onChange, suffix }: { label: string; value: number; display: string; min: number; max: number; step: number; onChange: (n: number) => void; suffix?: string }) {
  const id = label.toLowerCase().replace(/\W+/g, "-");
  return (
    <div className="field">
      <label htmlFor={id}>
        <span>{label}</span>
        <output htmlFor={id}>{display}{suffix}</output>
      </label>
      <input id={id} type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}

export default function RetirementCalculator() {
  const [age, setAge] = useState(45);
  const [retire, setRetire] = useState(65);
  const [start, setStart] = useState(150000);
  const [monthly, setMonthly] = useState(1000);
  const [scenario, setScenario] = useState(1);

  const retireAge = Math.max(retire, age + 1);
  const rate = SCENARIOS[scenario].rate;
  const rows = useMemo(() => project(age, retireAge, start, monthly, rate), [age, retireAge, start, monthly, rate]);
  const end = rows[rows.length - 1];
  const years = retireAge - age;
  const today = end.bal / Math.pow(1 + INFLATION, years);
  const plus = project(age, retireAge, start, monthly + 250, rate).at(-1)!.bal - end.bal;
  const income = (end.bal * 0.04) / 12;

  const data = rows.slice(1).map((r) => ({ x: r.age, values: { put: r.put, growth: r.growth } }));
  const tickEvery = years > 30 ? 10 : years > 14 ? 5 : years > 6 ? 2 : 1;

  return (
    <div className="calc">
      <div className="calc-inputs">
        <Field label="Your age" value={age} display={String(age)} min={20} max={75} step={1} onChange={(n) => { setAge(n); if (retire <= n) setRetire(n + 1); }} />
        <Field label="Retirement age" value={retireAge} display={String(retireAge)} min={Math.min(age + 1, 80)} max={80} step={1} onChange={setRetire} />
        <Field label="Current savings" value={start} display={money(start)} min={0} max={2000000} step={5000} onChange={setStart} />
        <Field label="Monthly contribution" value={monthly} display={money(monthly)} min={0} max={10000} step={50} onChange={setMonthly} />
        <fieldset className="seg">
          <legend>Hypothetical annual return</legend>
          <div>
            {SCENARIOS.map((s, i) => (
              <button key={s.label} type="button" aria-pressed={scenario === i} onClick={() => setScenario(i)}>
                {s.label}<small>{(s.rate * 100).toFixed(0)}%</small>
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="calc-out">
        <div className="hero-num">
          <div className="eyebrow">Projected savings at {retireAge}</div>
          <b>{money(end.bal)}</b>
          <p>About <strong>{money(today)}</strong> in today&apos;s dollars, assuming {(INFLATION * 100).toFixed(1)}% inflation.</p>
        </div>
        <div className="stat-row">
          <div><span>Adding $250/month</span><b>+{money(plus)}</b></div>
          <div><span>A 4% yearly withdrawal</span><b>{money(income)}/mo</b></div>
          <div><span>Years to grow</span><b>{years}</b></div>
        </div>
        <ColumnChart
          title="How your savings could grow, by age"
          series={[{ key: "put", label: "What you put in", color: COLORS.put }, { key: "growth", label: "Hypothetical growth", color: COLORS.growth }]}
          data={data}
          format={money}
          formatAxis={moneyCompact}
          tickEvery={tickEvery}
          labelXs={[retireAge]}
        />
      </div>
    </div>
  );
}
