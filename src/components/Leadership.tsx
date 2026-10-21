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
    <div ref={ref} className="reveal grid gap-2 border-b border-line py-8 first:pt-1 md:grid-cols-[150px_1fr] md:gap-8">
      <span className="pt-1 font-mono text-[0.78rem] text-ink-soft">{role.dates}</span>
      <div>
        <h3 className="text-[1.15rem] font-medium leading-snug text-ink">{role.title}</h3>
        <p className="mt-1 font-serif text-[1.05rem] italic text-ink-soft">{role.org}</p>
        <p className="mt-3 max-w-[62ch] text-base leading-[1.65] text-ink-soft">{role.body}</p>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership">
      <div className="flex flex-col">
        {roles.map((role) => (
          <Row key={role.title} role={role} />
        ))}
      </div>
    </Section>
  );
}
