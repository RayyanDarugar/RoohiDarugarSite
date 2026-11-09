"use client";

import { useMemo, useRef, useState } from "react";

export type Series = { key: string; label: string; color: string };
export type Datum = { x: string | number; values: Record<string, number>; note?: string };

type Props = {
  title: string;
  series: Series[];
  data: Datum[];
  format: (n: number) => string;
  formatAxis?: (n: number) => string;
  xLabel?: (x: Datum["x"]) => string;
  /** x values to label under the axis; others are left to the tooltip. */
  tickEvery?: number;
  /** x values whose total gets a direct label at the cap. */
  labelXs?: Array<Datum["x"]>;
  highlightX?: Datum["x"];
  highlightLabel?: string;
  height?: number;
};

const W = 760;
const PAD = { l: 64, r: 16, t: 28, b: 36 };

function niceMax(v: number) {
  if (v <= 0) return 1;
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const steps = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  for (const s of steps) if (s * p >= v) return s * p;
  return 10 * p;
}

export default function ColumnChart({ title, series, data, format, formatAxis = format, xLabel = String, tickEvery = 1, labelXs = [], highlightX, highlightLabel, height = 320 }: Props) {
  const [hover, setHover] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const H = height;
  const totals = data.map((d) => series.reduce((s, se) => s + (d.values[se.key] ?? 0), 0));
  const max = niceMax(Math.max(...totals) * 1.12);
  const ticks = useMemo(() => [0, 0.25, 0.5, 0.75, 1].map((f) => f * max), [max]);
  const innerW = W - PAD.l - PAD.r;
  const innerH = H - PAD.t - PAD.b;
  const band = innerW / data.length;
  const bar = Math.min(24, Math.max(4, band - 4));
  const y = (v: number) => PAD.t + innerH - (v / max) * innerH;

  return (
    <figure className="chart">
      <figcaption className="chart-title">{title}</figcaption>
      {series.length > 1 && (
        <ul className="legend" aria-label="Legend">
          {series.map((s) => (
            <li key={s.key}><i style={{ background: s.color }} />{s.label}</li>
          ))}
        </ul>
      )}
      <div className="chart-plot" ref={wrap} onMouseLeave={() => setHover(null)}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={title}>
          {ticks.map((t) => (
            <g key={t}>
              <line x1={PAD.l} x2={W - PAD.r} y1={y(t)} y2={y(t)} stroke="#e6ded4" strokeWidth="1" />
              <text x={PAD.l - 10} y={y(t) + 4} textAnchor="end" className="axis">{formatAxis(t)}</text>
            </g>
          ))}
          {data.map((d, i) => {
            const cx = PAD.l + band * i + band / 2;
            let acc = 0;
            const segs = series.map((s, si) => {
              const v = d.values[s.key] ?? 0;
              const y0 = y(acc);
              acc += v;
              const y1 = y(acc);
              const h = Math.max(0, y0 - y1 - (si > 0 ? 2 : 0)); // 2px surface gap between stacked segments
              const isTop = si === series.length - 1 || series.slice(si + 1).every((n) => !(d.values[n.key] > 0));
              const r = isTop ? Math.min(4, h, bar / 2) : 0;
              const x = cx - bar / 2;
              const top = y1;
              // rounded data-end, square at the baseline
              const path = `M${x},${top + h} V${top + r} Q${x},${top} ${x + r},${top} H${x + bar - r} Q${x + bar},${top} ${x + bar},${top + r} V${top + h} Z`;
              return <path key={s.key} d={path} fill={s.color} opacity={hover === null || hover === i ? 1 : 0.45} />;
            });
            const showTick = i % tickEvery === 0 || i === data.length - 1 || d.x === highlightX;
            return (
              <g key={String(d.x)}>
                {d.x === highlightX && <rect x={cx - band / 2} y={PAD.t} width={band} height={innerH} fill="#e1eada" opacity="0.6" />}
                {d.x === highlightX && highlightLabel && <text x={cx} y={PAD.t - 10} textAnchor="middle" className="axis">{highlightLabel}</text>}
                {segs}
                {labelXs.includes(d.x) && (
                  <text x={cx} y={y(totals[i]) - 8} textAnchor="middle" className="cap">{format(totals[i])}</text>
                )}
                {showTick && (
                  <text x={cx} y={H - PAD.b + 22} textAnchor="middle" className="axis">{xLabel(d.x)}</text>
                )}
                <rect
                  x={cx - band / 2}
                  y={PAD.t}
                  width={band}
                  height={innerH}
                  fill="transparent"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  tabIndex={-1}
                />
              </g>
            );
          })}
          <line x1={PAD.l} x2={W - PAD.r} y1={y(0)} y2={y(0)} stroke="#b9b2a8" strokeWidth="1" />
        </svg>
        {hover !== null && (
          <div
            className="tip"
            style={(() => {
              const lp = ((PAD.l + band * hover + band / 2) / W) * 100;
              const tx = lp > 72 ? "-100%" : lp < 28 ? "0%" : "-50%";
              return { left: `${lp}%`, top: `${(y(totals[hover]) / H) * 100}%`, transform: `translate(${tx}, calc(-100% - 12px))` };
            })()}
          >
            <b>{xLabel(data[hover].x)}{data[hover].note ? ` · ${data[hover].note}` : ""}</b>
            {series.map((s) => (
              <span key={s.key}><i style={{ background: s.color }} />{s.label}<em>{format(data[hover].values[s.key] ?? 0)}</em></span>
            ))}
            {series.length > 1 && <span className="tot">Total<em>{format(totals[hover])}</em></span>}
          </div>
        )}
      </div>
      <details className="table-view">
        <summary>See the numbers</summary>
        <div className="tv-scroll">
          <table>
            <thead>
              <tr><th scope="col">{"Age"}</th>{series.map((s) => <th scope="col" key={s.key}>{s.label}</th>)}{series.length > 1 && <th scope="col">Total</th>}</tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={String(d.x)}><th scope="row">{xLabel(d.x)}</th>{series.map((s) => <td key={s.key}>{format(d.values[s.key] ?? 0)}</td>)}{series.length > 1 && <td>{format(totals[i])}</td>}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  );
}
