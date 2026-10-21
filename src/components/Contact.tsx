import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

const links = [
  { href: "mailto:gandharv@boundlessvc.com", kind: "Work", label: "gandharv@boundlessvc.com" },
  { href: "mailto:gandharvbhoite@gmail.com", kind: "Personal", label: "gandharvbhoite@gmail.com" },
  { href: "https://www.linkedin.com/in/gandharv-bhoite", kind: "LinkedIn", label: "linkedin.com/in/gandharv-bhoite" },
  { href: "https://x.com/gandharvb_", kind: "X", label: "x.com/gandharvb_" },
  { href: "https://substack.com/@gandharvbhoite", kind: "Writing", label: "substack.com/@gandharvbhoite" },
];

function ContactRow({ href, kind, label, index }: (typeof links)[number] & { index: number }) {
  const ref = useReveal<HTMLLIElement>();
  const external = href.startsWith("http");
  return (
    <li ref={ref} style={{ transitionDelay: `${index * 60}ms` }} className="reveal border-b border-line">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener" : undefined}
        className="group grid grid-cols-[100px_1fr_auto] items-baseline gap-4 py-4 text-ink transition-colors duration-200 hover:text-accent"
      >
        <span className="font-mono text-[0.75rem] text-ink-soft">{kind}</span>
        <span className="truncate text-[1.05rem]">{label}</span>
        <span
          aria-hidden="true"
          className="text-ink-soft transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        >
          &#8599;
        </span>
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="mb-10 max-w-[30ch] font-serif text-[1.75rem] leading-[1.25] text-ink [text-wrap:balance]">
        Building something, or know someone who is? I&rsquo;d love to hear about it.
      </p>

      <ul className="flex flex-col border-t border-line">
        {links.map((link, i) => (
          <ContactRow key={link.href} {...link} index={i} />
        ))}
      </ul>
    </Section>
  );
}
