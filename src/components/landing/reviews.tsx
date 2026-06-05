import { reviewPlatforms, testimonials } from "./data";

export function Reviews() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Testimonials
          </p>
          <h2 className="mt-3 font-serif text-3xl text-brand-navy sm:text-4xl">
            ShiftCare Reviews
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
          {reviewPlatforms.map((platform) => (
            <div key={platform.name} className="text-center">
              <p className="text-xs font-semibold text-slate-400">
                {platform.name}
              </p>
              <p className="mt-1 text-amber-400">★★★★★</p>
              <p className="mt-1 text-sm text-brand-blue underline">
                {platform.rating}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex flex-col rounded-xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <span className="text-2xl text-brand-red">&ldquo;</span>
              <p className="flex-1 text-sm leading-relaxed text-slate-600">
                {testimonial.quote}
              </p>
              <footer className="mt-4">
                <p className="font-bold text-brand-navy">{testimonial.author}</p>
                <p className="text-sm text-brand-blue">{testimonial.company}</p>
              </footer>
              <p className="mt-3 text-amber-400">★★★★★</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
