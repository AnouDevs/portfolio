"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sage px-6 py-[22px] shadow-[0_1px_0_rgba(0,0,0,0.04)] md:px-14">
      <div className="flex items-center justify-between">
        <span className="text-[30px] font-bold tracking-[1px] text-ink">
          AnouDev
        </span>

        <nav className="hidden gap-10 text-[21px] md:flex">
          <a href="#about" className="text-ink hover:text-accent">
            About
          </a>
          <a href="#projects" className="text-ink hover:text-accent">
            Projects
          </a>
          <a href="#skills" className="text-ink hover:text-accent">
            Skills
          </a>
          <a href="#contact" className="text-accent hover:text-ink">
            Leave a Message!
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-ink md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <nav className="mt-4 flex flex-col gap-4 text-[21px] md:hidden">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="text-ink"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="text-ink"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="text-ink"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="text-accent"
          >
            Leave a Message!
          </a>
        </nav>
      )}
    </header>
  );
}
