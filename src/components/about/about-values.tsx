import { aboutValues } from "./data";

export function AboutValues() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            How We Can Help
          </p>
          <h2 className="mt-3 font-serif text-3xl text-brand-navy sm:text-4xl">
            The difference we make
          </h2>
          <p className="mt-6 leading-relaxed text-slate-600">
            You know first hand the challenges of an industry build around meeting
            the needs of people. Whether it&apos;s supporting your team, or
            streamlining your processess, we&apos;ll help you make the most of
            your resources.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {aboutValues.map((value) => (
            <div key={value.title} className="text-center">
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl text-xl ${value.iconColor}`}
              >
                {value.icon}
              </div>
              <h3 className="mt-5 font-serif text-xl font-bold text-brand-navy">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
