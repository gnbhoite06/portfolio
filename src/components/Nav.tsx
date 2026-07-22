import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#experience", label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
        <nav className="mx-auto flex h-16 max-w-[920px] items-center justify-between gap-4 rounded-full border border-line bg-paper/70 px-4 shadow-[0_12px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-6">
          <a href="#top" aria-label="Gandharv Bhoite, home" className="text-base font-semibold tracking-tight text-ink">
            GB
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark and light mode"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:bg-paper-raised hover:text-ink"
            >
              {isDark ? <Sun className="h-[18px] w-[18px]" strokeWidth={1.5} /> : <Moon className="h-[18px] w-[18px]" strokeWidth={1.5} />}
            </button>

            <a
              href="https://calendly.com/gandharv-bhoite-yourcampusfund/30min"
              target="_blank"
              rel="noopener"
              className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent-strong sm:inline-flex"
            >
              Get in touch
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink md:hidden"
            >
              <Menu
                className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
                  menuOpen ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
                }`}
                strokeWidth={1.5}
              />
              <X
                className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
                  menuOpen ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
                }`}
                strokeWidth={1.5}
              />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed right-0 top-0 z-40 h-full w-[80%] max-w-xs bg-paper shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-24">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`border-b border-line py-4 text-xl font-semibold text-ink transition-all duration-500 ${
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: menuOpen ? `${150 + i * 70}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
