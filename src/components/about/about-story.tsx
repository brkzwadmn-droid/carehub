import { PlaceholderImage } from "@/components/landing/placeholder-image";
import Image from "next/image";

export function AboutStory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
            How It Started
          </p>
          <h2 className="mt-3 font-serif text-3xl text-brand-navy sm:text-4xl">
            Working in the care industry, we saw a need to do things better.
          </h2>
        </div>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Image src="/about-page/Xmas-Team-Photo-Cropped-ShiftCare.webp" alt="City Skyline" width={1000} height={1000} className="w-full h-full object-cover rounded-2xl" />
          <div className="space-y-6 leading-relaxed text-slate-600">
            <p >
            In North America, too many home care agencies are struggling to stay
            compliant and deliver the best possible care outcomes for clients
            because they are relying on emails and simple spreadsheets to run
            their agency.
          </p>
            <p>
              ShiftCare is designed to offer a tailored solution that solves
              this, and is flexible enough to work for a wide range of
              businesses, without the need for large-scale IT implementation.
            </p>
            <p>
              ShiftCare has helped over 5,500 agencies and 150,000 caregivers,
              providing care to over 200,000 clients.
            </p></div>

        </div>

      
      </div>
    </section>
  );
}
