import Link from "next/link";
import { aiFeatures } from "./data";
import { PlaceholderImage } from "./placeholder-image";

export function AiFeatures() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-serif sm:text-5xl">
            <span className="text-brand-blue">AI</span>{" "}
            <span className="text-brand-navy">that Cares.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The most powerful AI driven operations platform for Medicaid waiver,
            IDD, home care & allied health providers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aiFeatures.map((feature) => (
            <article
              key={feature.tag}
              className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm"
            >
              <PlaceholderImage
                label={feature.imageLabel}
                className="h-44 w-full rounded-none"
              />
              <div className="p-5">
                <span
                  className={`inline-block rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${feature.badgeColor}`}
                >
                  {feature.tag}
                </span>
                <h3 className="mt-3 text-lg font-serif leading-snug tracking-wider text-brand-navy">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#"
            className="text-sm font-semibold text-brand-blue hover:underline"
          >
            Learn more about AI & Automation →
          </Link>
        </div>
      </div>
    </section>
  );
}
