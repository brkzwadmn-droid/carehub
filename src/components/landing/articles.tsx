import Image from "next/image";
import { articles } from "./data";
import { PlaceholderImage } from "./placeholder-image";

export function Articles() {
  return (
    <section className="bg-white pb-20 pt-8 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="font-serif text-3xl text-brand-navy sm:text-4xl">
          The latest insights from ShiftCare
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.title}>
              <Image src={`/insight/${article.imageLabel}`} alt={article.imageLabel} width={1000} height={1000} className="w-full h-44 object-cover rounded-2xl" />
              <p className="mt-4 text-[10px] font-medium uppercase tracking-wide text-slate-400">
                {article.tags}
              </p>
              <h3 className="mt-2 font-serif text-xl font-bold leading-snug text-brand-navy">
                {article.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
