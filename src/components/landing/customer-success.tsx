import Link from "next/link";
import { customerSuccess } from "./data";
import { PlaceholderImage } from "./placeholder-image";

export function CustomerSuccess() {
  return (
    <section id="about" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <PlaceholderImage
            label={customerSuccess.imageLabel}
            className="min-h-[320px] w-full rounded-2xl shadow-lg"
            aspect="4/3"
          />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              {customerSuccess.heading}
            </p>
            <h2 className="mt-3 font-serif text-3xl text-brand-navy sm:text-4xl">
              {customerSuccess.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              {customerSuccess.description}
            </p>
          </div>
        </div>

        <div className="mt-16 grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <blockquote className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
            <span className="text-3xl font-serif text-brand-red">&ldquo;</span>
            <p className="leading-relaxed text-slate-700">
              {customerSuccess.quote}
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <PlaceholderImage
                label="Sue Pullar"
                className="h-12 w-12"
                rounded="full"
              />
              <div>
                <p className="font-bold text-brand-navy">
                  {customerSuccess.author}
                </p>
                <p className="text-sm text-slate-500">{customerSuccess.role}</p>
              </div>
            </footer>
          </blockquote>
          <Link
            href="#"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            {customerSuccess.storyLink} →
          </Link>
        </div>
      </div>
    </section>
  );
}
