"use client";

import CategorySection from "./CategorySection";
import HomeCategorySection from "./HomeCategorySection";
import BestAudioSection from "./BestAudioSection";
import { useCategory } from "@/context/CategoryContext";

export default function PreFooter() {
  const { currentCategory } = useCategory();

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      {currentCategory === "home" ? (
        <HomeCategorySection />
      ) : (
        <CategorySection />
      )}
      <BestAudioSection />
    </main>
  );
}
