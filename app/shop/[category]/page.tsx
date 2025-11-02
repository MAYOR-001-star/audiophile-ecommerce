"use client";

import { useParams } from "next/navigation";
import Hero from "@/components/layout/Hero";
import PreFooter from "@/components/ui/PreFooter";

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;

  return (
    <div>
      <Hero />
      {/* Add your category-specific content here */}
      <PreFooter />
    </div>
  );
}
