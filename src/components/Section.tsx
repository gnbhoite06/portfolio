import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  emoji,
  subtitle,
  grid,
  children,
}: {
  id?: string;
  title: string;
  emoji?: string;
  subtitle?: string;
  grid?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative mb-16 scroll-mt-8 md:mb-24">
      {grid && <div className="grid-bg" aria-hidden="true" />}
      <div className="relative z-10">
        <div className="mb-6 text-center md:mb-8">
          <div className="mb-4 rounded border-neo border-ink bg-surface-alt p-4 shadow-neo-lg md:p-5">
            <h2 className="flex items-center justify-center gap-3 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
              {emoji && <span aria-hidden="true">{emoji}</span>}
            </h2>
          </div>
          {subtitle && <p className="text-lg text-ink-soft md:text-xl">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
