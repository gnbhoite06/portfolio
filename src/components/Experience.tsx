import { useReveal } from "../hooks/useReveal";

const roles = [
  {
    dates: "Jul 2026 – Present",
    org: "Redstring",
    orgDesc: "A hiring platform used by 50+ companies, cutting average hiring turnaround from 23 days to under 3, backed by IIM Lucknow and TiE Hyderabad.",
    title: "Growth & Strategy",
    body: "Drive growth strategy across a platform used by 50+ companies, including Swipe (YC), Scale Jobs, Keystone Robotix, Neuralis, Neogreens, and 18startup, supporting hiring from entry-level to CXO-level roles alongside the founding team.",
  },
  {
    dates: "Jun 2026 – Present",
    org: "Campus Fund",
    orgDesc: "SEBI-registered AIF backing student founders in India. $100M latest fund, cheques up to $1M, 35+ portfolio companies.",
    title: "Investment Associate",
    body: "Sourced and evaluated 50+ early-stage startups for India's largest student-run VC fund, writing cheques of up to $1M. Ran 30+ founder due diligence meetings and drafted investment memos that inform partner decisions.",
  },
  {
    dates: "Jul 2026 – Present",
    org: "Hack47",
    orgDesc: "A 30-day, distraction-free hacker residency in Delhi, housing 16 builders at a time to focus purely on shipping.",
    title: "Prophet",
    body: "Lead strategy and growth for a residency housing 16 builders at a time, refining how we find, assess, and select the right people to work with, and using my network to back the ones worth betting on.",
  },
  {
    dates: "Feb – Jul 2026",
    org: "Mohur",
    orgDesc: "A startup intelligence platform connecting founders to funding and ecosystem partners.",
    title: "Growth",
    body: "Led 3 strategic partnerships with VCs, accelerators, and ecosystem partners, and grew an engaged community of 1,000+ founders, driving 20,000+ impressions and 50% follower growth.",
  },
  {
    dates: "Feb 2026 – Present",
    org: "180 Degrees Consulting, BITS Goa",
    orgDesc: "The world's largest student-run consultancy, advising social enterprises and nonprofits pro bono.",
    title: "Consultant",
    body: "Advise clients, including social enterprises and nonprofits, on strategy and growth.",
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
    <div ref={ref} className="reveal grid grid-cols-1 gap-3 border-t border-line py-8 last:border-b md:grid-cols-[220px_1fr] md:gap-8">
      <div className="flex flex-col gap-[0.35rem]">
        <span className="font-mono text-[0.82rem] text-ink-soft">{role.dates}</span>
        <span className="text-[0.98rem] font-medium text-ink">{role.org}</span>
        <span className="text-[0.82rem] leading-[1.5] text-ink-soft/80">{role.orgDesc}</span>
      </div>
      <div>
        <h3 className="mb-[0.6rem] text-xl font-semibold text-ink">{role.title}</h3>
        <p className="max-w-[62ch] text-base leading-[1.6] text-ink-soft">{role.body}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1200px] px-6 py-[5.5rem]">
      <h2 className="mb-10 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">Experience</h2>
      <div className="flex flex-col">
        {roles.map((role) => (
          <Row key={`${role.org}-${role.title}`} role={role} />
        ))}
      </div>
    </section>
  );
}
