import { useEffect, useState } from "react";

const links = [
  { id: "problem", label: "Problem" },
  { id: "shift", label: "Reframe" },
  { id: "insights", label: "Insights" },
  { id: "journey", label: "Journey" },
  { id: "ecosystem", label: "Solution" },
  { id: "impact", label: "Impact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative flex h-8 w-8 items-center justify-center rounded-full gradient-warm">
              <span className="absolute inset-0 rounded-full animate-pulse-glow" />
              <span className="relative font-display text-background font-semibold">अ</span>
            </span>
            <span className="font-display text-lg tracking-tight">Aahaar</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center gap-2 rounded-full gradient-warm text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Join the mission
          </a>
        </div>
      </div>
    </header>
  );
}
