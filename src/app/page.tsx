import { Hero } from "@/components/home/Hero";
import { ScreenshotGallery } from "@/components/home/ScreenshotGallery";
import { Features } from "@/components/home/Features";
import { UseCases } from "@/components/home/UseCases";
import { ThemePreview } from "@/components/home/ThemePreview";
import { ResponsiveShowcase } from "@/components/home/ResponsiveShowcase";
import { VideoShowcase } from "@/components/home/VideoShowcase";
import { ConfigPreview } from "@/components/home/ConfigPreview";
import { Comparison } from "@/components/home/Comparison";
import { Stats } from "@/components/home/Stats";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { CTA } from "@/components/home/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ScreenshotGallery />
      <Features />
      <UseCases />
      <ThemePreview />
      <ResponsiveShowcase />
      <VideoShowcase />
      <ConfigPreview />
      <Comparison />
      <Stats />
      <Testimonials />
      <TechStack />
      <CTA />
    </>
  );
}
