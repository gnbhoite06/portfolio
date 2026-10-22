import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

const courses = [
  "ECON F212: Fundamentals of Finance and Accounts",
  "FIN F311: Derivatives and Risk Management",
  "FIN F313: Security Analysis and Portfolio Management",
  "FIN F414: Financial Risk Analytics and Management",
  "ECON F355: Business Analysis and Valuation",
  "FIN F315: Financial Management",
];

function Card({ children }: { children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal">
      <article className="press rounded border-neo border-ink bg-surface p-5 shadow-neo md:p-6">{children}</article>
    </div>
  );
}

function Header({ title, dates }: { title: string; dates: string }) {
  return (
    <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        <p className="text-base font-medium text-ink-soft md:text-lg">BITS Pilani, Goa Campus</p>
      </div>
      <span className="inline-block shrink-0 self-start rounded border-2 border-ink bg-pill px-2.5 py-1 font-mono text-xs font-semibold text-[#0a0a0a] md:text-[0.8rem]">
        {dates}
      </span>
    </div>
  );
}

export default function Education() {
  return (
    <Section id="education" title="Education" emoji="🎓" subtitle="Where I study">
      <div className="space-y-5 md:space-y-6">
        <Card>
          <Header title="B.E. Chemical Engineering" dates="2024 – 2028" />
          <ul className="mt-4 space-y-2 text-sm md:text-base">
            <li className="flex gap-2">
              <span aria-hidden="true">&rarr;</span>
              General Secretary, Council for Student Affairs (Students&rsquo; Union), AY 2025&ndash;26
            </li>
            <li className="flex gap-2">
              <span aria-hidden="true">&rarr;</span>
              University-wide Student Leadership Council, AY 2025&ndash;26
            </li>
          </ul>
          <p className="mt-4 rounded border-2 border-ink bg-surface-alt p-3 text-sm leading-[1.6] text-ink-soft md:text-[0.95rem]">
            Admitted to BITS Pilani in the top 2% of national candidates. Its alumni include the founders of Hotmail,
            SanDisk, Swiggy, redBus, Postman, Groww, and over a dozen unicorns.
          </p>
        </Card>

        <Card>
          <Header title="Minor in Finance" dates="2025 – 2027" />
          <p className="mb-3 mt-4 font-mono text-xs font-semibold uppercase tracking-wide text-ink-soft">Coursework</p>
          <ul className="flex flex-wrap gap-2">
            {courses.map((c) => (
              <li
                key={c}
                className="rounded border-2 border-ink bg-surface-alt px-2.5 py-1 font-mono text-xs font-semibold md:text-[0.8rem]"
              >
                {c}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
