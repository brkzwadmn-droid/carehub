import Link from "next/link";
import { PlaceholderImage } from "@/components/landing/placeholder-image";
import Image from "next/image";

export type FeatureBullet = {
  title: string;
  description: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

type FeatureBlockProps = {
  label: string;
  title: string;
  body: string;
  bullets?: FeatureBullet[];
  cta?: string;
  imageLabel: string ;
  imagePosition?: "left" | "right";
  testimonial?: Testimonial;
};

export function FeatureBlock({
  label,
  title,
  body,
  bullets,
  cta,
  imageLabel,
  imagePosition = "right",
  testimonial,
}: FeatureBlockProps) {
  const imageFirst = imagePosition === "left";

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={imageFirst ? "" : "lg:order-2"}>
            <Image src={`/feature-page/${imageLabel}`} alt={imageLabel} width={1000} height={1000} className="w-full h-full object-cover rounded-2xl" />
          </div>
          <div className={imageFirst ? "" : "lg:order-1"}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {label}
            </p>
            <h2 className="mt-3 font-serif text-3xl text-brand-navy">{title}</h2>
            <p className="mt-4 leading-relaxed text-slate-600">{body}</p>
            {bullets && bullets.length > 0 && (
              <ul className="mt-6 space-y-4">
                {bullets.map((bullet) => (
                  <li key={bullet.title}>
                    <p className="font-semibold text-brand-navy">{bullet.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{bullet.description}</p>
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <Link
                href="#"
                className="mt-6 inline-block text-sm font-semibold text-brand-blue hover:underline"
              >
                {cta}
              </Link>
            )}
          </div>
        </div>
        {testimonial && (
          <blockquote className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-100 bg-slate-50 p-6">
            <p className="leading-relaxed text-slate-700">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-4">
              <p className="font-bold text-brand-navy">{testimonial.author}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </footer>
          </blockquote>
        )}
      </div>
    </section>
  );
}
