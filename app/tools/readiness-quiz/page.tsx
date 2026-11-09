import type { Metadata } from "next";
import ToolShell from "@/components/tools/ToolShell";
import ReadinessQuiz from "@/components/tools/ReadinessQuiz";

export const metadata: Metadata = {
  title: "Are You Ready for a Financial Planner?",
  description: "Ten quick questions to see where a financial plan could help you most.",
};

export default function Page() {
  return (
    <ToolShell
      eyebrow="Quiz · 2 minutes"
      title="Are you ready for a financial planner?"
      body="Ten quick questions about retirement, protection, and taxes. You'll get a score and the areas where a plan could help most."
      disclaimer="This quiz is for educational purposes only. It is not a financial plan or individualized advice, and your answers are not stored or sent anywhere."
    >
      <ReadinessQuiz />
    </ToolShell>
  );
}
