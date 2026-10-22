import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#product", label: "Product" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Get in Touch" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  return (
    <nav className="relative mb-10 rounded border-neo border-ink bg-nav px-4 py-3 text-[#0a0a0a] shadow-neo-lg md:mb-12">
      <div className="flex items-center justify-between gap-4">
        <a href="#top" aria-label="Gandharv Bhoite, home" className="font-mono text-lg font-semibold tracking-tight">
          g.b.
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <ul className="hidden items-center md:flex lg:gap-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded px-2 py-2 text-sm font-bold lg:px-3 transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark and light mode"
            className="flex h-9 w-9 items-center justify-center rounded border-2 border-[#0a0a0a] bg-white transition-transform hover:-translate-y-0.5"
          >
            {isDark ? <Sun className="h-4 w-4" strokeWidth={2.5} /> : <Moon className="h-4 w-4" strokeWidth={2.5} />}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" strokeWidth={2.5} /> : <Menu className="h-6 w-6" strokeWidth={2.5} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="mt-3 flex flex-col border-t-2 border-[#0a0a0a] pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)} className="block py-2 text-base font-bold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
