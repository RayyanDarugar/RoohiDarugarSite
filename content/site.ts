// Single source for site copy and facts. Swap real details in here.
// Anything LPL-sensitive (fees, testimonials, fiduciary language) stays off until approved.

export const site = {
  name: "Roohi Darugar",
  credential: "CRPC®",
  title: "Financial Advisor",
  years: "25+",
  city: "San Diego",
  email: "roohi.darugar@lpl.com",
  phone: "", // confirm
  address: "Rancho Bernardo, San Diego, CA", // confirm full address
  crd: "3178408",
  brokerCheckUrl: "https://brokercheck.finra.org/individual/summary/3178408",
  formCrsUrl: "https://www.lpl.com/CRS",
  bookingUrl: "/contact", // replace with Calendly link
  linkedin: "https://www.linkedin.com/in/roohi-darugar-crpc/",
  // Feature flags for proof-of-concept mode
  showTestimonials: false,
  showClientLogin: false,
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/who-i-serve", label: "Who I Serve" },
  { href: "/insights", label: "Insights" },
  { href: "/tools", label: "Tools" },
  { href: "/about", label: "About" },
];

export const questions = [
  { icon: "question", text: "Am I on track to retire when I want to?" },
  { icon: "card", text: "How do I turn my savings into a paycheck?" },
  { icon: "shield", text: "What happens to my family if something happens to me?" },
  { icon: "clock", text: "I'm managing it all alone. Where do I even start?" },
] as const;

export const segments = [
  {
    slug: "women",
    eyebrow: "Women & Wealth",
    title: "Women",
    img: "/img/women.jpg",
    points: ["Planning through divorce or widowhood", "Closing the retirement gap", "Taking charge of family finances"],
    link: "Planning for women",
    body: "Women live longer, often earn less over a career, and are more likely to step away from work to care for family. I help women build plans that account for all of it, whether you're managing money on your own for the first time or making sure a lifetime of saving lasts.",
  },
  {
    slug: "professionals",
    eyebrow: "Careers & Benefits",
    title: "Professionals",
    img: "/img/pro.jpg",
    points: ["Pensions, 403(b) & deferred comp", "Social Security timing", "Turning a career into retirement"],
    link: "Planning for professionals",
    body: "Busy careers come with complicated benefits: pensions, 403(b)s, deferred compensation, stock plans, and insurance. I help professionals make sense of what they have and turn it into a clear plan for the years after work.",
  },
  {
    slug: "families",
    eyebrow: "Families & Community",
    title: "Families",
    img: "/img/family.jpg",
    points: ["First-generation wealth building", "Education & legacy planning", "Charitable giving that lasts"],
    link: "Planning for families",
    body: "For many families, building wealth is a first. I help families save for education, protect each other, plan a legacy, and give back to the causes and communities that matter to them.",
  },
  {
    slug: "business-owners",
    eyebrow: "Business Owners",
    title: "Business Owners",
    img: "/img/serve-business.jpg",
    points: ["Retirement plans for you and your team", "Separating business and personal finances", "Planning for a sale or succession"],
    link: "Planning for business owners",
    body: "Owning a business ties your personal wealth to your company. I help owners set up retirement plans, protect what they've built, and plan for the day they step away.",
  },
];

export const steps = [
  {
    title: "Understand where you are",
    body: "We start with a deep conversation about your finances, your goals, and what matters most to you.",
    img: "/img/how-coffee.jpg",
  },
  {
    title: "Plan for where you want to be",
    body: "A personalized plan that puts your goals in order, with clear next steps for each one.",
    img: "/img/how-plan.jpg",
  },
  {
    title: "Stay on track, together",
    body: "Regular check-ins with me directly to review progress and adjust as your life changes.",
    img: "/img/how-review.jpg",
  },
];

