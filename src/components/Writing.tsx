import { useEffect, useState } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

type Post = { date: string; title: string; blurb: string; href: string };

// Fallback shown until /api/substack responds (or if it fails, e.g. under `vite dev`).
const fallbackPosts: Post[] = [
  {
    date: "2026-09-12",
    title: "Is agentic economy the next UPI?",
    blurb: "Nobody trusted UPI either, at first. What actually built that trust is the part that founders in this space keep skipping.",
    href: "https://gandharvbhoite.substack.com/p/is-the-agentic-economy-the-next-upi",
  },
  {
    date: "2026-07-13",
    title: "10 Years, 14 Funding Rounds, One $2B Question: Is Cult.fit's IPO Really Category Defining?",
    blurb: "Cult.fit's DRHP reveals a decade-long gap between early conviction capital and late-stage liquidity, and a business model still deciding whether it's a gym chain or a retail brand.",
    href: "https://gandharvbhoite.substack.com/p/cultfits-ipo-is-less-about-fitness",
  },
  {
    date: "2026-06-16",
    title: "Sarvam Is India's Newest Unicorn. The Cap Table Tells the Real Story.",
    blurb: "A $234M raise, a $150M strategic bet from HCLTech, and the question of whether India can actually build a frontier AI model.",
    href: "https://gandharvbhoite.substack.com/p/sarvam-is-indias-newest-unicorn-the",
  },
  {
    date: "2026-06-05",
    title: "The Body as a Dataset",
    blurb: "Everyone is raising to record how humans move. Here's why.",
    href: "https://gandharvbhoite.substack.com/p/the-body-as-a-dataset",
  },
  {
    date: "2026-05-29",
    title: "Engineering the Ingredients",
    blurb: "StrainX Bioworks just emerged from stealth with $13 million.",
    href: "https://gandharvbhoite.substack.com/p/engineering-the-ingredients",
  },
  {
    date: "2026-05-28",
    title: "India Bets on the Robot Floor",
    blurb: "ANSCER Robotics closes ₹45 Cr. The bet behind it.",
    href: "https://gandharvbhoite.substack.com/p/india-bets-on-the-robot-floor",
  },
];

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

function PostCard({ post, index }: { post: Post; index: number }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} style={{ transitionDelay: `${(index % 2) * 80}ms` }} className="reveal">
      <a
        href={post.href}
        target="_blank"
        rel="noopener"
        className="press group flex h-full flex-col rounded border-neo border-ink bg-surface p-5 shadow-neo md:p-6"
      >
        <p className="mb-4 flex items-center gap-2 font-mono text-xs text-ink-soft">
          <Calendar aria-hidden="true" className="h-3.5 w-3.5" />
          {dateFormat.format(new Date(post.date))}
        </p>
        <h3 className="mb-3 text-xl font-bold leading-snug md:text-2xl">{post.title}</h3>
        <p className="mb-5 flex-grow text-sm leading-[1.6] text-ink-soft md:text-[0.95rem]">{post.blurb}</p>
        <span className="mt-auto flex items-center gap-2 text-sm font-bold md:text-base">
          Read on Substack
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
        </span>
      </a>
    </li>
  );
}

export default function Writing() {
  const [posts, setPosts] = useState<Post[]>(fallbackPosts);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/substack")
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((data: unknown) => {
        if (!cancelled && Array.isArray(data) && data.length > 0) setPosts((data as Post[]).slice(0, 6));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section id="writing" title="Writing" emoji="✍️" subtitle="India's early-stage ecosystem, deal flow, and what's next" grid>
      <ul className="grid gap-5 sm:grid-cols-2 md:gap-6">
        {posts.map((post, i) => (
          <PostCard key={post.href} post={post} index={i} />
        ))}
      </ul>
      <div className="mt-8 text-center">
        <a
          href="https://gandharvbhoite.substack.com"
          target="_blank"
          rel="noopener"
          className="press inline-flex items-center gap-2 rounded border-neo border-ink bg-pop px-5 py-3 font-bold text-[#0a0a0a] shadow-neo"
        >
          Subscribe on Substack
          <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
        </a>
      </div>
    </Section>
  );
}
