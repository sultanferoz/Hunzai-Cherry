'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#120202]/40 backdrop-blur-md supports-[backdrop-filter]:bg-[#280406]/30">
      <nav className="container-Cherry flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <span className="text-primary">🍒</span>
          <span>Cherry</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/Home" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="Plants" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Product
          </Link>
          <Link href="/More" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/Contact" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className="hidden md:flex h-10 px-6 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors text-sm font-medium">
          Buy Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-Cherry flex flex-col gap-4 py-4">
            <Link href="/Home" className="text-sm text-foreground/80 hover:text-foreground">
              Home
            </Link>
            <Link href="/Plants" className="text-sm text-foreground/80 hover:text-foreground">
              Product
            </Link>
            <Link href="/More" className="text-sm text-foreground/80 hover:text-foreground">
             Privacy
            </Link>
            <Link href="/Contact" className="text-sm text-foreground/80 hover:text-foreground">
              Contact
            </Link>
            <button className="w-full h-10 px-6 items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors text-sm font-medium">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
