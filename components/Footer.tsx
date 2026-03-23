'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container-Cherry py-16">
      

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4 text-foreground">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/Features" className="hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/Pricing" className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="Plants" className="hover:text-foreground transition-colors">
                 Product
                </a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/Home" className="hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/Plant" className="hover:text-foreground transition-colors">
                 Product
                </a>
              </li>
              <li>
                <a href="/Contact" className="hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="Privacy" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/Terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/Privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/Cookie" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Follow Us</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="/Instagram" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="/Facebook" className="hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="/Twitter" className="hover:text-foreground transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="/LinkedIn" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-foreground/60 border-t border-border pt-8">
          <p>© 2026 Cherry. All rights reserved by SFlaskir</p>
        </div>
      </div>
    </footer>
  );
}
