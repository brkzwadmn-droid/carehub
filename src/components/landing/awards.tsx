import { awards } from "./data";
import { PlaceholderImage } from "./placeholder-image";

export function Awards() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="relative mb-12 flex items-center">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
            Badges of Excellence
          </span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {awards.map((award) => (
            <PlaceholderImage
              key={award}
              label={award}
              className="h-28 w-44"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
