import Image from "next/image";
import { BentoDemo } from "./_utils/components/BentoGrid";
import HeroSection from "./_utils/components/Hero_Section";
import ClientSection from "./_utils/components/Client_Section";
import { MarqueeReviewSection } from "./_utils/components/Review_Section";
import ShinyButton from "@/components/magicui/shiny-button";
import PricingSection from "./_utils/components/Pricing_Section";
import CTA_Section from "./_utils/components/CTA_Section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-0 lg:p-[70px] ">
      <HeroSection />
      <ClientSection />
      <div className="Features_grid my-[80px] lg:my-[120px] px-5 lg:px-0">
        <div className="flex justify-center items-center">
          <ShinyButton text="Fuel your growth" className="mb-[px] md:mb-0" />
        </div>
        <h2 className="text-[28px] md:text-[36px] pb-[40px] font-medium bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">Growth-Ready Business Features</h2>
        <BentoDemo />
      </div>
      <MarqueeReviewSection />
      <PricingSection />
      <CTA_Section />
    </main>
  );
}
