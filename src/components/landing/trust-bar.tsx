import { providerLogos } from "./data";
import { PlaceholderImage } from "./placeholder-image";

export function TrustBar() {
  return (
    <section className="border-b border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm text-slate-600">
          Trusted by providers across California, Colorado, Indiana, Ohio,
          Pennsylvania, Florida, Texas and more
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
          {providerLogos.map((logo) => (
            <PlaceholderImage
              key={logo}
              label={logo}
              className="h-10 w-24"
              rounded="md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
