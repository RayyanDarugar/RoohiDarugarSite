import type { Metadata } from "next";
import ToolShell from "@/components/tools/ToolShell";
import SocialSecurity from "@/components/tools/SocialSecurity";

export const metadata: Metadata = {
  title: "Social Security Timing Calculator",
  description: "Compare estimated Social Security benefits at 62, full retirement age, and 70, and find your break-even age.",
};

export default function Page() {
  return (
    <ToolShell
      eyebrow="Calculator"
      title="When should you claim Social Security?"
      body="Claiming early means smaller checks for longer. Waiting means bigger checks for fewer years. See how it plays out for you."
      disclaimer="Estimates use the Social Security Administration's standard reduction and delayed-retirement-credit formulas for your own retirement benefit. They do not include cost-of-living adjustments, taxes, the earnings test, or spousal and survivor benefits, and are shown in today's dollars. For your official estimate, visit ssa.gov. This tool is for educational purposes only and is not individualized advice."
    >
      <SocialSecurity />
    </ToolShell>
  );
}
