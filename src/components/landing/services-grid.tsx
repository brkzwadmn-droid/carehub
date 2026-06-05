import Link from "next/link";
import { productFeatures } from "./data";
import { PlaceholderImage } from "./placeholder-image";
import Image from "next/image";

export function ServicesGrid() {
  return (
    <section id="features" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-24 px-4 lg:px-8">
        {productFeatures.map((feature) => {
          const imageFirst = feature.imagePosition === "left";

          return (
            <article
              key={feature.category}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={imageFirst ? "" : "lg:order-2"}>
                <Image src={`/new-NA-images/${feature.imageLabel}`} alt={feature.imageLabel} width={1000} height={1000} className="min-h-[280px] w-full" />
              </div>
              <div className={imageFirst ? "" : "lg:order-1"}>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {feature.category}
                </p>
                <h3 className="mt-3 font-serif text-3xl text-brand-navy">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  {feature.description}
                </p>
                {"showAppStores" in feature && feature.showAppStores && (
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <PlaceholderImage
                      label="App QR Code"
                      className="h-16 w-16"
                      rounded="md"
                    />
                    <div className="space-y-2 text-sm">
                      <p className="font-semibold text-brand-navy">
                        Download on the App Store — 4.8 ★★★★★
                      </p>
                      {/* google play bage  */}
                      <Image src="/GooglePlay.png" alt="Google Play" width={100} height={100} />
                      <p className="font-semibold text-brand-navy">
                        4.8 ★★★★★
                      </p>
                    </div>
                  </div>
                )}
                <Link
                  href={"href" in feature && feature.href ? feature.href : "#"}
                  className="mt-6 inline-block text-sm font-semibold text-brand-blue hover:underline"
                >
                  {feature.linkText}
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
