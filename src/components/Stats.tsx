import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

const stats = [
  { prefix: "$", target: 100, suffix: "M", label: "Campus Fund's latest and largest fund", variant: "filled" },
  { prefix: "", target: 4000, suffix: "+", label: "Students represented as General Secretary", variant: "default" },
  { prefix: "", target: 50, suffix: "+", label: "Early-stage startups sourced and evaluated at Campus Fund", variant: "default" },
  { prefix: "", target: 60, suffix: "+", label: "Clubs and 25+ sports teams overseen as General Secretary", variant: "outline" },
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
      className={`group flex flex-col gap-[0.6rem] p-10 transition-all duration-500 ${
        prefersReduced || active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${stat.variant === "filled" ? "bg-accent text-paper" : stat.variant === "outline" ? "bg-accent-tint" : "bg-paper hover:bg-paper-raised"}`}
    >
      <span className={`font-mono text-[2rem] font-medium tabular-nums ${stat.variant === "filled" ? "text-paper" : "text-ink"}`}>
        {stat.prefix}
        {formatNumber(value)}
        {stat.suffix}
      </span>
      <span className={`text-sm leading-[1.4] ${stat.variant === "filled" ? "text-paper" : "text-ink-soft"}`}>{stat.label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1200px] px-6">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatTile key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}
