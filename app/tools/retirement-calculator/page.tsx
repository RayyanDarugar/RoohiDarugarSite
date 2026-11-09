import type { Metadata } from "next";
import ToolShell from "@/components/tools/ToolShell";
import RetirementCalculator from "@/components/tools/RetirementCalculator";

export const metadata: Metadata = {
  title: "Retirement Savings Calculator",
  description: "See how your retirement savings could grow, and what a small monthly change could add by the time you retire.",
};

export default function Page() {
  return (
    <ToolShell
      eyebrow="Calculator"
      title="Retirement savings calculator"
      body="Move the sliders to see how your savings could grow by retirement, and how much a small change could add."
      disclaimer="This hypothetical illustration is for educational purposes only. It assumes a constant rate of return with monthly contributions and compounding, does not reflect any specific investment, fees, or taxes, and is not a guarantee of future results. Investing involves risk, including possible loss of principal. The 4% withdrawal figure is a simple illustration, not a recommendation."
    >
      <RetirementCalculator />
    </ToolShell>
  );
}
