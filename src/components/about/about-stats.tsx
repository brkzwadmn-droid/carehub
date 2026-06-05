import { aboutStats } from "./data";

export function AboutStats() {
  return (
    <section className="relative bg-brand-lavender pb-20 pt-4">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="grid grid-cols-2 divide-x divide-slate-200 rounded-2xl border border-slate-100 bg-white shadow-xl sm:grid-cols-4">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="px-4 py-10 text-center">
              <p className="font-serif text-3xl font-bold text-brand-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
