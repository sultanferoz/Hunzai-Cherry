"use client";

import { useEffect, useState, useRef } from "react";
import { getHeroSection, getProducts } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroSection() {
  const [data, setData] = useState<any>(null);
  const [products, setProducts] = useState<any[]>([]);

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchData() {
      const [heroRes, productRes] = await Promise.all([
        getHeroSection(),
        getProducts(),
      ]);
      setData(heroRes);
      setProducts(productRes);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!products.length || !sectionRef.current || !scrollRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // THE PINNED HORIZONTAL SCROLL
      gsap.to(scrollRef.current, {
        // Moves the track to the left
        x: () => -(scrollRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: "+=4000",
          scrub: 1,
          invalidateOnRefresh: true,
          // Removed snapping so the user has full control over where it stops
        },
      });
    });

    return () => ctx.revert();
  }, [products]);

  if (!data)
    return (
      <div className="min-h-screen bg-[#0a0c0b] flex items-center justify-center text-white">
        Loading...
      </div>
    );

  return (
    <section className="relative w-full text-white font-sans">
      {/* 1. TOP HERO CONTENT (Standard Scroll) */}
      <div className="relative min-h-screen w-full overflow-hidden flex items-center -mt-[64px]">
        
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            poster="/herovideo-thumbnail.jpg"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        {/* 2. Content Layer */}
        <div className="relative z-20 container mx-auto px-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-end min-h-[500px]">
    
            <div className="max-w-xl">
              <h1 className="text-[94px]  font-extralight italic tracking-wide text-white/90 font-serif">
                Taste <br />
                <span className="block not-italic font-light text-3xl md:text-5xl opacity-80">
                  of Passion,
                </span>
              </h1>
            </div>

            {/* Right Side: Elegant & Floating */}
            <div className="md:text-right self-end ">
              <h2 className="text-5xl md:text-7xl font-extralight italic tracking-wide text-white/90 font-serif">
                Wrapped{" "}
                <span className="block not-italic font-light text-3xl md:text-5xl opacity-80">
                  in Cherry
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* 2. HORIZONTAL SECTION CONTAINER */}
      <div ref={sectionRef} className="relative h-screen overflow-hidden">

        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${urlFor(data.backgroundImage).url()})`,
              backgroundAttachment: "fixed",
            }}
          />
   
          <div className="absolute inset-0 bg-gradient-to-br from-[#3b090d]/60 to-[#120202]/70" />
        </div>

        {/* Section Title */}
        <div className="absolute top-10 left-6 z-20 flex items-center gap-4 mt-18">
          <div className="h-[1px] w-12 bg-white/30"></div>
          <h2 className="text-md md:text-xl font-extralight italic tracking-wide text-white/90 font-serif">
            “Sip the Seduction of Cherry Wine”
          </h2>
        </div>

        {/* THE HORIZONTAL TRACK */}
        <div
          ref={scrollRef}
          className="relative z-10 flex h-full items-center  will-change-transform"
          style={{
            width: "fit-content",
            paddingLeft: "10vw",
            paddingRight: "10vw",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              className="w-[85vw] md:w-[70vw] h-full flex items-center justify-end flex-shrink-0 px-10"
            >
              {/* THE CARD (Keeping your dimensions/styles) */}
              <div className="relative flex items-center justify-between gap-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-8 h-[320px] w-full max-w-5xl">
                {/* Left Image (Your Specific Positioning) */}
                <div
                  className="relative w-80 h-[450px]"
                  style={{ position: "relative", top: "-45px", left: "-60px" }}
                >
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-xl font-bold mb-6">
                    Rs. {product.price}/-
                  </p>
                  <div className="flex gap-3">
                    <button className="px-6 py-2 border border-white/20 rounded-xl hover:bg-white hover:text-black transition-colors">
                      Explore
                    </button>
                    <button className="p-2 border border-white/20 rounded-xl">
                      👜
                    </button>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative w-48 h-72 hidden md:block">
                  <Image
                    src={urlFor(product.secondaryImage).url()}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
