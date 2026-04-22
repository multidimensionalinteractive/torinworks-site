'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-teal/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
              <span className="text-dark-teal font-bold text-sm leading-none">TW</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">TORIN WORKS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                  {['Patient Acquisition', 'Workflow Automation', 'AI Agents', 'Growth Strategy'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#how-it-works" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              About
            </a>
            <a href="#resources" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Resources
            </a>
            <a href="#results" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Results
            </a>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#assessment"
              className="hidden sm:inline-flex items-center gap-1 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-400 transition-colors"
            >
              Book a Free Assessment <span className="text-lg leading-none">→</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-teal border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block text-white/90 text-sm font-medium">Solutions</a>
            <a href="#how-it-works" className="block text-white/90 text-sm font-medium">How It Works</a>
            <a href="#about" className="block text-white/90 text-sm font-medium">About</a>
            <a href="#resources" className="block text-white/90 text-sm font-medium">Resources</a>
            <a href="#results" className="block text-white/90 text-sm font-medium">Results</a>
            <a
              href="#assessment"
              className="inline-flex items-center gap-1 bg-accent text-white text-sm font-semibold px-5 py-2.5 rounded-full mt-2"
            >
              Book a Free Assessment <span>→</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
