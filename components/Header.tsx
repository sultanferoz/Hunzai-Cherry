'use client';

import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80; 
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#120202]/40 backdrop-blur-md supports-[backdrop-filter]:bg-[#280406]/30">
      <nav className="container-Cherry flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">🍒</span>
          <span>Hunzai Cherry</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection('product')}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Product
          </button>

          <a
            href="/About"
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            About
          </a>

          <button
            onClick={() => scrollToSection('reviews')}
            className="text-sm text-foreground/80 hover:text-foreground transition-colors"
          >
            Review
          </button>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex h-10 px-6 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors text-sm font-medium">
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-Cherry flex flex-col gap-4 py-4">
            <button
              onClick={() => {
                scrollToSection('home');
                setIsOpen(false);
              }}
              className="text-sm text-foreground/80 hover:text-foreground text-left"
            >
              Home
            </button>

            <button
              onClick={() => {
                scrollToSection('product');
                setIsOpen(false);
              }}
              className="text-sm text-foreground/80 hover:text-foreground text-left"
            >
              Product
            </button>

            <a
              href="/About"
              className="text-sm text-foreground/80 hover:text-foreground"
            >
              About
            </a>

            <button
              onClick={() => {
                scrollToSection('reviews');
                setIsOpen(false);
              }}
              className="text-sm text-foreground/80 hover:text-foreground text-left"
            >
              Reviews
            </button>

            <button className="w-full h-10 px-6 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors text-sm font-medium">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}