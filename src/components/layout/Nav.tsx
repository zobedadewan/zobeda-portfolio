import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/ui/Container";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

const LINKS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

const SECTION_IDS = ["home", ...LINKS.map((link) => link.id)] as const;

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock the page, trap Tab inside the panel, restore focus on close.
  useEffect(() => {
    if (!menuOpen) return;

    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])"
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      toggleRef.current?.focus();
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-petal/70 bg-cream/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-20 items-center justify-between gap-6"
        >
          <a
            href="#home"
            className="flex items-baseline gap-1 font-display text-xl font-semibold tracking-normal text-ink uppercase"
          >
            {profile.shortName}
            <span
              aria-hidden="true"
              className="size-2 rounded-full gradient-brand"
            />
          </a>

          <ul className="hidden items-center gap-9 lg:flex">
            {LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative py-2 font-mono text-[0.76rem] font-semibold tracking-widest uppercase transition-colors",
                      isActive
                        ? "font-bold text-gold-deep"
                        : "text-ink hover:text-rose-deep"
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-0.5 left-0 h-px gradient-brand transition-all duration-300",
                        isActive ? "w-full" : "w-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full gradient-brand px-6 py-3 font-mono text-[0.72rem] font-semibold tracking-widest text-white uppercase shadow-md shadow-plum/25 transition-transform duration-200 motion-safe:hover:-translate-y-0.5 sm:inline-flex"
            >
              Let&rsquo;s Connect
            </a>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="grid size-11 place-items-center rounded-full border border-petal text-ink transition-colors hover:border-rose hover:text-gold-deep lg:hidden"
            >
              {menuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </Container>

      {menuOpen && (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="fixed inset-x-0 top-20 bottom-0 z-40 border-t border-petal bg-cream/98 backdrop-blur-lg lg:hidden"
        >
          <Container className="flex h-full flex-col justify-between py-10">
            <ul className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-petal/60 py-5 font-display text-3xl font-semibold text-ink transition-colors hover:text-gold-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={profile.resumePath}
              download
              onClick={() => setMenuOpen(false)}
              className="rounded-full gradient-brand px-7 py-4 text-center text-sm font-semibold text-white"
            >
              Download Resume
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
