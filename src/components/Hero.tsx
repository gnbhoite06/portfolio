export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid max-w-[1200px] gap-12 px-6 pb-16 pt-14 md:grid-cols-[1fr_260px] md:items-end md:pb-24 md:pt-28"
    >
      <div>
        <p className="mb-8 font-mono text-[0.78rem] text-ink-soft">
          Currently on the investments team at <span className="text-ink">Boundless Ventures</span>
        </p>

        <h1 className="max-w-[14ch] font-serif text-[2.9rem] font-normal leading-[1.02] tracking-[-0.02em] text-ink [text-wrap:balance] sm:text-6xl md:text-[5.5rem]">
          Venture capital and <em className="text-accent">startups</em>.
        </h1>

        <p className="mt-8 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
          I work across venture capital and early-stage startups, while studying at BITS Pilani, Goa.
        </p>

        <a
          href="#contact"
          className="group mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          Get in touch
          <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
            &rarr;
          </span>
        </a>
      </div>

      <figure className="hidden md:block">
        <img
          src="/assets/headshot.png"
          alt="Gandharv Bhoite"
          width={400}
          height={400}
          className="aspect-square w-full rounded-[2px] object-cover grayscale contrast-[1.05] transition-[filter] duration-700 hover:grayscale-0"
        />
        <figcaption className="mt-3 font-mono text-[0.72rem] text-ink-soft">Gandharv Bhoite, Goa</figcaption>
      </figure>
    </section>
  );
}
