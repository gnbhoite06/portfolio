import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

const roles = [
  {
    dates: "Sep 2026 – Present",
    org: "Boundless Ventures",
    orgDesc: "An AI and frontier tech fund founded by Natasha Malpani in 2025, backing AI-native founders across science, systems, and identity. Portfolio includes Piersight, Armatrix, Superhealth, KNOT, Alter, Aspera Industries, Glide, and Shram.",
    title: "Investments Team Intern",
    body: "Source and evaluate early-stage companies that fit the fund's thesis across science, systems, and identity, and work on internal thesis development and market mapping to spot emerging categories early.",
  },
  {
    dates: "Feb 2026 – Present",
    org: "180 Degrees Consulting, BITS Goa",
    orgDesc: "The world's largest student-run consultancy, advising social enterprises and nonprofits pro bono.",
    title: "Consultant",
    body: "Advise clients, including social enterprises and nonprofits, on strategy and growth.",
  },
  {
    dates: "Jul – Oct 2026",
    org: "Hack47",
    orgDesc: "A 30-day, distraction-free hacker residency in Delhi, housing 16 builders at a time to focus purely on shipping.",
    title: "Prophet",
    body: "Led strategy and growth for a residency housing 16 builders at a time, evaluating 300+ applications, refining how we find, assess, and select the right people to work with, and using my network to back the ones worth betting on.",
  },
  {
    dates: "Jun – Sep 2026",
    org: "Campus Fund",
    orgDesc: "SEBI-registered AIF backing student founders in India. $100M latest fund, cheques up to $1M, 35+ portfolio companies.",
    title: "Investment Associate",
    body: "Sourced and evaluated 100+ startups across HealthTech, Climate Tech, DeepTech, AI, SaaS, and Consumer Brands, sat on 5 Investment Committees, and supported a live deeptech hardware deal through structuring and diligence.",
  },
  {
    dates: "Jul – Aug 2026",
    org: "Redstring",
    orgDesc: "A hiring platform used by 50+ companies, cutting average hiring turnaround from 23 days to under 3, backed by IIM Lucknow and TiE Hyderabad.",
    title: "Growth & Strategy",
    body: "Drove growth strategy across a platform used by 50+ companies, including Swipe (YC), Scale Jobs, Keystone Robotix, Neuralis, Neogreens, and 18startup, supporting hiring from entry-level to CXO-level roles alongside the founding team.",
  },
  {
    dates: "Feb – Jul 2026",
    org: "Mohur",
    orgDesc: "A startup intelligence platform connecting founders to funding and ecosystem partners.",
    title: "Growth",
    body: "Led 3 strategic partnerships with VCs, accelerators, and ecosystem partners, and grew an engaged community of 1,000+ founders, driving 20,000+ impressions and 50% follower growth.",
  },
  {
    dates: "May – Dec 2025",
    org: "LvlUp Ventures",
    orgDesc: "An early-stage VC firm based in Los Angeles, investing across FinTech, HealthTech, AI, SaaS, and Web3.",
    title: "Venture Scout",
    body: "Managed a database of 4,000+ VCs and family offices, built pipeline for 3 startups raising $2.3M+, and acquired 10+ founders as clients with 100% organic acquisition and zero cold outreach.",
  },
  {
    dates: "Mar – Apr 2025",
    org: "Juggerknot Originals",
    orgDesc: "A D2C apparel brand built on data-driven marketing and conversion optimisation.",
    title: "Growth Intern",
    body: "Improved cart-to-checkout conversion by 1.5x after analysing data from 1,100+ customers, tested 4+ marketing channels that lifted total orders by 25%+, and contributed to campaigns generating 250,000+ impressions.",
  },
];

function Row({ role }: { role: (typeof roles)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal grid gap-2 border-b border-line py-8 first:pt-1 md:grid-cols-[150px_1fr] md:gap-8">
      <span className="pt-1 font-mono text-[0.78rem] text-ink-soft">{role.dates}</span>
      <div>
        <h3 className="text-[1.15rem] font-medium leading-snug text-ink">
          {role.title} <span className="font-serif text-[1.2rem] italic text-ink-soft">at</span>{" "}
          <span className="font-serif text-[1.25rem] italic">{role.org}</span>
        </h3>
        <p className="mt-1 max-w-[62ch] text-[0.85rem] leading-[1.55] text-ink-soft/80">{role.orgDesc}</p>
        <p className="mt-3 max-w-[62ch] text-base leading-[1.65] text-ink-soft">{role.body}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col">
        {roles.map((role) => (
          <Row key={`${role.org}-${role.title}`} role={role} />
        ))}
      </div>
    </Section>
  );
}
