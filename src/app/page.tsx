import { AiFeatures } from "@/components/landing/ai-features";
import { Articles } from "@/components/landing/articles";
import { Awards } from "@/components/landing/awards";
import { CtaBanner } from "@/components/landing/cta-banner";
import { CustomerSuccess } from "@/components/landing/customer-success";
import { Hero } from "@/components/landing/hero";
import { RecentReleases } from "@/components/landing/recent-releases";
import { Reviews } from "@/components/landing/reviews";
import { ServicesGrid } from "@/components/landing/services-grid";
import { SolutionsGrid } from "@/components/landing/solutions-grid";
import { TrustBar } from "@/components/landing/trust-bar";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <AiFeatures />
        <ServicesGrid />
        <SolutionsGrid />
        <RecentReleases />
        <CustomerSuccess />
        <Reviews />
        <Awards />
        <Articles />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
