import Link from "next/link";

export function AboutCareers() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="rounded-2xl bg-brand-lavender px-8 py-14 text-center">
          <h2 className="font-serif text-3xl text-brand-navy">
            Be part of a life-changing team
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-600">
            Working with ShiftCare gives you the potential to make a real
            difference to so many people&apos;s lives. If you&apos;re passionate
            about technology and people, check out our latest opportunities.
          </p>
          <Link
            href="#"
            className="mt-8 inline-block text-sm font-semibold text-brand-blue hover:underline"
          >
            View Current Openings →
          </Link>
        </div>
      </div>
    </section>
  );
}
