import type { ReactNode } from "react";

export default function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-[1200px] scroll-mt-20 px-6 py-14 md:py-20">
      <div className="grid gap-8 border-t border-ink pt-6 md:grid-cols-[220px_1fr] md:gap-10">
        <h2 className="font-serif text-[1.6rem] italic leading-tight text-ink">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
