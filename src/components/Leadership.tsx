import { useReveal } from "../hooks/useReveal";

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

function Card({ role }: { role: (typeof roles)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal flex flex-col gap-2 rounded-2xl border border-transparent bg-paper-raised p-9 transition-all duration-300 hover:-translate-y-1 hover:border-line hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
    >
      <span className="font-mono text-[0.8rem] text-accent">{role.dates}</span>
      <h3 className="mt-1 text-xl font-semibold text-ink">{role.title}</h3>
      <p className="mb-[0.6rem] text-sm text-ink-soft">{role.org}</p>
      <p className="text-[0.98rem] leading-[1.6] text-ink-soft">{role.body}</p>
    </div>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-[1200px] px-6 py-[5.5rem]">
      <h2 className="mb-10 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">Leadership</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {roles.map((role) => (
          <Card key={role.title} role={role} />
        ))}
      </div>
    </section>
  );
}
