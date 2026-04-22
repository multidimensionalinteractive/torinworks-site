'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Results', href: '#results' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-text-dark">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white text-sm font-extrabold">
            TW
          </span>
          <span>Torin Works</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-muted hover:text-text-dark transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#assessment"
          className="hidden md:inline-flex btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl"
        >
          Book a Free Assessment
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-text-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-5 pb-5 pt-3">
          <nav className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted hover:text-text-dark transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#assessment"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex btn-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-xl text-center justify-center"
            >
              Book a Free Assessment
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
