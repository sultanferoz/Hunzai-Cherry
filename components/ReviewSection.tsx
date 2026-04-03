"use client";

import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { getReviews } from "@/lib/sanity.client";
import { urlFor } from "@/lib/sanity.image";

export default function ReviewSection() {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    async function fetchReviews() {
      const res = await getReviews(6);
      const formatted = res.map((r) => ({
        ...r,
        avatar: r.avatar ? urlFor(r.avatar).url() : null,
      }));

      setReviews(formatted);
    }

    fetchReviews();
  }, []);

  return (
    <section className="relative w-full pt-20 md:pb-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/red.jpg')",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3b090d]/40 to-[#120202]/50" />
      </div>
      <div className="container-Cherry relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-5xl md:text-7xl font-extralight italic tracking-wide text-white font-serif">
            Customer Reviews
          </h2>
          <p className="mt-2 text-lg text-white/80 font-light">
            What our happy customers say about us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.length > 0 ? (
            reviews.map((review) => <ReviewCard key={review._id} {...review} />)
          ) : (
            <p className="text-white/70 text-center col-span-full">
              Loading reviews...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}