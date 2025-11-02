import Hero from "@/components/layout/Hero";
import PreFooter from "@/components/ui/PreFooter";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAFAFA] text-[#101010]">
      <Hero />
      {/* Add your home page specific content here */}
      <PreFooter />
    </main>
  );
}
