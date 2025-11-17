import { Zap, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Technologie", href: "#technology" },
    { label: "Speicher", href: "#storage" },
    { label: "Warum wir", href: "#why-us" },
    { label: "Kontakt", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur-md border-b border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-red-600 text-white shadow-[0_0_20px_rgba(239,68,68,0.35)]">
              <Zap className="w-5 h-5" />
            </span>
            <span className="font-semibold text-white tracking-tight">Thiel‑Energy</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium shadow-[0_0_20px_rgba(239,68,68,0.35)] hover:shadow-[0_0_30px_rgba(239,68,68,0.55)] transition-shadow"
            >
              Demo anfordern
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü umschalten"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="pt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-200 px-2 py-2 rounded-lg hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-red-600 text-white text-sm font-medium shadow-[0_0_20px_rgba(239,68,68,0.35)]"
                onClick={() => setOpen(false)}
              >
                Demo anfordern
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
