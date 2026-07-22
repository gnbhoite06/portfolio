import {
  ArrowUpRight,
  Network,
  Compass,
  ListTree,
  Search,
  Frame,
  TrendingUp,
  GitFork,
  PenTool,
  Brain,
  Bot,
  Layers,
} from "lucide-react";
import { useReveal } from "../hooks/useReveal";

const skills = [
  { label: "Systems thinking", Icon: Network },
  { label: "Vision & strategy", Icon: Compass },
  { label: "KPI trees", Icon: ListTree },
  { label: "Product discovery", Icon: Search },
  { label: "Problem framing", Icon: Frame },
  { label: "Prioritisation & growth", Icon: TrendingUp },
  { label: "Git & GitHub", Icon: GitFork },
  { label: "Prototyping", Icon: PenTool },
  { label: "LLMs", Icon: Brain },
  { label: "AI agents", Icon: Bot },
  { label: "RAG", Icon: Layers },
];

export default function PmHighlight() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[5.5rem]">
      <div ref={ref} className="reveal rounded-2xl border border-line bg-paper-raised p-9 md:p-12">
        <div className="max-w-[60ch]">
          <h2 className="mb-3 text-2xl font-semibold text-ink md:text-3xl">Have a look at my PM portfolio</h2>
          <p className="text-base leading-[1.6] text-ink-soft">
            I'm a Product Fellow at NextLeap, on an AI-native curriculum that pairs core product strategy with real
            technical depth, from prototyping and Git to LLMs, AI agents, and RAG.
          </p>
        </div>

        <ul className="mt-9 flex flex-wrap gap-2">
          {skills.map(({ label, Icon }) => (
            <li
              key={label}
              className="group flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-[0.85rem] text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
            >
              <Icon className="h-4 w-4 text-accent transition-transform duration-200 group-hover:scale-110" strokeWidth={1.75} />
              {label}
            </li>
          ))}
        </ul>

        <a
          href="https://nextleap.app/portfolio/gandharv-bhoite"
          target="_blank"
          rel="noopener"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-[0.85rem] text-[0.95rem] font-medium text-paper transition-transform duration-150 hover:bg-accent-strong active:scale-[0.98]"
        >
          View my PM portfolio
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
}
