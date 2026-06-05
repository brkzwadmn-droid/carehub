import Link from "next/link";
import { customerSuccess } from "./data";
import { PlaceholderImage } from "./placeholder-image";

export function RecentReleases() {
  return (
    <section id="resources" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Recent Releases
            </p>
            <h2 className="mt-3 font-serif text-3xl text-brand-navy sm:text-4xl">
              Discover our latest product updates
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Stay up-to-date with ShiftCare&apos;s newest features and
              improvements! We&apos;ve been hard at work, making changes to help
              you manage your staff and caregivers more effectively.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our recent releases page showcases key updates from the past year.
              Whether it&apos;s optimizing day-to-day operations or adding new
              capabilities, we&apos;re constantly evolving to support you.
            </p>
            <Link
              href="#"
              className="mt-8 inline-block rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Recent releases →
            </Link>
          </div>

          <div className="space-y-6">
            <PlaceholderImage
              label="Recent Releases — Phone Mockup"
              className="min-h-[240px] w-full"
              aspect="4/3"
            />
            <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <span className="text-3xl font-serif text-brand-red">&ldquo;</span>
              <p className="leading-relaxed text-slate-600">
                {customerSuccess.ceo.quote}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <PlaceholderImage
                  label={customerSuccess.ceo.imageLabel}
                  className="h-12 w-12"
                  rounded="full"
                />
                <div>
                  <p className="font-bold text-brand-blue">
                    {customerSuccess.ceo.name}
                  </p>
                  <p className="text-sm text-slate-500">
                    {customerSuccess.ceo.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
