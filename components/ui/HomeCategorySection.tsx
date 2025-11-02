"use client";

import CategorySection from "./CategorySection";
import Image from "next/image";
import Link from "next/link";

export default function HomeCategorySection() {
  return (
    <>
      <CategorySection />
      {/* Your reusable component here */}
      <div className="my-32">
        <main className="max-w-6xl mx-auto px-6 py-16 space-y-32">
          {/* 🔥 PRODUCT PROMOS SECTION */}
          <section className="space-y-10">
            {/* ZX9 SPEAKER */}
            <div className="bg-[#D87D4A] rounded-lg p-10 text-white grid md:grid-cols-2 items-center gap-6 overflow-hidden">
              <div className="w-full h-80 relative">
                <Image
                  src="/images/home-speaker.svg"
                  alt="ZX9 Speaker"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center lg:text-start">
                <h2 className="text-4xl font-bold mb-4">
                  ZX9
                  <br /> SPEAKER
                </h2>
                <p className="text-sm mb-6">
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <Link
                  href="/products/zx9"
                  className="bg-black text-white px-6 py-3 text-sm font-semibold"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>

            {/* ZX7 SPEAKER */}
            <div className="bg-gray-200 rounded-lg p-10 flex justify-between items-center">
              <h3 className="text-xl font-semibold">ZX7 SPEAKER</h3>
              <Link
                href="/products/zx7"
                className="border border-black px-6 py-2 text-sm font-semibold hover:bg-black hover:text-white"
              >
                SEE PRODUCT
              </Link>
            </div>

            {/* YX1 EARPHONES */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/home-earphones.svg"
                  alt="YX1 Earphones"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-gray-200 rounded-lg p-10 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold mb-4">YX1 EARPHONES</h3>
                <Link
                  href="/products/yx1"
                  className="border border-black px-6 py-2 text-sm font-semibold w-max hover:bg-black hover:text-white"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
