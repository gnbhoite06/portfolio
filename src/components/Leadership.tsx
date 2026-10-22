import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

const roles = [
  {
    dates: "Jun 2025 – Jun 2026",
    title: "General Secretary, Students' Union",
    org: "BITS Pilani, Goa Campus",
    body: "Elected to a 4-member executive team representing 4,000+ students and managing budgets exceeding INR 60M. Worked directly with the Vice Chancellor, Director, and Deans on student welfare and campus policy, overseeing 60+ clubs, 25+ sports teams, and 22 hostels.",
  },
  {
    dates: "May – Dec 2025",
    title: "Chief Coordinator, Zephyr Controls",
    org: "BITS Goa's flagship inter-hostel festival",
    body: "Led a team of 9 coordinators within a 30-member organising committee. Grew merchandise and sponsorship revenue 2.5x to INR 25L+, and directed 90 team members across 50+ events for 22 hostels.",
  },
];

function Row({ role }: { role: (typeof roles)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal">
      <article className="press h-full rounded border-neo border-ink bg-surface p-5 shadow-neo md:p-6">
        <span className="mb-4 inline-block rounded border-2 border-ink bg-pop px-2.5 py-1 font-mono text-xs font-semibold text-[#0a0a0a] md:text-[0.8rem]">
          {role.dates}
        </span>
        <h3 className="text-xl font-bold md:text-2xl">{role.title}</h3>
        <p className="mt-1 text-base font-medium text-ink-soft">{role.org}</p>
        <p className="mt-3 text-sm leading-[1.65] md:text-base">{role.body}</p>
      </article>
    </div>
  );
}

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership" emoji="🏛️" subtitle="On campus">
      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {roles.map((role) => (
          <Row key={role.title} role={role} />
        ))}
      </div>
    </Section>
  );
}
