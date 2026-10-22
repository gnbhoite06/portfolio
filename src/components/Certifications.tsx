import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import Section from "./Section";

type Cert = {
  title: string;
  issuer: string;
  href: string;
};

const certs: Cert[] = [
  {
    title: "AI for Product Management",
    issuer: "Pendo",
    href: "https://www.credly.com/badges/6d37b489-4f6f-48e7-8498-250856788f69/linked_in_profile",
  },
  {
    title: "Product-led Certification",
    issuer: "Pendo",
    href: "https://www.credly.com/badges/6c6f9777-350f-468c-8689-232be86bff04/linked_in_profile",
  },
  {
    title: "PM Basics Certification",
    issuer: "Pendo",
    href: "https://www.credly.com/badges/a82083ae-c515-4f3f-be45-2427e002d329/linked_in_profile",
  },
  {
    title: "Product Management Job Simulation",
    issuer: "Electronic Arts, via Forage",
    href: "https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/5genWYpfo5b57G7yv_j43dGscQHtJJ57N54_ZkMuzfdhTkgvhFFzo_1767165574686_completion_certificate.pdf",
  },
  {
    title: "Investment Banking Job Simulation",
    issuer: "JPMorgan Chase, via Forage",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_ZkMuzfdhTkgvhFFzo_1730365903126_completion_certificate.pdf",
  },
  {
    title: "Project Manager Job Simulation",
    issuer: "Siemens Mobility, via Forage",
    href: "https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/zSefEeEKvojiQqiaH_YtWaumzWHmKiqP63y_ZkMuzfdhTkgvhFFzo_1767165011908_completion_certificate.pdf",
  },
  {
    title: "Job Simulation",
    issuer: "Goldman Sachs, via Forage",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_ZkMuzfdhTkgvhFFzo_1730625442038_completion_certificate.pdf",
  },
  {
    title: "PM Fellowship",
    issuer: "NextLeap",
    href: "https://nextleap.app/certificates/verify/nlcertepkb2qarrf0z3yal",
  },
];

function CertCard({ cert, index }: { cert: Cert; index: number }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} style={{ transitionDelay: `${(index % 2) * 80}ms` }} className="reveal">
      <a
        href={cert.href}
        target="_blank"
        rel="noopener"
        className="press group flex h-full items-center justify-between gap-4 rounded border-neo border-ink bg-surface p-4 shadow-neo md:p-5"
      >
        <span>
          <span className="block text-base font-bold md:text-lg">{cert.title}</span>
          <span className="mt-0.5 block text-sm text-ink-soft">{cert.issuer}</span>
        </span>
        <ArrowUpRight aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2.5} />
      </a>
    </li>
  );
}

export default function Certifications() {
  return (
    <Section title="Certifications" emoji="📜" subtitle="Things I've picked up along the way" grid>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </ul>
    </Section>
  );
}
