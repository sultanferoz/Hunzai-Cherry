"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroicCherrySection() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heroic Reveal: Staggered Fade + Lift
      gsap.from(".animate-item", {
        y: 60,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // 2. High-Fidelity Floating Animation (2026 Vibe)
      gsap.to(imageWrapperRef.current, {
        y: -30,
        rotate: 2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      // 3. Parallax on Scroll
      gsap.to(".parallax-bg", {
        y: -100,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-40 overflow-hidden">
      {/* Decorative Mesh Gradient (Floating behind content) */}
      <div className="parallax-bg absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container-Cherry relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Modern Typography */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col space-y-10">
            <div className="space-y-4">
              <div className="animate-item flex items-center gap-2">
                <span className="h-[1px] w-8 bg-red-600"></span>
                <span className="text-red-500 uppercase tracking-[0.4em] text-[10px] font-bold">
                  2026 Collection
                </span>
              </div>
              
              <h1 className="text-[94px]  font-extralight italic  text-white/90 font-serif tracking-tight leading-[0.9]">
                Cherry <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                  Evolution
                </span>
              </h1>
            </div>

            <div className="animate-item max-w-md">
              <p className="text-xl text-foreground/80 font-medium leading-relaxed mb-6">
                Redefining the crimson aesthetic through premium botanical engineering.
              </p>
              <p className="text-foreground/50 leading-relaxed border-l-2 border-red-900/20 pl-6 italic">
                A masterpiece of deep pigments and structural perfection, curated for the modern landscape.
              </p>
            </div>

            {/* Aesthetic Detail Grid */}
            <div className="animate-item grid grid-cols-2 gap-8 pt-6">
              <div className="flex flex-col items-start  bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6   w-full">
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Pigment</p>
                <p className="text-xl font-bold">Deep Burgundy</p>
              </div>
              <div className="flex flex-col items-start  bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full">
                <p className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Grade</p>
                <p className="text-xl font-bold">Heritage A+</p>
              </div>
            </div>
          </div>

          {/* Right Side: The Visual Centerpiece */}
          <div className="lg:col-span-6 relative">
            <div 
              ref={imageWrapperRef} 
              className="relative z-20 w-full aspect-[4/5] md:aspect-square flex items-center justify-center"
            >
              {/* Image with Advanced Drop Shadow */}
              <div className="relative w-full h-[120%]">
                <Image
                  src="/Balaton.png"
                  alt="Premium Cherry Visual"
                  fill
                  className="object-contain drop-shadow-[0_40px_80px_rgba(153,27,27,0.4)] "
                  priority
                />
              </div>

             
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}