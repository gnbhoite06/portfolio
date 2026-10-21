import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

export default function About() {
  const ref = useReveal<HTMLParagraphElement>();
  return (
    <Section id="about" title="About">
      <p ref={ref} className="reveal max-w-[64ch] text-[1.12rem] leading-[1.75] text-ink-soft [text-wrap:pretty]">
        I&rsquo;m on the investments team at Boundless Ventures, an AI and frontier tech fund backing AI-native founders
        across science, systems, and identity, where I source and evaluate early-stage companies and work on internal
        thesis development and market mapping. Before this, I was an Investment Associate at Campus Fund, India&rsquo;s
        largest student-run VC fund, where I sourced and evaluated 100+ startups and worked on a deeptech hardware deal
        through structuring and diligence. I also led strategy and growth at Hack47, worked on growth and strategy at
        Redstring, a hiring platform, and on growth at Mohur, a startup intelligence platform. I&rsquo;m currently
        studying Chemical Engineering at BITS Pilani, Goa, where I was elected General Secretary of the Students&rsquo;
        Union, representing over 4,000 students. My research explores tokenising carbon credits to build more accountable
        systems for the carbon economy. My interests sit at the intersection of venture capital, early-stage startups,
        growth, product management, and strategic partnerships.
      </p>
    </Section>
  );
}
