import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal<HTMLParagraphElement>();
  return (
    <section id="about" className="mx-auto max-w-[1200px] px-6 py-[5.5rem]">
      <h2 className="mb-10 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">About</h2>
      <p ref={ref} className="reveal max-w-[72ch] text-lg leading-[1.7] text-ink-soft">
        I&rsquo;m an Investment Associate at Campus Fund, India&rsquo;s largest student-run VC fund, where I work on deal
        sourcing, founder evaluation, and investment analysis. Alongside that, I lead strategy and growth at Hack47, and
        drive growth and strategy at Redstring, a hiring platform. I previously worked on growth and partnerships at
        Mohur, a startup intelligence platform. I&rsquo;m currently studying Chemical Engineering at BITS Pilani, Goa,
        where I was elected General Secretary of the Students&rsquo; Union,
        representing over 4,000 students. My research explores tokenising carbon credits to build more accountable
        systems for the carbon economy. My interests sit at the intersection of venture capital, early-stage startups,
        growth, product management, and strategic partnerships.
      </p>
    </section>
  );
}
