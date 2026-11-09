// Sample educational articles. All content must be reviewed by LPL before publishing.

export type Block = { h?: string; p?: string; list?: string[]; quote?: string };
export type Article = { slug: string; title: string; dek: string; cat: string; read: string; img: string; date: string; body: Block[]; tool?: { href: string; label: string } };

export const articles: Article[] = [
  {
    slug: "when-to-claim-social-security",
    title: "When should you claim Social Security?",
    dek: "Claiming at 62, at full retirement age, or at 70 can change your benefit for the rest of your life. Here's how to think about the decision.",
    cat: "Retirement",
    read: "6 min read",
    img: "/img/insights-porch.jpg",
    date: "November 2026",
    tool: { href: "/tools/social-security", label: "Compare your claiming ages" },
    body: [
      { p: "Few retirement decisions are as permanent as when you start Social Security. You can claim as early as 62 or wait as long as 70, and the age you choose sets the size of your monthly check for life, before cost-of-living adjustments." },
      { h: "The basic trade-off" },
      { p: "Your benefit is based on your full retirement age, which is 67 for anyone born in 1960 or later. Claim before then and your check is permanently reduced. Wait past it and your check grows by 8% for each year you delay, up to age 70." },
      { list: [
        "Claiming at 62 can mean a check about 30% smaller than at full retirement age.",
        "Waiting until 70 can mean a check about 24% larger than at full retirement age.",
        "The difference between claiming at 62 and at 70 can be 75% or more per month.",
      ] },
      { h: "Think in terms of a break-even age" },
      { p: "Claiming early gives you more checks; waiting gives you bigger ones. The break-even age is the point where the larger, later checks catch up. For many people it lands around age 80. If you expect to live well past that, waiting usually pays more over a lifetime. If your health or family history suggests otherwise, claiming earlier may make sense." },
      { h: "It's rarely just about you" },
      { p: "For married couples, the decision is a joint one. A spouse may be eligible for a benefit based on your record, and when one spouse dies, the survivor generally keeps the larger of the two benefits. That means the higher earner's claiming age can affect the surviving spouse's income for decades." },
      { quote: "The right claiming age depends on your health, your other income, your spouse, and how long your savings need to last." },
      { h: "Questions to ask before you decide" },
      { list: [
        "Do you need the income now, or can savings bridge the gap?",
        "Will you keep working before full retirement age? Earnings above a limit can temporarily reduce benefits.",
        "How does your claiming age affect your spouse's survivor benefit?",
        "How will Social Security interact with pensions, withdrawals, and taxes?",
      ] },
      { p: "There's no single right answer, but there is a right answer for your situation. Start by finding your estimated benefit at ssa.gov/myaccount, then look at the decision alongside the rest of your retirement income plan." },
    ],
  },
  {
    slug: "401k-when-you-change-jobs",
    title: "What to do with your 401(k) when you change jobs",
    dek: "You generally have four options for an old employer plan. Here's how they compare, and the mistakes to avoid.",
    cat: "Careers",
    read: "5 min read",
    img: "/img/insights-cafe.jpg",
    date: "October 2026",
    body: [
      { p: "Changing jobs often means leaving a retirement account behind. Many people forget about old plans for years. Others cash them out without realizing how much it costs. Here are the choices most people have, and what to weigh with each." },
      { h: "1. Leave it where it is" },
      { p: "If your balance is large enough, many plans let you keep your money in the old 401(k). It's the simplest option, but you'll have one more account to track, and you can no longer contribute to it." },
      { h: "2. Roll it into your new employer's plan" },
      { p: "If your new plan accepts rollovers, consolidating can make your savings easier to manage. Compare the investment choices and fees of both plans first." },
      { h: "3. Roll it into an IRA" },
      { p: "An IRA rollover can give you a wider range of investment options and a single place for old plans. Fees, available investments, and protections can differ from a 401(k), so it's worth comparing before you move." },
      { h: "4. Cash it out" },
      { p: "This is usually the most expensive choice. Withdrawals are generally taxed as ordinary income, and if you're under 59½ you may also owe a 10% early-withdrawal penalty, which can take a large bite out of your savings." },
      { h: "Mistakes to avoid" },
      { list: [
        "Taking a check instead of a direct rollover. Plans generally withhold 20% for taxes on a distribution paid to you, and you have 60 days to deposit the full amount to avoid taxes.",
        "Forgetting about company stock, loans, or Roth balances, which can have special rules.",
        "Losing track of old accounts. Keep your contact information current with every plan.",
      ] },
      { p: "The best choice depends on your fees, investment options, age, and the rest of your plan. A quick review before you move anything can help you avoid taxes and penalties you didn't need to pay." },
    ],
  },
  {
    slug: "year-end-financial-checklist",
    title: "Year-end checklist: small moves that add up",
    dek: "A few minutes in November and December can lower your taxes, keep your plan on track, and make the new year easier.",
    cat: "Taxes",
    read: "4 min read",
    img: "/img/insights-calc.jpg",
    date: "November 2026",
    body: [
      { p: "The end of the year is a natural checkpoint. Some planning opportunities disappear on December 31, so it's worth running through this list while there's still time." },
      { h: "Retirement savings" },
      { list: [
        "Check whether you can increase your 401(k) or 403(b) contributions before your final paychecks. Workplace plan contributions generally must be made by December 31.",
        "If you're 50 or older, see whether you're eligible for catch-up contributions.",
        "IRA contributions for this year can generally be made until the tax-filing deadline next spring.",
      ] },
      { h: "Required minimum distributions" },
      { p: "If you've reached the age for required minimum distributions, make sure you've taken this year's amount from your IRAs and old workplace plans. Missing an RMD can mean a significant penalty." },
      { h: "Giving" },
      { list: [
        "If you're 70½ or older, a qualified charitable distribution from an IRA can send money directly to charity and may count toward your RMD.",
        "Donating appreciated investments instead of cash may offer tax advantages.",
        "A donor-advised fund lets you give now and decide which charities to support over time.",
      ] },
      { h: "Investments" },
      { p: "Review your portfolio for losses that could offset gains, and rebalance if your mix has drifted from your plan. Be mindful of wash-sale rules if you sell and repurchase similar investments." },
      { h: "Housekeeping" },
      { list: [
        "Use any remaining flexible spending account dollars.",
        "Confirm beneficiaries on retirement accounts and insurance policies.",
        "Check your tax withholding so April doesn't bring surprises.",
      ] },
      { p: "Your tax professional can help you decide which of these make sense for you. LPL Financial and its representatives do not provide tax advice." },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
