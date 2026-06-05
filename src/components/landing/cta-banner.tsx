import Link from "next/link";
import { ctaStats } from "./data";

export function CtaBanner() {
  return (
    <section className="relative bg-brand-purple pb-32 pt-20 lg:pb-40 lg:pt-28">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
          Start your free 7 day trial.
        </h2>
        <p className="mt-4 text-lg text-purple-100">
          Deliver a higher standard of care, all from just $8 per user a month.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#"
            className="rounded-full bg-brand-red px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Try for Free →
          </Link>
          <Link
            href="#"
            className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
          >
            Compare Plans
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-full max-w-6xl -translate-x-1/2 translate-y-1/2 px-4">
        <div className="grid grid-cols-2 divide-x divide-slate-200 rounded-2xl border border-slate-100 bg-white shadow-xl sm:grid-cols-3 lg:grid-cols-5">
          {ctaStats.map((stat) => (
            <div key={stat.label} className="px-4 py-8 text-center">
              {stat.prefix && (
                <p className="font-serif text-sm text-slate-500">
                  {stat.prefix}
                </p>
              )}
              <p className="font-serif text-2xl font-bold text-brand-navy">
                {stat.value}
              </p>
              <p className="mt-2 text-xs leading-snug text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
