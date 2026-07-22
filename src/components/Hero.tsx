import AnimatedBg from "./AnimatedBg";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto grid max-w-[1200px] items-center gap-12 overflow-hidden px-6 py-20 md:min-h-[min(100dvh,720px)] md:grid-cols-[1.3fr_0.7fr] md:py-24">
      <AnimatedBg />

      <div className="relative z-10">
        <span className="mb-7 inline-flex items-center gap-[0.55rem] rounded-full border border-line bg-paper/70 px-4 py-2 pl-3 text-sm font-medium text-ink backdrop-blur-sm">
          <span className="h-2 w-2 flex-none rounded-full bg-accent" aria-hidden="true" />
          Gandharv Bhoite
        </span>

        <h1
          className="max-w-[20ch] pb-[0.15em] text-[2.4rem] italic leading-[1.05] tracking-[-1px] text-ink sm:text-5xl md:text-6xl"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Venture capital, startups, and product.
        </h1>

        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-ink-soft">
          I work across venture capital, early-stage startups, and product, while studying at BITS Pilani, Goa.
        </p>

        <div className="mt-8">
          <a
            href="https://calendly.com/gandharv-bhoite-yourcampusfund/30min"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-accent px-6 py-[0.85rem] text-[0.95rem] font-medium text-paper transition-transform duration-150 hover:bg-accent-strong active:scale-[0.98]"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="group relative z-10 mx-auto hidden aspect-square w-full max-w-[320px] rounded-full border border-line bg-paper-raised shadow-[0_24px_60px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out hover:-translate-y-1 hover:rotate-1 md:block">
        <div className="absolute -inset-3.5 rounded-full border border-line transition-transform duration-500 ease-out group-hover:scale-105" aria-hidden="true" />
        <img
          src="/assets/headshot.png"
          alt="Gandharv Bhoite"
          width={400}
          height={400}
          className="relative z-[1] h-full w-full rounded-full object-cover grayscale contrast-[1.05] transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
    </section>
  );
}