export const timeline = [
  { label: "Roots", title: "Learning to save early", body: "As a teenage bank teller in Los Angeles, Roohi gave two of every four paychecks to her family, spent one, and saved one." },
  { label: "Lending", title: "Underwriting at UCLA Credit Union", body: "She saw families miss their goals for lack of a plan, and decided to become part of the solution." },
  { label: "Advising", title: "Becomes a financial advisor in San Diego", body: "After helping launch a family software business, she begins advising clients full time." },
  { label: "2018", title: "Goes independent with LPL Financial", body: "Moves from Waddell & Reed to run her own independent practice." },
  { label: "2024", title: "Honored by the House of Pakistan", body: "Recognized as one of six volunteers at the Pakistan Independence Day celebration in Balboa Park." },
  { label: "Today", title: "Serving clients across San Diego", body: "Women, professionals, and families, with the same personal approach." },
];

export const stories = [
  { eyebrow: "Starting over", name: "Maria, 58", who: "Recently widowed", body: "Managing the family finances on her own for the first time, Maria wanted to know she'd be okay.", img: "/img/story-maria.jpg" },
  { eyebrow: "Career professionals", name: "David & Priya, 52 and 49", who: "Two careers, one plan", body: "Two retirement plans, a pension, and kids headed to college. They needed it all in one place.", img: "/img/story-couple.jpg" },
  { eyebrow: "Preparing for retirement", name: "Linda, 63", who: "School administrator", body: "With a pension and a 403(b), Linda wanted to retire at 65 without second-guessing.", img: "/img/story-linda.jpg" },
  { eyebrow: "Divorce", name: "Nasrin, 54", who: "A fresh start", body: "After 25 years of marriage, Nasrin needed to rebuild a plan for one.", img: "/img/women.jpg" },
  { eyebrow: "Business owner", name: "Sana, 47", who: "Bakery owner", body: "Sana's business had grown faster than her plan. She wanted retirement savings for herself and her team.", img: "/img/serve-business.jpg" },
  { eyebrow: "Next generation", name: "The Okafors", who: "Grandparents with a legacy goal", body: "They wanted to help pay for their grandchildren's education without putting their own retirement at risk.", img: "/img/insights-family.jpg" },
];

export const storiesDisclosure =
  "Client stories are hypothetical composites for illustrative purposes only and do not represent actual clients. Individual results will vary.";

export const orgs = [
  { name: "Developments in Literacy", role: "Board member, San Diego chapter", about: "Runs schools for underserved children, especially girls, in Pakistan." },
  { name: "House of Pakistan, Balboa Park", role: "Volunteer · honored 2024", about: "Shares Pakistani art, food, and culture with San Diego from Balboa Park." },
  { name: "Rancho Santa Fe Business & Professional Women", role: "Member", about: "A network of women business owners and professionals in North County." },
  { name: "NISWA", role: "Member", about: "" },
  { name: "SDNari", role: "Member", about: "" },
  { name: "Business Network International", role: "Member", about: "A referral network for local business owners." },
];

export const faqs = [
  { q: "What does the first consultation look like?", a: "A relaxed conversation, in person or by video, about where you are and where you want to be. It's free, and there's no obligation." },
  { q: "Do I need a certain amount to work with you?", a: "Let's talk. Every situation is different, and the first conversation is the best way to see whether we're a good fit." },
  { q: "How are you paid?", a: "Depending on the services you choose, I may be paid through advisory fees, commissions, or both. I'll walk you through exactly how it works before you decide anything." },
  { q: "What is LPL Financial?", a: "LPL Financial is the broker-dealer and registered investment advisor through which I offer securities and advisory services. It supports my independent practice with research, technology, and custody of client accounts." },
  { q: "Can you work with my CPA or attorney?", a: "Yes. Good planning often involves your tax and legal professionals, and I'm happy to coordinate with them. LPL Financial and its representatives do not provide tax or legal advice." },
];

