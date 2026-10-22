import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

export default function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <Section id="about" title="About" emoji="👋" subtitle="Who I am">
      <div ref={ref} className="reveal rounded border-neo border-ink bg-surface p-5 shadow-neo md:p-8">
        <p className="text-base leading-[1.75] md:text-lg [text-wrap:pretty]">
          I&rsquo;m on the investments team at <strong>Boundless Ventures</strong>, an AI and frontier tech fund backing
          AI-native founders across science, systems, and identity, where I source and evaluate early-stage companies and
          work on internal thesis development and market mapping. Before this, I was an Investment Associate at{" "}
          <strong>Campus Fund</strong>, India&rsquo;s largest student-run VC fund, where I sourced and evaluated 100+
          startups and worked on a deeptech hardware deal through structuring and diligence. I also led strategy and
          growth at Hack47, worked on growth and strategy at Redstring, a hiring platform, and on growth at Mohur, a
          startup intelligence platform.
        </p>
        <p className="mt-4 text-base leading-[1.75] md:text-lg [text-wrap:pretty]">
          I&rsquo;m currently studying Chemical Engineering at <strong>BITS Pilani, Goa</strong>, where I was elected
          General Secretary of the Students&rsquo; Union, representing over 4,000 students. My research explores
          tokenising carbon credits to build more accountable systems for the carbon economy. My interests sit at the
          intersection of venture capital, early-stage startups, growth, product management, and strategic partnerships.
        </p>
      </div>
    </Section>
  );
}
