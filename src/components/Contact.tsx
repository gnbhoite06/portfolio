import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

const links = [
  { href: "mailto:gandharv@boundlessvc.com", kind: "Work", label: "gandharv@boundlessvc.com" },
  { href: "mailto:gandharvbhoite@gmail.com", kind: "Personal", label: "gandharvbhoite@gmail.com" },
  { href: "https://www.linkedin.com/in/gandharv-bhoite", kind: "LinkedIn", label: "linkedin.com/in/gandharv-bhoite" },
  { href: "https://x.com/gandharvb_", kind: "X", label: "x.com/gandharvb_" },
  { href: "https://substack.com/@gandharvbhoite", kind: "Writing", label: "substack.com/@gandharvbhoite" },
];

function ContactCard({ href, kind, label, index }: (typeof links)[number] & { index: number }) {
  const ref = useReveal<HTMLLIElement>();
  const external = href.startsWith("http");
  return (
    <li ref={ref} style={{ transitionDelay: `${index * 60}ms` }} className="reveal">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
        className="press flex h-full items-center justify-between gap-4 rounded border-neo border-ink bg-surface p-4 shadow-neo md:p-5"
      >
        <span className="min-w-0">
          <span className="block font-mono text-xs font-semibold uppercase tracking-wide text-ink-soft">{kind}</span>
          <span className="mt-1 block truncate text-base font-bold md:text-lg">{label}</span>
        </span>
        <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Get in Touch" emoji="📬" subtitle="Building something, or know someone who is? I'd love to hear about it.">
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {links.map((link, i) => (
          <ContactCard key={link.href} {...link} index={i} />
        ))}
      </ul>
    </Section>
  );
}
