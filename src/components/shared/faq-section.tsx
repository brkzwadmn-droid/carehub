import Link from "next/link";

type FaqItem = {
  question: string;
  answer?: string;
};

type FaqSectionProps = {
  title?: string;
  items: FaqItem[];
  cta?: string;
};

export function FaqSection({
  title = "Any Questions ?",
  items,
  cta,
}: FaqSectionProps) {
  return (
    <section className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-4xl text-brand-navy">{title}</h2>
        <div className="mt-10 space-y-4">
          {items.map((item, index) => (
            <details
              key={item.question}
              className="rounded-xl border border-slate-100 bg-white p-6"
              open={index === 0 && !!item.answer}
            >
              <summary className="cursor-pointer font-semibold text-brand-navy">
                {item.question}
              </summary>
              {item.answer && (
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              )}
            </details>
          ))}
        </div>
        {cta && (
          <div className="mt-10 text-center">
            <Link
              href="#"
              className="inline-block rounded-full bg-sky-100 px-8 py-3 text-sm font-semibold text-brand-blue"
            >
              {cta}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
