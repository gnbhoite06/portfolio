import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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
      <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-4 px-6">
          <a href="#top" aria-label="Gandharv Bhoite, home" className="font-serif text-[1.3rem] leading-none text-ink">
            Gandharv Bhoite
          </a>

          <div className="flex items-center gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-ink-soft transition-colors duration-200 hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle dark and light mode"
              className="font-mono text-[0.75rem] text-ink-soft transition-colors duration-200 hover:text-accent"
            >
              {isDark ? "Light" : "Dark"}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="relative flex h-9 w-9 items-center justify-center text-ink md:hidden"
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
        className={`fixed right-0 top-0 z-40 h-full w-[80%] max-w-xs border-l border-line bg-paper transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-24">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`border-b border-line py-4 font-serif text-2xl text-ink transition-all duration-500 ${
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
