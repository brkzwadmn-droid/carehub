import Link from "next/link";
import { solutions } from "./data";
import { PlaceholderImage } from "./placeholder-image";

export function SolutionsGrid() {
  return (
    <section id="solutions" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="max-w-xl font-serif text-3xl text-brand-navy sm:text-4xl">
          Discover the difference ShiftCare can make to your business
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {solutions.map((solution) => (
            <article key={solution.title} className="flex gap-5">
              <PlaceholderImage
                label={solution.imageLabel}
                className="h-24 w-24 shrink-0"
                rounded="full"
              />
              <div>
                <h3 className="font-serif text-xl font-bold text-brand-navy">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {solution.description}
                </p>
                <Link
                  href="#"
                  className="mt-3 inline-block text-sm font-semibold text-brand-blue hover:underline"
                >
                  {solution.linkText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