export const services = [
  {
    slug: "financial-planning",
    eyebrow: "Plan",
    title: "Financial Planning",
    img: "/img/svc-planning.jpg",
    lede: "A clear, written plan for your whole financial life: where you are, where you want to go, and the steps in between.",
    points: ["Goals, cash flow, and net worth review", "Retirement, education, and major-purchase planning", "Insurance and risk review", "A one-page action plan you can actually follow"],
  },
  {
    slug: "wealth-management",
    eyebrow: "Invest",
    title: "Wealth Management",
    img: "/img/svc-wealth.jpg",
    lede: "Ongoing investment management built around your plan, your timeline, and how much risk you're comfortable with.",
    points: ["Portfolios built around your goals", "Regular reviews and rebalancing", "Tax-aware investing strategies", "Coordination of accounts across your household"],
  },
  {
    slug: "retirement-planning",
    eyebrow: "Retire",
    title: "Retirement Planning",
    img: "/img/svc-retirement.jpg",
    lede: "Turning a lifetime of saving into income you can count on, for as long as you need it.",
    points: ["Retirement income strategies", "Social Security and pension decisions", "401(k), 403(b), and 457 rollovers", "Required minimum distribution planning"],
  },
];

export const alsoHelp = [
  { title: "Social Security & pensions", body: "When to claim, which pension option to take, and how they fit together." },
  { title: "Insurance & long-term care", body: "Life, disability, and long-term care coverage that protects the plan." },
  { title: "Estate & legacy", body: "Beneficiaries, trusts, and gifting, coordinated with your attorney." },
  { title: "Education savings", body: "529 plans and other ways to help with college costs." },
  { title: "Charitable giving", body: "Donor-advised funds and giving strategies for the causes you love." },
  { title: "Small business", body: "Retirement plans and planning for business owners." },
];

export const compare = {
  cols: ["Financial Planning", "Wealth Management"],
  rows: [
    { label: "What it is", vals: ["A written roadmap for your goals", "Ongoing management of your investments"] },
    { label: "Best for", vals: ["Anyone facing a big decision or starting fresh", "Clients who want a partner managing their portfolio"] },
    { label: "What you get", vals: ["A personalized plan and clear next steps", "A portfolio built around your plan, reviewed regularly"] },
    { label: "How often we meet", vals: ["As your plan is built, then at key moments", "Regular reviews, at least once a year"] },
  ],
};

export const insights = [
  { cat: "Retirement", title: "When should you claim Social Security?", img: "/img/insights-porch.jpg", read: "6 min read" },
  { cat: "Women & Wealth", title: "Five money conversations to have before a big life change", img: "/img/friends.jpg", read: "5 min read" },
  { cat: "Taxes", title: "Year-end checklist: small moves that add up", img: "/img/insights-calc.jpg", read: "4 min read" },
  { cat: "Family", title: "Helping with college without risking your retirement", img: "/img/insights-family.jpg", read: "7 min read" },
  { cat: "Careers", title: "What to do with your 401(k) when you change jobs", img: "/img/insights-cafe.jpg", read: "5 min read" },
  { cat: "Planning", title: "Why a plan beats a goal", img: "/img/how-plan.jpg", read: "3 min read" },
];

export const tools = [
  { title: "Retirement savings calculator", body: "See how your savings could grow by retirement, and what a monthly change could mean.", tag: "Calculator" },
  { title: "Social Security timing", body: "Compare estimated benefits at 62, full retirement age, and 70.", tag: "Calculator" },
  { title: "Are you ready for a financial planner?", body: "Ten quick questions to see where a plan could help most.", tag: "Quiz" },
];

export const disclosures = [
  "Roohi Darugar is a registered representative with, and securities and advisory services offered through LPL Financial, a Registered Investment Advisor. Member FINRA/SIPC.",
  "The financial professionals associated with LPL Financial may discuss and/or transact business only with residents of the states in which they are properly registered or licensed. No offers may be made or accepted from any resident of any other state.",
  "LPL Financial and its representatives do not provide tax or legal advice. The information on this site is for general purposes only and is not intended as individualized advice.",
];
