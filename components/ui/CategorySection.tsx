"use client";

import Image from "next/image";
import Link from "next/link";
import { useCategory } from "@/context/CategoryContext";

export default function CategorySection() {
  const { setCurrentCategory } = useCategory();

  const categories = [
    {
      name: "HEADPHONES",
      image: "/images/headphones.svg",
      slug: "headphones",
    },
    {
      name: "SPEAKERS",
      image: "/images/speakers.svg",
      slug: "speakers",
    },
    {
      name: "EARPHONES",
      image: "/images/earphones.svg",
      slug: "earphones",
    },
  ];

  return (
    <section className="grid md:grid-cols-3 gap-6 mb-32 text-center">
      {categories.map((category) => (
        <div
          key={category.slug}
          className="bg-gray-100 p-6 rounded-lg flex flex-col items-center"
        >
          <div className="w-32 h-32 relative mb-4">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-sm font-semibold tracking-widest mb-2">
            {category.name}
          </h3>
          <Link
            href={`/${category.slug}`}
            className="text-xs text-gray-500 font-bold tracking-widest flex items-center gap-1 hover:text-orange-500"
            onClick={() => setCurrentCategory(category.slug)}
          >
            SHOP <span>→</span>
          </Link>
        </div>
      ))}
    </section>
  );
}
