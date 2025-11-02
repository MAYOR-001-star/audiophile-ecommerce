"use client";

import Link from "next/link";
import Image from "next/image";
import { useCategory } from "@/context/CategoryContext";

export default function Hero() {
  const { currentCategory } = useCategory();

  return (
    <section
      className={`relative bg-[#141414] text-white overflow-hidden ${
        currentCategory === "home" ? "min-h-[90vh]" : "min-h-[50vh]"
      }`}
    >
      {/* Mobile background image */}
      {currentCategory === "home" && (
        <div className="relative w-full h-[700px] lg:hidden">
          <Image
            src="/assets/headphone-hero.svg"
            alt="Hero background"
            fill
            className="object-cover object-center opacity-40"
          />
        </div>
      )}

      {/* Overlay content */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center max-w-[1110px] mx-auto px-6 md:px-12 lg:px-10 xl:px-0 z-10 ${
          currentCategory === "home"
            ? "lg:flex-row lg:justify-around lg:mt-[3.5rem]"
            : "lg:justify-center"
        }`}
      >
        {currentCategory === "home" ? (
          <>
            {/* Home Category */}
            <div className="max-w-md text-center lg:text-left space-y-4 lg:space-y-2 mt-16">
              <p className="uppercase tracking-[0.5em] text-gray-400 text-sm">
                New Product
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
                XX99 Mark II Headphones
              </h1>
              <p className="text-gray-300 text-center lg:text-left">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link
                href="/product/xx99-mark-two-headphones"
                className="inline-block bg-[#D87D4A] hover:bg-[#fbaf85] text-white uppercase tracking-wider px-8 py-4 lg:py-3 lg:px-7 rounded-md text-sm font-semibold transition lg:mt-4"
              >
                See Product
              </Link>
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block relative w-[500px] h-[600px]">
              <Image
                src="/assets/headphone-hero.svg"
                alt="Hero product"
                fill
                className="object-contain object-right-center w-full h-full"
                priority
              />
            </div>
          </>
        ) : (
          <>
            <div className="text-center pt-24 pb-16">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight uppercase">
                {currentCategory}
              </h1>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
