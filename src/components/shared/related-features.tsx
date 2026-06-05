import Link from "next/link";
import { PlaceholderImage } from "@/components/landing/placeholder-image";

type RelatedFeature = {
  title: string;
  description: string;
};

export function RelatedFeatures({ features }: { features: RelatedFeature[] }) {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          Features
        </p>
        <h2 className="mt-3 font-serif text-3xl text-brand-navy">
          Discover more ShiftCare features.
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-left">
              <PlaceholderImage
                label={feature.title}
                className="mb-4 h-12 w-12"
                rounded="lg"
              />
              <h3 className="font-bold text-brand-navy">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              <Link
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-brand-blue hover:underline"
              >
                Explore features →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
