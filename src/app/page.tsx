import { HeroSection } from "@/features/home-page/components/HeroSection";
import { CompanyAtAGlance } from "@/features/home-page/components/CompanyAtAGlance";
import { ProductCategories } from "@/features/home-page/components/ProductCategories";
import { NetworkSection } from "@/features/home-page/components/NetworkSection";
import { AwardsSection } from "@/features/home-page/components/AwardsSection";
import { TestimonialSection } from "@/features/home-page/components/TestimonialSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection />
      <CompanyAtAGlance />
      <ProductCategories />
      <NetworkSection />
      <AwardsSection />
      <TestimonialSection />
    </main>
  );
}
