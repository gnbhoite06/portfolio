import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { prefix: "", target: 100, suffix: "+", label: "Early-stage startups sourced and evaluated at Campus Fund" },
  { prefix: "", target: 4000, suffix: "+", label: "Students represented as General Secretary" },
  { prefix: "", target: 300, suffix: "+", label: "Builder applications evaluated for Hack47's residency" },
  { prefix: "", target: 60, suffix: "+", label: "Clubs and 25+ sports teams overseen as General Secretary" },
] as const;

function formatNumber(n: number) {
  return n >= 1000 ? n.toLocaleString("en-US") : String(n);
}

function StatTile({ stat, index }: { stat: (typeof stats)[number]; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const value = useCountUp(stat.target, active);
  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: prefersReduced ? "0ms" : `${index * 90}ms` }}
      className={`flex flex-col gap-3 border-b border-line py-8 transition-all duration-500 last:border-b-0 sm:border-b-0 sm:px-6 sm:[&:nth-child(odd)]:pl-0 md:border-l md:first:border-l-0 md:first:pl-0 ${
        prefersReduced || active ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <span className="font-serif text-[3.25rem] leading-none tracking-[-0.02em] text-ink [font-variant-numeric:lining-nums_tabular-nums]">
        {stat.prefix}
        {formatNumber(value)}
        {stat.suffix}
      </span>
      <span className="max-w-[24ch] text-sm leading-[1.45] text-ink-soft">{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1200px] px-6">
      <div className="grid grid-cols-1 border-y border-line sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatTile key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
