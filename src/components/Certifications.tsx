import { useReveal } from "../hooks/useReveal";

type Cert = {
  title: string;
  issuer: string;
  logo: "wordmark" | "img";
  text?: string;
  src?: string;
  small?: boolean;
  href?: string;
};

const certs: Cert[] = [
  {
    title: "AI for Product Management",
    issuer: "Pendo",
    logo: "wordmark",
    text: "Pendo",
    href: "https://www.credly.com/badges/6d37b489-4f6f-48e7-8498-250856788f69/linked_in_profile",
  },
  {
    title: "Product-led Certification",
    issuer: "Pendo",
    logo: "wordmark",
    text: "Pendo",
    href: "https://www.credly.com/badges/6c6f9777-350f-468c-8689-232be86bff04/linked_in_profile",
  },
  {
    title: "PM Basics Certification",
    issuer: "Pendo",
    logo: "wordmark",
    text: "Pendo",
    href: "https://www.credly.com/badges/a82083ae-c515-4f3f-be45-2427e002d329/linked_in_profile",
  },
  {
    title: "Product Management Job Simulation",
    issuer: "Electronic Arts, via Forage",
    logo: "img",
    src: "https://cdn.simpleicons.org/ea/9a9d92",
    href: "https://www.theforage.com/completion-certificates/j43dGscQHtJJ57N54/5genWYpfo5b57G7yv_j43dGscQHtJJ57N54_ZkMuzfdhTkgvhFFzo_1767165574686_completion_certificate.pdf",
  },
  {
    title: "Investment Banking Job Simulation",
    issuer: "JPMorgan Chase, via Forage",
    logo: "img",
    src: "https://cdn.simpleicons.org/chase/9a9d92",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/JPMorgan%20Chase/YD2kY95RQxQtXxFTS_ZtgA28qyexifyEdHE_ZkMuzfdhTkgvhFFzo_1730365903126_completion_certificate.pdf",
  },
  {
    title: "Project Manager Job Simulation",
    issuer: "Siemens Mobility, via Forage",
    logo: "img",
    src: "https://cdn.simpleicons.org/siemens/9a9d92",
    href: "https://www.theforage.com/completion-certificates/YtWaumzWHmKiqP63y/zSefEeEKvojiQqiaH_YtWaumzWHmKiqP63y_ZkMuzfdhTkgvhFFzo_1767165011908_completion_certificate.pdf",
  },
  {
    title: "Job Simulation",
    issuer: "Goldman Sachs, via Forage",
    logo: "img",
    src: "https://cdn.simpleicons.org/goldmansachs/9a9d92",
    href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/wNge9cjzNTXD2acrv_MBA4MnZTNFEoJZGnk_ZkMuzfdhTkgvhFFzo_1730625442038_completion_certificate.pdf",
  },
  {
    title: "PM Fellowship",
    issuer: "NextLeap",
    logo: "wordmark",
    text: "NextLeap",
    small: true,
    href: "https://nextleap.app/certificates/verify/nlcertepkb2qarrf0z3yal",
  },
];

function CertCard({ cert, index }: { cert: Cert; index: number }) {
  const ref = useReveal<HTMLDivElement & HTMLAnchorElement>();
  const content = (
    <>
      {cert.logo === "img" ? (
        <img
          src={cert.src}
          alt={cert.issuer}
          width={28}
          height={28}
          className="mt-[0.15rem] flex-none transition-transform duration-300 group-hover:scale-110"
        />
      ) : (
        <span
          className={`mt-[0.15rem] flex h-7 w-fit min-w-11 flex-none items-center justify-center rounded-md border border-line px-2 font-mono tracking-[0.02em] text-ink-soft ${
            cert.small ? "text-[0.6rem]" : "text-[0.68rem]"
          }`}
        >
          {cert.text}
        </span>
      )}
      <div>
        <h3 className="mb-1 text-[0.98rem] font-semibold text-ink transition-colors group-hover:text-accent">{cert.title}</h3>
        <p className="text-[0.85rem] text-ink-soft">{cert.issuer}</p>
      </div>
    </>
  );

  const className = "reveal group flex items-start gap-4 bg-paper p-7 transition-colors duration-300 hover:bg-paper-raised";

  if (cert.href) {
    return (
      <a
        ref={ref}
        href={cert.href}
        target="_blank"
        rel="noopener"
        style={{ transitionDelay: `${(index % 4) * 80}ms` }}
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <div ref={ref} style={{ transitionDelay: `${(index % 4) * 80}ms` }} className={className}>
      {content}
    </div>
  );
}

export default function Certifications() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-[5.5rem]">
      <h2 className="mb-10 text-[0.85rem] font-semibold uppercase tracking-[0.08em] text-ink-soft">Certifications</h2>
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 md:grid-cols-4">
        {certs.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </section>
  );
}
