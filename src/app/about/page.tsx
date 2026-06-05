import { AboutCareers } from "@/components/about/about-careers";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStats } from "@/components/about/about-stats";
import { AboutStory } from "@/components/about/about-story";
import { AboutTeam } from "@/components/about/about-team";
import { AboutValues } from "@/components/about/about-values";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CtaBanner } from "@/components/landing/cta-banner";
import { SolutionsGrid } from "@/components/landing/solutions-grid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About ShiftCare — Deliver a Better Standard of Care",
  description:
    "ShiftCare's innovative software helps in-home health agencies streamline scheduling, client management and care documentation.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStats />
        <AboutValues />
        <AboutStory />
        <AboutTeam />
        <AboutCareers />
        <SolutionsGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
