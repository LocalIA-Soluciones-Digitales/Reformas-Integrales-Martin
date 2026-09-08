import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustIndicators } from "@/components/home/trust-indicators";
import { ServicesPreview } from "@/components/home/services-preview";
import { BeforeAfter } from "@/components/home/before-after";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Process } from "@/components/home/process";
import { Testimonials } from "@/components/home/testimonials";
import { Faq } from "@/components/home/faq";
import { CtaFinal } from "@/components/home/cta-final";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <ServicesPreview />
      <BeforeAfter />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <Faq />
      <CtaFinal />
    </>
  );
}
