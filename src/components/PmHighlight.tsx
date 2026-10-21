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
    <Section title="Product">
      <div ref={ref} className="reveal">
        <p className="max-w-[58ch] font-serif text-[1.5rem] leading-[1.35] text-ink [text-wrap:pretty]">
          I&rsquo;m a Product Fellow at NextLeap, on an AI-native curriculum that pairs core product strategy with real
          technical depth.
        </p>

        <ul className="mt-8 flex max-w-[62ch] flex-wrap gap-x-2 gap-y-1 font-mono text-[0.8rem] text-ink-soft">
          {skills.map((label, i) => (
            <li key={label}>
              {label}
              {i < skills.length - 1 && <span className="ml-2 text-line" aria-hidden="true">/</span>}
            </li>
          ))}
        </ul>

        <a
          href="https://nextleap.app/portfolio/gandharv-bhoite"
          target="_blank"
          rel="noopener"
          className="group mt-9 inline-flex items-center gap-2 border-b border-ink pb-1 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          View my PM portfolio
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            &#8599;
          </span>
        </a>
      </div>
    </Section>
  );
}
