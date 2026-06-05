import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CtaBanner } from "@/components/landing/cta-banner";
import { PlaceholderImage } from "@/components/landing/placeholder-image";
import { FeatureBlock } from "@/components/shared/feature-block";
import { FeatureHero } from "@/components/shared/feature-hero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EVV — ShiftCare Verify",
  description:
    "ShiftCare Verify gives you fast GPS-verified visit data, without the headaches. EVV checks run automatically, keeping your billing clean and families informed in real time.",
};

export default function EvvPage() {
  return (
    <>
      <Header />
      <main>
        <FeatureHero
          label="Electronic Visit Verification"
          title="EVV that Simply Works for HCBS, IDD and Regional Center providers."
          description="ShiftCare Verify gives you fast GPS-verified visit data, without the headaches. EVV checks run automatically, keeping your billing clean and families informed in real time. Automate each step of Electronic Visit Verification with an app carers love, and accurate data for your admins."
          imageLabel="evv-hero.webp"
        />

        <section className="bg-white py-12">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <form className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full border border-slate-200 px-5 py-3 text-sm outline-none focus:border-brand-blue"
              />
              <button
                type="button"
                className="rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white"
              >
                Try for Free
              </button>
              <button
                type="button"
                className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white"
              >
                Book a Demo →
              </button>
            </form>
          </div>
        </section>

        

        <FeatureBlock
          label="Made for US IDD and Home Care Providers"
          title="Purpose-Built for the for the Way Medicaid Providers Deliver Care"
          body="ShiftCare Verify offers compliant, audit-ready templates built for US care agencies. Whether you need HCBS billing exports, Regional Center billing files, or IDD billing, you can rest assured that you'll get fewer denials and rejections. Shiftcare helps you manage different funding streams in one simple workflow. Say goodbye to rejected claims or mismatched units. Supporting a range of services:"
          bullets={[
            {
              title: "HCBS Waiver Services (Personal Care, Homemaker)",
              description: "",
            },
            {
              title: "IDD & Supported Living (Group Homes, SIL)",
              description: "",
            },
            {
              title: "Regional Center Services (Respite, Day Programs)",
              description: "",
            },
            {
              title: "Community Participation & Attendant Care",
              description: "",
            },
            { title: "Private Duty Non-Medical Care", description: "" },
          ]}
          imageLabel="idd.webp"
          imagePosition="left"
        />

        <FeatureBlock
          label="Mobile Tools for Mobile Teams"
          title="Finally. EVV Designed to Work the Way Providers Work"
          body="Traditional EVV systems create friction. Telephony, fobs, and hardware tokens or failed GPS checks, connectivity issues, and endless admin work. ShiftCare Verify replaces existing systems and tools with a modern mobile experience designed for the care industry."
          bullets={[
            {
              title: "Simple, intuitive UI for carers of all levels:",
              description:
                "Carers can open the app and clock in within seconds. Admins can review visits in a unified dashboard. Families can see updates in real time. Caregivers can clock in/out in seconds with zero training required.",
            },
            {
              title: "Generate accurate, audit-ready reports:",
              description:
                "ShiftCare Verify automatically syncs with your Carers' devices, capturing accurate locations, logs, and tasks - staying compliant, without the added admin.",
            },
            {
              title: "Stay connected with Offline Mode:",
              description:
                "Carers can clock in and out - even without network coverage. Sync data automatically when your phone reconnects - no more landlines, fobs, or missed visits.",
            },
          ]}
          cta="Try for free today →"
          imageLabel="mobile-evv.webp"
          imagePosition="right"
        />

        <FeatureBlock
          label="Compliance at Every Stage of Care Delivery"
          title="More Than EVV - ShiftCare Verify Connects Visits, Authorizations, and Billing"
          body="ShiftCare Verify is your all-around compliance partner, supporting every stage of your care delivery workflow."
          bullets={[
            {
              title: "GPS verification accepted by payors:",
              description:
                "With verified data and stronger documentation, you'll always be compliant.",
            },
            {
              title: "Get multi-funding support on a single shift:",
              description:
                "Whether you use HCBS units, Regional Center hours, IDD billing templates, or Private Pay mileage. ShiftCare Verify handles everything.",
            },
            {
              title: "Authorizations stay accurate and compliant:",
              description:
                "Get your units and hours automatically calculated so that your team has 24/7 visibility over what jobs are vacant.",
            },
            {
              title: "Clear, user-friendly EVV dashboard:",
              description:
                "Carers of all levels can easily navigate a simple funnel that categorizes all reports under Pending, Verified, and Exception.",
            },
            {
              title:
                "Accommodates multiple client addresses, group homes, and community visits:",
              description:
                "ShiftCare supports multiple service locations for SIL and IDD community support. Alternatively, competitors usually restrict this or require workarounds.",
            },
            {
              title: "Real-time communication and visibility for family members:",
              description:
                "Families of your participants can get notified when carers are on their way, see completed visits, and review care notes. This level of transparency is rare in EVV systems and builds trust instantly",
            },
          ]}
          cta="Try ShiftCare for free →"
          imageLabel="compliance.webp"
          imagePosition="left"
        />

        <section className="bg-slate-50 py-16 text-center lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="font-serif text-3xl text-brand-navy">
              One Connected System, Zero Re-Entry, and No Missed Claims.
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              ShiftCare connects scheduling, EVV, notes, authorizations,
              timesheets, and billing. Every step flows into the next. Your team
              won&apos;t have to worry about mismatched times, manual fixes, or
              duplicate entries.
            </p>
          </div>
        </section>

        
        {/* Billing Exports without image */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            {/* label="Billing Exports"
          title="Billing Exports That Automatically Align With Funding and State Rules"
          body="ShiftCare Verify prepares the exact file format that your state and funder require, which include the following:"
          bullets={[
            { title: "California Regional Centers (eBilling)", description: "" },
            { title: "HCBS Medicaid Waivers (CO, OH, PA, IN)", description: "" },
            { title: "IDD Billing Templates", description: "" },
            { title: "Private Pay & Mileage Reporting", description: "" },
          ]}
          cta="Book a demo →" */}
          <h2 className="font-serif text-3xl text-brand-navy">Billing Exports That Automatically Align With Funding and State Rules</h2>
          <p className="mt-4 leading-relaxed text-slate-600">ShiftCare Verify prepares the exact file format that your state and funder require, which include the following:</p>
          <ul className="mt-6 space-y-4">
            <li className="font-semibold text-brand-navy">California Regional Centers (eBilling)</li>
            <li className="font-semibold text-brand-navy">HCBS Medicaid Waivers (CO, OH, PA, IN)</li>
            <li className="font-semibold text-brand-navy">IDD Billing Templates</li>
            <li className="font-semibold text-brand-navy">Private Pay & Mileage Reporting</li>
          </ul>
          <Link href="#" className="mt-8 inline-block text-sm font-semibold text-brand-red hover:underline">Book a demo →</Link>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Trusted by over 6,500+ Care Providers
            </p>
            <h2 className="mt-3 font-serif text-3xl text-brand-navy">
              Why Providers Are Switching to ShiftCare
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              Enjoy fewer denials and faster payments while simultaneously
              eliminating tedious admin work. Supporting thousands of care
              service providers across California, Colorado, Ohio,
              Pennsylvania, and Indiana.
            </p>
            <Link
              href="#"
              className="mt-8 inline-block text-sm font-semibold text-brand-red hover:underline"
            >
              Learn more about billing and payments →
            </Link>
          </div>
        </section>

        <section className="bg-slate-50 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl space-y-8 px-4 lg:px-8">
            {[
              {
                title: "Teams keep moving, even offline:",
                body: "Carers can continue visits without worrying about connectivity, reducing delays and missed check-ins while out in the community.",
              },
              {
                title: "Billing stays simple and predictable:",
                body: "Clean exports mean claims are prepared and submitted in minutes, not hours of manual fixes.",
              },
              {
                title: "Families stay informed without extra admin:",
                body: "Built-in family visibility keeps participants and their families updated without coordinators chasing messages or calls.",
              },
              {
                title: "Fewer exceptions, less follow-up:",
                body: "Visits align with payor rules upfront, helping admin teams spend less time resolving EVV issues after the fact.",
              },
              {
                title: "Confidence in compliance, day to day:",
                body: "Peace of mind knowing EVV data, authorisations, and billing are centralized and audit-ready.",
              },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-brand-navy">{item.title}</p>
                <p className="mt-2 text-sm text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 text-center lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-blue">
              EVV That Just Works
            </p>
            <h2 className="mt-3 font-serif text-3xl text-brand-navy">
              Make the Switch to Smarter, Simpler EVV Management
            </h2>
            <p className="mt-6 leading-relaxed text-slate-600">
              It&apos;s time to retire your manual workflows and spreadsheets.
              If you need a simple, fast, and reliable EVV solution built for
              HCBS and IDD services, switch to ShiftCare Verify. It&apos;s a
              purpose-built care management system that streamlines every area of
              your care delivery.
            </p>
            <Link
              href="#"
              className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white"
            >
              Get started today →
            </Link>
            <p className="mt-3 text-sm text-slate-500">No credit card required</p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
