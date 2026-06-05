import Image from "next/image";
import { featuredTestimonial, ratingPlatforms } from "./data";

function StarRating() {
  return (
    <span className="text-amber-400" aria-hidden="true">
      ★★★★★
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="main"
      className="relative overflow-hidden bg-brand-lavender pb-12 pt-10 lg:pb-16 lg:pt-14"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <h1 className="text-4xl font-serif tracking-tight text-brand-navy sm:text-5xl lg:text-[3.25rem] lg:leading-tight">
            Run a stronger care agency with AI driven scheduling and cleaner
            workflows.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-600">
            Purpose-built for IDD, HCBS and non-medical home care. ShiftCare
            brings together scheduling, EVV, documentation and e-Billing into
            one simple system.
          </p>

          <form className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row sm:items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-800 shadow-sm outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Try for Free
            </button>
            <button
              type="button"
              className="shrink-0 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
            >
              Book a demo
            </button>
          </form>

          <p className="mt-4 text-sm text-slate-500">
            Subscriptions start at just $8 per user a month. No credit card
            required.
          </p>

          <div className="mt-10">
            <p className=" text-sm text-brand-navy">
              Trusted by 7,000+ providers powering over 300,000 support workers
              worldwide.
            </p>
            <div className="mt-6 flex flex-wrap gap-6">
              {ratingPlatforms.map((platform) => (
                <div key={platform.name} className="text-center">
                  <p className="text-xs font-semibold text-slate-400">
                    {platform.name}
                  </p>
                  <p className="mt-1 text-xl font-bold text-brand-navy">
                    {platform.rating}
                  </p>
                  <StarRating />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Image
            src="/homepage/hero.webp"
            alt="ShiftCare platform dashboard"
            width={1000}
            height={1000}
            className="h-auto w-full"
            priority
          />

          <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-lg">
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                {featuredTestimonial.company}
              </p>
              <blockquote className="mt-4 text-base leading-relaxed text-slate-700">
                <span className="text-3xl font-serif text-brand-red">&ldquo;</span>
                {featuredTestimonial.quote}
              </blockquote>
            </div>
            <div className="bg-brand-blue px-6 py-4">
              <p className="font-serif text-lg italic text-white">
                {featuredTestimonial.author}
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">
                {featuredTestimonial.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
