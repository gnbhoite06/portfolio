import { Mail, Calendar } from "lucide-react";
import type { ComponentType } from "react";
import { useReveal } from "../hooks/useReveal";

type IconComponent = ComponentType<{ className?: string; strokeWidth?: number; width?: number; height?: number }>;

function XIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="m4 4 16 16M20 4 4 20" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7.5 10.5v6M7.5 7.5v.01M12 16.5v-4a2 2 0 0 1 4 0v4M12 12.5v4" />
    </svg>
  );
}

function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4 5h16v3H4V5Zm0 5h16v2H4v-2Zm0 5 8 5 8-5" />
    </svg>
  );
}

const links: { href: string; label: string; Icon: IconComponent }[] = [
  { href: "mailto:gandharvbhoite@gmail.com", label: "gandharvbhoite@gmail.com", Icon: Mail },
  { href: "https://www.linkedin.com/in/gandharv-bhoite", label: "linkedin.com/in/gandharv-bhoite", Icon: LinkedinIcon },
  { href: "https://x.com/gandharvb_", label: "x.com/gandharvb_", Icon: XIcon },
  { href: "https://substack.com/@gandharvbhoite", label: "Writing on Substack", Icon: SubstackIcon },
  { href: "https://calendly.com/gandharv-bhoite-yourcampusfund/30min", label: "Book time on Calendly", Icon: Calendar },
];

function ContactRow({
  href,
  label,
  Icon,
  index,
  isLast,
}: {
  href: string;
  label: string;
  Icon: IconComponent;
  index: number;
  isLast: boolean;
}) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`reveal border-t border-line ${isLast ? "border-b" : ""}`}
    >
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener" : undefined}
        className="group flex items-center gap-4 py-[1.15rem] text-[1.05rem] text-ink transition-colors hover:text-accent"
      >
        <Icon className="flex-none text-ink-soft transition-colors group-hover:text-accent" strokeWidth={1.5} width={20} height={20} />
        <span className="transition-transform group-hover:translate-x-1">{label}</span>
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-6 py-[5.5rem]">
      <h2 className="mb-10 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">Contact</h2>
      <p className="mb-10 max-w-[42ch] text-xl text-ink">
        Always happy to talk about startups, product, or the next interesting problem. Reach out.
      </p>

      <ul className="flex flex-col">
        {links.map((link, i) => (
          <ContactRow key={link.href} {...link} index={i} isLast={i === links.length - 1} />
        ))}
      </ul>
    </section>
  );
}
