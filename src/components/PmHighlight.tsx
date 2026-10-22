import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

const skills = [
  "Systems thinking",
  "Vision & strategy",
  "KPI trees",
  "Product discovery",
  "Problem framing",
  "Prioritisation & growth",
  "Git & GitHub",
  "Prototyping",
  "LLMs",
  "AI agents",
  "RAG",
];

export default function PmHighlight() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Section id="product" title="Product" emoji="🛠️" subtitle="How I think about building">
      <div ref={ref} className="reveal rounded border-neo border-ink bg-surface p-5 shadow-neo md:p-8">
        <p className="max-w-[58ch] text-xl font-medium leading-[1.4] md:text-2xl [text-wrap:pretty]">
          I&rsquo;m a Product Fellow at NextLeap, on an AI-native curriculum that pairs core product strategy with real
          technical depth.
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {skills.map((label) => (
            <li
              key={label}
              className="rounded border-2 border-ink bg-surface-alt px-2.5 py-1 font-mono text-xs font-semibold md:text-[0.8rem]"
            >
              {label}
            </li>
          ))}
        </ul>

        <a
          href="https://nextleap.app/portfolio/gandharv-bhoite"
          target="_blank"
          rel="noopener"
          className="press mt-8 inline-flex items-center gap-2 rounded border-neo border-ink bg-pop px-5 py-3 font-bold text-[#0a0a0a] shadow-neo"
        >
          View my PM portfolio
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
    </Section>
  );
}
