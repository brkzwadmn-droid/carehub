import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CtaBanner } from "@/components/landing/cta-banner";
import { FeatureComparison } from "@/components/pricing/feature-comparison";
import { PlanCards } from "@/components/pricing/plan-cards";
import { pricingFaqs } from "@/components/pricing/data";
import { FaqSection } from "@/components/shared/faq-section";
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pricing — ShiftCare",
  description:
    "One platform for private pay and Medicaid funded care, keeping visits compliant, hours authorised, and billing clean.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-brand-lavender pb-8 pt-16 text-center lg:pt-20">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <h1 className="font-serif text-3xl text-brand-navy sm:text-4xl lg:text-5xl lg:leading-tight">
              One platform for private pay and Medicaid funded care, keeping
              visits compliant, hours authorised, and billing clean.
            </h1>
            <h2 className="mt-8 font-serif text-2xl text-brand-navy sm:text-3xl">
              Start your 7-day free trial
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              We&apos;re confident you&apos;ll see the value in ShiftCare as soon
              as you start using it. To see the difference it makes for yourself,
              sign up for a free 7 day trial.
            </p>
          </div>
        </section>

        <PlanCards />
        <FeatureComparison />

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white px-8 py-12 text-center shadow-sm">
            <h2 className="font-serif text-3xl text-brand-navy">Savings Calculator</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Still unsure? We surveyed 50 business owners using ShiftCare to
              find out just how much time and money they&apos;ve been saving
              using our software. Have a look for yourself.
            </p>
            <Link
              href="#"
              className="mt-6 inline-block text-sm font-semibold text-brand-blue hover:underline"
            >
              Calculate your savings →
            </Link>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
            
            <Image src="/price-page/us-pricing.webp" alt="Onboarding Packages" width={1000} height={1000} className="w-full h-full object-cover rounded-2xl" />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                For a smooth transition
              </p>
              <h2 className="mt-3 font-serif text-3xl text-brand-navy">
                Onboarding Packages
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Explore our tailored Onboarding Packages to find the perfect
                match for your organization&apos;s needs. Simplify your setup,
                enjoy seamless integration, and unlock your full potential with
                ShiftCare.
              </p>
              <Link
                href="#"
                className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white"
              >
                Onboarding Packages →
              </Link>
            </div>
          </div>
        </section>

        <FaqSection title="Frequently asked questions" items={pricingFaqs} />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
