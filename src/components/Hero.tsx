import { Mail } from "lucide-react";
import { LinkedInIcon, SubstackIcon, XIcon } from "./Icons";

const socials = [
  { href: "https://www.linkedin.com/in/gandharv-bhoite", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://x.com/gandharvb_", label: "X", Icon: XIcon },
  { href: "https://substack.com/@gandharvbhoite", label: "Substack", Icon: SubstackIcon },
];

export default function Hero() {
  return (
    <section id="top" className="relative mb-16 md:mb-24">
      <div className="grid-bg" aria-hidden="true" />
      <div className="relative z-10 grid gap-10 py-4 md:grid-cols-[1fr_240px] md:items-center md:py-8">
        <div>
          <span className="mb-6 inline-block rounded border-2 border-ink bg-pill px-3 py-1 font-mono text-xs font-semibold text-[#0a0a0a] md:text-sm">
            Investments @ Boundless Ventures
          </span>
          <h1 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Hi, I&rsquo;m Gandharv
          </h1>
          <p className="mb-8 max-w-[40ch] text-lg font-medium text-ink/90 sm:text-xl md:text-2xl">
            I work across venture capital and early-stage startups, while studying at BITS Pilani, Goa.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className="transition-opacity hover:opacity-60"
              >
                <Icon className="h-8 w-8 md:h-9 md:w-9" />
              </a>
            ))}
            <a href="mailto:gandharvbhoite@gmail.com" aria-label="Email" className="transition-opacity hover:opacity-60">
              <Mail className="h-8 w-8 md:h-9 md:w-9" strokeWidth={2} />
            </a>
          </div>
        </div>

        <figure className="mx-auto hidden w-48 sm:block md:w-full">
          <img
            src="/assets/headshot.png"
            alt="Gandharv Bhoite"
            width={400}
            height={400}
            className="aspect-square w-full rounded border-neo border-ink bg-pop object-cover shadow-neo-lg"
          />
        </figure>
      </div>
    </section>
  );
}
