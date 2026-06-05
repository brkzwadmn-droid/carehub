import Link from "next/link";
import { PlaceholderImage } from "@/components/landing/placeholder-image";

type FeatureHeroProps = {
  label: string;
  title: string;
  description: string;
  cta?: string;
  imageLabel: string;
};

export function FeatureHero({
  label,
  title,
  description,
  cta,
  imageLabel,
}: FeatureHeroProps) {
  return (
    <section className="bg-brand-lavender pb-16 pt-12 lg:pb-20 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            {label}
          </p>
          <h1 className="mt-3 font-serif text-4xl text-brand-navy sm:text-5xl lg:leading-tight">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {description}
          </p>
          {cta && (
            <Link
              href="#"
              className="mt-8 inline-block rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              {cta}
            </Link>
          )}
        </div>
        <PlaceholderImage
          label={imageLabel}
          className="min-h-[300px] w-full shadow-xl"
          aspect="4/3"
        />
      </div>
    </section>
  );
}
