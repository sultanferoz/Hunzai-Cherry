'use client';

import { useState } from 'react';

interface ProductCardProps {
  emoji: string;
  name: string;
  description: string;
  price: string;
  category?: string;
}

export default function ProductCard({
  emoji,
  name,
  description,
  price,
  category = 'Plant',
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group rounded-2xl bg-card border border-border p-6 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        {/* Plant Emoji */}
        <div className="text-6xl mb-4 h-20 flex items-center justify-center">
          {emoji}
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary-accent transition-colors">
          {name}
        </h3>
        <p className="text-sm text-foreground/60 mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price and Category */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-bold text-primary-accent">{price}</span>
          <span className="text-xs text-foreground/50 bg-secondary/50 px-2 py-1 rounded">
            {category}
          </span>
        </div>

        {/* Button */}
        <button
          className={`w-full h-10 rounded-lg border transition-all duration-300 font-medium text-sm flex items-center justify-center gap-2 ${
            isHovered
              ? 'bg-primary border-primary text-background'
              : 'border-border text-foreground/60 hover:text-foreground'
          }`}
        >
          <span>🛒</span>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
